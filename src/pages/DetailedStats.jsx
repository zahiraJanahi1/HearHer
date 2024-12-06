import React from 'react';
import { Images } from "../constant";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedSection from '../components/Featured/FeaturedSection';
import ChartsSection from '../components/Charts/ChartsSection';

const DetailedStats = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link
          to="/"
          className="inline-flex items-center mx-4 md:ms-10 text-[#f14c46] hover:text-[#f14c46b8] mb-6 md:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Back to Overview
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-[#fe5811] mb-3 text-center">
          Violence <span className='text-gray-700'>Against Women</span>
        </h1>
        <p className="text-center text-gray-600 mb-8 md:mb-12 mx-auto text-base md:text-lg px-4">
          Understanding the global impact and working together to create change.
        </p>

        <FeaturedSection />
        <div className="hidden md:block">
          <ChartsSection />
        </div>

        <section className='w-[90vw] bg-gray-100 mx-auto rounded-3xl min-h-[60vh] md:h-[80vh]  '>
          <h1 className='text-center font-bold text-2xl md:text-4xl pt-8 md:pt-16 text-[#fe5811]'>Emerging trend</h1>
          <div className='flex flex-col md:flex-row gap-8 md:gap-20 p-4 md:p-8'>
            <div className='w-full md:w-1/2'>
              <img src={Images.trend} className='w-full md:w-[35vw] mx-auto md:ms-10' alt="Trend visualization" />
            </div>
            <div className='w-full md:w-1/2 mt-4 md:mt-28 text-xl md:text-2xl'>
              <span className='text-[#7385b4] block'>
                Global uptick in measures to address technology-facilitated violence against women
              </span>
              <p className='mt-4 text-base md:text-lg'>
                More than 90% of measures were adopted since the 2030 Agenda in 2015, with the Asia-Pacific region taking the lead.
              </p>
            </div>
          </div>
        </section>
      </div>

  
    </div>
  );
};

export default DetailedStats;