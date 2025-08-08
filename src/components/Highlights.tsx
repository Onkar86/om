import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/Project';

interface HighlightsProps {
  projects: Project[];
}

const Highlights: React.FC<HighlightsProps> = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-teal-500/20 hover:translate-y-[-8px]"
              style={{ 
                animationDelay: `${0.2 * index}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="bg-gray-700 text-teal-400 text-xs font-medium px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex gap-4">
                  {project.projectUrl && (
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;