import React, { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  calls: {
    label: "Calls",
    color: "#5708FE",
  },
  chat: {
    label: "Chat",
    color: "#ce0265",
  },
  social: {
    label: "sm",
    color: "#953333",
  },
};


const CustomTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-10} y={0} dy={16} fill="#ffffff" textAnchor="middle" fontSize={10}>
        {payload.value}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '5px',
          color: '#000000',
        }}
      >
        <p style={{ marginBottom: '5px', color: 'red', paddingLeft: '3px' }}>{`Category: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.fill, paddingLeft: '3px' }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BottomCharts3 = ({chartData}) => {
  

  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] 2xl:w-[20vw] w-[250px] h-[150px] 2xl:h-[8vw] lg:w-[21vw] bg-black chart-gradient">
      <ResponsiveContainer width="100%" height='100%' className={"ml-[-1.2vw]"}>
        <BarChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <XAxis dataKey="cat" tick={<CustomTick />} interval={0} />
          <YAxis tick={<CustomTick />} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="calls" name={chartConfig.calls.label} fill={chartConfig.calls.color} radius={4} />
          <Bar dataKey="chat" name={chartConfig.chat.label} fill={chartConfig.chat.color} radius={4} />
          <Bar dataKey="social" name={chartConfig.social.label} fill={chartConfig.social.color} radius={4} />

        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default BottomCharts3;



// import React from "react";
// import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { ChartContainer } from "@/components/ui/chart";

// // Original data with underscores
// const originalChartData = [
//   { cat: "Gree AC", calls: 11671, chat: 103, social: 15 },
//   { cat: "Eco AC", calls: 943, chat: 7, social: 3 },
//   { cat: "LED", calls: 720, chat: 5, social: 2 },
//   { cat: "Ref", calls: 1721, chat: 10, social: 7 },
//   { cat: "Others", calls: 2185, chat: 15, social: 7 },
// ];

// // Replace underscores with spaces in the 'cat' labels
// const chartData = originalChartData.map(item => ({
//   ...item,
//   cat: item.cat.replace(/_/g, ' '),
// }));

// const chartConfig = {
//   calls: {
//     label: "calls",
//     color: "#5708FE",
//   },
//   chat: {
//     label: "chat",
//     color: "#ce0265",
//   },
//   social: {
//     label: "sm",
//     color: "#953333",
//   },
// };

// const CustomTick = (props) => {
//   const { x, y, payload } = props;
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <text x={-10} y={0} dy={16} fill="#ffffff" textAnchor="middle" fontSize={10}>
//         {payload.value}
//       </text>
//     </g>
//   );
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           backgroundColor: '#ffffff',
//           borderRadius: '10px',
//           padding: '5px',
//           color: '#000000',
//         }}
//       >
//         <p style={{ marginBottom: '5px', color: 'red', paddingLeft: '3px' }}>{`Category: ${label}`}</p>
//         {payload.map((entry, index) => (
//           <p key={`item-${index}`} style={{ color: entry.fill, paddingLeft: '3px' }}>
//             {`${entry.name}: ${entry.value}`}
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// const BottomCharts3 = () => {
  
//   return (
//     <ChartContainer config={chartConfig} className="min-h-[100px] 2xl:w-[20vw] w-[250px] h-[150px] 2xl:h-[8vw] lg:w-[21vw]  bg-black chart-gradient">
//       <ResponsiveContainer width="100%" height='100%' className={"ml-[-1.2vw]"}>
//         <BarChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
//           <XAxis dataKey="cat" tick={<CustomTick />} interval={0} />
//           <YAxis tick={<CustomTick />} />
//           <Tooltip content={<CustomTooltip />} />
//           <Bar dataKey="calls" name={chartConfig.calls.label} fill={chartConfig.calls.color} radius={4} />
//           <Bar dataKey="chat" name={chartConfig.chat.label} fill={chartConfig.chat.color} radius={4} />
//           <Bar dataKey="social" name={chartConfig.social.label} fill={chartConfig.social.color} radius={4} />
//         </BarChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// }

// export default BottomCharts3;
