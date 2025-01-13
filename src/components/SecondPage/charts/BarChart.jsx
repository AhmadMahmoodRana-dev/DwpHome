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
    GreeAC: 4000,
    EcoStarAC: 2400,
    EcostarLED: 1200,
    Refrigerator: 800,
    Other: 600,
  },
  {
    week: "Week - 40",
    GreeAC: 3800,
    EcoStarAC: 2300,
    EcostarLED: 1100,
    Refrigerator: 700,
    Other: 500,
  },
  {
    week: "Week - 41",
    GreeAC: 4200,
    EcoStarAC: 2500,
    EcostarLED: 1300,
    Refrigerator: 900,
    Other: 700,
  },
  {
    week: "Week - 42",
    GreeAC: 4100,
    EcoStarAC: 2400,
    EcostarLED: 1200,
    Refrigerator: 850,
    Other: 650,
  },
];

const BarChart1 = () => {
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
          <Bar dataKey="Other" fill="#ae8003" name="Other" />
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full flex gap-1">
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] h-[9px] bg-white"></div>
          <p className="text-[7px] text-white">Gree Ac</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] h-[9px] bg-[#cd0164]"></div>
          <p className="text-[7px] text-white">Ecostar Ac</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] h-[9px] bg-[#49dd80]"></div>
          <p className="text-[7px] text-white">Ecostar LED-TV</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] h-[9px] bg-[#953333]"></div>
          <p className="text-[7px] text-white">Refrigerator</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] h-[9px] bg-[#ae8003]"></div>
          <p className="text-[7px] text-white">Other</p>
        </div>
      </div>
    </div>
  );
};

export default BarChart1;
