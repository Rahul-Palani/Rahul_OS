import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
          👨‍💻
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
        <h3 className="text-lg font-semibold text-gray-700 mb-1">Rahul Palani</h3>
        <p className="text-gray-600">Freshman at UCR · Aspiring AI & Cybersecurity Engineer</p>
      </div>
      
      <div className="space-y-3">
        <p className="text-gray-700 leading-relaxed">
          Hi! I'm Rahul Palani, a freshman at the University of California, Riverside, majoring in Computer Science with Business Applications. 
          I'm deeply passionate about artificial intelligence and cybersecurity, and I love diving into projects that blend technology, 
          problem-solving, and creativity.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Whether it's coding in Python and Java or building cryptocurrency mining rigs, I enjoy tinkering with both software and hardware. 
          I'm also a curious learner with a strong interest in business and the financial markets, always looking to connect technical 
          innovation with real-world impact.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Python', 'Hardware Systems', 'AI Fundamentals', 'Cybersecurity Basics'].map((skill) => (
              <span key={skill} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-2">Interests</h3>
          <p className="text-purple-700 mb-2">
            When I'm not coding or building something techy, you'll probably find me:
          </p>
          <ul className="text-purple-700 space-y-1">
            <li>• Exploring the latest trends in AI and cybersecurity</li>
            <li>• Experimenting with hardware setups</li>
            <li>• Working on side projects</li>
            <li>• Tracking financial markets and business trends</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
