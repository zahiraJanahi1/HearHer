import React from 'react';

interface StatCardProps {
  image: string;
  statistic: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ image, statistic, description }) => {
  return (
    <div className="px-5 mb-5">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt="Violence Statistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{statistic}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;