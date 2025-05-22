import React, { useContext, useEffect, useState } from "react";
import { BsCaretRightFill, BsTriangleFill } from "react-icons/bs";
import { FourthBarChart } from "./charts/FourthBarChart";
import { Context } from "@/context/Context";
import ResponsiveLineChart from "../SecondPage/charts/ResponsiveLineChart";
import FourthPagePiechart from "./charts/FourthPagePiechart";
import FifthResponsiveLineChart from "../FifthPage/charts/FifthResponsiveLineChart";
const FourthSmallCard = ({ name, others, topTable }) => {
  // TOP SECTION APIS
  const { filteredData } = useContext(Context);
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedData = formatPieChartData(others);
        setPieChartData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filteredData[0]?.ID]);

  // ###########################################################################

  const formatPieChartData = (others) => {
    if (others.length > 0) {
      const item = others[0];
      return {
        labels: ["Part Waiting", "Under Repair", "Completed", "Other"],
        datasets: [
          {
            data: [
              item.PART_WAITING ?? 1,
              item.UNDER_REPAIR ?? 1,
              item.COMPLETED ?? 1,
              item.OTHER ?? 1,
            ],
            backgroundColor: ["#FF0000", "#F9E400", "#05FF00", "#3FA2F6"],
            borderColor: ["#FF0000", "#F9E400", "#05FF00", "#3FA2F6"],
            borderWidth: 1,
          },
        ],
      };
    }
    return {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
        },
      ],
    };
  };

  const TableData = [
    {
      id: 1,
      weeks: "WEEK 01",
      Inset: "32",
      Outset: "24",
      OTC: "42",
      OTC1: "78",
    },
    {
      id: 2,
      weeks: "WEEK 02",
      Inset: "32",
      Outset: "24",
      OTC: "42",
      OTC1: "78",
    },
    {
      id: 3,
      weeks: "WEEK 03",
      Inset: "32",
      Outset: "24",
      OTC: "42",
      OTC1: "78",
    },
    {
      id: 4,
      weeks: "WEEK 04",
      Inset: "32",
      Outset: "24",
      OTC: "42",
      OTC1: "78",
    },
  ];
  console.log("OTHERS", others);
  return (
    <>
      <div className="w-[300px] smallcardMain 2xl:w-[100%] third-div min-h-[85vh] h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 mt-3">
        <h1 className="text-white font-semibold 2xl:text-[1.1vw] text-[1.3rem] text-center">
          {name}
        </h1>

        <div className="heading_container flex gap-4 items-center pt-2 pb-4">
          <h1 className="text-5xl 2xl:text-[2.8vw] font-bold text-red-500">
            {others[0]?.TOTAL_PENDING_SETS?.toLocaleString() ?? 0}
          </h1>

          {others[0]?.TOTAL_PENDING_PER >= 0 ? (
            <div className="flex flex-col justify-center items-center gap-1">
              <BsTriangleFill
                color="#16a34a"
                className="w-[20px] h-[20px] 2xl:w-[1vw] 2xl:h-[1vw]"
              />
              <h1 className="text-green-600 font-semibold">
                {" "}
                +
                {Math.abs(others[0]?.TOTAL_PENDING_PER).toString().length === 1
                  ? "0" + Math.abs(others[0]?.TOTAL_PENDING_PER)
                  : Math.abs(others[0]?.TOTAL_PENDING_PER)}
                %
              </h1>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-red-600 font-semibold">
                -
                {Math.abs(others[0]?.TOTAL_PENDING_PER).toString().length === 1
                  ? "0" + Math.abs(others[0]?.TOTAL_PENDING_PER)
                  : Math.abs(others[0]?.TOTAL_PENDING_PER)}
                %
              </h1>
              <BsTriangleFill
                className="rotate-180 w-[20px] h-[20px] 2xl:w-[1vw] 2xl:h-[1vw]"
                color="#b91c1c"
              />
            </div>
          )}
        </div>

        <div className="chart-main-container flex">
          <div className="chart-content-container w-[60%] h-10 justify-center items-center flex flex-col gap-1 mt-2">
            <h1 className="text-white uppercase 2xl:text-[.9vw]">Aging Days</h1>
            <div className="flex gap-4">
              <h1 className="flex flex-col text-xs justify-center items-center text-yellow-500">
                Above 7
                <span className="text-white">{others[0]?.AGING ?? 0}</span>
              </h1>
              <h1 className="flex flex-col text-xs justify-center items-center text-green-500">
                Overall
                <span className="text-white">{others[0]?.PTAT ?? 0}</span>
              </h1>
            </div>
          </div>
          <div className="chart w-[40%] 2xl:w-[50%] mt-[-40px] 2xl:mt-[-20px] h-auto">
            <FourthPagePiechart chartData={pieChartData} />
          </div>
        </div>

        {/* TAble */}
        <div className="w-full px-1 mt-9 2xl:px-[.2vw] 2xl:mt-[1.7vw]">
          <table className="w-full mt-3 mb-6">
            <tr className="text-white">
              <th></th>
              <th className="text-[10px] 2xl:text-[.7vw] font-normal">
                P Wait
              </th>
              <th className="text-[10px] 2xl:text-[.7vw] font-normal">
                U Repair
              </th>
              <th className="text-[10px] 2xl:text-[.7vw] font-normal">
                Completed
              </th>
              <th className="text-[10px] 2xl:text-[.7vw] font-normal">
                Others
              </th>
            </tr>

            {topTable.map((data, index) => {
              return (
                <>
                  <tr>
                    <td className="border-r border-t border-solid text-[12px] font-normal pr-3 2xl:text-[.8vw] text-white">
                      {data?.WEEKS?.toLocaleString() ?? 0}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] 2xl:text-[.9vw] font-normal text-center">
                      {data?.PART_WAITING?.toLocaleString() ?? 0}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                      {data?.UNDER_REPAIR?.toLocaleString() ?? 0}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                      {data?.COMPLETED?.toLocaleString() ?? 0}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                      {data?.OTHER?.toLocaleString() ?? 0}
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
          <div>
            {/* <FourthBarChart chartData={chartData2} /> */}
            <FifthResponsiveLineChart />
          </div>
          <div className="main-content">
            <h1 className="text-white font-semibold text-[14px] 2xl:text-[.7vw] mt-3 2xl:mt-[1vw]">
              Aging Wise Pending
            </h1>
            <div className="heading flex text-sm text-white pt-1 2xl:pt-[.3vw] 2xl:gap-[1.5vw] gap-[1.5rem] mt-2 2xl:mt-0">
              <p className="ml-[4rem] 2xl:ml-[3vw] text-[10px] 2xl:text-[.5vw] font-normal">
                Day 1
              </p>
              <p className="ml-[8px] text-[10px] 2xl:ml-[.9vw] 2xl:text-[.5vw] font-normal">
                2-3
              </p>
              <p className="ml-[14px] text-[10px] 2xl:ml-[1.3vw] 2xl:text-[.5vw] font-normal">
                4-7
              </p>
              <p className="ml-4 text-[10px] 2xl:ml-[1.2vw] 2xl:text-[.5vw] font-normal">
                8 &+
              </p>
            </div>
            {topTable.map((item) => {
              return (
                <>
                  <div className="color-boxes-cotainer flex mt-[.6vw] items-center">
                    <h1 className="text-white  text-[10px] 2xl:text-[.45vw] pr-1">
                      {item.WEEKS}
                    </h1>
                    <div className="box-1 pl-1 flex flex-col">
                      <div className="box-sigm-1 flex items-center">
                        <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.2vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                            {item.DAY_0 ?? 0}

                            {item.DAY_0_PER >= 0 ? (
                              <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.6vw]">
                                +
                                {Math.abs(item.DAY_0_PER).toString().length ===
                                1
                                  ? "0" + Math.abs(item.DAY_0_PER)
                                  : Math.abs(item.DAY_0_PER)}
                                %
                              </span>
                            ) : (
                              <span className="text-green-600 text-[10px] font-bold 2xl:text-[.6vw]">
                                -
                                {Math.abs(item.DAY_0_PER).toString().length ===
                                1
                                  ? "0" + Math.abs(item.DAY_0_PER)
                                  : Math.abs(item.DAY_0_PER)}
                                %
                              </span>
                            )}
                          </p>
                        </div>
                        <BsCaretRightFill className="text-green-400 rotate- text-[22px] 2xl:text-[1.4vw] 2xl:ml-[-.1vw] ml-[-7px]" />
                      </div>
                    </div>
                    <div className="box-2 flex flex-col">
                      <div className="box-sigm-2 flex items-center">
                        <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.2vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                          {item.DAY2_3 ?? 0}
                            {item.DAY2_3_PER >= 0 ? (
                              <span className=" text-[#BE1A1A] flex flex-col text-[10px] font-bold 2xl:text-[.6vw]">
                                +
                                {Math.abs(item.DAY2_3_PER).toString().length ===
                                1
                                  ? "0" + Math.abs(item.DAY2_3_PER)
                                  : Math.abs(item.DAY2_3_PER)}
                                %
                              </span>
                            ) : (
                              <span className=" text-green-600 flex flex-col text-[10px] font-bold 2xl:text-[.6vw]">
                                -
                                {Math.abs(item.DAY2_3_PER).toString().length ===
                                1
                                  ? "0" + Math.abs(item.DAY2_3_PER)
                                  : Math.abs(item.DAY2_3_PER)}
                                %
                              </span>
                            )}
                          </p>
                        </div>
                        <BsCaretRightFill className="text-yellow-300 rotate- text-[22px] ml-[-7px] 2xl:text-[1.4vw] 2xl:ml-[-.1vw]" />
                      </div>
                    </div>
                    <div className="box-3 flex flex-col">
                      <div className="box-sigm-3 flex items-center">
                        <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.2vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                          {item.DAY4_7 ?? 0}
                            {item.DAY4_7_PER >= 0 ? (
                              <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.6vw]">
                                +
                                {Math.abs(item.DAY4_7_PER).toString().length ===
                                1
                                  ? "0" + Math.abs(item.DAY4_7_PER)
                                  : Math.abs(item.DAY4_7_PER)}
                                %
                              </span>
                            ) : (
                              <span className="text-green-600 text-[10px] font-bold 2xl:text-[.6vw]">
                                -
                                {Math.abs(item.DAY4_7_PER).toString().length ===
                                1
                                  ? "0" + Math.abs(item.DAY4_7_PER)
                                  : Math.abs(item.DAY4_7_PER)}
                                %
                              </span>
                            )}
                          </p>
                        </div>
                        <BsCaretRightFill className="text-red-600 rotate- text-[22px] ml-[-7px] 2xl:text-[1.4vw]" />
                      </div>
                    </div>
                    <div className="box-4 flex flex-col ">
                      <div className="box-sigm-4 flex items-center">
                        <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.2vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                          {item.DAY8_ABOVE ?? 0}{" "}
                            {item.DAY8_ABOVE_PER >= 0 ? (
                              <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.6vw]">
                                +
                                {Math.abs(item.DAY8_ABOVE_PER).toString()
                                  .length === 1
                                  ? "0" + Math.abs(item.DAY8_ABOVE_PER)
                                  : Math.abs(item.DAY8_ABOVE_PER)}
                                %
                              </span>
                            ) : (
                              <span className="text-green-600 text-[10px] font-bold 2xl:text-[.6vw]">
                                -
                                {Math.abs(item.DAY8_ABOVE_PER).toString()
                                  .length === 1
                                  ? "0" + Math.abs(item.DAY8_ABOVE_PER)
                                  : Math.abs(item.DAY8_ABOVE_PER)}
                                %
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSmallCard;
