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

const ResponsiveLineChart = ({ chartData, keysToDisplay = [] }) => {
  return (
    <div className="w-full 2xl:h-[148px] h-[150px] rounded-lg p-3 z-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ left: -25, right:10, top: 5, bottom: 5 }}
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
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
              zIndex: 9999,
            }}
            wrapperStyle={{ zIndex: 9999 }}
            labelStyle={{ color: "#fff" }}
          />

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

export default ResponsiveLineChart;
