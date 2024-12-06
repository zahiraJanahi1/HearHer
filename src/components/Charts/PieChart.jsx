import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' ,
    },
    // title: {
    //   display: true,
    //   text: 'Types of Violence Against Women (Global Statistics)',
    //   color: '#6B46C1',
    //   font: {
    //     size: 16,
    //     weight: 'bold',
    //   },
    // },
  },
};

const data = {
  labels: [
    'Intimate Partner Violence',
    'Non-Partner Sexual Violence',
    'Both Forms of Violence',
    'No Reported Violence'
  ],
  datasets: [
    {
      data: [27, 7, 6, 60],
      backgroundColor: [
        'rgb(245, 30, 0)',
        'rgb(255, 85, 15)',
        'rgb(125, 45, 175)',
        'rgba(229, 231, 235, 0.7)',
      ],
      borderColor: [
        'rgb(245, 30, 0)',
        'rgb(255, 85, 15)',
        'rgb(125, 45, 175)',
        'rgba(229, 231, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div className=" h-[600px]">
      <Pie options={options} data={data} />
  
    </div>
  );
};

export default PieChart;