import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#3b82f6", // Blue
  "#10b981", // Green
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#8b5cf6", // Purple
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="w-[220px] bg-slate-800 text-white p-2 rounded shadow-lg text-sm">
      <div className="flex justify-between">
      <p className="font-semibold mb-1">{label}</p>
      <p className="font-semibold mb-1">INSET</p>

      </div>
      {payload.map((entry, index) => (
        <div key={index} className="flex justify-between gap-3">
          <span className="text-lg" style={{ color: entry.color }}>{entry.name}:</span>
          <span className="text-lg" style={{ color: entry.color }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
const InsetResponsiveLineChart = ({ chartData, keysToDisplay = [] }) => {
  return (
    <div className="w-full 2xl:h-[148px] h-[150px] rounded-lg p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ left: -25, right: 0, top: 0, bottom: 0 }}>
          <XAxis
            dataKey="week"
            tick={{ fill: "#cbd5e1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: "#cbd5e1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
         <Tooltip content={<CustomTooltip />} />

          {keysToDisplay.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              strokeWidth={3}
              dot={{ r: 3, stroke: "#fff", strokeWidth: 1 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InsetResponsiveLineChart;
