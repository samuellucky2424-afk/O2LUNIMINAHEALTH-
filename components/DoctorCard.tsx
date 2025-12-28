
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Award, Info } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div 
        className="relative overflow-hidden aspect-[4/5] cursor-pointer"
        onClick={() => navigate(`/doctors/${doctor.id}`)}
      >
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white text-sm font-medium line-clamp-2">{doctor.bio}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 
            className="text-xl font-bold text-gray-900 cursor-pointer hover:text-teal-600 transition-colors"
            onClick={() => navigate(`/doctors/${doctor.id}`)}
          >
            {doctor.name}
          </h3>
          <span className="bg-sky-50 text-sky-700 text-xs font-bold px-2 py-1 rounded-full border border-sky-100">
            {doctor.specialty}
          </span>
        </div>
        
        <div className="space-y-2 mt-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-teal-500" />
            <span>{doctor.experience} Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-teal-500" />
            <span>{doctor.availability}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Link 
            to="/book-appointment" 
            className="flex-1 bg-teal-600 text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors shadow-sm"
          >
            Book Now
          </Link>
          <button 
            onClick={() => navigate(`/doctors/${doctor.id}`)}
            className="p-2.5 bg-gray-50 text-gray-400 rounded-lg hover:text-teal-600 hover:bg-teal-50 transition-colors"
            title="View Profile"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
