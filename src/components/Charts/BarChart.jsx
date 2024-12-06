import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  onHover: (event, elements) => {
    const chart = event.chart;
    if (elements && elements.length) {
      const dataIndex = elements[0].index;
      const value = chart.data.datasets[0].data[dataIndex];
      chart.tooltip.setActiveElements([{ datasetIndex: 0, index: dataIndex }], {
        x: event.x,
        y: event.y,
      });
    }
  },
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Forms of Violence Addressed by National Legislation',
      color: '#a9440c',
      font: {
        size: 16,
        weight: '400',
      },
    },
  },
};

const data = {
  labels: [
    'Domestic Violence',
    'Violence Against Women',
    'Child Marriage',
    'Trafficking',
    'Sexual Harassment',
    'FGM',
    'Sexual Violence',
    'Stalking',
    'Other Practices',
    'Femicide',
  ],
  datasets: [
    {
      label: 'Number of Legislative Measures',
      data: [354, 322, 272, 242, 156, 76, 75, 43, 27, 16],
      backgroundColor: [
        'rgb(245, 30, 0)',
        'rgb(255, 85, 15)',
        'rgb(125, 45, 175)',
        'rgb(70, 30, 80)',
        'rgb(185, 195, 220)',
        'rgb(220, 225, 240)',
        'rgb(147, 42, 9)',
        'rgb(255, 227, 151)',
        'rgba(249, 115, 22, 0.7)',
        'rgba(168, 85, 247, 0.7)',
      ],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="p-6 mt-28  ">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;