import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Plastique', 'Carton', 'Composte', 'Canettes'],
  datasets: [
    {
      label: 'Total Déchets',
      data: [12, 9, 2, 3],
      backgroundColor: [
        '#0476D9',
        '#F28705',
        '#F2DF80',
        '#08A66C',
      ],
      borderColor: [
        '#0476D9',
        '#F28705',
        '#F2DF80',
        '#08A66C',
      ],
      borderWidth: 1,
    },
  ],
};

export const optionsd = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
      position : 'right'
    },
    title: {
      display: false
    },
  },
};

export default function PieChart() {
  return <Pie data={data} options={optionsd} />;
}
