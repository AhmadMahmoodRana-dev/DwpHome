import React from "react";
import { ThirdMainChart } from "./charts/ThirdMainChart";

const ThirdSmallCardBottom = ({ name }) => {
  const TableData = [
    {
      id: 1,
      weeks: "Week 39",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
      OTC1: "64%",
    },
    {
      id: 2,
      weeks: "Week 40",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
      OTC1: "64%",
    },
    {
      id: 3,
      weeks: "Week 41",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
      OTC1: "64%",
    },
    {
      id: 4,
      weeks: "Week 42",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
      OTC1: "64%",
    },
  ];
  return (
    <div className="w-[300px] smallcardMain 2xl:w-[100%] z-[10] first-div min-h-[40vh] h-auto rounded-[10px] px-3 pb-6 pt-2 mt-4">
      {/* FIRST  */}
      <div>
        <h1 className="text-white font-semibold text-[13px] 2xl:text-[.8vw] tracking-wide text-center">
          {name} Zone ATAT Category Wise
        </h1>
        {/* TABLE DIV */}
        <div className="w-full px-1 mt-4 2xl:px-[.2vw]">
          <table className="w-full mb-6 mt-1">
            <tr className="text-white 2xl:text-[.8vw] text-[14px] border-b">
              <th className="font-medium border-r-2 text-left">Weeks</th>
              <th className="font-medium border-r-2 center">Day1</th>
              <th className="font-medium border-r-2">2-3</th>
              <th className="font-medium border-r-2">4-7</th>
              <th className="font-medium">8&+</th>
            </tr>

            {TableData.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                    {data?.weeks}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                    {data?.Inset}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {data.Outset}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {data.OTC1}
                  </td>
                  <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                    {data.OTC}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <hr className="mx-6" />
        <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.4vw]">
          <ThirdMainChart />
        </div>
      </div>
    </div>
  );
};

export default ThirdSmallCardBottom;
