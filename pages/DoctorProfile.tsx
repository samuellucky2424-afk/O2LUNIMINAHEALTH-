
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  BookOpen, 
  Heart, 
  ChevronLeft, 
  CalendarCheck,
  MapPin,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { DOCTORS } from '../constants';

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const doctor = DOCTORS.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <Link to="/doctors" className="text-teal-600 font-bold hover:underline">Return to doctors list</Link>
        </div>
      </div>
    );
  }

  const schedule = [
    { day: 'Monday', hours: doctor.workingHours.monday },
    { day: 'Tuesday', hours: doctor.workingHours.tuesday },
    { day: 'Wednesday', hours: doctor.workingHours.wednesday },
    { day: 'Thursday', hours: doctor.workingHours.thursday },
    { day: 'Friday', hours: doctor.workingHours.friday },
    { day: 'Saturday', hours: doctor.workingHours.saturday },
    { day: 'Sunday', hours: doctor.workingHours.sunday },
  ];

  return (
    <div className="bg-white min-h-screen animate-fadeIn">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/doctors')}
            className="flex items-center text-gray-500 hover:text-teal-600 transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Specialists
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image and Contact */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-8 ring-sky-50 transition-transform hover:scale-[1.02] duration-500">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-600" />
                Contact Details
              </h3>
              
              <div className="space-y-4">
                <a href={`tel:${doctor.phone.replace(/\D/g, '')}`} className="flex items-center group">
                  <div className="bg-teal-50 p-3 rounded-xl text-teal-600 mr-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Direct Line</p>
                    <p className="text-gray-900 font-semibold group-hover:text-teal-600 transition-colors">{doctor.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${doctor.email}`} className="flex items-center group">
                  <div className="bg-sky-50 p-3 rounded-xl text-sky-600 mr-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Work Email</p>
                    <p className="text-gray-900 font-semibold truncate max-w-[200px] group-hover:text-sky-600 transition-colors">{doctor.email}</p>
                  </div>
                </a>

                <div className="flex items-center group">
                  <div className="bg-gray-50 p-3 rounded-xl text-gray-400 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Clinic Location</p>
                    <p className="text-gray-900 font-semibold">LuminaHealth Wing A, Suite {doctor.id}02</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/book-appointment" 
                className="block w-full bg-teal-600 text-white text-center py-4 rounded-xl font-bold shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                {doctor.specialty} Specialist
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4">{doctor.name}</h1>
              <p className="text-xl text-gray-500 mt-4 leading-relaxed max-w-2xl font-medium">{doctor.bio}</p>
            </div>

            {/* Methodology / How I Work */}
            <div className="bg-sky-50/50 rounded-3xl p-8 border border-sky-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex items-center mb-6 relative">
                <Heart className="w-6 h-6 text-sky-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Clinical Methodology</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg relative">
                {doctor.philosophy}
              </p>
            </div>

            {/* Clinical Expertise / Abilities */}
            <div className="space-y-6">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Expertise & Abilities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doctor.skills.map((skill, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Education & Qualifications */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <BookOpen className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <div className="space-y-6">
                  {doctor.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-50 transition-colors">
                        <Award className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold leading-tight">{edu.split(' - ')[0]}</p>
                        <p className="text-sm text-gray-500 font-medium">{edu.split(' - ')[1] || 'Medical Institution'}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center pt-8">
                  <Briefcase className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-gray-600 font-medium leading-relaxed">
                    With over <span className="text-teal-600 font-bold">{doctor.experience}</span> of dedicated clinical practice, 
                    {doctor.name.split(' ')[1]} has successfully treated thousands of patients and contributed to major clinical research in {doctor.specialty.toLowerCase()}.
                  </p>
                </div>
              </div>

              {/* Weekly Availability */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Working Hours</h3>
                </div>
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Weekly Consultation Schedule</p>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {schedule.map((row, idx) => (
                      <div key={idx} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                        <span className="font-bold text-gray-700">{row.day}</span>
                        <span className={`text-sm font-semibold ${row.hours.includes('Closed') || row.hours.includes('Surgery') ? 'text-gray-400 italic' : 'text-teal-600'}`}>
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
