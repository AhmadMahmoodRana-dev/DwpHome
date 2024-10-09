"use client";

import React from "react";
import { Bar, BarChart, Rectangle, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
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
    label: "Instal/Corp",
    color: "hsl(var(--chart-4))",
  },
};

const FourthChart2 = ({ chartData }) => {
  return (
    <div className="chart-gradient rounded-lg w-full h-full"> {/* Adjust height as needed */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid stroke="transparent" />
          <XAxis
            dataKey="browser"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
           
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

export default FourthChart2;
