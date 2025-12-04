import React from 'react';
import { Mail, ShoppingCart, Globe, Percent, Heart, Clock } from 'lucide-react';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  const benefits = [
    { icon: Mail, title: 'Subscribe to your favorite products' },
    { icon: ShoppingCart, title: 'View and manage your orders and wishlist' },
    { icon: Globe, title: 'Earn rewards for future purchases' },
    { icon: Percent, title: 'Receive exclusive offers and discounts' },
    { icon: Heart, title: 'Create multiple wishlists' },
    { icon: Clock, title: 'Pay for purchases by installments' }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 p-6 lg:p-12 flex items-center">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Cartzilla account benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} icon={benefit.icon} title={benefit.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;