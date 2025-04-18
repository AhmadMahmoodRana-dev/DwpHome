import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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

const fixedData = [
  { week: "W 1", day_0: 400, day2_3: 300, day4_7: 200, day8_above: 100 },
  { week: "W 2", day_0: 500, day2_3: 400, day4_7: 300, day8_above: 200 },
  { week: "W 3", day_0: 300, day2_3: 200, day4_7: 400, day8_above: 300 },
  { week: "W 4", day_0: 600, day2_3: 500, day4_7: 400, day8_above: 300 },
];

const CustomTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-5}
        y={0}
        dy={5}
        fill="#ffffff"
        textAnchor="middle"
        style={{ fontSize: ".5vw" }}
      >
        {payload.value}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black min-w-[200px] p-4 rounded-xl top-[-30px] z-[20] absolute">
        <p style={{ color: "red", paddingLeft: "3px" }}>{`${label}`}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex justify-between">
            <p style={{ color: entry.fill }}>{`${entry.name}`}</p>
            <p
              style={{ color: entry.fill, textAlign: "right" }}
            >{`${entry.value.toLocaleString()}`}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function ThirdMainChart({chartData}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[100px] h-[7vw] 2xl:h-[7vw] w-full bg-black chart-gradient"
    >
      <ResponsiveContainer
        width="105%"
        height="100%"
        className={"ml-[-20px] pt-4"}
      >
        <BarChart data={chartData} className="text-white">
          <XAxis dataKey="week" tick={<CustomTick />} interval={0} />
          <YAxis tick={<CustomTick />} interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="day_0"
            name={chartConfig.day_0.label}
            fill={chartConfig.day_0.color}
            radius={4}
          />
          <Bar
            dataKey="day2_3"
            name={chartConfig.day2_3.label}
            fill={chartConfig.day2_3.color}
            radius={4}
          />
          <Bar
            dataKey="day4_7"
            name={chartConfig.day4_7.label}
            fill={chartConfig.day4_7.color}
            radius={4}
          />
          <Bar
            dataKey="day8_above"
            name={chartConfig.day8_above.label}
            fill={chartConfig.day8_above.color}
            radius={4}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
