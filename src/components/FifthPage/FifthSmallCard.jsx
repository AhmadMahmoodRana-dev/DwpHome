import React from "react";
import { RiTriangleFill } from "react-icons/ri";
import SemiCircularProgressive from "../SemiCircularProgressive";
import { FifthMainChart } from "./charts/FifthMainChart";

const FifthSmallCard = () => {
  const TableData = [
    {
      id: 1,
      weeks: "Week 39",
      Inset: "0.12",
      Outset: "0.34",
      OTC: "0.54",
      OTC1: "0.42",
    },
    {
      id: 2,
      weeks: "Week 40",
      Inset: "0.12",
      Outset: "0.34",
      OTC: "0.54",
      OTC1: "0.42",
    },
    {
      id: 3,
      weeks: "Week 41",
      Inset: "0.12",
      Outset: "0.34",
      OTC: "0.54",
      OTC1: "0.42",
    },
    {
      id: 4,
      weeks: "Week 42",
      Inset: "0.12",
      Outset: "0.34",
      OTC: "0.54",
      OTC1: "0.42",
    },
  ];
  return (
    <div className="w-[300px] 2xl:w-[100%] first-div min-h-[65vh] h-auto mt-3 rounded-[10px] pl-4 pt-2 2xl:py-1 py-4">

      <h1 className="text-white font-bold text-[23px] 2xl:text-[1.2vw] ">
        Weekly Revenue
      </h1>
      <div className="SecondMainContainer flex mt-3">
        {/* LEFT */}
        <div className="w-[65%] 2xl:w-[65   %]">
          <div className="holder flex items-end h-[62px] 2xl:h-[4vw]  2xl:mt-[1.65vw] mt-[2vw]">
            <p className="text-white 2xl:text-[3vw] font-bold text-[50px] flex justify-center">
              7.28
              <div className="2xl:mt-5">
                <div className="icons flex flex-col justify-center items-center ml-2">
                  <RiTriangleFill className="text-green-500 w-[22px] h-[22px] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                  <h1 className="text-[16px] 2xl:text-[1vw] font-bold text-green-500">
                    + 44 %
                  </h1>
                </div>

                <h1 className="text-white text-[16px] 2xl:text-[.9vw] text-center">
                  Millions
                </h1>
              </div>
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="right_content_div w-[35%] 2xl:w-[30%] border-l-white border-l pl-2 flex flex-col justify-center">
          <h1 className="text-white font-extralight 2xl:text-[.9vw]">YTD</h1>
          <h1 className="text-white font-extralight tracking-wider 2xl:text-[1vw]">
            Revenue
          </h1>
          <h1 className="text-white font-semibold tracking-wider  2xl:text-[1.1vw]">
            297.75
          </h1>
          <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
            Millions
          </h1>
        </div>
      </div>
      {/* Bottom Container */}
      <div className="semi_progress_bar flex justify-between pr-4 mt-5">
        <div className="handle-progress">
          <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
            Parts
          </h1>

          <div className=" font-semibold text-white">
            <SemiCircularProgressive percentage={"10"} />
          </div>
        </div>
        <div className="handle-progress">
          <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
            Services
          </h1>

          <div className=" font-semibold text-white">
            <SemiCircularProgressive percentage={"10"} />
          </div>
        </div>
        <div className="handle-progress">
          <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
            Charges
          </h1>

          <div className=" font-semibold text-white">
            <SemiCircularProgressive percentage={"10"} />
          </div>
        </div>
        <div className="handle-progress">
          <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
            Inst/Corp
          </h1>

          <div className=" font-semibold text-white">
            <SemiCircularProgressive percentage={"10"} />
          </div>
        </div>
      </div>
      {/* TABLE DIV */}
      <div className="w-full px-1 mt-4  2xl:mt-[1.8vw] pr-4">
        <table className="w-full mt-3 mb-6">
          <tr className="text-white 2xl:text-[.7vw] text-[14px] border-b">
            <th className="font-medium border-r-2 text-left">Weeks</th>
            <th className="font-medium border-r-2 text-center">Parts</th>
            <th className="font-medium border-r-2">Services</th>
            <th className="font-medium border-r-2">charges</th>
            <th className="font-medium">Ints/Corp</th>
          </tr>

          {TableData.map((data, index) => {
            return (
              <tr>
                <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.7vw] font-medium text-white">
                  {data?.weeks}
                </td>
                <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.7vw]  font-normal text-center  text-white">
                  {data?.Inset}
                </td>
                <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.7vw]  font-normal text-center text-white">
                  {data.Outset}
                </td>
                <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.7vw]  font-normal text-center text-white">
                  {data.OTC1}
                </td>
                <td className="text-center pt-2  2xl:text-[.7vw] pr-1 text-[12px] font-semibold  text-white">
                  {data.OTC}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="pr-4">
        <FifthMainChart />
      </div>
    </div>
  );
};

export default FifthSmallCard;
