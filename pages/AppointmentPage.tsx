
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../constants';
import { submitAppointment } from '../services/firebaseService';

const AppointmentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    doctorId: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const success = await submitAppointment(formData);
    if (success) {
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        doctorId: '',
        date: '',
        time: '',
        message: ''
      });
    }
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md animate-bounceIn">
          <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Booked!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for choosing LuminaHealth. Our team will contact you shortly to confirm your visit.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-teal-600 md:w-1/3 p-10 text-white space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">Book Your Visit</h1>
              <p className="text-teal-50 opacity-90">Schedule an appointment with our specialists in just a few clicks.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 flex-shrink-0" />
                <div>
                  <div className="font-bold">Flexible Dates</div>
                  <div className="text-sm opacity-80">Pick a day that suits you best.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 flex-shrink-0" />
                <div>
                  <div className="font-bold">Fast Response</div>
                  <div className="text-sm opacity-80">We confirm within 2 hours.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-2/3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input 
                      required
                      type="text"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-gray-200 border outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input 
                      required
                      type="email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-gray-200 border outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input 
                      required
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-gray-200 border outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Select Doctor</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    value={formData.doctorId}
                    onChange={e => setFormData({...formData, doctorId: e.target.value})}
                  >
                    <option value="">Choose a Doctor</option>
                    {DOCTORS.map(d => (
                      <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                  <input 
                    required
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time</label>
                  <input 
                    required
                    type="time"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message / Symptoms</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea 
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-gray-200 border outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly describe your condition..."
                  ></textarea>
                </div>
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  'Confirm Appointment'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
