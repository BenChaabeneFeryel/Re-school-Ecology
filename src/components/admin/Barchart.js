import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Julliet'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Plastique',
      data: [1400,800,200,1000,750,1500,3000],
      backgroundColor: '#0476D9',
    },
    {
      label: 'Canette',
      data: [500,300,240,50,150,1200,1000],
      backgroundColor: '#08A66C',
    },
  ],
};

export default function Barchart() {
  return <Bar options={options} data={data} />;
}
