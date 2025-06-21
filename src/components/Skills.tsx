
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React.js", "Vue.js", "Django", "Flask", "Bootstrap", "Tailwind CSS", "React Native"],
      gradient: "from-purple-500 to-pink-500",
      icon: "⚡"
    },
    {
      title: "Tools & Technologies",
      skills: ["PostgreSQL", "Docker", "Git", "Postman", "SQL Server", "Vite", "GitHub"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            Technical Arsenal
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Crafting digital experiences with modern technologies and developer-friendly tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:-translate-y-3 animate-fade-in hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`relative overflow-hidden bg-gradient-to-r ${category.gradient} p-3 rounded-xl text-white text-sm font-semibold text-center hover:scale-105 transition-all duration-300 cursor-default animate-fade-in group-hover:shadow-lg`}
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{skill}</span>
                  </div>
                ))}
              </div>
              
              {/* Skill proficiency indicator */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex justify-between items-center text-slate-300 text-sm">
                  <span>Proficiency</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i < 4 ? `bg-gradient-to-r ${category.gradient}` : 'bg-white/30'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Developer-friendly note */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
            <p className="text-slate-300">
              <span className="text-green-400 font-mono">console.log</span>
              <span className="text-white">(</span>
              <span className="text-yellow-400">"Always learning, always growing 🚀"</span>
              <span className="text-white">);</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
