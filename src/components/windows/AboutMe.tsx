import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
          👨‍💻
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-600">Frontend Developer & UI/UX Enthusiast</p>
      </div>
      
      <div className="space-y-3">
        <p className="text-gray-700 leading-relaxed">
          Hello! I'm a passionate frontend developer with expertise in React, TypeScript, and modern web technologies. 
          I love creating beautiful, responsive, and user-friendly applications that make a difference.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'Git'].map((skill) => (
              <span key={skill} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-2">Interests</h3>
          <p className="text-purple-700">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
            or enjoying a good cup of coffee while reading about the latest web development trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
