import React from "react";
import { RiTriangleFill } from "react-icons/ri";
import FlowChart from "./charts/FlowChart";
import BarChart1 from "./charts/BarChart";

const MainCard = () => {
  const TableData = [
    {
      id: 1,
      weeks: "Week 39",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
    },
    {
      id: 2,
      weeks: "Week 40",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
    },
    {
      id: 3,
      weeks: "Week 41",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
    },
    {
      id: 4,
      weeks: "Week 42",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
    },
  ];

  const NationWideInsetData = [
    {
      id: 1,
      weeks: "Week 39",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
    {
      id: 2,
      weeks: "Week 40",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
    {
      id: 3,
      weeks: "Week 41",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
    {
      id: 4,
      weeks: "Week 42",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
  ];

  return (
    <>
      <div className="w-[300px] 2xl:w-[100%] first-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vh] mt-3">
        {/* Top Container */}
            <h1 className="text-white font-bold 2xl:text-[1.4vw] tracking-wide">
              Nation Wide Inset
            </h1>
        <div className="SecondMainContainer flex">
          {/* LEFT */}
          <div className="left_content_div w-[68%]">
            <div className="flex justify-center items-center  gap-2">
              <p className=" text-white font-bold mt-2 text-[30px] 2xl:text-[2vw] leading-6">
                1,314
              </p>

              <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw] ">
                  +90%
                </h1>
              </div>
            </div>
            <h3 className="text-white font-bold 2xl:text-[1vw] tracking-wide pt-4">
              Nation Wide Outset
            </h3>
            <div className="flex justify-center items-center  gap-2">
              <p className=" text-white font-bold mt-2 text-[30px] 2xl:text-[2vw] leading-6">
                1,314
              </p>

              <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw] ">
                  +90%
                </h1>
              </div>
              
            </div>
            <div className="flex items-center gap-3">
              <p className="text-white font-bold 2xl:text-[1vw] tracking-wide pt-3">OTC</p>
              <p className="pt-3 text-[12px] font-bold text-green-400 2xl:text-[.8vw] ">60%</p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right_content_div w-[32%] border-l-white border-l pl-5">
            <h1 className="text-white font-semibold 2xl:text-[1.2vw]">YTD</h1>
            <div className="leading-5 2xl:leading-[1.1vw]">
              <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
                Inset
              </h1>
              <h1 className="text-[#49dd80] font-semibold tracking-wider 2xl:text-[1.3vw]">
                931
              </h1>
            </div>
            <div className="leading-5 2xl:leading-[1.1vw] mt-2 2xl:mt-[.6vw]">
              <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
                Outset
              </h1>
              <h1 className="text-[#49dd80] font-semibold tracking-wider 2xl:text-[1.3vw]">
                931
              </h1>
            </div>

            <div className="flex text-[10px] gap-3 mt-1">
              <h1 className="flex flex-col text-white 2xl:text-[.7vw]">
                W <span className="text-red-500">38%</span>
              </h1>
              <h1 className="flex flex-col text-white 2xl:text-[.7vw]">
                C <span className="text-[#49dd80]">62%</span>
              </h1>
            </div>
          </div>
        </div>

        {/* TABLE DIV */}
        <div className="w-full px-1 mt-4 2xl:px-[.2vw] 2xl:mt-[1.8vh]">
          <hr />
          <table className="w-full mt-3 mb-6">
            <tr className="text-white 2xl:text-[.7vw] text-[10px] border-b">
              <th className="font-medium border-r-2 text-left">Weeks</th>
              <th className="font-medium border-r-2">
                Inset <span className="opacity-5">1</span>{" "}
              </th>
              <th className="font-medium border-r-2">Outset</th>
              <th className="font-medium">OTC</th>
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
                  <td className="text-right pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                    {data.OTC}
                  </td>
                </tr>
              );
            })}
          </table>
          <hr />
        </div>
        <div className="2xl:h-[7.7vw] h-[105px] mt-3">
          <FlowChart />
        </div>
      </div>


{/* ###########################   SECOND ROW ######################### */}

      <div className="w-[300px] 2xl:w-[100%]  first-div min-h-[80vh] h-auto rounded-[10px] px-3 pb-6 pt-2 mt-4">
        {/* FIRST  */}
        <div>
          <h1 className="text-white font-semibold text-[14px] 2xl:text-[.9vw] tracking-wide text-center">
            Nation Wide Outset Category Wise
          </h1>
          {/* TABLE */}

          <div className="px-1">
            <table className="w-full mt-3 2xl:mt-[.8vw] mb-6">
              <tr className="text-white text-[10px] 2xl:text-[.7vw] border-b">
                <th className="font-medium border-r-2 text-left">Weeks</th>
                <th className="font-medium border-r-2">Gree Ac</th>
                <th className="font-medium border-r-2">ES - AC</th>
                <th className="font-medium border-r-2">ES - LED's</th>
                <th className="font-medium border-r-2">Ref</th>
                <th className="font-medium">Others</th>
              </tr>

              {NationWideInsetData.map((data, index) => {
                return (
                  <tr>
                    <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw]  font-medium text-white">
                      {data?.weeks}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                      {data?.greeAc}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data.es_Ac}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data.es_Led}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data.ref}
                    </td>
                    <td className="text-right pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                      {data.others}
                    </td>
                  </tr>
                );
              })}
            </table>
            <hr />
          </div>
          <BarChart1 />
          <hr className="mt-[2vw]" />
        </div>

        {/* Second Card */}
        <div className="mt-5">
          <h1 className="text-white font-semibold text-[14px] 2xl:text-[.9vw] tracking-wide text-center">
            Nation Wide Inset Category Wise
          </h1>
          {/* TABLE */}

          <div className="px-1">
            <table className="w-full mt-3 2xl:mt-[.8vw] mb-6">
              <tr className="text-white text-[10px] 2xl:text-[.7vw] border-b">
                <th className="font-medium border-r-2 text-left">Weeks</th>
                <th className="font-medium border-r-2">Gree Ac</th>
                <th className="font-medium border-r-2">ES - AC</th>
                <th className="font-medium border-r-2">ES - LED's</th>
                <th className="font-medium border-r-2">Ref</th>
                <th className="font-medium">Others</th>
              </tr>

              {NationWideInsetData.map((data, index) => {
                return (
                  <tr>
                    <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw]  font-medium text-white">
                      {data?.weeks}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                      {data?.greeAc}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data.es_Ac}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data.es_Led}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data.ref}
                    </td>
                    <td className="text-right pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                      {data.others}
                    </td>
                  </tr>
                );
              })}
            </table>
            <hr />
          </div>

          <BarChart1 />
        </div>
      </div>
    </>
  );
};

export default MainCard;
