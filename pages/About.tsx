
import React from 'react';
import { Target, Eye, Heart, Shield, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">About LuminaHealth Hospital</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of excellence in patient care, innovative medical solutions, and community well-being.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-teal-50 p-4 rounded-2xl text-teal-600 mb-6">
                <Target className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality, compassionate, and accessible healthcare services through a patient-centric approach, leveraging advanced technology and professional expertise.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-sky-50 p-4 rounded-2xl text-sky-600 mb-6">
                <Eye className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the preferred healthcare destination globally, recognized for medical excellence, innovative research, and the highest standards of clinical outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-teal-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Compassion', desc: 'We treat every patient with empathy and kindness.' },
              { icon: Shield, title: 'Integrity', desc: 'We maintain the highest ethical standards in all we do.' },
              { icon: Users, title: 'Collaboration', desc: 'We work as a unified team to provide best care.' },
              { icon: Award, title: 'Excellence', desc: 'We strive for superior clinical quality and safety.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-teal-200 transition-colors">
                <v.icon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070" 
                alt="Our History" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">A Journey of Over 25 Years</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 1995 with just a small clinic and a big dream, LuminaHealth has grown into a multi-disciplinary hospital complex. Today, we house over 500 beds, state-of-the-art diagnostic labs, and 15 specialty departments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to research and community service has led us to win numerous international healthcare awards, but our greatest achievement remains the smile on our patients' faces when they recover.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-4xl font-extrabold text-teal-600">50k+</div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">Successful Surgeries</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-sky-600">300+</div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">Expert Doctors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
