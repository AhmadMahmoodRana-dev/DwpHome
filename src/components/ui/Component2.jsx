import React from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  PARTS: {
    label: "Parts",
    color: "#953333",
  },
  SERVICE: {
    label: "Service",
    color: "#025ade",
  },
  CHARGES: {
    label: "Charges",
    color: "#ae8104",
  },
  INSTALL: {
    label: "Inst/Corp",
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
          marginTop: '-140px',
          marginLeft: '60px',
          backgroundColor: '#000000',
          borderRadius: '10px',
          padding: '5px',
          color: '#ffffff',
          width: '200px',
          zIndex: '20',
          height:'150px',
        }}
      >
        <p style={{ marginBottom: '5px', color: 'red', paddingLeft: '3px' }}>{`${label}`}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '3px', paddingRight: '3px' }}>
            <p style={{ color: entry.fill }}>{entry.name}</p>
            <p style={{ color: entry.fill, textAlign: 'right' }}>{entry.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function Component2({ chartData }) {
  return (
    <ChartContainer className="min-h-[100px] h-[7vw] 2xl:h-[7vw] w-full bg-black chart-gradient">
      <ResponsiveContainer width="105%" height='100%' className={'ml-[-20px] pt-4'}>
        <BarChart data={chartData} className="text-white">
          <XAxis dataKey="Week" tick={<CustomTick />} interval={0} />
          <YAxis tick={<CustomTick />}interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="PARTS" name={chartConfig.PARTS.label} fill={chartConfig.PARTS.color} radius={4} />
          <Bar dataKey="SERVICE" name={chartConfig.SERVICE.label} fill={chartConfig.SERVICE.color} radius={4} />
          <Bar dataKey="CHARGES" name={chartConfig.CHARGES.label} fill={chartConfig.CHARGES.color} radius={4} />
          <Bar dataKey="INSTALL" name={chartConfig.INSTALL.label} fill={chartConfig.INSTALL.color} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
