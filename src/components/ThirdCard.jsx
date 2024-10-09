import React, { useEffect, useState } from "react";
import "../Styling/Home.css";
import { BsCaretRightFill } from "react-icons/bs";
import { RiTriangleFill } from "react-icons/ri";
import { Component1 } from "../components/ui/Component1";
import PieChart from "./Piechart";
import SecondaryPiechart from "./SecondaryPiechart";
const ThirdCard = ({ startWeek, endWeek }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [pieChartData, setPieChartData] = useState(null);

  /* const [pieChartData, setPieChartData] = useState([
     ["Task", "Percentage"]
   ]);
 */
  useEffect(() => {
    // Fetch data from first API
    fetch(`https://dwpcare.com.pk/dwp/pending?ENDWEEK=${endWeek}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        //setLoading1(false);
        const formattedData = formatPieChartData(data);
        setPieChartData(formattedData);
      })
      .catch((error) => {
        console.log(error);
        ///setLoading1(false);
      });

    fetch(
      `https://dwpcare.com.pk/dwp/pending?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData2(data);
      });
  }, [startWeek, endWeek]);
  /*
    const formatPieChartData = (data) => {
      if (data.length > 0) {
        const item = data[0];
        return [
          ["Task", "Percentage"],
          ["Part Waiting", item.PART_WAITING],
          ["Under Repair", item.UNDER_REPAIR],
          ["Completed", item.COMPLETED],
          ["Other", item.OTHER],
        ];
      }
      return [["Task", "Percentage"]];
    };
  */

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
            backgroundColor: ["#FF0000", "#F9E400", "#05FF00", "#3FA2F6"], // Segment colors
            borderColor: ["#FF0000", "#F9E400", "#05FF00", "#3FA2F6"], // Border colors
            borderWidth: 1, // Border width
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
      week: item.SHORT_WEEKS.toString(), // Assuming NO_OF_WEEKS is the month identifier
      PART_WAITING: item.PART_WAITING,
      UNDER_REPAIR: item.UNDER_REPAIR,
      COMPLETED: item.COMPLETED,
      OTHER: item.OTHER,
    }));
  };

  const chartData2 = formatDataForChart(data2);

  ///console.log('chart data',pieChartData);
  return (
    <div className="third-div w-[289px] 2xl:w-[23.5%] min-h-[650px] h-auto rounded-[6px]  py-3  2xl:py-[.8vw]  px-4">
      <h1 className="text-white font-bold text-[20px] pb-[1.5vw] 2xl:text-[1.2vw] mt-[-1.1vw] 2xl:mt-[-1vw] 2xl:pb-[1.2vw] pt-2">
        As On Pending
      </h1>

      <div className="flex flex-col">
        <div className="content">
          {data.map((item) => (
            <div className="flex">
              <p className=" text-[#fd4242] font-bold  text-[45px]  2xl:text-[3vw] leading-4 2xl:leading-[1vw]">
                {item.TOTAL_PENDING_SETS.toLocaleString()}
              </p>
              {item.TOTAL_PENDING_PER >= 0 ? (
                <div className="icons flex flex-col justify-center third-arrow items-center ml-2 arrow-2">
                  <RiTriangleFill className="text-[#BE1A1A] w-[22px] h-[22px] 2xl:w-[1.4vw] 2xl:h-[1.4vw] " />
                  <h1 className="text-[16px] 2xl:text-[1vw] font-bold text-[#BE1A1A]">
                    +
                    {Math.abs(item.TOTAL_PENDING_PER).toString().length === 1
                      ? "0" + Math.abs(item.TOTAL_PENDING_PER)
                      : Math.abs(item.TOTAL_PENDING_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center third-arrow items-center ml-2 arrow-2 mt-[-10px]">
                  <h1 className="text-[16px] 2xl:text-[1vw] font-bold text-[#148D00]">
                    -
                    {Math.abs(item.TOTAL_PENDING_PER).toString().length === 1
                      ? "0" + Math.abs(item.TOTAL_PENDING_PER)
                      : Math.abs(item.TOTAL_PENDING_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-[#148D00] w-[22px] h-[22px] rotate-180 2xl:w-[1.4vw] 2xl:h-[1.4vw]" />
                </div>
              )}
            </div>
          ))}
        </div>
        <h1 className="ml-[1.8rem] 2xl:text-[1vw] text-white mt-2 text-[14px] 2xl:ml-[1.6vw]">AGING DAYS</h1>
        {data.map((item) => (
          <div className="flex mt-[-25px]  gap-1">
            {/* <div className="text-[12px]  mt-5">
              <h5 className="leading-[14px] text-[12px] 2xl:text-[.7vw] text-[orange] mt-[13px]">
                Above 7
              </h5>
              <h5 className="text-white text-[12px] 2xl:text-[.7vw] text-center">
                {item.AGING}
              </h5>
            </div> */}
             <div className="flex flex-col mt-5 ml-6 2xl:ml-[1.5vw]">
              <h1 className="text-[orange]  text-[9px] 2xl:text-[.6vw]  mt-[10px] text-center">
                Above 7
              </h1>
              <p className="text-white text-[9px] 2xl:text-[.6vw] text-center">
                {" "}
                {item.AGING}{" "}
              </p>
            </div>
            <div className="flex flex-col mt-5 ml-8 2xl:ml-[2vw]">
              <h1 className="text-green-500  text-[9px] 2xl:text-[.6vw]  mt-[10px] text-center">
                Overall
              </h1>
              <p className="text-white text-[9px] 2xl:text-[.7vw] text-center">
                {" "}
                {item.PTAT}{" "}
              </p>
            </div>

            <div className="2xl:hidden block ml-[30px] mt-[-20px] pb-5">
              <PieChart chartData={pieChartData} />
            </div>
            <div className="2xl:block hidden pb-[.5vw] mt-[-.9vw] ml-[20px] 2xl:ml-[1.5vw] pie-second">
              <SecondaryPiechart chartData={pieChartData} />
            </div>
          </div>
        ))}
      </div>

      {/* TAble */}
      <div className="px-1  pb-2 2xl:mt-[.8vw]  mt-[10px]">
        <table className="w-[245px] 2xl:w-[100%]">
          <tr className="text-white">
            <th></th>
            <th className="text-[10px] 2xl:text-[.7vw] font-normal">P Wait</th>
            <th className="text-[10px] 2xl:text-[.7vw] font-normal">
              U Repair
            </th>
            <th className="text-[10px] 2xl:text-[.7vw] font-normal">
              Completed
            </th>
            <th className="text-[10px] 2xl:text-[.7vw] font-normal">Others</th>
          </tr>
          {data2.map((item) => (
            <>
              <tr>
                <td className="border-r border-t border-solid text-[12px] font-normal pr-3 2xl:text-[.8vw] text-white">
                  {item.WEEKS.toLocaleString()}
                </td>
                <td className=" border-t border-solid px-[5px] text-white text-[14px] 2xl:text-[.9vw] font-normal text-center">
                  {item.PART_WAITING.toLocaleString()}
                </td>
                <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                  {item.UNDER_REPAIR.toLocaleString()}
                </td>
                <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                  {item.COMPLETED.toLocaleString()}
                </td>
                <td className=" border-t border-solid px-[5px] text-white text-[14px] font-normal 2xl:text-[.9vw] text-center">
                  {item.OTHER.toLocaleString()}
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
      <Component1 chartData={chartData2} />

      {/* MULTIPLE COLOR BOXES */}
      <div className="MAIN ">
        <h1 className="text-white font-semibold text-[14px] 2xl:text-[.9vw] mt-3 2xl:mt-[.7vw]">
          Aging Wise Pending
        </h1>
        <div className="heading flex text-sm text-white pt-1 2xl:pt-[.3vw] 2xl:gap-[1.5vw] gap-[1.5rem] mt-3 2xl:mt-0">
          <p className="ml-20 2xl:ml-[5vw] text-[10px] 2xl:text-[.7vw] font-normal">
            Day 1
          </p>
          <p className="ml-[2px] text-[10px] 2xl:ml-[.5vw] 2xl:text-[.7vw] font-normal">
            2-3
          </p>
          <p className="ml-[10px] text-[10px] 2xl:ml-[.5vw] 2xl:text-[.7vw] font-normal">
            4-7
          </p>
          <p className="ml-2 text-[10px] 2xl:ml-[.5vw] 2xl:text-[.7vw] font-normal">
            8 &+
          </p>
        </div>

        {data2.map((item) => (
          <>
            <div className="color-boxes-cotainer flex mt-[.6vw] items-center">
              <h1 className="text-white bottom-h1 text-[14px] 2xl:text-[.9vw]">
                {item.WEEKS}
              </h1>
              <div className="box-1 pl-3 flex flex-col">
                <div className="box-sigm-1 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                    <p className="font-normal text-center text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                      {item.DAY_0}{" "}
                      {item.DAY_0_PER >= 0 ? (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.6vw]">
                          +
                          {Math.abs(item.DAY_0_PER).toString().length === 1
                            ? "0" + Math.abs(item.DAY_0_PER)
                            : Math.abs(item.DAY_0_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-600 text-[10px] font-bold 2xl:text-[.6vw]">
                          -
                          {Math.abs(item.DAY_0_PER).toString().length === 1
                            ? "0" + Math.abs(item.DAY_0_PER)
                            : Math.abs(item.DAY_0_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-green-400 rotate- text-[22px] 2xl:text-[1.4vw] 2xl:ml-[-.4vw] ml-[-7px]" />
                </div>
              </div>
              <div className="box-2 flex flex-col mx-[-5px]">
                <div className="box-sigm-2 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                    <p className="font-normal text-center text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                      {item.DAY2_3}{" "}
                      {item.DAY2_3_PER >= 0 ? (
                        <span className=" text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.6vw]">
                          +
                          {Math.abs(item.DAY2_3_PER).toString().length === 1
                            ? "0" + Math.abs(item.DAY2_3_PER)
                            : Math.abs(item.DAY2_3_PER)}
                          %
                        </span>
                      ) : (
                        <span className=" text-green-600 text-[10px] font-bold 2xl:text-[.6vw]">
                          -
                          {Math.abs(item.DAY2_3_PER).toString().length === 1
                            ? "0" + Math.abs(item.DAY2_3_PER)
                            : Math.abs(item.DAY2_3_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-yellow-300 rotate- text-[22px] ml-[-7px] 2xl:text-[1.4vw] 2xl:ml-[-.4vw]" />
                </div>
              </div>
              <div className="box-3 flex flex-col">
                <div className="box-sigm-3 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                    <p className="font-normal text-center text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                      {item.DAY4_7}{" "}
                      {item.DAY4_7_PER >= 0 ? (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.6vw]">
                          +
                          {Math.abs(item.DAY4_7_PER).toString().length === 1
                            ? "0" + Math.abs(item.DAY4_7_PER)
                            : Math.abs(item.DAY4_7_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-600 text-[10px] font-bold 2xl:text-[.6vw]">
                          -
                          {Math.abs(item.DAY4_7_PER).toString().length === 1
                            ? "0" + Math.abs(item.DAY4_7_PER)
                            : Math.abs(item.DAY4_7_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-red-600 rotate- text-[22px] ml-[-7px] 2xl:text-[1.4vw] 2xl:ml-[-.4vw]" />
                </div>
              </div>
              <div className="box-4 flex flex-col mx-[-4px]">
                <div className="box-sigm-4 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2vw]">
                    <p className="font-normal text-center text-[12px] leading-[14px] 2xl:text-[.8vw] 2xl:leading-[.9vw]">
                      {item.DAY8_ABOVE}{" "}
                      {item.DAY8_ABOVE_PER >= 0 ? (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.6vw]">
                          +
                          {Math.abs(item.DAY8_ABOVE_PER).toString().length === 1
                            ? "0" + Math.abs(item.DAY8_ABOVE_PER)
                            : Math.abs(item.DAY8_ABOVE_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-600 text-[10px] font-bold 2xl:text-[.6vw]">
                          -
                          {Math.abs(item.DAY8_ABOVE_PER).toString().length === 1
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
        ))}
      </div>
    </div>
  );
};

export default ThirdCard;
