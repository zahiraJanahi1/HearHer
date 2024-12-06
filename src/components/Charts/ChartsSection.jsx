import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

const ChartsSection = () => {
  return (
    <div className="mt-12 md:mt-20">
      <h2 className="text-lg md:text-xl mx-4 md:ms-40 text-gray-500 border-l-2 ps-2 border-orange-500">
        There are 1,583 legislative measures across 193 countries to address violence against women.
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mx-4 md:ms-20 mt-8">
        <div className="w-full">
          <BarChart />
        </div>
        <div className="w-full">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;