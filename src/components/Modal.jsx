import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'; // Ensure custom animations are defined here

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity opacity-100 animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="bg-gray-900 text-white w-full max-w-6xl mx-4 md:mx-6 lg:mx-8 p-8 rounded-lg shadow-lg relative transform transition-transform scale-95 animate-scaleUp 
        overflow-auto max-h-[90vh]" // Added classes to handle scrolling and height
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
