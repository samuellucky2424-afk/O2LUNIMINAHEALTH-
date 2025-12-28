
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Instagram, ShieldAlert } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <HeartPulse className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold">LuminaHealth</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Providing compassionate and advanced healthcare for our community since 1995. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-400"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-teal-400">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-teal-400">Our Doctors</Link></li>
              <li><Link to="/careers" className="hover:text-teal-400">Careers</Link></li>
              <li><Link to="/book-appointment" className="hover:text-teal-400">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>123 Medical Plaza, Health City, HC 54321</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>info@luminahealth.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Hospital Portal</h3>
            <p className="text-sm mb-4">Internal access for hospital administration staff.</p>
            <Link 
              to="/admin/login" 
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-bold text-sm"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Management Login</span>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} LuminaHealth Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
