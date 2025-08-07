import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts and interactive maps.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A desktop OS-style portfolio website (this one!) built with React and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind CSS", "react-rnd"],
      status: "In Progress"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">My Projects</h2>
        <p className="text-gray-600">Here are some of the projects I've worked on</p>
      </div>
      
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{project.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
