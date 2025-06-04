import React, { useContext} from "react";
import { RiTriangleFill } from "react-icons/ri";
import FlowChart from "./charts/FlowChart";
import { Context } from "@/context/Context";
import ResponsiveLineChart from "./charts/ResponsiveLineChart";
import InsetResponsiveLineChart from "./charts/InsetResponsiveLineChart";
import OutsetResponsiveLineChart from "./charts/OutsetResponsiveLineChart";

const MainCard = () => {
  const { otherData, table, secondLineChart } = useContext(Context);

  const formatDataForChart = (data) => {
    return data.map((item) => ({
      Week: item.SHORT_WEEKS,
      in_sets: item.IN_SETS,
      out_sets: item.OUT_SETS,
    }));
  };

  const chartData2 = formatDataForChart(table);

  const formattedLineChartData = secondLineChart.map((week, index) => ({
    week: `${week.SHORT_WEEKS}`,
    INSET: week.IN_SETS,
    OUTSET: week.OUT_SETS,
  }));
  const formattedLineChartDataProductsInset = secondLineChart.map(
    (week, index) => ({
      week: `${week.SHORT_WEEKS}`,
      GREE_AC: week.IN_GREE_AC,
      ES_AC: week.IN_ECOSTAR_AC,
      ES_LED: week.IN_ECOSTAR_LED_TV,
      REF: week.IN_REFRIGERATOR,
      OTHERS: week.IN_OTHERS,
    })
  );
  const formattedLineChartDataProductsOutset = secondLineChart.map(
    (week, index) => ({
      week: `${week.SHORT_WEEKS}`,
      GREE_AC: week.OUT_GREE_AC,
      ES_AC: week.OUT_ECOSTAR_AC,
      ES_LED: week.OUT_ECOSTAR_LED_TV,
      REF: week.OUT_REFRIGERATOR,
      OTHERS: week.OUT_OTHERS,
    })
  );

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
                {otherData[0]?.IN_SETS?.toLocaleString()}
              </p>
              {otherData[0]?.IN_SETS_PER >= 0 ? (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                  <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw] ">
                    +
                    {Math.abs(otherData[0]?.IN_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(otherData[0]?.IN_SETS_PER)
                      : Math.abs(otherData[0]?.IN_SETS_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <h1 className="text-[12px] font-bold text-red-600 2xl:text-[.7vw] ">
                    -
                    {Math.abs(otherData[0]?.IN_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(otherData[0]?.IN_SETS_PER)
                      : Math.abs(otherData[0]?.IN_SETS_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-red-600 rotate-180  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                </div>
              )}
            </div>
            <h3 className="text-white font-bold 2xl:text-[1vw] tracking-wide pt-4">
              Nation Wide Outset
            </h3>
            <div className="flex justify-center items-center  gap-2">
              <p className=" text-white font-bold mt-2 text-[30px] 2xl:text-[2vw] leading-6">
                {otherData[0]?.OUT_SETS?.toLocaleString()}
              </p>
              {otherData[0]?.OUT_SETS_PER >= 0 ? (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                  <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw] ">
                    +
                    {Math.abs(otherData[0]?.OUT_SETS_PER).toString().length ===
                    1
                      ? "0" + Math.abs(otherData[0]?.OUT_SETS_PER)
                      : Math.abs(otherData[0]?.OUT_SETS_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows 2xl:mt-0 xl:mt-1">
                  <h1 className="text-[12px] font-bold text-red-600 2xl:text-[.7vw] ">
                    -
                    {Math.abs(otherData[0]?.OUT_SETS_PER).toString().length ===
                    1
                      ? "0" + Math.abs(otherData[0]?.OUT_SETS_PER)
                      : Math.abs(otherData[0]?.OUT_SETS_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-red-600 rotate-180 w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <p className="text-white font-bold 2xl:text-[1vw] tracking-wide pt-3">
                OTC
              </p>
              <p className="pt-3 text-[12px] font-bold text-green-400 2xl:text-[.8vw] ">
                {otherData[0]?.IOF}%
              </p>
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
                {otherData[0]?.IN_SETS_YTD.toLocaleString()}
              </h1>
            </div>
            <div className="leading-5 2xl:leading-[1.1vw] mt-2 2xl:mt-[.6vw]">
              <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
                Outset
              </h1>
              <h1 className="text-[#49dd80] font-semibold tracking-wider 2xl:text-[1.3vw]">
                {otherData[0]?.OUT_SETS_YTD.toLocaleString()}
              </h1>
            </div>

            <div className="flex text-[10px] gap-3 mt-1">
              <h1 className="flex flex-col text-white 2xl:text-[.7vw]">
                W{" "}
                <span className="text-red-500">
                  {" "}
                  {otherData[0]?.WARR_PER.toLocaleString()}%
                </span>
              </h1>
              <h1 className="flex flex-col text-white 2xl:text-[.7vw]">
                C{" "}
                <span className="text-[#49dd80]">
                  {otherData[0]?.CASH_PER.toLocaleString()}%
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

            {table.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                    {data?.NO_OF_WEEKS}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                    {data?.IN_SETS.toLocaleString()}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {data.OUT_SETS.toLocaleString()}
                  </td>
                  <td className="text-right pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                    {Number(data.IOF).toLocaleString()}%
                  </td>
                </tr>
              );
            })}
          </table>
          <hr />
        </div>
        <div className="2xl:h-[7.7vw] h-[105px] mt-3">
          <FlowChart chartData={chartData2} />
        </div>
        <ResponsiveLineChart
          chartData={formattedLineChartData}
          keysToDisplay={["INSET", "OUTSET"]}
        />
      </div>

      {/* ###########################   SECOND ROW ######################### */}

      <div className="w-[300px] 2xl:w-[100%]  first-div min-h-[80vh] h-auto rounded-[10px] px-3 pb-6 pt-2 mt-4">
        {/* FIRST  */}
        <div>
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

              {table.map((data, index) => {
                return (
                  <tr>
                    <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw]  font-medium text-white">
                      {data?.NO_OF_WEEKS}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                      {data?.IN_GREE_AC.toLocaleString()}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data?.IN_ECOSTAR_AC.toLocaleString()}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data?.IN_ECOSTAR_LED_TV.toLocaleString()}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data?.IN_REFRIGERATOR.toLocaleString()}
                    </td>
                    <td className="text-right pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                      {data?.IN_OTHERS.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </table>
            <hr />
          </div>
          <InsetResponsiveLineChart
            chartData={formattedLineChartDataProductsInset}
            keysToDisplay={[
              "GREE_AC",
              "ES_AC",
              "ES_LED",
              "REF",
              "OTHERS",
            ]}
          />

          <hr className="mt-[2vw]" />
        </div>

        {/* Second Card */}
        <div className="mt-5">
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

              {table.map((data, index) => {
                return (
                  <tr>
                    <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw]  font-medium text-white">
                      {data?.NO_OF_WEEKS}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                      {data?.OUT_GREE_AC}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data?.OUT_ECOSTAR_AC}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data?.OUT_ECOSTAR_LED_TV}
                    </td>
                    <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                      {data?.OUT_REFRIGERATOR}
                    </td>
                    <td className="text-right pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                      {data?.OUT_OTHERS}
                    </td>
                  </tr>
                );
              })}
            </table>
            <hr />
          </div>

          <OutsetResponsiveLineChart
            chartData={formattedLineChartDataProductsOutset}
            keysToDisplay={[
              "GREE_AC",
              "ES_AC",
              "ES_LED",
              "REF",
              "OTHERS",
            ]}
          />

        </div>
      </div>
    </>
  );
};

export default MainCard;
