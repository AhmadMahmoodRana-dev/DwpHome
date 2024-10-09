import React from 'react';
import Chart from 'react-apexcharts';

const ThirdBarChart = () => {
  return (
    <div className='mt-5'>
      <Chart
        type='bar'
        width={320}
        height={230}
        series={[
          {
            name: 'P Wait',
            data: [1000, 1200, 1500, 1800]
          },
          {
            name: 'U Repair',
            data: [800, 900, 1000, 1200]
          },
          {
            name: 'Complete',
            data: [600, 700, 800, 1000]
          },
          {
            name: 'Others',
            data: [500, 600, 700, 800]
          }
        ]}
        options={{
          chart: {
            foreColor: '#FFFFFF' // White text color
          },
          xaxis: {
            categories: ['WEEK 23', 'WEEK 24', 'WEEK 25', 'WEEK 26'],
            labels: {
              style: {
                colors: ['#FFFFFF'],
                fontSize: '10px'
              }
            }
          },
          yaxis: {
            labels: {
              style: {
                colors: ['#FFFFFF'],
                fontSize: '12px'
              }
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '50%',
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: false,
          },
          colors: ['#FF4560', '#008FFB', '#00E396', '#FEB019'],
          legend: {
            position: 'top',
            labels: {
              colors: ['#FFFFFF']
            }
          }
        }}
      />
    </div>
  );
}

export default ThirdBarChart;
