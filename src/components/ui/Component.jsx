import React from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  day_0: {
    label: "Day 0",
    color: "#953333",
  },
  day2_3: {
    label: "Day 2-3",
    color: "#025ade",
  },
  day4_7: {
    label: "Day 4-7",
    color: "#ae8104",
  },
  day8_above: {
    label: "Day 8+",
    color: "#ce0265",
  },
};

const CustomTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-5} y={0} dy={5} fill="#ffffff" textAnchor="middle" style={{ fontSize: '.5vw' }}>
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
          marginTop: '110px',
          marginLeft: '60px',
          backgroundColor: '#000000',
          borderRadius: '10px',
          padding: '5px',
          color: '#ffffff',
          width: '200px',
          height:'150px',
        }}
      >
        <p style={{ color: 'red', paddingLeft: '3px' }}>{`${label}`}</p>
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '3px', paddingRight: '3px' }}
          >
            <p style={{ color: entry.fill }}>{`${entry.name}`}</p>
            <p style={{ color: entry.fill, textAlign: 'right' }}>{`${entry.value.toLocaleString()}`}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};



export function Component({ chartData }) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] h-[7vw] 2xl:h-[7vw] w-full bg-black chart-gradient ">
      <ResponsiveContainer width="105%" height="100%"  className={'ml-[-20px] pt-4'}>
        <BarChart data={chartData} className="text-white">
          <XAxis dataKey="week" tick={<CustomTick />} interval={0} />
          <YAxis tick={<CustomTick />}interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="day_0" name={chartConfig.day_0.label} fill={chartConfig.day_0.color} radius={4} />
          <Bar dataKey="day2_3" name={chartConfig.day2_3.label} fill={chartConfig.day2_3.color} radius={4} />
          <Bar dataKey="day4_7" name={chartConfig.day4_7.label} fill={chartConfig.day4_7.color} radius={4} />
          <Bar dataKey="day8_above" name={chartConfig.day8_above.label} fill={chartConfig.day8_above.color} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
