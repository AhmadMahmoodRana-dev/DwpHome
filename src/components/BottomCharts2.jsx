import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  COMP: {
    label: "Comp",
    color: "#5708FE",
  },
  FOLLOW: {
    label: "Follow",
    color: "#880AEB",
  },
  INFO: {
    label: "Info",
    color: "#9C27B0",
  },
  DROP: {
    label: "Drop",
    color: "#E91E63",
  },
  OTHER: {
    label: "Other",
    color: "#FFC107",
  },
};

const CustomTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x + 7},${y})`}>
      <text x={-13} y={0} dy={16} fill="#ffffff" textAnchor="middle" fontSize={10}>
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
          color: '#ffffff',
        }}
      >
        <p style={{ marginBottom: '5px', color: 'red', paddingLeft: '4px' }}>
          {`Week: ${label}`}
        </p>
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

const BottomCharts2 = ({chartData}) => {



  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] w-[250px] h-[150px] lg:w-[21vw] 2xl:w-[20vw] 2xl:h-[8vw] bg-black chart-gradient">
      <ResponsiveContainer width="100%" height='100%' className={"ml-[-1.2vw]"}>
        <BarChart data={chartData}>
          <XAxis dataKey="WEEK" tick={<CustomTick />} interval={0} />
          <YAxis tick={<CustomTick />} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="COMP" name={chartConfig.COMP.label} fill={chartConfig.COMP.color} radius={4} />
          <Bar dataKey="FOLLOW" name={chartConfig.FOLLOW.label} fill={chartConfig.FOLLOW.color} radius={4} />
          <Bar dataKey="INFO" name={chartConfig.INFO.label} fill={chartConfig.INFO.color} radius={4} />
          <Bar dataKey="DROP" name={chartConfig.DROP.label} fill={chartConfig.DROP.color} radius={4} />
          <Bar dataKey="OTHER" name={chartConfig.OTHER.label} fill={chartConfig.OTHER.color} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BottomCharts2;


// import React from "react";
// import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { ChartContainer } from "@/components/ui/chart";

// const chartData = [
//   { cat: " Comp", W27: 5022, W28: 3494, W29: 3279, W30: 4056 },
//   { cat: " Follow", W27: 670, W28: 218, W29: 598, W30: 568 },
//   { cat: " Info ", W27: 67, W28: 22, W29: 62, W30: 81 },
//   { cat: " Drop ", W27: 268, W28: 131, W29: 208, W30: 162 },
//   { cat: " Others", W27: 670, W28: 502, W29: 4, W30: 541 },
// ];

// const chartConfig = {
//   W27: {
//     label: "W 31",
//     color: "#5708FE",
//   },
//   W28: {
//     label: "W 32",
//     color: "#880AEB",
//   },
//   W29: {
//     label: "W 33",
//     color: "#9C27B0",
//   },
//   W30: {
//     label: "W 34",
//     color: "#E91E63",
//   },
// };

// const CustomTick = (props) => {
//   const { x, y, payload } = props;
//   return (
//     <g transform={`translate(${x + 7},${y})`}> {/* Adjust x value here */}
//       <text x={-13} y={0} dy={16} fill="#ffffff" textAnchor="middle" fontSize={10}>
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
//           color: '#ffffff',
//         }}
//       >
//         <p style={{ marginBottom: '5px', color: 'red', paddingLeft: '4px' }}>
//           {`Category: ${label}`}
//         </p>
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

// const BottomCharts2 = () => {
//   return (
//     <ChartContainer config={chartConfig} className="min-h-[100px] w-[250px] h-[150px] lg:w-[21vw] 2xl:w-[20vw] 2xl:h-[8vw] bg-black chart-gradient">
//       <ResponsiveContainer width="100%" height='100%' className={"ml-[-1.2vw]"}>
//         <BarChart 
//           data={chartData} 
//           // margin={{ top: 10, right: 20, bottom: 10, }}
//         >
//           <XAxis dataKey="cat" tick={<CustomTick />} interval={0} />
//           <YAxis tick={<CustomTick />} />
//           <Tooltip content={<CustomTooltip />} />
//           <Bar dataKey="W27" name={chartConfig.W27.label} fill={chartConfig.W27.color} radius={4} />
//           <Bar dataKey="W28" name={chartConfig.W28.label} fill={chartConfig.W28.color} radius={4} />
//           <Bar dataKey="W29" name={chartConfig.W29.label} fill={chartConfig.W29.color} radius={4} />
//           <Bar dataKey="W30" name={chartConfig.W30.label} fill={chartConfig.W30.color} radius={4} />
//         </BarChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   );
// };

// export default BottomCharts2;
