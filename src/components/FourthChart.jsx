"use client";

import React from "react";
import { Bar, BarChart, Rectangle, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartConfig = {
  parts: {
    label: "Parts",
    color: "hsl(var(--chart-1))",
  },
  service: {
    label: "Services",
    color: "hsl(var(--chart-2))",
  },
  charges: {
    label: "Visit Charges",
    color: "hsl(var(--chart-3))",
  },
  install_corp: {
    label: "Inst/corp", // Updated label
    color: "hsl(var(--chart-4))",
  },
};

const FourthChart = ({ chartData }) => {
  return (
    <div className="chart-gradient rounded-lg w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid stroke="transparent" />
          <XAxis
            dataKey="browser"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            interval={0}
            hide={true} // Hide the axis labels
          />
          <Tooltip />
          <Bar
            dataKey="revenue"
            fill={(entry) => chartConfig[entry.browser]?.color || "#000"}
            strokeWidth={0}
            radius={8}
            activeIndex={2}
            activeShape={(props) => {
              const { fill, ...rest } = props;
              return (
                <Rectangle
                  {...rest}
                  fillOpacity={0.8}
                  stroke="transparent"
                  strokeDasharray="4"
                  strokeDashoffset="4"
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FourthChart;
