import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import Window from './Window';
import AboutMe from './windows/AboutMe';
import Projects from './windows/Projects';
import Resume from './windows/Resume';
import Contact from './windows/Contact';

interface WindowState {
  id: string;
  isOpen: boolean;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'about', isOpen: false, title: 'About Me', position: { x: 100, y: 100 }, size: { width: 500, height: 400 } },
    { id: 'projects', isOpen: false, title: 'Projects', position: { x: 150, y: 150 }, size: { width: 600, height: 500 } },
    { id: 'resume', isOpen: false, title: 'Resume', position: { x: 200, y: 200 }, size: { width: 550, height: 450 } },
    { id: 'contact', isOpen: false, title: 'Contact', position: { x: 250, y: 250 }, size: { width: 500, height: 400 } },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const icons = [
    { id: 'about', name: 'About Me', icon: '👨‍💻' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'resume', name: 'Resume', icon: '📄' },
    { id: 'contact', name: 'Contact', icon: '📧' },
  ];

  const openWindow = (id: string) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === id 
          ? { ...window, isOpen: true }
          : window
      )
    );
  };

  const closeWindow = (id: string) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === id 
          ? { ...window, isOpen: false }
          : window
      )
    );
  };

  const getWindowContent = (id: string) => {
    switch (id) {
      case 'about':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const openWindows = windows.filter(window => window.isOpen);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 grid grid-cols-2 gap-8">
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            name={icon.name}
            icon={icon.icon}
            onClick={() => openWindow(icon.id)}
            isSelected={windows.find(w => w.id === icon.id)?.isOpen}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          isOpen={window.isOpen}
          onClose={() => closeWindow(window.id)}
          defaultPosition={window.position}
          defaultSize={window.size}
        >
          {getWindowContent(window.id)}
        </Window>
      ))}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-md border-t border-white/20">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center space-x-2">
            {openWindows.map((window) => (
              <button
                key={window.id}
                onClick={() => {
                  // Toggle window visibility
                  setWindows(prev => 
                    prev.map(w => 
                      w.id === window.id 
                        ? { ...w, isOpen: !w.isOpen }
                        : w
                    )
                  );
                }}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  window.isOpen 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/15'
                }`}
              >
                {window.title}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 text-white/70 text-xs">
            <span>Rahul_OS</span>
            <span>•</span>
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
