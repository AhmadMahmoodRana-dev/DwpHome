import React from "react";
import { RiTriangleFill } from "react-icons/ri";
import SmallCardFlowChart from "./charts/SmallCardFlowChart";
import FlowChart from "./charts/FlowChart";
import ResponsiveLineChart from "./charts/ResponsiveLineChart";

const SecondPage = ({ name, TableData, others, LineChart }) => {
  const formatDataForChart = (data) => {
    return data.map((item) => ({
      Week: item.SHORT_WEEKS,
      in_sets: item.IN_SETS,
      out_sets: item.OUT_SETS,
    }));
  };
  const formattedLineChartData = LineChart.map((week, index) => ({
    week: `Week ${week.SHORT_WEEKS}`,
    IN_SETS: week.IN_SETS,
    OUT_SETS: week.OUT_SETS,
  }));

  const chartData = formatDataForChart(TableData);
  return (
    <>
      <div className="smallcardMain w-[300px] 2xl:w-[100%] first-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vh] mt-3">
        {/* Top Container */}
        <h1 className="text-white font-bold 2xl:text-[1.25vw] tracking-wide">
          {name} Inset
        </h1>
        <div className="SecondMainContainer flex mt-1">
          {/* LEFT */}
          <div className="left_content_div w-[68%]">
            <div className="flex justify-center items-center gap-2">
              <p className=" text-white font-bold mt-2 text-[30px] 2xl:text-[2vw] leading-6">
                {others[0]?.IN_SETS?.toLocaleString()}
              </p>

              {others[0]?.IN_SETS_PER >= 0 ? (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                  <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw] ">
                    +
                    {Math.abs(others[0]?.IN_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(others[0]?.IN_SETS_PER)
                      : Math.abs(others[0]?.IN_SETS_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <h1 className="text-[12px] font-bold text-red-600 2xl:text-[.7vw] ">
                    -
                    {Math.abs(others[0]?.IN_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(others[0]?.IN_SETS_PER)
                      : Math.abs(others[0]?.IN_SETS_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-red-600 rotate-180  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                </div>
              )}
            </div>
            <h3 className="text-white font-bold 2xl:text-[1vw] tracking-wide pt-4">
              {name} Outset
            </h3>
            <div className="flex justify-center items-center gap-2">
              <p className=" text-white font-bold mt-2 text-[30px] 2xl:text-[2vw] leading-6">
                {others[0]?.OUT_SETS?.toLocaleString()}
              </p>

              {others[0]?.OUT_SETS_PER >= 0 ? (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                  <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw] ">
                    +
                    {Math.abs(others[0]?.OUT_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(others[0]?.OUT_SETS_PER)
                      : Math.abs(others[0]?.OUT_SETS_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <h1 className="text-[12px] font-bold text-red-600 2xl:text-[.7vw] ">
                    -
                    {Math.abs(others[0]?.OUT_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(others[0]?.OUT_SETS_PER)
                      : Math.abs(others[0]?.OUT_SETS_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-red-600 rotate-180 w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <p className="text-white font-bold 2xl:text-[.8vw] tracking-wide pt-3">
                OTC
              </p>
              <p className="pt-3 text-[12px] font-bold text-green-400 2xl:text-[.6vw] ">
                {others[0]?.IOF ?? 0}%
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right_content_div w-[32%] border-l-white border-l pl-3">
            <h1 className="text-white font-semibold 2xl:text-[1.2vw]">YTD</h1>
            <div className="leading-5 2xl:leading-[1.1vw]">
              <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
                Inset
              </h1>
              <h1 className="text-[#49dd80] font-semibold tracking-wider 2xl:text-[1.3vw]">
                {others[0]?.IN_SETS_YTD?.toLocaleString()}
              </h1>
            </div>
            <div className="leading-5 2xl:leading-[1.1vw] mt-2 2xl:mt-[.6vw]">
              <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
                Outset
              </h1>
              <h1 className="text-[#49dd80] font-semibold tracking-wider 2xl:text-[1.3vw]">
                {others[0]?.OUT_SETS_YTD?.toLocaleString()}
              </h1>
            </div>

            <div className="flex text-[10px] gap-3 mt-1">
              <h1 className="flex flex-col text-white 2xl:text-[.7vw]">
                W{" "}
                <span className="text-red-500">
                  {" "}
                  {others[0]?.WARR_PER?.toLocaleString()}%
                </span>
              </h1>
              <h1 className="flex flex-col text-white 2xl:text-[.7vw]">
                C{" "}
                <span className="text-[#49dd80]">
                  {" "}
                  {others[0]?.CASH_PER?.toLocaleString()}%
                </span>
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

            {TableData?.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                    {data?.NO_OF_WEEKS}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                    {data?.IN_SETS?.toLocaleString()}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {data.OUT_SETS?.toLocaleString()}
                  </td>
                  <td className="text-right pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                    {Number(data.IOF)?.toLocaleString()}%
                  </td>
                </tr>
              );
            })}
          </table>
          <hr />
        </div>
        <div className="2xl:h-[7.7vw] h-[105px] mt-3">
          <FlowChart chartData={chartData} />
        </div>
        <ResponsiveLineChart
          chartData={formattedLineChartData}
          keysToDisplay={["IN_SETS", "OUT_SETS"]}
        />{" "}
      </div>
    </>
  );
};

export default SecondPage;
