
import React from 'react';
import { User, Code2, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-16 animate-fade-in">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Career Summary</h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a Software Engineer with experience in building software that meets the stringent 
              requirements of financial services. I thrive in creating and designing the user interface (UI) 
              and user experience (UX) of websites and mobile development.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Code2 className="text-blue-600" size={20} />
                  <h4 className="font-semibold text-slate-800">Frontend Focus</h4>
                </div>
                <p className="text-slate-600 text-sm">
                  Specializing in React.js, TypeScript, and modern web technologies
                </p>
              </div>
              
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="text-indigo-600" size={20} />
                  <h4 className="font-semibold text-slate-800">Full Stack</h4>
                </div>
                <p className="text-slate-600 text-sm">
                  Backend experience with Python, Django, and PostgreSQL
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Experience</span>
                  <span className="font-semibold text-blue-600">3+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Projects Completed</span>
                  <span className="font-semibold text-indigo-600">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Technologies</span>
                  <span className="font-semibold text-purple-600">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Current Focus</span>
                  <span className="font-semibold text-green-600">React & UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
