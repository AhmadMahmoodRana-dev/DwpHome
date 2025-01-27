import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    week: "Week - 39",
    GreeAC: 2400,
    EcoStarAC: 500,
    EcostarLED: 500,
    Refrigerator: 300,
  },
  {
    week: "Week - 40",
    GreeAC: 2400,
    EcoStarAC: 500,
    EcostarLED: 500,
    Refrigerator: 300,
  },
  {
    week: "Week - 41",
    GreeAC: 2400,
    EcoStarAC: 500,
    EcostarLED: 500,
    Refrigerator: 300,
  },
  {
    week: "Week - 42",
    GreeAC: 2400,
    EcoStarAC: 500,
    EcostarLED: 500,
    Refrigerator: 300,
  },
];

const ThirdMainBarChart = () => {
  return (
    <div className="w-full h-[200px] rounded-lg mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: -30, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="week"
            tick={{ fill: "white", fontSize: "10px", color: "white" }}
            interval={0} // Ensures every tick is displayed
            angle={0} // Keeps the text horizontal
          />
          <YAxis tick={{ fill: "white", fontSize: "6px" }} />
          <Tooltip />
          <Bar dataKey="GreeAC" fill="#ffffff" name="Gree AC" />
          <Bar dataKey="EcoStarAC" fill="#cd0164" name="EcoStar AC" />
          <Bar dataKey="EcostarLED" fill="#49dd80" name="Ecostar LED-TV" />
          <Bar dataKey="Refrigerator" fill="#953333" name="Refrigerator" />
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full flex  justify-center gap-3">
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1vw] h-[9px] 2xl:h-[.7vw] bg-white"></div>
          <p className="text-[7px] 2xl:text-[.44vw] text-white">Day1</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1vw] 2xl:h-[.7vw] h-[9px] bg-[#cd0164]"></div>
          <p className="text-[7px] 2xl:text-[.44vw]  text-white">Day 2-3</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1vw] 2xl:h-[.7vw] h-[9px] bg-[#49dd80]"></div>
          <p className="text-[7px] 2xl:text-[.44vw] text-white">Day 4-7</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1vw] 2xl:h-[.7vw] h-[9px] bg-[#953333]"></div>
          <p className="text-[7px] 2xl:text-[.44vw] text-white">Day 8 & 8+</p>
        </div>
        
      </div>
    </div>
  );
};

export default ThirdMainBarChart;
