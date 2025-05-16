import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", value: 600 },
  { name: "Feb", value: 620 },
  { name: "Mar", value: 750 },
  { name: "Apr", value: 680 },
  { name: "May", value: 700 },
  { name: "Jun", value: 850 },
  { name: "Jul", value: 890 },
  { name: "Aug", value: 950 },
  { name: "Sep", value: 470 },
  { name: "Oct", value: 380 },
  { name: "Nov", value: 450 },
  { name: "Dec", value: 520 },
  { name: "Jan", value: 600 },
  { name: "Feb", value: 700 },
  { name: "Mar", value: 800 },
  { name: "Apr", value: 1150 },
  { name: "May", value: 1400 },
  { name: "Jun", value: 1550 },
  { name: "Jul", value: 1500 },
  { name: "Aug", value: 500 },
];

const ResponsiveLineChart = () => {
  return (
    <div className="w-full 2xl:h-[148px] h-[150px] rounded-lg shadow-md bg-[#001f4d] p-2">
      <h2 className="text-center text-white text-lg font-semibold mb-2">Pending Auction Price</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: -30, right: 0, top: 0, bottom: 0 }}>
          {/* Removed CartesianGrid to eliminate dotted lines */}
          <XAxis
            dataKey="name"
            tick={{ fill: "#cbd5e1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            padding={{ left: 0, right: 10 }}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: "#cbd5e1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "none" }} labelStyle={{ color: "#fff" }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 3, stroke: "#fff", strokeWidth: 1 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponsiveLineChart;
