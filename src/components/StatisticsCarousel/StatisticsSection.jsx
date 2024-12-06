import React from 'react';
import Slider from 'react-slick';
import StatCard from './StatCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const statistics = [
  {
    image: "https://www.euam-ukraine.eu/wp-content/uploads/2021/11/IMG_5925-770x452.jpg",
    statistic: "1 in 3",
    description: "Women worldwide have experienced physical or sexual violence in their lifetime"
  },
  {
    image: "https://english.mathrubhumi.com/image/contentid/policy:1.6159068:1644423683/image.jpg?$p=0f6e831&f=16x10&w=852&q=0.8",
    statistic: "137",
    description: "Women are killed by a member of their family every day globally"
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80",
    statistic: "15M",
    description: "Adolescent girls worldwide have experienced forced sexual acts"
  },
  {
    image: "https://i.pinimg.com/736x/67/12/e7/6712e77423ced4e20bc03333d59d3e22.jpg",
    statistic: "Less than 40%",
    description: "Of women who experience violence seek help of any sort"
  },
  {
    image: "https://as1.ftcdn.net/v2/jpg/02/13/57/94/1000_F_213579449_uiXTNKQu6DBd3a6JbeJp4q2mkLqY8Q5s.jpg",
    statistic: "650M",
    description: "of women alive today were married before the age of 18"
  }
];

const StatisticsSection: React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#fe5811]">
          Violence Against Women: The Statistics
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          These statistics highlight the urgent need for action in addressing violence against women globally.
          Each number represents countless lives affected by this ongoing crisis.
        </p>
        <div className="max-w-7xl mx-auto ">
          <Slider {...settings}>
            {statistics.map((stat, index) => (
              <StatCard
                key={index}
                image={stat.image}
                statistic={stat.statistic}
                description={stat.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;