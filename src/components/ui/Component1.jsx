import React from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  PART_WAITING: {
    label: "Part waiting",
    color: "#953333",
  },
  UNDER_REPAIR: {
    label: "Under repair",
    color: "#025ade",
  },
  COMPLETED: {
    label: "Completed",
    color: "#ae8104",
  },
  OTHER: {
    label: "Other",
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

export function Component1({ chartData }) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] h-[7vw] 2xl:h-[7vw] w-full bg-black chart-gradient">
      <ResponsiveContainer width="105%" height='100%' className={'ml-[-20px] pt-4'}>
        <BarChart data={chartData} className="text-white">
          <XAxis dataKey="week" tick={<CustomTick />} interval={0} />
          <YAxis tick={<CustomTick />} interval={0}/>
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="PART_WAITING"
            name={chartConfig.PART_WAITING.label}
            fill={chartConfig.PART_WAITING.color}
            radius={4}
          />
          <Bar
            dataKey="UNDER_REPAIR"
            name={chartConfig.UNDER_REPAIR.label}
            fill={chartConfig.UNDER_REPAIR.color}
            radius={4}
          />
          <Bar
            dataKey="COMPLETED"
            name={chartConfig.COMPLETED.label}
            fill={chartConfig.COMPLETED.color}
            radius={4}
          />
          <Bar dataKey="OTHER" name={chartConfig.OTHER.label} fill={chartConfig.OTHER.color} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
