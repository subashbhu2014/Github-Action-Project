import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
        <ShoppingCart className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold text-gray-900">Cartzilla</span>
    </div>
  );
};

export default Logo;