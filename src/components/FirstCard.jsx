import React, { useContext} from "react";
import "../Styling/Home.css";
import { RiTriangleFill } from "react-icons/ri";
import { AreaChartee } from "./ui/AreaChartee";
import RegionCard from "./RegionCard";
import { Context } from "@/context/Context";

const FirstCard = () => {
  const {otherData,table} = useContext(Context)
 
  const formatDataForChart = (data) => {
    return data.map((item) => ({
      Week: item.SHORT_WEEKS,
      in_sets: item.IN_SETS,
      out_sets: item.OUT_SETS,
    }));
  };

  const chartData2 = formatDataForChart(table);

  return (
    <div className="first-div w-[289px] min-w-[289px] 2xl:w-[23.5%] min-h-[650px]  2xl:pb-[1.2vw] h-auto rounded-[6px]">
      <div className="content-container flex justify-between mt-2 2xl:mt-[.4vw]">
        {otherData.map((item) => (
          <div
            className="main-content px-3 2xl:px-[.7vw]"
            key={item.NO_OF_WEEKS}
          >
            <h1 className="main-heading 2xl:text-[1.1vw] 2xl:mt-[-2px] text-white font-bold text-[14px] leading-8 mt-[-9px] 2xl:leading-[1.4vw]">
              Nation Wide Inset
            </h1>

            <div className="flex justify-center items-center">
              <p className=" text-white font-bold mt-2 text-[30px] 2xl:text-[2vw] leading-6">
                {item.IN_SETS.toLocaleString()}
              </p>
              {item.IN_SETS_PER >= 0 ? (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows">
                  <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] " />
                  <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw] ">
                    +
                    {Math.abs(item.IN_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(item.IN_SETS_PER)
                      : Math.abs(item.IN_SETS_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows">
                  <h1 className="text-[12px] font-bold text-[#BE1A1A] 2xl:text-[.7vw]">
                    {" "}
                    -
                    {Math.abs(item.IN_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(item.IN_SETS_PER)
                      : Math.abs(item.IN_SETS_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-[#BE1A1A] w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] rotate-180" />
                </div>
              )}
            </div>
            <h1 className="main-heading text-white font-bold text-[14px] mt-2 2xl:mt-1 2xl:text-[1.1vw] leading-5 2xl:leading-[1.4vw] ">
              Nation Wide Outset
            </h1>
            <div className="flex justify-center items-center">
              <p className=" text-white font-bold text-[30px] 2xl:text-[2vw] leading-9">
                {item.OUT_SETS.toLocaleString()}
              </p>

              {item.OUT_SETS_PER >= 0 ? (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows">
                  <RiTriangleFill className="text-green-400  w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw]" />
                  <h1 className="text-[12px] font-bold text-green-400 2xl:text-[.7vw]">
                    {" "}
                    +
                    {Math.abs(item.OUT_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(item.OUT_SETS_PER)
                      : Math.abs(item.OUT_SETS_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows">
                  <h1 className="text-[12px] font-bold text-[#BE1A1A] 2xl:text-[.7vw]">
                    -
                    {Math.abs(item.OUT_SETS_PER).toString().length === 1
                      ? "0" + Math.abs(item.OUT_SETS_PER)
                      : Math.abs(item.OUT_SETS_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-[#BE1A1A] w-[14px] h-[14px] 2xl:w-[1vw] 2xl:h-[1vw] rotate-180  " />
                </div>
              )}
            </div>
            <div className="flex items-center mt-1 gap-[1vw]">
                <h1 className="text-white font-bold text-[15px] 2xl:text-[1vw]">
                  OTC
                </h1>
                <h1 className="text-green-500 text-[15px] 2xl:text-[1vw] font-bold">
                {item.IOF} %
                </h1>
              </div>
          </div>
        ))}
        {otherData.map((item) => (
          <div className="hr-line  flex 2xl:gap-[.3vw]">
            <hr className="border h-[140px] 2xl:h-[9vw]" />

            <div className="content mx-4">
              <h1 className="font-bold text-white text-[15px] 2xl:text-[1.2vw]">
                YTD
              </h1>
              <p className="font-thin text-[15px] text-white leading-[1px] mt-2 2xl:leading-[.1vw] 2xl:text-[1vw]">
                Inset
              </p>
              <h2 className="text-white font-bold text-[20px] mt-2 2xl:text-[1.3vw]">
                {item.IN_SETS_YTD.toLocaleString()}
              </h2>
              <p className="font-thin text-[15px] text-white  2xl:text-[1vw]">
                Outset
              </p>
              <h2 className="text-white font-bold text-[20px] leading-[3px] mt-2 2xl:text-[1.3vw]">
                {item.OUT_SETS_YTD.toLocaleString()}
              </h2>
              <div className="flex items-center mt-3 2xl:mt-[1vw] gap-2">
                <h1 className="text-[red] font-bold text-[12px] 2xl:text-[.7vw] flex flex-col leading-3 2xl:leading-[.8vw]">
                <p className="text-center">W</p>
                {item.WARR_PER.toLocaleString()} %
                </h1>
                <h1 className="text-green-500 ml-1  text-[12px] 2xl:text-[.7vw] font-bold flex flex-col leading-3 2xl:leading-[.8vw]">
                <p className="text-center flex flex-col">C</p>
                {item.CASH_PER.toLocaleString()} %
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* TAble */}
      <div className="px-4 mt-3 2xl:mt-[.3vw] firstTable table-heading">
        <h1 className="text-white font-bold text-[14px] 2xl:text-[1.1vw]">
          Nation Wide Week Trend
        </h1>

        <table className="w-[256px] 2xl:w-[100%] mt-[10px] 2xl:mt-[.4vw]">
          <tr className="text-white">
            <th></th>
            <th className="text-[10px] 2xl:text-[.7vw] font-normal text-right pr-4">
              Inset
            </th>
            <th className="text-[10px] 2xl:text-[.7vw] font-normal text-right pr-3">
              Outset
            </th>
            <th className="text-[10px] 2xl:text-[.7vw] font-normal text-right pr-2">
              OTC
            </th>
          </tr>
          {table.map((item) => (
            <tr key={item.NO_OF_WEEKS}>
              <td className="border-r border-t text-[12px] 2xl:text-[.8vw]  font-normal  text-white">
                {item.NO_OF_WEEKS}
              </td>
              <td className=" border-t text-right border-solid pr-3 2xl:text-[.9vw] text-white text-[14px] font-normal">
                {item.IN_SETS.toLocaleString()}
              </td>
              <td className=" border-t border-solid text-right 2xl:text-[.9vw] pr-3 text-white text-[14px] font-normal">
                {item.OUT_SETS.toLocaleString()}
              </td>
              <td className="text-right border-t 2xl:text-[.9vw] pr-1 text-[12px] font-normal  text-white">
              {Number(item.IOF).toLocaleString()}%
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="ml-2 2xl:ml-[.4vw] 2xl:h-[6.7vw] h-[105px] mt-3">
        <AreaChartee chartData={chartData2} />
      </div>
      {/* ### DIV REC DATA */}
      {otherData.map((item,index) => (
        <div
          key={index}
          className="regionalData w-full flex flex-col items-center gap-2 2xl:gap-[.5vw] py-1 2xl:pb-0 mt-[6px] 2xl:mt-[.2vw]"
        >
          <RegionCard
            regionName="Center Region"
            otc={item.IOF_CENTER}
            inset={item.IN_CENTRAL}
            insetPer={item.IN_CENTRAL_PER}
            outset={item.OUT_CENTRAL}
            outsetPer={item.OUT_CENTRAL_PER}
          />
          <RegionCard
            regionName="North Region"
            otc={item.IOF_NORTH}
            inset={item.IN_NORTH}
            insetPer={item.IN_NORTH_PER}
            outset={item.OUT_NORTH}
            outsetPer={item.OUT_NORTH_PER}
          />
          <RegionCard
            regionName="South Region"
            otc={item.IOF_SOUTH}
            inset={item.IN_SOUTH}
            insetPer={item.IN_SOUTH_PER}
            outset={item.OUT_SOUTH}
            outsetPer={item.OUT_SOUTH_PER}
          />
        </div>
      ))}
    </div>
  );
};

export default FirstCard;
