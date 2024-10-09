import React from 'react';
import Chart from 'react-apexcharts';

const SecondBarChart = () => {
  return (
    <div 
      className=' mt-2' 
      style={{ 
        // padding: '20px', 
        margin: 0, 
        backgroundColor: '#0a183d', // Dark blue background
        borderRadius: '15px' // Rounded corners
      }}
    >
      <Chart
        type='bar'
        width={273.59}
        height={97.96}
        series={[
          {
            name: 'Series1',
            data: [900, 700, 800, 300]
          },
          {
            name: 'Series2',
            data: [500, 400, 600, 200]
          },
          {
            name: 'Series3',
            data: [300, 200, 400, 100]
          }
        ]}
        options={{
          chart: {
            
            background: "transparent", // Dark blue background
            foreColor: '#FFFFFF', // White text color
            toolbar: {
              show: false // Hide the toolbar
            }
          },
          xaxis: {
            categories: ['Week 15', 'Week 14', 'Week 13', 'Week 12'],
            labels: {
              style: {
                colors: ['#FFFFFF'],
                fontSize: '12px'
              }
            },
            axisBorder: {
              show: false // Hide the border line
            },
            axisTicks: {
              show: false // Hide the ticks
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
              columnWidth: '45%',
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: false,
          },
          colors: ['#00E396', '#FEB019', '#FF4560'], // Adjust colors as needed
          legend: {
            show: false // Hide the legend
          },
          grid: {
            show: false // Hide grid lines
          },
          tooltip: {
            enabled: true
          }
        }}
      />
    </div>
  );
}

export default SecondBarChart;
