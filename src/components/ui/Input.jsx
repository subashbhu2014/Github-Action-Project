import React from 'react';

const Input = ({ error, onChange, className = '', ...props }) => {
  return (
    <div className="relative">
      <input
        className={`w-full px-4 py-3 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm ${className}`}
        onChange={onChange}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;