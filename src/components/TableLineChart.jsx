// import React, { useEffect, useState } from "react";
// import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { ChartContainer } from "@/components/ui/chart";

// const chartConfig = {
//   Calls: {
//     label: "Calls",
//     color: "#8F20C3",
//   },
// };

// const CustomTick = (props) => {
//   const { x, y, payload } = props;
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <text x={1} y={1} dy={16} fill="#ffffff" textAnchor="middle" fontSize={10}>
//         {payload.value}
//       </text>
//     </g>
//   );
// };

// const CustomXAxisTick = (props) => {
//   const { x, y, payload } = props;
//   if (payload.value % 3 === 0) {
//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text x={0} y={15} fill="#ffffff" textAnchor="middle" fontSize={10}>
//           {payload.value}
//         </text>
//       </g>
//     );
//   } else {
//     return null;
//   }
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           backgroundColor: '#ffffff',
//           borderRadius: '10px',
//           padding: '10px',
//           color: '#333',
//           border: '1px solid #ddd',
//         }}
//       >
//         <p style={{ marginBottom: '5px', color: 'red' }}>{`Day: ${label}`}</p>
//         {payload.map((entry, index) => (
//           <p key={`item-${index}`} style={{ color: entry.stroke }}>
//             {`${entry.name}: ${entry.value.toLocaleString()}`}
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// const TableLineChart = ({ startWeek, endWeek }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     // Fetch data from API using the provided startWeek and endWeek
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/DWP/dayWise?SDATE=${startWeek}&EDATE=${endWeek}`);
//         const data = await response.json();
//         // Map the API response to match the chart structure
//         const mappedData = data.map((item) => ({
//           date: item.SERIAL_NUMBER, // Assuming SERIAL_NUMBER represents the date or x-axis value
//           Calls: item.TOTAL_OFFERED, // Map TOTAL_OFFERED to Calls
//         }));
//         setChartData(mappedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [startWeek, endWeek]); // Re-fetch data when startWeek or endWeek changes

//   return (
//     <ChartContainer config={chartConfig} className="min-h-[100px] w-full h-[8.5vw] 2xl:w-full lg:w-[110%]">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={chartData} className="text-white">
//           <XAxis dataKey="date" tick={<CustomXAxisTick />} interval={0} axisLine={false} tickLine={false} />
//           <YAxis tick={<CustomTick />} axisLine={false} tickLine={false} interval={0} />
//           <Tooltip content={<CustomTooltip />} />
//           <Line type="monotone" dataKey="Calls" stroke={chartConfig.Calls.color} strokeWidth={2} dot={true} />
//         </LineChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// };

// export default TableLineChart;



// import React from "react";
// import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { ChartContainer } from "@/components/ui/chart";

// const chartData = [
//   { date: "1", Calls: 1334 }, 
//   { date: "2", Calls:1361 },
//   { date: "3", Calls: 1268 },
//   { date: "4", Calls: 1131 },
//   { date: "5", Calls: 792 },
//   { date: "6", Calls: 753 },
//   { date: "7", Calls: 250 },
//   { date: "8", Calls: 805 },
//   { date: "9", Calls: 810 },
//   { date: "10", Calls: 775 },
//   { date: "11", Calls: 769 },
//   { date: "12", Calls: 463 },
//   { date: "13", Calls: 601 },
//   { date: "14", Calls: 191 },
//   { date: "15", Calls: 600 },
//   { date: "16", Calls: 197 },
//   { date: "17", Calls: 0 },  
//   { date: "18", Calls: 1332 },
//   { date: "19", Calls: 952 },
//   { date: "20", Calls: 971 },
//   { date: "21", Calls: 329 },
//   { date: "22", Calls: 1370 },
//   { date: "23", Calls: 991 },
//   { date: "24", Calls: 880 },
//   { date: "25", Calls: 769 },
//   { date: "26", Calls: 636 },
//   { date: "27", Calls: 777 },
//   { date: "28", Calls: 237 },
//   { date: "29", Calls: 911 },
//   { date: "30", Calls: 1166 },
//   { date: "31", Calls: 369 },
// ];



// const chartConfig = {
//   Calls: {
//     label: "Total Calls",
//     color: "#8F20C3",
//   },
// };

// const CustomTick = (props) => {
//   const { x, y, payload } = props;
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <text x={1} y={1} dy={16} fill="#ffffff" textAnchor="middle" fontSize={10}>
//         {payload.value}
//       </text>
//     </g>
//   );
// };


// const CustomXAxisTick = (props) => {
//   const { x, y, payload } = props;
//   // Only show ticks for 4, 8, 12, 16, 20, etc.
//   if (payload.value % 3 === 0) {
//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text x={0} y={15} fill="#ffffff" textAnchor="middle" fontSize={10}>
//           {payload.value}
//         </text>
//       </g>
//     );
//   } else {
//     return null; // Skip ticks that are not multiples of 4
//   }
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           backgroundColor: '#ffffff',
//           borderRadius: '10px',
//           padding: '10px',
//           color: '#333',
//           border: '1px solid #ddd',
//         }}
//       >
//         <p style={{ marginBottom: '5px', color: 'red' }}>{`Day:${label}`}</p>
//         {payload.map((entry, index) => (
//           <p key={`item-${index}`} style={{ color: entry.stroke }}>
//             {`${entry.name}: ${entry.value.toLocaleString()}`}
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// const TableLineChart = () => {
//   return (
//     <ChartContainer config={chartConfig} className="min-h-[100px] w-full h-[8.5vw] 2xl:w-full lg:w-[110%]">
//       <ResponsiveContainer width="100%" height='100%'>
//         <LineChart data={chartData} className="text-white">
//           <XAxis dataKey="date" tick={<CustomXAxisTick />} interval={0} axisLine={false} tickLine={false} />
//           <YAxis tick={<CustomTick />} axisLine={false} tickLine={false} interval={0} />
//           <Tooltip content={<CustomTooltip />} />
//           <Line type="monotone" dataKey="Calls" stroke={chartConfig.Calls.color} strokeWidth={2} dot={true} />
//         </LineChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// };

// export default TableLineChart;


import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  Calls: {
    label: "Total Calls",
    color: "#8F20C3",
  },
};

const CustomTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={1} y={1} dy={16} fill="#ffffff" textAnchor="middle" fontSize={10}>
        {payload.value}
      </text>
    </g>
  );
};

const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  // Only show ticks for multiples of 3
  if (payload.value % 3 === 0) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={15} fill="#ffffff" textAnchor="middle" fontSize={10}>
          {payload.value}
        </text>
      </g>
    );
  } else {
    return null; // Skip ticks that are not multiples of 3
  }
};

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     const formatDate = (dateString) => {
//       const date = new Date(dateString);
//       const day = String(date.getDate()).padStart(2, '0');
//       const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//       const year = String(date.getFullYear()).slice(-2); // Get last two digits of year
//       return `${day}-${month}-${year}`;
//     };

//     return (
//       <div
//         style={{
//           backgroundColor: '#ffffff',
//           borderRadius: '10px',
//           padding: '10px',
//           color: '#333',
//           border: '1px solid #ddd',
//         }}
//       >
//         <p style={{ marginBottom: '5px', color: 'red' }}>{`Date: ${formatDate(payload[0].payload.CallDate)}`}</p>
//         {payload.map((entry, index) => (
//           <p key={`item-${index}`} style={{ color: entry.stroke }}>
//             {`${entry.name}: ${entry.value.toLocaleString()}`}
//           </p>
//         ))}
   

//       </div>
//     );
//   }
//   return null;
// };

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = String(date.getFullYear()).slice(-2); // Get last two digits of year
      
      // Get day of the week (Sun, Mon, etc.)
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const dayOfWeek = daysOfWeek[date.getDay()];
      
      return `${dayOfWeek}, ${day}-${month}-${year}`;
    };

    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '10px',
          color: '#333',
          border: '1px solid #ddd',
        }}
      >
        {/* Displaying Date with Day */}
        <p style={{ marginBottom: '5px', color: 'red' }}>
          {`Date: ${formatDate(payload[0].payload.CallDate)}`}
        </p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.stroke }}>
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};





const TableLineChart = ({ chartData }) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] w-full h-[8.5vw] 2xl:w-full lg:w-[110%]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} className="text-white">
          <XAxis dataKey="date" tick={<CustomXAxisTick />} interval={0} axisLine={false} tickLine={false} />
          <YAxis tick={<CustomTick />} axisLine={false} tickLine={false} interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="Calls" stroke={chartConfig.Calls.color} strokeWidth={2} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default TableLineChart;

