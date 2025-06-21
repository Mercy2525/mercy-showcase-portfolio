
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className="py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">
          Let's Work Together
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a project in mind or just want to chat, feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <a 
            href="mailto:mercywmuriithi.mm@gmail.com"
            className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Mail size={20} className="group-hover:animate-bounce" />
            <span className="font-medium">Email</span>
          </a>
          <a 
            href="tel:+254704296159"
            className="group flex items-center justify-center space-x-3 border-2 border-indigo-400 text-indigo-300 p-4 rounded-xl hover:bg-indigo-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Phone size={20} className="group-hover:animate-bounce" />
            <span className="font-medium">(+254) 0704296159</span>
          </a>
        </div>

        <div className="flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com/Mercy2525" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://ke.linkedin.com/in/mercy-w-muriithi-060658165" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin size={32} />
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-700 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-slate-400">
            © 2024 Mercy Muriithi. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
