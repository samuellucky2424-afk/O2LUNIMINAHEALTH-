
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { submitContactMessage } from '../services/firebaseService';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitContactMessage(formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    { icon: Phone, title: 'Call Us', val: '+1 (555) 123-4567', link: 'tel:15551234567' },
    { icon: Mail, title: 'Email Us', val: 'info@luminahealth.com', link: 'mailto:info@luminahealth.com' },
    { icon: MessageCircle, title: 'WhatsApp', val: '+1 (555) 999-0000', link: 'https://wa.me/15559990000' }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="bg-sky-50 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Our support team is available 24/7 to help you.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, i) => (
                  <a 
                    key={i} 
                    href={info.link}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:border-teal-400 hover:shadow-lg transition-all"
                  >
                    <div className="bg-teal-50 p-3 rounded-xl text-teal-600">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-tighter">{info.title}</div>
                      <div className="text-gray-900 font-semibold">{info.val}</div>
                    </div>
                  </a>
                ))}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                  <div className="bg-sky-50 p-3 rounded-xl text-sky-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Visit Us</div>
                    <div className="text-gray-900 font-semibold">123 Medical Plaza, Health City</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093743!2d-122.41941548468205!3d37.77492957975949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1676646545133!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input 
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500/20"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input 
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500/20"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input 
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500/20"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500/20"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              {isSuccess && (
                <div className="bg-teal-50 text-teal-700 p-4 rounded-xl flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Message sent successfully!</span>
                </div>
              )}

              <button 
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-teal-700 transition-all disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
