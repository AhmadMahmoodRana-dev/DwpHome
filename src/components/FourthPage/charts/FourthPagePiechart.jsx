import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const FourthPagePiechart = ({chartData}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%',
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const dataset = tooltipItem.dataset.data;
            const total = dataset.reduce((acc, val) => acc + val, 0);
            const value = dataset[tooltipItem.dataIndex];
            const percentage = ((value / total) * 100).toFixed(0); // Calculate percentage
            return `${value} (${percentage}%)`; // Show value and percentage on hover
          },
        },
      },
      datalabels: {
        color: '#ffff',
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(0); // Round to 0 decimal places
          return `${percentage}%`; // Display value with percentage inside chart
        },
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold',
        },
      },
    },                                                                 
  };
  if (!chartData) {
    return <div>Loading...</div>;
  }


  return (
    <div className='2xl:w-[7vw] 2xl:h-[7vw] w-[100px] h-[100px]'>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default FourthPagePiechart;
