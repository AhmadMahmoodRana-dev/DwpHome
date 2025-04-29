import React, { useContext, useEffect, useState } from "react";
import { BsCaretRightFill, BsTriangleFill } from "react-icons/bs";
import FourthPagePiechart from "./charts/FourthPagePiechart";
import { FourthBarChart } from "./charts/FourthBarChart";
import { Context } from "@/context/Context";
import axios from "axios";
const FourthMainCard = () => {
  // TOP SECTION APIS
  const { filteredData } = useContext(Context);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endWeekId = filteredData[0]?.ID;

        if (!endWeekId) return;

        const pendingRes = await axios.get(
          `https://dwpcare.com.pk/dwp/pending`,
          {
            params: { ENDWEEK: endWeekId },
          }
        );

        setData(pendingRes.data);
        const formattedData = formatPieChartData(pendingRes.data);
        setPieChartData(formattedData);

        const pendingRangeRes = await axios.get(
          `https://dwpcare.com.pk/dwp/pending`,
          {
            params: {
              STARTWEEK: endWeekId,
              ENDWEEK: endWeekId,
            },
          }
        );

        setData2(pendingRangeRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filteredData[0]?.ID]);

  // ###########################################################################

  const formatPieChartData = (data) => {
    if (data.length > 0) {
      const item = data[0];
      return {
        labels: ["Part Waiting", "Under Repair", "Completed", "Other"],
        datasets: [
          {
            data: [
              item.PART_WAITING,
              item.UNDER_REPAIR,
              item.COMPLETED,
              item.OTHER,
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

  const formatDataForChart = (data) => {
    return data.map((item) => ({
      week: item.SHORT_WEEKS.toString(),
      PART_WAITING: item.PART_WAITING,
      UNDER_REPAIR: item.UNDER_REPAIR,
      COMPLETED: item.COMPLETED,
      OTHER: item.OTHER,
    }));
  };

  const chartData2 = formatDataForChart(data2);

  // #####################################################################

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
    <>
      <div className="w-[300px] 2xl:w-[100%] third-div min-h-[85vh] h-auto rounded-[10px] px-3 2xl:px-[1.4vh] 2xl:pt-[.7vw] xl:py-2 lg:pt-2 lg:pb-3 py-2 mt-3 ">
        <h1 className="text-white font-semibold text-xl 2xl:text-[1.3vw]">
          As On Pending
        </h1>

        <div className="heading_container flex gap-4 items-center pt-2 pb-4">
          <h1 className="text-5xl 2xl:text-[3vw] font-bold text-red-500">
            {data[0]?.TOTAL_PENDING_SETS.toLocaleString()}
          </h1>
          {data[0]?.TOTAL_PENDING_PER >= 0 ? (
            <div className="flex flex-col justify-center items-center gap-1">
              <BsTriangleFill color="#16a34a" size={20} />
              <h1 className="text-green-600 font-semibold">
                {" "}
                +
                {Math.abs(data[0]?.TOTAL_PENDING_PER).toString().length === 1
                  ? "0" + Math.abs(data[0]?.TOTAL_PENDING_PER)
                  : Math.abs(data[0]?.TOTAL_PENDING_PER)}
                %
              </h1>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-1">
              <h1 className="text-red-600 font-semibold">
                -
                {Math.abs(data[0]?.TOTAL_PENDING_PER).toString().length === 1
                  ? "0" + Math.abs(data[0]?.TOTAL_PENDING_PER)
                  : Math.abs(data[0]?.TOTAL_PENDING_PER)}
                %
              </h1>
              <BsTriangleFill
                className="rotate-180"
                color="#b91c1c"
                size={20}
              />
            </div>
          )}
        </div>

        <div className="chart-main-container flex">
          <div className="chart-content-container w-[60%] h-10 justify-center items-center flex flex-col gap-1 mt-2">
            <h1 className="text-white uppercase 2xl:text-[1vw]">Aging Days</h1>
            <div className="flex gap-4">
              <h1 className="flex flex-col text-xs justify-center items-center text-yellow-500">
                Above 7<span className="text-white">{data[0]?.AGING}</span>
              </h1>
              <h1 className="flex flex-col text-xs justify-center items-center text-green-500">
                Overall
                <span className="text-white">{data[0]?.PTAT}</span>
              </h1>
            </div>
          </div>
          <div className="chart w-[40%] mt-[-40px] h-auto">
            <FourthPagePiechart chartData={pieChartData} />
          </div>
        </div>

        {/* TAble */}
        <div className="w-full px-1 mt-9 2xl:px-[.2vw] 2xl:mt-[2.4vw]">
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

            {data2.map((data, index) => {
              return (
                <>
                  <tr>
                    <td className="border-r border-t border-solid text-[12px] font-normal pr-3 2xl:text-[.8vw] text-white">
                      {data.WEEKS.toLocaleString()}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] 2xl:text-[.9vw] font-normal text-center">
                      {data.PART_WAITING.toLocaleString()}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                      {data.UNDER_REPAIR.toLocaleString()}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                      {data.COMPLETED.toLocaleString()}
                    </td>
                    <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                      {data.OTHER.toLocaleString()}
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
          <div>
            <FourthBarChart chartData={chartData2} />
          </div>
          <div className="main-content">
            <h1 className="text-white font-semibold text-[14px] 2xl:text-[.9vw] mt-3 2xl:mt-[.7vw]">
              Aging Wise Pending
            </h1>
            <div className="heading flex text-sm text-white pt-1 2xl:pt-[.3vw] 2xl:gap-[1.5vw] gap-[1.5rem] mt-3 2xl:mt-0">
              <p className="ml-[4.6rem] 2xl:ml-[4.7vw] text-[10px] 2xl:text-[.7vw] font-normal">
                Day 1
              </p>
              <p className="ml-[8px] text-[10px] 2xl:ml-[.8vw] 2xl:text-[.7vw] font-normal">
                2-3
              </p>
              <p className="ml-[14px] text-[10px] 2xl:ml-[1vw] 2xl:text-[.7vw] font-normal">
                4-7
              </p>
              <p className="ml-4 text-[10px] 2xl:ml-[1.2vw] 2xl:text-[.7vw] font-normal">
                8 &+
              </p>
            </div>
            {data2.map((item) => {
              return (
                <>
                  <div className="color-boxes-cotainer flex mt-[.6vw] items-center">
                    <h1 className="text-white bottom-h1 text-[14px] 2xl:text-[.9vw]">
                      {item.WEEKS}
                    </h1>
                    <div className="box-1 pl-3 flex flex-col">
                      <div className="box-sigm-1 flex  items-center">
                        <div className="color-boxe flex flex-col bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                            {item.DAY_0}
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
                        <BsCaretRightFill className="text-green-400 rotate- text-[22px] 2xl:text-[1.4vw] 2xl:ml-[-.2vw] ml-[-7px]" />
                      </div>
                    </div>
                    <div className="box-2 flex flex-col">
                      <div className="box-sigm-2 flex items-center">
                        <div className="color-boxe flex flex-col bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                            {item.DAY2_3}
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
                        <BsCaretRightFill className="text-yellow-300 rotate- text-[22px] ml-[-7px] 2xl:text-[1.4vw] 2xl:ml-[-.2vw]" />
                      </div>
                    </div>
                    <div className="box-3 flex flex-col">
                      <div className="box-sigm-3 flex items-center">
                        <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                            {item.DAY4_7}
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
                        <BsCaretRightFill className="text-red-600 rotate- text-[22px] ml-[-7px] 2xl:text-[1.4vw] 2xl:ml-[-.2vw]" />
                      </div>
                    </div>
                    <div className="box-4 flex flex-col ">
                      <div className="box-sigm-4 flex items-center">
                        <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                          <p className="font-normal text-center flex flex-col text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                            {item.DAY8_ABOVE}{" "}
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

      {/* ###########################   SECOND ROW ######################### */}

      <div className="w-[300px] 2xl:w-[100%] third-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vw] mt-3">
        {/* FIRST  */}
        <div>
          <h1 className="text-white font-semibold text-[13px] 2xl:text-[.8vw] tracking-wide text-center">
            {name} Nation Wide GREE AC As On Pending
          </h1>
          {/* TABLE DIV */}
          <div className="w-full px-1 mt-4 2xl:px-[.2vw]">
            <table className="w-full mb-6 mt-1">
              <tr className="text-white 2xl:text-[.8vw] text-[12px] border-b">
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
          <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.4vw]">
            <FourthBarChart chartData={chartData2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthMainCard;
