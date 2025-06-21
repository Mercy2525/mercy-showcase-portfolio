
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Cashia Payment Portal',
      description: 'Web application for payment processing built for financial services. Features secure payment handling, user management, and comprehensive dashboard for transaction monitoring.',
      skills: 'React.js, Tailwind CSS , GraphQL',
      link: 'https://v1.merchant.stg.cashia.com/login',
      isProduction: true
    },
    {
      name: 'Wordfeast',
      description: 'Modern web application built with React and Tailwind CSS, focusing on clean user interface and responsive design.',
      skills: 'React.js, Tailwind CSS',
      link: 'https://wordfeast.org/',
      isProduction: true
    },
    {
      name: 'Kikapu.com E-commerce',
      description: 'E-commerce website built as a collaborative project with a team of 5 developers. Features product catalog, shopping cart, and user management.',
      skills: 'React.js, CSS, React Icons',
      github: 'https://github.com/tomutanyi/phase-2-project.git',
      link: 'https://phase-2-project-umber.vercel.app',
      isProduction: true
    },
    {
      name: 'Patients Management System',
      description: 'A web application for a growing midwife healthcare business. The platform allows the owner to create profiles for nurses who can onboard clients, keep records of patient visits, and manage appointments. Currently serving 5 nurses with 30 active clients.',
      skills: 'Python, Django, PostgreSQL, React, JavaScript, Docker',
      status: 'In Production',
      link: 'https://hfmkenya.com/',
      isProduction: true
    },
    {
      name: 'My Portfolio',
      description: 'Personal portfolio website showcasing projects and skills with modern design and responsive layout.',
      skills: 'React.js, CSS, Material UI',
      github: 'https://github.com/Mercy2525/My-Portfolio.git',
      link: 'https://my-portfolio-phi-sepia-37.vercel.app/projects',
      isProduction: true
    },
    {
      name: 'Shop-IG E-commerce',
      description: 'E-commerce website built with vanilla JavaScript and modern CSS techniques, featuring responsive design and interactive user interface.',
      skills: 'JavaScript, CSS, Bootstrap, HTML',
      github: 'https://github.com/Mercy2525/Phase-1-Project.git',
      link: 'https://shop-ig-mercy2525.vercel.app/',
      isProduction: true
    },
    {
      name: 'CLI Movie Organizer',
      description: 'Command-line application for organizing movie libraries with database integration and user-friendly CLI interface.',
      skills: 'SQL, Python, Click',
      github: 'https://github.com/Mercy2525/CLI-Movie_Library-Organizer-Phase3-Project.git'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-16 animate-fade-in">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border border-indigo-100 hover:border-indigo-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {project.name}
                </h3>
                {project.isProduction && (
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm animate-pulse">
                    Live
                  </span>
                )}
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="mb-6">
                <p className="text-sm text-slate-500 mb-2 font-medium">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.split(', ').map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-2 py-1 rounded-lg text-xs font-medium hover:from-indigo-200 hover:to-purple-200 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-all duration-300 text-sm font-medium hover:scale-105"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
