import React from 'react';

const BenefitCard = ({ icon: Icon, title }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <p className="text-gray-800 text-sm font-medium leading-snug">{title}</p>
    </div>
  );
};

export default BenefitCard;