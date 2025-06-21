import React from 'react';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Mercy Muriithi
          </h1>
          <h2 className="text-3xl md:text-4xl text-slate-700 mb-8 font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Engineer
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I'm a Software Engineer with experience in building software that meets the stringent 
            requirements of financial services. I thrive in creating and designing the user interface (UI) 
            and user experience (UX) of websites and mobile development.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="mailto:mercywmuriithi.mm@gmail.com"
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Mail size={20} className="group-hover:animate-bounce" />
              <span className="font-medium">Email</span>
            </a>
            <a 
              href="tel:+254704296159"
              className="group flex items-center justify-center space-x-3 border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              <Phone size={20} className="group-hover:animate-bounce" />
              <span className="font-medium">Call Me</span>
            </a>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/Mercy2525" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://ke.linkedin.com/in/mercy-w-muriithi-060658165" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
