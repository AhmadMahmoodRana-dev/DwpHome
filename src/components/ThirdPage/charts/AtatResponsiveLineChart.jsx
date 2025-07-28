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
 "#e60000", // Red
  "#e0cd00", // Amber
  "#04e600", // Green
  "#1793ff", // Blue
  "#8b5cf6", // Purple
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="w-[240px] bg-slate-800 text-white p-2 rounded shadow-lg text-sm">
      <div className="flex justify-between">
        <p className="font-semibold mb-1">{label}</p>
        <p className="font-semibold mb-1">ATAT</p>
      </div>
      {payload.map((entry, index) => (
        <div key={index} className="flex justify-between gap-3">
          <span className="text-lg" style={{ color: entry.color }}>
            {entry.name}:
          </span>
          <span className="text-lg" style={{ color: entry.color }}>
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};
const AtatResponsiveLineChart = ({ chartData, keysToDisplay = [] }) => {
  return (
    <div className="w-full 2xl:h-[148px] h-[150px] rounded-lg p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ left: -25, right: 10, top: 5, bottom: 5 }}
        >
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
              dot={false} // 🔥 Hide all default dots
              activeDot={{ r: 5, fill: "#fff", stroke: "#fff", strokeWidth: 2 }} // Show white dot on hover
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AtatResponsiveLineChart;
