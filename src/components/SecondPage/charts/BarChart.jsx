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

const BarChart1 = () => {
  return (
    <div className="w-full 2xl:h-[148px] h-[150px] rounded-lg mt-4">
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
          <Tooltip
            contentStyle={{
              backgroundColor: "#000", 
              border: "none",
              borderRadius: "4px",
              color: "white", // Text color
              fontSize: "12px", // Optional: control text size
            }}
          />{" "}
          <Bar dataKey="GreeAC" fill="#ffffff" name="Gree AC" />
          <Bar dataKey="EcoStarAC" fill="#cd0164" name="EcoStar AC" />
          <Bar dataKey="EcostarLED" fill="#49dd80" name="Ecostar LED-TV" />
          <Bar dataKey="Refrigerator" fill="#953333" name="Refrigerator" />
          <Bar dataKey="Other" fill="#ae8003" name="Other" />
        </BarChart>
      </ResponsiveContainer>
      <div className="w-full flex justify-center items-center gap-[.25vw]">
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1.1vw] h-[9px] 2xl:h-[.7vw] bg-white"></div>
          <p className="text-[7px] 2xl:text-[.44vw] text-white">Gree Ac</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1.1vw] 2xl:h-[.7vw] h-[9px] bg-[#cd0164]"></div>
          <p className="text-[7px] 2xl:text-[.44vw]  text-white">Ecostar Ac</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1.1vw] 2xl:h-[.7vw] h-[9px] bg-[#49dd80]"></div>
          <p className="text-[7px] 2xl:text-[.44vw] text-white">
            Ecostar LED-TV
          </p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1.1vw] 2xl:h-[.7vw] h-[9px] bg-[#953333]"></div>
          <p className="text-[7px] 2xl:text-[.44vw] text-white">Refrigerator</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[15px] 2xl:w-[1.1vw] 2xl:h-[.7vw] h-[9px] bg-[#ae8003]"></div>
          <p className="text-[7px] 2xl:text-[.44vw] text-white">Other</p>
        </div>
      </div>
    </div>
  );
};

export default BarChart1;
