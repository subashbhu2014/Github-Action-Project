import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', ...props }) => {
  const baseStyles = 'px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;