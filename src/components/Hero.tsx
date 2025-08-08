import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Welcome to Onkar Mahamuni's Project Showcase
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Explore my innovative and creative projects
          </p>
          <div className="mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Hi, I am Onkar Mahamuni, a passionate creator and innovator. I work on various tech, AI, and business projects that aim to make a real-world impact.
            </p>
            <div className="flex justify-center mt-8">
              <img 
                src="src/images/om.jpg" 
                alt="Onkar Mahamuni" 
                className="rounded-full w-32 h-32 object-cover border-4 border-teal-400 shadow-lg"
              />
            </div>
          </div>
          <button 
            onClick={scrollToProjects}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 opacity-0 animate-fade-in-up flex items-center mx-auto"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Explore My Projects
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown size={36} className="text-teal-400" />
      </div>
    </section>
  );
};

export default Hero;