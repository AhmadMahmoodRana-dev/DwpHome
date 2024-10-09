

import { Bar, BarChart, Rectangle, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const BottomCharts4 = ({ chartData }) => {
  return (
    <div className="chart-gradient w-[150px] h-[150px] 2xl:w-[9vw] 2xl:h-[8vw] rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="transparent" />
          <XAxis
            dataKey="browser"
            tickLine={false}
            tickMargin={4}
            axisLine={false}
            tick={({ x, y, payload }) => (
              <text x={x} y={y + 12} fill="#ffffff" textAnchor="middle" fontSize={10}>
                {payload.value} {/* Adjust as needed */}
              </text>
            )}
          />
          <Tooltip />
          <Bar
            dataKey="Complaints"
            fill={({ payload }) => payload.fill} // Use the fill from the data
            strokeWidth={0}
            radius={4}
            activeShape={(props) => {
              const { fill, ...rest } = props;
              return (
                <Rectangle {...rest} fillOpacity={0.8} stroke="transparent" strokeDasharray="4" />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BottomCharts4;




