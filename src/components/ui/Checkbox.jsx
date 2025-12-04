import React from 'react';

const Checkbox = ({ label, onChange, checked, ...props }) => {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input 
        type="checkbox" 
        className="w-4 h-4 mt-0.5 rounded border-gray-300 text-red-500 focus:ring-red-500" 
        onChange={onChange}
        checked={checked}
        {...props} 
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;