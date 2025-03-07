import React from "react";
import { FourthBarChart } from "./charts/FourthBarChart";

const FourthSmallCardBottom = ({ name }) => {
  const TableData = [
    {
      id: 1,
      weeks: "WEEK 01",
      Inset: "1,856",
      Outset: "1,856",
      OTC: "1,856",
      OTC1: "1,856",
    },
    {
      id: 2,
      weeks: "WEEK 02",
      Inset: "1,856",
      Outset: "1,856",
      OTC: "1,856",
      OTC1: "1,856",
    },
    {
      id: 3,
      weeks: "WEEK 03",
      Inset: "1,856",
      Outset: "1,856",
      OTC: "1,856",
      OTC1: "1,856",
    },
    {
      id: 4,
      weeks: "WEEK 04",
      Inset: "1,856",
      Outset: "1,856",
      OTC: "1,856",
      OTC1: "1,856",
    },
  ];

  return (
    <div className="w-[300px] 2xl:w-[100%] third-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vw] mt-3">
      {/* FIRST  */}
      <div>
        <h1 className="text-white font-semibold text-[13px] 2xl:text-[.8vw] tracking-wide text-center">
          Nation Wide {name} As On Pending
        </h1>
        {/* TABLE DIV */}
        <div className="w-full px-1 mt-4 2xl:px-[.2vw]">
          <table className="w-full mb-6 mt-1">
            <tr className="text-white 2xl:text-[.7vw] text-[12px] border-b">
              <th className="font-light border-r-2 text-left">Weeks</th>
              <th className="font-light border-r-2 text-center">P Wait</th>
              <th className="font-light border-r-2">U Repair</th>
              <th className="font-light border-r-2">Completed</th>
              <th className="font-light">Others</th>
            </tr>

            {TableData.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-normal text-white">
                    {data?.weeks}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-light text-center  text-white">
                    {data?.Inset}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-light text-center text-white">
                    {data?.Outset}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-light text-center text-white">
                    {data?.OTC1}
                  </td>
                  <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-light  text-white">
                    {data?.OTC}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <hr className="mx-6" />
        <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.6vw]">
          <FourthBarChart />
        </div>
      </div>
    </div>
  );
};

export default FourthSmallCardBottom;
