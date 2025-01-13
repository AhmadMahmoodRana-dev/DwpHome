import React from "react";
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  in_sets: {
    label: "In sets",
    color: 'rgba(135, 206, 235, 0.8)',
  },
  out_sets: {
    label: "Out sets",
    color: '#0075FF',
  },
};

const CustomTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        x={-6} 
        y={0} 
        dy={5} 
        fill="#ffffff" 
        textAnchor="middle" 
         className="text-[8px] 2xl:text-[.6vw]"
      >
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
          marginTop: '-85px',
          marginLeft: '80px',
          backgroundColor: '#000000',
          borderRadius: '10px',
          padding: '4px',
          color: '#ffffff',
          position: 'relative',
          width: '200px',
          height: '150px',
          zIndex: '20'
        }}
      >
        <p style={{ marginBottom: '15px', color: 'red', paddingLeft: '3px' }}>{`${label}`}</p>
        {payload.map((entry, index) => (
          <p 
            key={`item-${index}`} 
            style={{ 
              color: entry.fill, 
              marginBottom: '20px', 
              paddingLeft: '3px', 
              display: 'flex', 
              justifyContent: 'space-between' 
            }}
          >
            <span>{entry.name}</span>
            <span>{entry.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const weekFormatter = (week) => `wk ${week}`;

const CustomDotWhite = (props) => {
  const { cx, cy } = props;
  return (
    <circle cx={cx} cy={cy} r={3} stroke="none" fill="#FAF9F6" />
  );
};

const CustomDotBlack = (props) => {
  const { cx, cy } = props;
  return (
    <circle cx={cx} cy={cy} r={3} stroke="none" fill="#FAF9F6" />
  );
};

// Dummy data
const dummyData = [
  { Week: 1, in_sets: 50, out_sets: 40 },
  { Week: 2, in_sets: 50, out_sets: 40 },
  { Week: 3, in_sets: 50, out_sets: 60 },
  { Week: 4, in_sets: 60, out_sets: 60 },
  { Week: 5, in_sets: 60, out_sets: 50 },
];

export default function SmallCardFlowChart() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[100%]">
      <ResponsiveContainer width="100%" height="100%" className={"pt-4"}>
        <AreaChart
          data={dummyData}
          className="ml-[-30px] text-white"
        >
          <XAxis dataKey="Week" tick={<CustomTick />} interval={0} tickFormatter={weekFormatter} />
          <YAxis tick={<CustomTick />} interval={0} padding={{ bottom: 10 }} domain={[10, 'auto']} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="in_sets"
            name={chartConfig.in_sets.label}
            stroke={chartConfig.in_sets.color}
            fill={chartConfig.in_sets.color}
            dot={<CustomDotWhite />}
          />
          <Area
            type="monotone"
            dataKey="out_sets"
            name={chartConfig.out_sets.label}
            stroke={chartConfig.out_sets.color}
            fill={chartConfig.out_sets.color}
            dot={<CustomDotBlack />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
