import React, { useEffect, useState } from "react";
import "../Styling/Home.css";
import { RxTriangleDown } from "react-icons/rx";
import { BsCaretRightFill } from "react-icons/bs";
import SecondBarChart from "./SecondBarChart";
import { RiTriangleFill } from "react-icons/ri";
import { Component } from "../components/ui/Component";
const SecondCard = ({ startWeek, endWeek }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // Fetch data from first API
    fetch(`https://dwpcare.com.pk/dwp/tat?EDATE=${endWeek}`)
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
      });
    /*.catch((error) => {
        setError1(error);
        setLoading1(false);
      });*/

    fetch(`https://dwpcare.com.pk/dwp/tat?SDATE=${startWeek}&EDATE=${endWeek}`)
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

  const formatDataForChart = (data) => {
    return data.map((item) => ({
      week: item.SHORT_WEEKS.toString(), // Assuming NO_OF_WEEKS is the month identifier
      day_0: item.DAY_0,
      day2_3: item.DAY2_3,
      day4_7: item.DAY4_7,
      day8_above: item.DAY8_ABOVE,
    }));
  };

  const chartData2 = formatDataForChart(data2);

  ///console.log(chartData2);

  return (
    <div className="second-div w-[289px] 2xl:w-[23.5%] 2xl:pb-[1.4vw] min-h-[650px] h-auto rounded-[6px]  pb-3 px-3 ">
      <div className="content pt-3 pb-2 flex gap-3">
        <div>
          <h1 className="text-white font-bold text-[20px] ml-1 2xl:text-[1.2vw] mt-[-8px]">
            ATAT
          </h1>

          <div className="holder flex items-end h-[62px] 2xl:h-[4vw] mt-3 2xl:mt-[.6vw]">
            {data.map((item) => (
              <p
                className="text-[#a8e063] 2xl:text-[4vw] font-bold text-[60px] flex justify-center"
                key={item.WEEKS}
              >
                {item.ATAT}
                <div>
                  {item.ATAT_PER >= 0 ? (
                    <div className="icons flex flex-col justify-center items-center ml-1">
                      <RiTriangleFill className="text-[#BE1A1A] w-[22px] h-[22px] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                      <h1 className="text-[16px] 2xl:text-[1vw] font-bold text-[#BE1A1A]">
                        +
                        {Math.abs(item.ATAT_PER).toString().length === 1
                          ? "0" + Math.abs(item.ATAT_PER)
                          : Math.abs(item.ATAT_PER)}
                        %
                      </h1>
                    </div>
                  ) : (
                    <div className="icons flex flex-col justify-center items-center ml-1">
                      <h1 className="text-[16px] font-bold text-green-400 2xl:text-[1vw] ">
                        -
                        {Math.abs(item.ATAT_PER).toString().length === 1
                          ? "0" + Math.abs(item.ATAT_PER)
                          : Math.abs(item.ATAT_PER)}
                        %
                      </h1>
                      <RiTriangleFill className="text-green-400  w-[22px] h-[22px] 2xl:w-[1.2vw] 2xl:h-[1.2vw] rotate-180" />
                    </div>
                  )}
                  <h1 className="text-white text-[20px] 2xl:text-[1.3vw]">
                    Days
                  </h1>
                </div>
              </p>
            ))}
          </div>
        </div>
        <hr className="border border-white h-[5.8vw] ml-[.6vw]" />
        {data.map((item) => (
          <div className="ytd ml-3" key={item.WEEKS}>
            <h1 className="font-bold text-white text-[16px] 2xl:text-[1.1vw]">
              YTD
            </h1>
            <p className="font-thin text-[15px] 2xl:text-[1vw] text-white leading-[1px] mt-2">
              ATAT
            </p>
            <h2 className="text-white font-bold 2xl:text-[1.3vw] text-[20px] mt-2">
              {item.YTD_ATAT}
            </h2>
            <h1 className="text-white text-[16px] 2xl:text-[1.1vw] mt-[-8px] font-bold">
              Days
            </h1>
          </div>
        ))}
      </div>
      {/* colorBoxes */}
      <h1 className="text-white font-bold ml-[4px] text-[14px] mt-[-10px] pb-1 2xl:text-[1vw]">
        Nation Wise TAT
      </h1>
      {data.map((item) => (
        <div className="color-boxes-cotainer flex justify-center ">
          <div className="box-1 flex flex-col">
            <div className="box-sigm-1 flex items-center">
              <div className="color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3.7vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] 2xl:text-[1.1vw] leading-4 2xl:leading-[1vw] flex flex-col justify-center items-center">
                  {item.DAY_0}
                  {item.DAY_0_PER >= 0 ? (
                    <span className="text-green-400 text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(item.DAY_0_PER).toString().length === 1
                        ? "0" + Math.abs(item.DAY_0_PER)
                        : Math.abs(item.DAY_0_PER)}
                      %
                    </span>
                  ) : (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.8vw]">
                      -
                      {Math.abs(item.DAY_0_PER).toString().length === 1
                        ? "0" + Math.abs(item.DAY_0_PER)
                        : Math.abs(item.DAY_0_PER)}
                      %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-green-400 rotate- text-[25px] 2xl:text-[1.7vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.8vw] text-white ml-[.4vw] font-thin">
              Day 1
            </p>
          </div>
          <div className="box-2 flex flex-col mx-[-5px] ml-[-18px]">
            <div className="box-sigm-2 flex items-center">
              <div className="color-boxe ml-[14px] bg-[#ededed] border-2 2xl:w-[3.7vw] 2xl:h-[2.4vw] border-yellow-300 w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[1.1vw]">
                  {/* 200 <span className="text-green-600 text-[12px]">+55%</span> */}
                  {item.DAY2_3}
                  {item.DAY2_3_PER >= 0 ? (
                    <span className="text-green-400  text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(item.DAY2_3_PER).toString().length === 1
                        ? "0" + Math.abs(item.DAY2_3_PER)
                        : Math.abs(item.DAY2_3_PER)}
                      %
                    </span>
                  ) : (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.8vw]">
                      -
                      {Math.abs(item.DAY2_3_PER).toString().length === 1
                        ? "0" + Math.abs(item.DAY2_3_PER)
                        : Math.abs(item.DAY2_3_PER)}
                      %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-yellow-300 text-[25px] 2xl:text-[1.7vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.8vw] text-white  font-thin ml-[1.8vw]">
              2-3
            </p>
          </div>
          <div className="box-3 flex flex-col">
            <div className="box-sigm-3 flex items-center">
              <div className="color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3.7vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[1.1vw]">
                  {/* 70 <span className="text-green-600 text-[12px]">+15%</span> */}
                  {item.DAY4_7}
                  {item.DAY4_7_PER >= 0 ? (
                    <span className="text-yellow-600 text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(item.DAY4_7_PER).toString().length === 1
                        ? "0" + Math.abs(item.DAY4_7_PER)
                        : Math.abs(item.DAY4_7_PER)}
                      %
                    </span>
                  ) : (
                    <span className="text-green-400 text-[12px] 2xl:text-[.8vw]">
                      -
                      {Math.abs(item.DAY4_7_PER).toString().length === 1
                        ? "0" + Math.abs(item.DAY4_7_PER)
                        : Math.abs(item.DAY4_7_PER)}
                      %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-red-600 rotate- text-[25px] 2xl:text-[1.7vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.8vw] text-white ml-[.9vw] font-thin">
              4-7
            </p>
          </div>
          <div className="box-4 flex flex-col mx-[-4px]">
            <div className="box-sigm-4 flex items-center">
              <div className="color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3.7vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[1.1vw]">
                  {/* 10 <span className="text-green-600 text-[12px]">+2%</span> */}
                  {item.DAY8_ABOVE}
                  {item.DAY8_ABOVE_PER >= 0 ? (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(item.DAY8_ABOVE_PER).toString().length === 1
                        ? "0" + Math.abs(item.DAY8_ABOVE_PER)
                        : Math.abs(item.DAY8_ABOVE_PER)}
                      %
                    </span>
                  ) : (
                    <span className=" text-green-400  text-[12px] 2xl:text-[.8vw]">
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
            <p className="text-[12px] 2xl:text-[.8vw] text-white ml-[.9vw]  font-thin">
              8 &+
            </p>
          </div>
        </div>
      ))}
      {/* TAble */}
      <div className="px-1 2xl:mt-[.4vw] 2xl:px-[.2vw] mt-3 pb-2">
        <table className="w-[255px] 2xl:w-full">
          <tr className="text-white">
            <th></th>
            <th className="text-[10px] font-normal 2xl:text-[.8vw]">Day 1</th>
            <th className="text-[10px] font-normal 2xl:text-[.8vw]">2-3</th>
            <th className="text-[10px] font-normal 2xl:text-[.8vw]">4-7</th>
            <th className="text-[10px] font-normal 2xl:text-[.8vw] text-right">
              8 &+
            </th>
          </tr>
          {data2.map((item) => (
            <>
              <tr>
                <td className="border-r border-t border-solid text-[12px] 2xl:text-[.8vw] font-normal text-white pr-4">
                  {item.WEEKS}
                </td>
                <td className=" border-t border-solid  text-white text-[14px] 2xl:text-[.9vw] font-normal text-center">
                  {item.DAY_0.toLocaleString()}
                </td>
                <td className=" border-t border-solid px-3 text-white text-[14px] 2xl:text-[.9vw] font-normal text-center">
                  {item.DAY2_3.toLocaleString()}
                </td>
                <td className=" border-t border-solid px-3 text-white text-[14px] 2xl:text-[.9vw] font-normal text-center">
                  {item.DAY4_7.toLocaleString()}
                </td>
                <td className=" border-t border-solid pl-3 text-white text-[14px] 2xl:text-[.9vw] font-normal text-center">
                  {item.DAY8_ABOVE.toLocaleString()}
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
      {/* <SecondBarChart/> */}
      <Component chartData={chartData2} />

      {/* MULTIPLE COLOR BOXES */}
      <div className="MAIN ">
        <h1 className="text-white mt-[30px] 2xl:mt-[2vw]  font-semibold text-[14px] 2xl:text-[1.1vw]">
          Region wise TAT
        </h1>

        <div className="heading flex text-sm text-white pt-1 2xl:pt-[.3vw] 2xl:gap-[1.5vw] gap-[1.5rem] mt-3 2xl:mt-0">
          <p className="ml-20 2xl:ml-[5vw] text-[10px] 2xl:text-[.7vw] font-normal">
            Day 1
          </p>
          <p className="ml-[2px] text-[10px] 2xl:ml-[.2vw] 2xl:text-[.7vw] font-normal">
            2-3
          </p>
          <p className="ml-[14px] text-[10px] 2xl:ml-[.7vw] 2xl:text-[.7vw] font-normal">
            4-7
          </p>
          <p className="ml-3 text-[10px] 2xl:ml-[.6vw] 2xl:text-[.7vw] font-normal">
            8 &+
          </p>
        </div>
        {data.map((item) => (
          <>
            <div className="color-boxes-cotainer  flex mt-3 2xl:mt-[.4vw] items-center">
              <h1 className="text-white font-semibold text-[16px] 2xl:text-[1vw] 2xl:w-[3.2vw]">
                Center
              </h1>

              <div className="box-1 pl-5 2xl:pl-[1.4vw] flex flex-col">
                <div className="box-sigm-1 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      <div>{item.CENTER_DAY_0}</div>
                      {item.CENTER_DAY_0_PER >= 0 ? (
                        <span className="text-green-400 text-[10px] 2xl:text-[.7vw]  font-bold">
                          +
                          {Math.abs(item.CENTER_DAY_0_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.CENTER_DAY_0_PER)
                            : Math.abs(item.CENTER_DAY_0_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-[#BE1A1A] 2xl:text-[.7vw] text-[10px] font-bold">
                          -
                          {Math.abs(item.CENTER_DAY_0_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.CENTER_DAY_0_PER)
                            : Math.abs(item.CENTER_DAY_0_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-green-400 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>

              <div className="box-2 flex flex-col mx-[-5px]">
                <div className="box-sigm-2 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-400 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 169 <span className="text-green-600 text-[10px] font-bold">-576%</span> */}
                      <div> {item.CENTER_DAY2_3}</div>
                      {item.CENTER_DAY2_3_PER >= 0 ? (
                        <span className="whitespace-pre text-green-400 2xl:text-[.7vw] text-[10px] font-bold">
                          +
                          {Math.abs(item.CENTER_DAY2_3_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.CENTER_DAY2_3_PER)
                            : Math.abs(item.CENTER_DAY2_3_PER)}
                          %
                        </span>
                      ) : (
                        <span className="whitespace-pre text-[#BE1A1A] text-[10px] 2xl:text-[.7vw] font-bold">
                          -
                          {Math.abs(item.CENTER_DAY2_3_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.CENTER_DAY2_3_PER)
                            : Math.abs(item.CENTER_DAY2_3_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-yellow-300 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>
              <div className="box-3 flex flex-col">
                <div className="box-sigm-3 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 144 <span className="text-green-600 text-[10px] font-bold">+140%</span> */}
                      <div>{item.CENTER_DAY4_7}</div>
                      {item.CENTER_DAY4_7_PER >= 0 ? (
                        <span className="text-yellow-600 text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.CENTER_DAY4_7_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.CENTER_DAY4_7_PER)
                            : Math.abs(item.CENTER_DAY4_7_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.CENTER_DAY4_7_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.CENTER_DAY4_7_PER)
                            : Math.abs(item.CENTER_DAY4_7_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-red-600 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>
              <div className="box-4 flex flex-col mx-[-4px]">
                <div className="box-sigm-4 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 110 <span className="text-green-600 text-[10px] font-bold">+156%</span> */}
                      <div>{item.CENTER_DAY8_ABOVE}</div>
                      {item.CENTER_DAY8_ABOVE_PER >= 0 ? (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.CENTER_DAY8_ABOVE_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.CENTER_DAY8_ABOVE_PER)
                            : Math.abs(item.CENTER_DAY8_ABOVE_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.CENTER_DAY8_ABOVE_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.CENTER_DAY8_ABOVE_PER)
                            : Math.abs(item.CENTER_DAY8_ABOVE_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="color-boxes-cotainer flex mt-2  2xl:mt-[.5vw] items-center">
              <h1 className="text-white font-semibold text-[16px] 2xl:text-[1vw] 2xl:w-[2.8vw]">
                North
              </h1>
              <div className="box-1 pl-6 2xl:pl-[1.6vw] flex flex-col">
                <div className="box-sigm-1 flex items-center ml-1">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 388 <span className="text-green-600 text-[10px] font-bold">+232%</span> */}
                      <div>{item.NORTH_DAY_0}</div>
                      {item.NORTH_DAY_0_PER >= 0 ? (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.NORTH_DAY_0_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.NORTH_DAY_0_PER)
                            : Math.abs(item.NORTH_DAY_0_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.NORTH_DAY_0_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.NORTH_DAY_0_PER)
                            : Math.abs(item.NORTH_DAY_0_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-green-400 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>
              <div className="box-2 flex flex-col mx-[-5px]">
                <div className="box-sigm-2 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 169 <span className="text-green-600 text-[10px] font-bold">+576%</span> */}
                      <div>{item.NORTH_DAY2_3}</div>
                      {item.NORTH_DAY2_3_PER >= 0 ? (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.NORTH_DAY2_3_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.NORTH_DAY2_3_PER)
                            : Math.abs(item.NORTH_DAY2_3_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.NORTH_DAY2_3_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.NORTH_DAY2_3_PER)
                            : Math.abs(item.NORTH_DAY2_3_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-yellow-300 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>
              <div className="box-3 flex flex-col">
                <div className="box-sigm-3 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 144 <span className="text-green-600 text-[10px] font-bold">+140%</span> */}
                      <div>{item.NORTH_DAY4_7}</div>
                      {item.NORTH_DAY4_7_PER >= 0 ? (
                        <span className="text-yellow-600 text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.NORTH_DAY4_7_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.NORTH_DAY4_7_PER)
                            : Math.abs(item.NORTH_DAY4_7_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.NORTH_DAY4_7_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.NORTH_DAY4_7_PER)
                            : Math.abs(item.NORTH_DAY4_7_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-red-600 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>
              <div className="box-4 flex flex-col mx-[-4px]">
                <div className="box-sigm-4 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 110 <span className="text-green-600 text-[10px] font-bold">+156%</span> */}
                      <div>{item.NORTH_DAY8_ABOVE}</div>
                      {item.NORTH_DAY8_ABOVE_PER >= 0 ? (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.NORTH_DAY8_ABOVE_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.NORTH_DAY8_ABOVE_PER)
                            : Math.abs(item.NORTH_DAY8_ABOVE_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-400  text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.NORTH_DAY8_ABOVE_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.NORTH_DAY8_ABOVE_PER)
                            : Math.abs(item.NORTH_DAY8_ABOVE_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="color-boxes-cotainer flex mt-2 items-center 2xl:mt-[.4vw]">
              <h1 className="text-white font-semibold text-[16px] 2xl:text-[1vw] 2xl:w-[2.9vw]">
                South
              </h1>
              <div className="box-1 pl-[26px] 2xl:pl-[1.7vw] flex flex-col">
                <div className="box-sigm-1 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 388 <span className="text-green-600 text-[10px] font-bold">+232%</span> */}
                      <div>{item.SOUTH_DAY_0}</div>
                      {item.SOUTH_DAY_0_PER >= 0 ? (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.SOUTH_DAY_0_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.SOUTH_DAY_0_PER)
                            : Math.abs(item.SOUTH_DAY_0_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.SOUTH_DAY_0_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.SOUTH_DAY_0_PER)
                            : Math.abs(item.SOUTH_DAY_0_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-green-400 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>
              <div className="box-2 flex flex-col mx-[-5px]">
                <div className="box-sigm-2 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 169 <span className="text-green-600 text-[10px] font-bold">+576%</span> */}
                      <div>{item.SOUTH_DAY2_3}</div>
                      {item.SOUTH_DAY2_3_PER >= 0 ? (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.SOUTH_DAY2_3_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.SOUTH_DAY2_3_PER)
                            : Math.abs(item.SOUTH_DAY2_3_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.SOUTH_DAY2_3_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.SOUTH_DAY2_3_PER)
                            : Math.abs(item.SOUTH_DAY2_3_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-yellow-300 rotate- text-[25px] ml-[-7px] 2xl:text-[1.6vw] 2xl:ml-[-0.4vw]" />
                </div>
              </div>
              <div className="box-3 flex flex-col">
                <div className="box-sigm-3 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 144 <span className="text-green-600 text-[10px] font-bold">+140%</span> */}
                      <div>{item.SOUTH_DAY4_7}</div>
                      {item.SOUTH_DAY4_7_PER >= 0 ? (
                        <span className="text-yellow-600 text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.SOUTH_DAY4_7_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.SOUTH_DAY4_7_PER)
                            : Math.abs(item.SOUTH_DAY4_7_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-400 text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.SOUTH_DAY4_7_PER).toString().length ===
                          1
                            ? "0" + Math.abs(item.SOUTH_DAY4_7_PER)
                            : Math.abs(item.SOUTH_DAY4_7_PER)}
                          %
                        </span>
                      )}
                    </p>
                  </div>
                  <BsCaretRightFill className="text-red-600 rotate- text-[25px] ml-[-7px] 2xl:ml-[-0.4vw] 2xl:text-[1.6vw]" />
                </div>
              </div>
              <div className="box-4 flex flex-col mx-[-4px]">
                <div className="box-sigm-4 flex items-center">
                  <div className="color-boxe bg-[#ededed] border-2 border-green-600 w-[38px] rounded-[4px] h-[36.37px] 2xl:w-[2.4vw] 2xl:h-[2.4vw]">
                    <p className="font-normal text-center text-[12px] 2xl:text-[.9vw] leading-[18px] 2xl:leading-[1.2vw]">
                      {/* 110 <span className="text-green-600 font-bold text-[10px]">+156%</span> */}
                      <div>{item.SOUTH_DAY8_ABOVE}</div>
                      {item.SOUTH_DAY8_ABOVE_PER >= 0 ? (
                        <span className="text-[#BE1A1A] text-[10px] font-bold 2xl:text-[.7vw]">
                          +
                          {Math.abs(item.SOUTH_DAY8_ABOVE_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.SOUTH_DAY8_ABOVE_PER)
                            : Math.abs(item.SOUTH_DAY8_ABOVE_PER)}
                          %
                        </span>
                      ) : (
                        <span className="text-green-400  text-[10px] font-bold 2xl:text-[.7vw]">
                          -
                          {Math.abs(item.SOUTH_DAY8_ABOVE_PER).toString()
                            .length === 1
                            ? "0" + Math.abs(item.SOUTH_DAY8_ABOVE_PER)
                            : Math.abs(item.SOUTH_DAY8_ABOVE_PER)}
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

export default SecondCard;
