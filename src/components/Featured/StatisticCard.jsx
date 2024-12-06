import React from 'react';

interface StatisticCardProps {
  title: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ title, value, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-xl text-left transition-all duration-300 transform hover:scale-105
        ${isActive 
          ? 'bg-[#f14c46] text-white shadow-lg shadow-purple-200' 
          : 'bg-white text-gray-800 hover:bg-[#f14c462b]'}`}
    >
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-600'}`}>{title}</p>
    </button>
  );
};

export default StatisticCard;