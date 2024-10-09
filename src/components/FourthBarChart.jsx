import React from 'react';
import Chart from 'react-apexcharts';

const FourthBarChart = () => {
  return (
    <div className='ml-[-12px] mt-6'>
      <Chart
        type='bar'
        width={340}
        height={230}
        series={[
          {
            name: 'Series 1',
            data: [10000, 12000, 8000, 10000]
          },
          {
            name: 'Series 2',
            data: [5000, 6000, 4000, 5000]
          },
          {
            name: 'Series 3',
            data: [2000, 2500, 1500, 2000]
          },
          {
            name: 'Series 4',
            data: [1000, 1500, 1000, 1500]
          }
        ]}
        options={{
          chart: {
            // background: '#002366', // Blue background
            foreColor: '#FFFFFF' // White text color
          },
          xaxis: {
            categories: ['Week 23', 'Week 24', 'Week 25', 'Week 26'],
            labels: {
              style: {
                colors: ['#FFFFFF'],
                fontSize: '12px'
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
              columnWidth: '40%',
              dataLabels: {
                position: 'top'
              },
              endingShape: 'rounded'
            }
          },
          dataLabels: {
            enabled: false
          },
          colors: ['#ffffff', '#00aaff', '#888888', '#8854d0'],
          legend: {
            position: 'top',
            labels: {
              colors: ['#FFFFFF']
            }
          },
          grid: {
            borderColor: '#444444'
          }
        }}
      />
    </div>
  );
};

export default FourthBarChart;
