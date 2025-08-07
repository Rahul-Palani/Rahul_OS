import React from 'react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      id: 1,
      type: "Email",
      value: "rpala033@ucr.edu",
      icon: "📧",
      link: ""
    },
    {
      id: 2,
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/rahul-palani-22276a240/",
      icon: "💼",
      link: "linkedin.com/in/rahul-palani-22276a240/"
    },
    {
      id: 3,
      type: "GitHub",
      value: "github.com/Rahul-Palani",
      icon: "🐙",
      link: "https://github.com/Rahul-Palani"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h2>
        <p className="text-gray-600">Let's connect and work together!</p>
      </div>

      {/* Contact Methods */}
      <div className="grid gap-4">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center space-x-4 group"
          >
            <div className="text-2xl">{method.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {method.type}
              </h3>
              <p className="text-gray-600 text-sm">{method.value}</p>
            </div>
            <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
              →
            </div>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-4">Send a Message</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Availability */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">Availability</h3>
        <p className="text-blue-700 text-sm">
          I'm currently available for freelance projects and full-time opportunities. 
          Feel free to reach out if you'd like to discuss potential collaborations!
        </p>
      </div>
    </div>
  );
};

export default Contact;
