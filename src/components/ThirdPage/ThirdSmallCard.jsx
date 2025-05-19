import React, { useContext, useEffect, useState } from "react";
import { RiTriangleFill } from "react-icons/ri";
import { BsCaretRightFill } from "react-icons/bs";
import { ThirdMainChart } from "./charts/ThirdMainChart";
import { Context } from "@/context/Context";
import axios from "axios";
import ResponsiveLineChart from "../SecondPage/charts/ResponsiveLineChart";

const ThirdSmallCard = ({name}) => {

// FIRST SECTION APIS
  const { filteredData } = useContext(Context);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchTatData = async () => {
      try {
        const dateId = filteredData[0]?.ID;
        if (!dateId) return;

        // First API call
        const response1 = await axios.get('https://dwpcare.com.pk/dwp/tat', {
          params: { EDATE: dateId },
        });
        setData(response1.data);

        // Second API call
        const response2 = await axios.get('https://dwpcare.com.pk/dwp/tat', {
          params: { SDATE: dateId, EDATE: dateId },
        });
        setData2(response2.data); 
      } catch (error) {
        console.error('Error fetching TAT data:', error);
      }
    };

    fetchTatData();
  }, [filteredData[0]?.ID]);

  const formatDataForChart = (data) => {
    return data.map((item) => ({
      week: item.SHORT_WEEKS.toString(),
      day_0: item.DAY_0,
      day2_3: item.DAY2_3,
      day4_7: item.DAY4_7,
      day8_above: item.DAY8_ABOVE,
    }));
  };

  const chartData2 = formatDataForChart(data2);

  const TableData = [
    {
      id: 1,
      weeks: "Week 39",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "1345",
      OTC1: "1345",
    },
    {
      id: 2,
      weeks: "Week 40",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "1345",
      OTC1: "1345",
    },
    {
      id: 3,
      weeks: "Week 41",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "1345",
      OTC1: "1345",
    },
    {
      id: 4,
      weeks: "Week 42",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "1345",
      OTC1: "1345",
    },
  ];

 

  const ispositive = false;
  return (
    <>
      <div className="w-[300px] smallcardMain pb-10 2xl:w-[100%] first-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[.75vw] mt-3">
        {/* Top Container */}

            <h1 className="text-white font-bold text-[20px] text-center 2xl:text-[1.2vw]">
              {name}
            </h1>
        <div className="SecondMainContainer flex xl:mt-0">
          {/* LEFT */}
          <div className="w-[64%]">

            <div className="holder flex items-end h-[62px] 2xl:h-[4vw]  2xl:mt-[1.5vw] mt-[2.2vw]">
              <p className="text-[#6bdb6b] 2xl:text-[3.2vw] font-bold text-[60px] flex justify-center">
                6.49
                <div className="2xl:mt-5">
                  <div className="icons flex flex-col justify-center items-center ml-2">
                    <h1 className="text-[12px] 2xl:text-[.9vw] font-bold text-[#BE1A1A]">
                      + 44 %
                    </h1>
                    <RiTriangleFill className="text-[#BE1A1A] w-[22px] h-[22px] 2xl:w-[1vw] 2xl:h-[1vw]" />
                  </div>

                  <h1 className="text-white text-[20px] 2xl:text-[1vw] text-center">
                    Days
                  </h1>
                </div>
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right_content_div w-[36%] border-l-white border-l pl-5 flex flex-col justify-center">
            <h1 className="text-white font-semibold 2xl:text-[1.2vw]">YTD</h1>
            <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
              ATAT
            </h1>
            <h1 className="text-[#49dd80] font-semibold tracking-wider  2xl:text-[1.3vw]">
              6.04
            </h1>
            <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
              Days
            </h1>
          </div>
        </div>

        {/* BOXES */}
       <hr className="mx-7 2xl:mt-[1.4vw] mb-4 mt-[1vw]"/>
        <div className="2xl:mt-[.9vw] mt-2 flex">
          <div className="box-1 flex flex-col">
            <div className="box-sigm-1 flex items-center">
              <div className="small-color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  895
                  {ispositive ? (
                    <span className="text-green-400 text-[12px] 2xl:text-[.7vw]">
                      + 07 %
                    </span>
                  ) : (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.7vw]">
                      - 07 %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-green-400 rotate- text-[25px] 2xl:text-[1.5vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white ml-[.7vw] font-thin">
              Day 1
            </p>
          </div>
          <div className="box-2 flex flex-col mx-[-5px] ml-[-18px]">
            <div className="box-sigm-2 flex items-center">
              <div className="small-color-boxe ml-[14px] bg-[#ededed] border-2 2xl:w-[3vw] 2xl:h-[2.4vw] border-yellow-300 w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  895
                  {ispositive ? (
                    <span className="text-green-400  text-[12px] 2xl:text-[.7vw]">
                      + 07 %
                    </span>
                  ) : (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.7vw]">
                      - 07 %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-yellow-300 text-[25px] 2xl:text-[1.5vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white  font-thin ml-[1.5vw]">
              Day2-3
            </p>
          </div>
          <div className="box-3 flex flex-col">
            <div className="box-sigm-3 flex items-center">
              <div className="small-color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  895
                  {ispositive ? (
                    <span className="text-yellow-600 text-[12px] 2xl:text-[.7vw]">
                      + 07 %
                    </span>
                  ) : (
                    <span className="text-green-400 text-[12px] 2xl:text-[.7vw]">
                      - 07 %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-red-600 rotate- text-[25px] 2xl:text-[1.5vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white ml-[.6vw] font-thin">
              Day4-7
            </p>
          </div>
          <div className="box-4 flex flex-col mx-[-4px]">
            <div className="box-sigm-4 flex items-center">
              <div className="small-color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  895
                  {ispositive ? (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.7vw]">
                      + 07 %
                    </span>
                  ) : (
                    <span className=" text-green-400  text-[12px] 2xl:text-[.7vw]">
                      - 07 %
                    </span>
                  )}
                </p>
              </div>
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white ml-[.9vw]  font-thin">
              8 & 8+
            </p>
          </div>
        </div>

        {/* TABLE DIV */}
        <div className="w-full px-1 mt-4 2xl:px-[.2vw]">
          <table className="w-full mb-6 mt-1">
            <tr className="text-white 2xl:text-[.8vw] text-[14px] border-b">
              <th className="font-medium border-r-2 text-left">Weeks</th>
              <th className="font-medium border-r-2 text-center">Day1</th>
              <th className="font-medium border-r-2">2-3</th>
              <th className="font-medium border-r-2">4-7</th>
              <th className="font-medium">8&+</th>
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
        <hr className="mx-6"/>
        <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.4vw]">
          {/* <ThirdMainChart chartData={chartData2} /> */}
                    <ResponsiveLineChart/>
          
        </div>
      </div>
    </>
  );
};

export default ThirdSmallCard;
