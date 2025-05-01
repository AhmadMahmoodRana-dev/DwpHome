import React, { useContext, useEffect, useState } from "react";
import { RiTriangleFill } from "react-icons/ri";
import SemiCircularProgressive from "../SemiCircularProgressive";
import { FifthMainChart } from "./charts/FifthMainChart";
import { Context } from "@/context/Context";
import axios from "axios";

const FifthMainCard = () => {
  const { filteredData } = useContext(Context);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const weekId = filteredData[0]?.ID;

        if (!weekId) return;
        // First API call
        const response1 = await axios.get(
          "https://dwpcare.com.pk/dwp/revenue",
          {
            params: { ENDWEEK: weekId },
          }
        );
        setData(response1.data);
        // Second API call
        const response2 = await axios.get(
          "https://dwpcare.com.pk/dwp/revenue",
          {
            params: { STARTWEEK: weekId, ENDWEEK: weekId },
          }
        );
        setData2(response2.data);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };

    fetchRevenueData();
  }, [filteredData[0]?.ID]);

  const formatDataForChart = (data) => {
    return data.map((item) => ({
      Week: item.SHORT_WEEKS,
      PARTS: item.PARTS,
      SERVICE: item.SERVICE,
      CHARGES: item.VISIT_CHARGES,
      INSTALL: item.INSTALL_CORPORATE,
    }));
  };

  const chartData = formatDataForChart(data2);

  // ##########################
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
    <>
      <div className="w-[300px] 2xl:w-[100%] first-div min-h-[65vh] h-auto mt-3 rounded-[10px] pl-4 pt-2 2xl:py-1 py-4">
        {/* Top Container */}

        <h1 className="text-white font-bold text-[23px] 2xl:text-[1.2vw] ">
          Weekly Revenue
        </h1>
        <div className="SecondMainContainer flex mt-3">
          {/* LEFT */}
          <div className="w-[65%]">
            <div className="holder flex items-end h-[62px] 2xl:h-[4vw]  2xl:mt-[1.65vw] mt-[2vw]">
              <p className="text-white 2xl:text-[3.2vw] font-bold text-[47px] flex justify-center">
                {data[0]?.TOTAL_REVENUE.toLocaleString()}
                <div className="2xl:mt-5">
                  {data[0]?.TOTAL_REVENUE_PER >= 0 ? (
                    <div className="icons flex flex-col justify-center items-center ml-2">
                      <RiTriangleFill className="text-green-500 w-[22px] h-[22px] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                      <h1 className="text-[16px] 2xl:text-[1vw] font-bold text-green-500">
                        +
                        {Math.abs(data[0]?.TOTAL_REVENUE_PER).toString()
                          .length === 1
                          ? "0" + Math.abs(data[0]?.TOTAL_REVENUE_PER)
                          : Math.abs(data[0]?.TOTAL_REVENUE_PER)}
                        %
                      </h1>
                    </div>
                  ) : (
                    <div className="icons flex flex-col justify-center items-center ml-2">
                      <h1 className="text-[16px] 2xl:text-[1vw] font-bold text-red-600">
                        -
                        {Math.abs(data[0]?.TOTAL_REVENUE_PER).toString()
                          .length === 1
                          ? "0" + Math.abs(data[0]?.TOTAL_REVENUE_PER)
                          : Math.abs(data[0]?.TOTAL_REVENUE_PER)}
                        %
                      </h1>
                      <RiTriangleFill className="text-red-600 w-[22px] rotate-180 h-[22px] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                    </div>
                  )}
                  <h1 className="text-white text-[16px] 2xl:text-[1.1vw] text-center">
                    Millions
                  </h1>
                </div>
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right_content_div w-[35%] border-l-white border-l pl-5 flex flex-col justify-center">
            <h1 className="text-white font-extralight 2xl:text-[.9vw]">YTD</h1>
            <h1 className="text-white font-extralight tracking-wider 2xl:text-[1vw]">
              Revenue
            </h1>
            <h1 className="text-white font-semibold tracking-wider  2xl:text-[1.3vw]">
              {data[0]?.YTD_REVENUE}
            </h1>
            <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
              Millions
            </h1>
          </div>
        </div>
        {/* Bottom Container */}
        <div className="semi_progress_bar flex justify-between pr-4 mt-4">
          <div className="handle-progress">
            <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
              Parts
            </h1>

            <div className=" font-semibold text-white">
              <SemiCircularProgressive percentage={data[0]?.PARTS} />
            </div>
          </div>
          <div className="handle-progress">
            <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
              Services
            </h1>

            <div className=" font-semibold text-white">
              <SemiCircularProgressive percentage={data[0]?.SERVICE_PER} />
            </div>
          </div>
          <div className="handle-progress">
            <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
              Charges
            </h1>

            <div className=" font-semibold text-white">
              <SemiCircularProgressive percentage={data[0]?.VISIT_PER} />
            </div>
          </div>
          <div className="handle-progress">
            <h1 className="text-[12px] pb-1 2xl:text-[.7vw] font-semibold text-white text-center">
              Inst/Corp
            </h1>

            <div className=" font-semibold text-white">
              <SemiCircularProgressive percentage={data[0]?.INSTALL_PER} />
            </div>
          </div>
        </div>
        {/* TABLE DIV */}
        <div className="w-full px-1 mt-4  2xl:mt-[1.4vw] pr-4">
          <table className="w-full mt-3 mb-6">
            <tr className="text-white 2xl:text-[.7vw] text-[14px] border-b">
              <th className="font-medium border-r-2 text-left">Weeks</th>
              <th className="font-medium border-r-2 text-center">Parts</th>
              <th className="font-medium border-r-2">Services</th>
              <th className="font-medium border-r-2">charges</th>
              <th className="font-medium">Ints/Corp</th>
            </tr>

            {data2.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                    {data?.WEEKS}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                    {parseFloat(data?.PARTS).toFixed(2)}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {parseFloat(data?.SERVICE).toFixed(2)}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {parseFloat(data?.VISIT_CHARGES).toFixed(2)}
                  </td>
                  <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                    {parseFloat(data?.INSTALL_CORPORATE).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="pr-4">
          <FifthMainChart chartData={chartData} />
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="w-[300px] 2xl:w-[100%] first-div min-h-[45vh] h-auto mt-3 rounded-[10px] pl-4 pt-2 2xl:py-1 py-4">
        <h1 className="text-[#44cf86] text-xs 2xl:text-[.85vw] text-center mt-3 font-semibold">
          Nation Wide GREE AC Weekly Revenue
        </h1>
        {/* TABLE DIV */}
        <div className="w-full px-1 mt-4  2xl:mt-[1.4vw] pr-4">
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

        <div className="pr-4">
          <FifthMainChart chartData={chartData} />
          <div className="tooltips flex justify-center items-center gap-1 text-white mt-3">
            <div className="w-4 h-2 bg-[#953333]"></div>
            <h1 className="text-[10px]">parts</h1>
            <div className="w-4 h-2 bg-[#025ade]"></div>
            <h1 className="text-[10px]">services</h1>
            <div className="w-4 h-2 bg-[#ae8104]"></div>
            <h1 className="text-[10px]">charges</h1>
            <div className="w-4 h-2 bg-[#ce0265]"></div>
            <h1 className="text-[10px]">inst/corp</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthMainCard;
