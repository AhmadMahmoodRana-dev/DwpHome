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
    EcoStarAC: 2000,
    EcostarLED: 1500,
    Refrigerator: 1000,
    Other: 500,
  },
  {
    week: "Week - 40",
GreeAC: 2400,
    EcoStarAC: 2000,
    EcostarLED: 1500,
    Refrigerator: 1000,
    Other: 500,
  },
  {
    week: "Week - 41",
    GreeAC: 2400,
    EcoStarAC: 2000,
    EcostarLED: 1500,
    Refrigerator: 1000,
    Other: 500,
  },
  {
    week: "Week - 42",
   GreeAC: 2400,
    EcoStarAC: 2000,
    EcostarLED: 1500,
    Refrigerator: 1000,
    Other: 500,
  },
];

const SmallBarChart = () => {
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
            interval={0}
            angle={0}
          />
          <YAxis tick={{ fill: "white", fontSize: "6px" }} />
          <Tooltip />
          <Bar dataKey="GreeAC" fill="#ffffff" name="Gree AC" />
          <Bar dataKey="EcoStarAC" fill="#cd0164" name="EcoStar AC" />
          <Bar dataKey="EcostarLED" fill="#49dd80" name="Ecostar LED-TV" />
          <Bar dataKey="Refrigerator" fill="#953333" name="Refrigerator" />
          <Bar dataKey="Other" fill="#ae8003" name="Other" />
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full flex gap-[.25vw] justify-center items-center">
        <div className="flex justify-center items-center gap-1">
          <div className="w-[9px] 2xl:w-[.6vw] 2xl:h-[.4vw] h-[6px] bg-white"></div>
          <p className="text-[6px] 2xl:text-[.45vw] text-white">Gree Ac</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[9px] 2xl:w-[.6vw] 2xl:h-[.4vw] h-[6px] bg-[#cd0164]"></div>
          <p className="text-[6px] 2xl:text-[.4vw] text-white">Ecostar Ac</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[9px] 2xl:w-[.6vw] 2xl:h-[.4vw] h-[6px] bg-[#49dd80]"></div>
          <p className="text-[6px] 2xl:text-[.4vw] text-white">Ecostar LED-TV</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[9px] 2xl:w-[.6vw] 2xl:h-[.4vw] h-[6px] bg-[#953333]"></div>
          <p className="text-[6px] 2xl:text-[.4vw] text-white">Refrigerator</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[9px] 2xl:w-[.6vw] 2xl:h-[.4vw] h-[6px] bg-[#ae8003]"></div>
          <p className="text-[6px] 2xl:text-[.4vw] text-white">Other</p>
        </div>
      </div>
    </div>
  );
};

export default SmallBarChart;
