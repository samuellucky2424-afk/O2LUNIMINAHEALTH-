
import React from 'react';
import { 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  FlaskConical, 
  Baby, 
  Eye, 
  BrainCircuit, 
  Ear 
} from 'lucide-react';
import { Doctor, Service, JobRole } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Jenkins',
    specialty: 'Cardiologist',
    availability: 'Mon, Wed, Fri',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
    bio: 'Board-certified cardiologist specializing in preventive medicine and non-invasive diagnostic imaging.',
    email: 's.jenkins@luminahealth.com',
    phone: '+1 (555) 012-3456',
    education: ['MD - Johns Hopkins University', 'Residency - Mayo Clinic', 'Fellowship - Cleveland Clinic'],
    skills: ['Interventional Cardiology', 'Cardiac MRI', 'Preventive Screening', 'Hypertension Management'],
    philosophy: 'I believe in a proactive approach to heart health. My methodology combines advanced technology with lifestyle modification to treat the patient as a whole, not just the symptoms.',
    workingHours: {
      monday: '09:00 AM - 04:00 PM',
      tuesday: 'Surgery Day',
      wednesday: '09:00 AM - 04:00 PM',
      thursday: 'Research & Admin',
      friday: '09:00 AM - 04:00 PM',
      saturday: 'Emergency Only',
      sunday: 'Closed'
    }
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    availability: 'Tue, Thu',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000',
    bio: 'Expert in neurodegenerative disorders and advanced brain mapping techniques.',
    email: 'm.chen@luminahealth.com',
    phone: '+1 (555) 012-7890',
    education: ['MD - Stanford Medical School', 'PhD in Neuroscience - MIT', 'Neurology Residency - Harvard'],
    skills: ['Electromyography (EMG)', 'Neuroimaging Analysis', 'Parkinson\'s Disease Specialist', 'Deep Brain Stimulation'],
    philosophy: 'Neurology is the intersection of science and humanity. My approach is data-driven yet compassionate, ensuring that every neurological treatment plan is as unique as the patient\'s own neural pathways.',
    workingHours: {
      monday: 'Consultations',
      tuesday: '10:00 AM - 05:00 PM',
      wednesday: 'Research Day',
      thursday: '10:00 AM - 05:00 PM',
      friday: 'Consultations',
      saturday: 'Closed',
      sunday: 'Closed'
    }
  },
  {
    id: '3',
    name: 'Dr. Elena Rodriguez',
    specialty: 'Pediatrician',
    availability: 'Daily',
    experience: '8 Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000',
    bio: 'Dedicated pediatrician focused on adolescent health and early childhood developmental milestones.',
    email: 'e.rodriguez@luminahealth.com',
    phone: '+1 (555) 012-4433',
    education: ['MD - Yale University', 'Pediatric Residency - CHOP'],
    skills: ['Infant Nutrition', 'Developmental Screening', 'Pediatric Immunology', 'Behavioral Health'],
    philosophy: 'Healthcare for children should be joyful and stress-free. I focus on creating a supportive environment for both children and parents, emphasizing preventive care and developmental nutrition.',
    workingHours: {
      monday: '08:00 AM - 02:00 PM',
      tuesday: '08:00 AM - 02:00 PM',
      wednesday: '08:00 AM - 02:00 PM',
      thursday: '08:00 AM - 02:00 PM',
      friday: '08:00 AM - 02:00 PM',
      saturday: '10:00 AM - 12:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '4',
    name: 'Dr. David Okafor',
    specialty: 'Orthopedic Surgeon',
    availability: 'Mon, Tue, Thu',
    experience: '20 Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000',
    bio: 'Renowned surgeon specializing in complex joint reconstructions and sports-related injuries.',
    email: 'd.okafor@luminahealth.com',
    phone: '+1 (555) 012-9988',
    education: ['MD - Columbia University', 'Orthopedic Residency - NYU Langone'],
    skills: ['Arthroplasty', 'Arthroscopic Surgery', 'Spinal Reconstruction', 'Sports Medicine Rehabilitation'],
    philosophy: 'My goal is to restore mobility and quality of life. Whether through surgical intervention or advanced physical therapy, I utilize the least invasive methods possible to get my patients back on their feet.',
    workingHours: {
      monday: '01:00 PM - 06:00 PM',
      tuesday: '01:00 PM - 06:00 PM',
      wednesday: 'Surgery Day',
      thursday: '01:00 PM - 06:00 PM',
      friday: 'Surgery Day',
      saturday: 'Closed',
      sunday: 'Closed'
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Emergency Care',
    description: '24/7 world-class emergency response with dedicated trauma units.',
    icon: 'HeartPulse'
  },
  {
    id: 's2',
    title: 'Diagnostics',
    description: 'Advanced laboratory and imaging services for accurate results.',
    icon: 'FlaskConical'
  },
  {
    id: 's3',
    title: 'Maternity',
    description: 'Comprehensive prenatal, delivery, and postnatal care.',
    icon: 'Baby'
  },
  {
    id: 's4',
    title: 'Neurology',
    description: 'Treating diseases of the brain, spinal cord, and peripheral nerves.',
    icon: 'BrainCircuit'
  }
];

export const JOB_ROLES: JobRole[] = Object.values(JobRole);

export const ICON_MAP: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Baby: <Baby className="w-8 h-8" />,
  Eye: <Eye className="w-8 h-8" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8" />,
  Ear: <Ear className="w-8 h-8" />
};
