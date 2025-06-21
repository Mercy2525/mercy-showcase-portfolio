
import React from 'react';
import { GraduationCap, Calendar, MapPin, Code } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Moringa School",
      degree: "Full Stack Software Development Program",
      period: "July 2023 - December 2023",
      location: "Nairobi, Kenya",
      focus: "Web development with Flask, SQL and React JS",
      type: "Bootcamp",
      color: "from-green-500 to-emerald-600"
    },
    {
      institution: "Kenyatta University",
      degree: "BSc in Civil Engineering",
      period: "September 2014 - December 2019",
      location: "Nairobi, Kenya",
      focus: "Second Class Upper Division",
      type: "Degree",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-16 animate-fade-in">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.institution}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-slate-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{edu.institution}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${edu.color} mt-1`}>
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">{edu.degree}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-slate-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Code size={16} className="text-slate-500 mt-1" />
                    <p className="text-slate-600 italic">{edu.focus}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
