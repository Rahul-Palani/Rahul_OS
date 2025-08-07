import React from 'react';

interface IconProps {
  name: string;
  icon: string;
  onClick: () => void;
  isSelected?: boolean;
}

const Icon: React.FC<IconProps> = ({ name, icon, onClick, isSelected = false }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center w-20 h-20 cursor-pointer select-none transition-all duration-200 hover:bg-white/10 rounded-lg p-2 ${
        isSelected ? 'bg-white/20' : ''
      }`}
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
        {icon}
      </div>
      <span className="text-white text-xs mt-2 text-center font-medium drop-shadow-lg">
        {name}
      </span>
    </div>
  );
};

export default Icon;
