import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SecondaryPiechart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const dataset = tooltipItem.dataset.data;
            const total = dataset.reduce((acc, val) => acc + val, 0);
            const value = dataset[tooltipItem.dataIndex];
            const percentage = ((value / total) * 100).toFixed(0);
            return `${value} (${percentage}%)`;
          },
        },
      },
      datalabels: {
        color: '#ffff',
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(0);
          return `${percentage}%`;
        },
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold',
         size: window.innerWidth < 768 ? '3vw' : '12.2vw',
        },
      },
    },
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="responsive-pie-chart" style={{ height: '6.2vw', width: '6.9vw' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default SecondaryPiechart;
