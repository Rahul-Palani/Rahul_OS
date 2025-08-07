import React from 'react';
import { Rnd } from 'react-rnd';

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
}

const Window: React.FC<WindowProps> = ({ 
  id, 
  title, 
  isOpen, 
  onClose, 
  children, 
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 400, height: 300 }
}) => {
  if (!isOpen) return null;

  return (
    <Rnd
      default={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        width: defaultSize.width,
        height: defaultSize.height,
      }}
      minWidth={300}
      minHeight={200}
      bounds="parent"
      className="z-50"
      dragHandleClassName="drag-handle"
    >
      <div className="w-full h-full bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
        {/* Window Header */}
        <div className="drag-handle bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 flex items-center justify-between cursor-move">
          <h3 className="font-semibold text-sm">{title}</h3>
          <button
            onClick={onClose}
            className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold transition-colors"
          >
            ×
          </button>
        </div>
        
        {/* Window Content */}
        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
