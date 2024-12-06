import React, { useState } from 'react';
import StatisticCard from './StatisticCard';
import { statistics } from './statistics-data';

const FeaturedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStat = statistics[activeIndex];

  return (
    <section className="mx-4 md:ms-28">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Main Feature Image */}
          <div className="relative">
            <img
              src={currentStat.image}
              alt="Violence Against Women Awareness"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{currentStat.title}</h3>
              <p className="text-white/90 text-sm md:text-base">{currentStat.description}</p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#fe5811] mb-3 md:mb-4">Key Statistics</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Learn more about the impact of violence against women globally.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-[30vw] mt-8 md:mt-16">
              {statistics.map((stat, index) => (
                <StatisticCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;