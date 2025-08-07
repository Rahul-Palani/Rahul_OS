import React from 'react';

const Resume: React.FC = () => {
  const experience = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications using React and TypeScript."
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built responsive web applications and collaborated with design and backend teams."
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Developed websites and web applications using modern JavaScript frameworks."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description: "Focused on software engineering and web development"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Resume</h2>
        <p className="text-gray-600">Professional experience and education</p>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
          Experience
        </h3>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-1">
              {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Backend & Tools</h4>
            <div className="flex flex-wrap gap-1">
              {['Node.js', 'Express', 'MongoDB', 'Git', 'Docker', 'AWS'].map((skill) => (
                <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
