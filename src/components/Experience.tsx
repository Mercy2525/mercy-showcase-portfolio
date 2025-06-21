
import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Cashia",
      position: "Software Developer",
      period: "Feb 2024 - Present",
      location: "Nairobi, Kenya",
      type: "Current",
      color: "from-indigo-500 to-purple-600",
      responsibilities: [
        "Designed and implemented RBAC systems, ensuring secure and structured user permissions for compliance-driven applications",
        "Developed Phoenix LiveView applications to enable real-time UI updates and state management",
        "Improved API efficiency, reducing latency and enhancing data retrieval speed, resulting in a smoother user experience",
        "Identified, debugged, and resolved critical UI and functionality issues, improving system stability and user experience",
        "Collaborated with designers and product teams to build pixel-perfect, accessible UI components aligned with brand identity",
        "Ensured compliance with CBK UAT processes, validating system functionality for financial applications",
        "Refactored legacy code and built reusable components, improving code efficiency and maintainability",
        "Mentored junior developers, fostering a culture of knowledge sharing and best practices"
      ]
    },
    {
      company: "The Navigators Kenya",
      position: "Program Officer",
      period: "March 2021 - April 2023",
      location: "Machakos, Kenya",
      type: "Previous",
      color: "from-green-500 to-emerald-600",
      responsibilities: [
        "Youth mobilization helping youth learn valuable skills and prepare them to become civically engaged adults",
        "Mentorship and training among teenagers and the youth",
        "Organizing events and team building activities",
        "Monitoring and evaluating program effectiveness",
        "Build up networking opportunities among youth in high schools and campuses"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${exp.color} mt-1`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-blue-200 mb-3">{exp.position}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-slate-300 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h5>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-slate-300">
                      <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
