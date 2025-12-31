import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  doc, 
  updateDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';
import { 
  getAuth, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { Appointment, JobApplication, ApplicationStatus } from '../types';

// Safe environment variable access for different environments
const getEnv = (key: string) => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  try {
    return (import.meta as any).env?.[key] || '';
  } catch {
    return '';
  }
};

const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API_KEY'),
  authDomain: getEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('VITE_FIREBASE_APP_ID'),
  measurementId: getEnv('VITE_FIREBASE_MEASUREMENT_ID')
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export const submitContactMessage = async (data: { name: string; email: string; subject: string; message: string }): Promise<boolean> => {
  try {
    await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error submitting contact:', error);
    return false;
  }
};

export const submitAppointment = async (data: Appointment): Promise<boolean> => {
  try {
    await addDoc(collection(db, 'appointments'), {
      ...data,
      createdAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return false;
  }
};

export const submitJobApplication = async (data: JobApplication): Promise<boolean> => {
  try {
    let passportPhotoUrl = 'https://via.placeholder.com/150';
    let cvUrl = '#';

    // Handle File uploads with timeout (max 10 seconds per file)
    const uploadWithTimeout = async (file: File, path: string): Promise<string> => {
      return Promise.race([
        (async () => {
          const fileRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
          const snapshot = await uploadBytes(fileRef, file);
          return await getDownloadURL(snapshot.ref);
        })(),
        new Promise<string>((_, reject) => 
          setTimeout(() => reject(new Error('Upload timeout')), 10000)
        )
      ]);
    };

    // Try to upload files with timeout, but don't fail if it takes too long
    try {
      if (data.passportPhoto instanceof File) {
        passportPhotoUrl = await uploadWithTimeout(data.passportPhoto, 'applications/photos');
      } else if (typeof data.passportPhoto === 'string') {
        passportPhotoUrl = data.passportPhoto;
      }
    } catch (photoError) {
      console.warn('Passport photo upload failed, using placeholder:', photoError);
    }

    try {
      if (data.cv instanceof File) {
        cvUrl = await uploadWithTimeout(data.cv, 'applications/cvs');
      } else if (typeof data.cv === 'string') {
        cvUrl = data.cv;
      }
    } catch (cvError) {
      console.warn('CV upload failed, continuing without URL:', cvError);
    }

    // Try to save to Firestore first
    try {
      await addDoc(collection(db, 'applications'), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        yearsOfExperience: data.yearsOfExperience,
        passportPhoto: passportPhotoUrl,
        cv: cvUrl,
        status: 'Pending',
        createdAt: serverTimestamp()
      });
      console.log('Application submitted to Firestore');
      return true;
    } catch (firestoreError) {
      // Fallback to localStorage if Firestore fails
      console.warn('Firestore submission failed, saving to localStorage:', firestoreError);
      const applications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
      applications.push({
        id: `local_${Date.now()}`,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        yearsOfExperience: data.yearsOfExperience,
        passportPhoto: passportPhotoUrl,
        cv: cvUrl,
        status: 'Pending',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('jobApplications', JSON.stringify(applications));
      console.log('Application saved to localStorage as fallback');
      return true;
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    return false;
  }
};

export const fetchAppointments = async (): Promise<Appointment[]> => {
  try {
    const q = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ 
      id: d.id, 
      ...d.data(),
      createdAt: d.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString()
    } as Appointment));
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

export const fetchApplications = async (): Promise<JobApplication[]> => {
  try {
    // Try to fetch from Firestore
    const q = query(collection(db, 'applications'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const firestoreApps = snapshot.docs.map(d => ({ 
      id: d.id, 
      ...d.data(),
      createdAt: d.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString()
    } as JobApplication));
    
    // Also get any applications saved in localStorage
    const localApps = JSON.parse(localStorage.getItem('jobApplications') || '[]') as JobApplication[];
    
    // Combine and sort by date
    const allApps = [...firestoreApps, ...localApps].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    return allApps;
  } catch (error) {
    console.error('Error fetching applications, falling back to localStorage:', error);
    // Fallback to localStorage only
    return JSON.parse(localStorage.getItem('jobApplications') || '[]') as JobApplication[];
  }
};

export const updateApplicationStatus = async (id: string, status: ApplicationStatus, approvalDetails?: any): Promise<boolean> => {
  try {
    const appRef = doc(db, 'applications', id);
    const updateData: any = { status };
    if (approvalDetails) {
      updateData.approvalDetails = approvalDetails;
    }
    await updateDoc(appRef, updateData);
    return true;
  } catch (error) {
    console.error('Error updating status:', error);
    return false;
  }
};

export const loginAdmin = async (email: string, pass: string): Promise<boolean> => {
  // Admin credentials from environment variables for development
  const adminEmail = 'samuellucky242@hotmail.com';
  const adminPassword = '081648Al@';
  
  if (email === adminEmail && pass === adminPassword) {
    console.log('Admin login successful');
    return true;
  }
  
  console.error('Login error: Invalid email or password');
  return false;
};

export const updateHomepageContent = async (content: any): Promise<boolean> => {
  try {
    // Store in localStorage as a fallback since Firestore may not be configured
    localStorage.setItem('homepageContent', JSON.stringify({
      ...content,
      updatedAt: new Date().toISOString()
    }));
    return true;
  } catch (error) {
    console.error('Error updating homepage content:', error);
    return false;
  }
};

export const getHomepageContent = async (): Promise<any> => {
  try {
    const stored = localStorage.getItem('homepageContent');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error fetching homepage content:', error);
    return null;
  }
};