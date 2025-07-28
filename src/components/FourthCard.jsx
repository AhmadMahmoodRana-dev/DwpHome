import React, { useEffect, useState } from "react";
// import FourthBarChart from "./FourthBarChart";
import FourthChart from "./FourthChart";
import FourthChart2 from "./FourthChart2";
import { RiTriangleFill } from "react-icons/ri";
import { Component2 } from "../components/ui/Component2";
import SemiCircularProgressive from "./SemiCircularProgressive";
const FourthCard = ({ startWeek, endWeek }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data1, setData1] = useState([]);
  const [datanorth, setDataNorth] = useState([]);
  const [datasouth, setDataSouth] = useState([]);
  useEffect(() => {
    // Fetch data from first API
    fetch(`https://dwpcare.com.pk/dwp/revenue?ENDWEEK=${endWeek}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);

        //setLoading1(false);
        let apiData = Array.isArray(data) ? data[0] : data;

        // Log apiData to check if it is defined and has the expected properties
        //console.log("Processed API Data:", apiData);

        // Check if necessary properties exist in the data
        if (
          apiData &&
          apiData.PARTS !== undefined &&
          apiData.SERVICE !== undefined &&
          apiData.VISIT_CHARGES !== undefined &&
          apiData.INSTALL_CORPORATE !== undefined
        ) {
          const formattedData = formatDataForCenter(apiData);
          setData1(formattedData);
        } else {
          console.error(
            "Unexpected data format or missing properties:",
            apiData
          );
        }
        if (
          apiData &&
          apiData.PARTS !== undefined &&
          apiData.SERVICE !== undefined &&
          apiData.VISIT_CHARGES !== undefined &&
          apiData.INSTALL_CORPORATE !== undefined
        ) {
          const formattedData = formatDataForNorth(apiData);
          setDataNorth(formattedData);
        } else {
          console.error(
            "Unexpected data format or missing properties:",
            apiData
          );
        }

        if (
          apiData &&
          apiData.PARTS !== undefined &&
          apiData.SERVICE !== undefined &&
          apiData.VISIT_CHARGES !== undefined &&
          apiData.INSTALL_CORPORATE !== undefined
        ) {
          const formattedData = formatDataForSouth(apiData);
          setDataSouth(formattedData);
        } else {
          console.error(
            "Unexpected data format or missing properties:",
            apiData
          );
        }
      });
    /*.catch((error) => {
        setError1(error);
        setLoading1(false);
      });*/

    fetch(
      `https://dwpcare.com.pk/dwp/revenue?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`
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

  const formatDataForChart = (data) => {
    return data.map((item) => ({
      Week: item.SHORT_WEEKS, // Assuming NO_OF_WEEKS is the month identifier
      PARTS: item.PARTS,
      SERVICE: item.SERVICE,
      CHARGES: item.VISIT_CHARGES,
      INSTALL: item.INSTALL_CORPORATE,
    }));
  };

  const formatDataForCenter = (apiData) => {
    // Format the data to fit the required chart structure
    return [
      {
        browser: "Parts",
        revenue: apiData.CENTER_REVENUE_PART,
        fill: "#0347CD",
      },
      {
        browser: "Services",
        revenue: apiData.CENTER_REVENUE_SERVICE,
        fill: "#CD0364",
      },
      {
        browser: "Visit Charges",
        revenue: apiData.CENTER_REVENUE_VISIT,
        fill: "#05FF00",
      },
      {
        browser: "Inst/Corp",
        revenue: apiData.CENTER_REVENUE_INSTALL,
        fill: "#B07F03",
      },
    ];
  };

  const formatDataForNorth = (apiData) => {
    // Format the data to fit the required chart structure
    return [
      {
        browser: "Parts",
        revenue: apiData.NORTH_REVENUE_PART,
        fill: "#0347CD",
      },
      {
        browser: "Services",
        revenue: apiData.NORTH_REVENUE_SERVICE,
        fill: "#CD0364",
      },
      {
        browser: "Visit Charges",
        revenue: apiData.NORTH_REVENUE_VISIT,
        fill: "#05FF00",
      },
      {
        browser: "Inst/Corp",
        revenue: apiData.NORTH_REVENUE_INSTALL,
        fill: "#B07F03",
      },
    ];
  };

  const formatDataForSouth = (apiData) => {
    // Format the data to fit the required chart structure
    return [
      {
        browser: "Parts",
        revenue: apiData.SOUTH_REVENUE_PART,
        fill: "#0347CD",
      },
      {
        browser: "Services",
        revenue: apiData.SOUTH_REVENUE_SERVICE,
        fill: "#CD0364",
      },
      {
        browser: "Visit Charges",
        revenue: apiData.SOUTH_REVENUE_VISIT,
        fill: "#05FF00",
      },
      {
        browser: "Inst/Corp",
        revenue: apiData.SOUTH_REVENUE_INSTALL,
        fill: "#B07F03",
      },
    ];
  };

  const chartData = formatDataForChart(data2);

  return (
    <>
      <div className="fourth-div 2xl:w-[23.5%]  w-[289px] min-h-[650px] h-auto rounded-[6px] pt-5 px-4 2xl:pt-[1.3vw]">
        <h3 className="text-white font-bold text-[14px] 2xl:text-[1.1vw] leading-10 mt-[-22px] 2xl:leading-[2.4vw] 2xl:mt-[-1.2vw]">
          Weekly Revenue
        </h3>
        <div className="flex gap-2 2xl:gap-[.3vw]">
          {data.map((item) => (
            <>
              <p className=" text-white font-bold mt-2 2xl:mt-[.5vw] text-[45px] leading-9 2xl:text-[3.1vw] 2xl:leading-[2.5vw]">
                {item.TOTAL_REVENUE.toLocaleString()}
              </p>

              {item.TOTAL_REVENUE_PER >= 0 ? (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows1">
                  <RiTriangleFill className="text-[#148D00] w-[22px] h-[22px] 2xl:w-[1.5vw] 2xl:h-[1.5vw]" />
                  <h1 className="text-[16px] font-bold text-[#148D00] 2xl:text-[1vw]">
                    +
                    {Math.abs(item.TOTAL_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.TOTAL_REVENUE_PER)
                      : Math.abs(item.TOTAL_REVENUE_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col justify-center items-center ml-1 arrows1">
                  <h1 className="text-[16px] font-bold text-[#BE1A1A] 2xl:text-[1vw]">
                    -
                    {Math.abs(item.TOTAL_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.TOTAL_REVENUE_PER)
                      : Math.abs(item.TOTAL_REVENUE_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-[#BE1A1A] w-[22px] h-[22px] rotate-180 2xl:w-[1.5vw] 2xl:h-[1.5vw]" />
                </div>
              )}

              <hr className="border border-white h-[85px] 2xl:h-[5.4vw] 2xl:mt-[-1.6vw] mt-[-30px] 2xl:ml-[.5vw]" />
              <div className="ml-3">
                <h1 className="font-bold text-white text-[16px] 2xl:text-[1vw] mt-[-30px] 2xl:mt-[-2vw]">
                  YTD
                </h1>
                <h3 className="font-thin text-[15px] 2xl:text-[.98vw] text-white leading-[1px] mt-2 2xl:mt-[.6vw]">
                  Revenue
                </h3>
                <h2 className="text-white font-bold text-[20px] mt-2 2xl:mt-[.6vw]  2xl:text-[1.3vw]">
                  {item.YTD_REVENUE}
                </h2>
                <h1 className="text-white text-[16px] mt-[-6px] 2xl:text-[1vw] font-bold ">
                  Millions
                </h1>
              </div>
            </>
          ))}
        </div>

        {/* ### PROGRESS BAR  */}
        <p className="text-white text-[13px] pb-2 mt-1 2xl:text-[.8vw] 2xl:mt-[.2vw] 2xl:pb-[.5vw]">
          Millions
        </p>
        {data.map((item) => (
          <>
            <div className="progressBar flex justify-between">
              <div className="handle-progress">
                <h1 className="text-[12px] 2xl:text-[.7vw] font-semibold text-white text-center">
                  Parts
                </h1>

                <div className=" font-semibold text-white">
                <SemiCircularProgressive percentage={item.PART_PER}/>
                </div>
              </div>
              <div className="handle-progress">
                <h1 className="text-[12px] 2xl:text-[.7vw] font-semibold text-white text-center">
                  Services
                </h1>
                <div className="text-[12px] 2xl:text-[.7vw] font-semibold text-white">
                <SemiCircularProgressive  percentage={item.SERVICE_PER} />
                </div>
              </div>
              <div className="handle-progress">
                <h1 className="text-[10px] 2xl:text-[.6vw] font-semibold text-white text-center mt-[-12px] 2xl:mt-[-.7vw]">
                  Visit <br />
                  Charges
                </h1>
                <div className="text-[12px] 2xl:text-[.7vw] font-semibold text-white">
                  <SemiCircularProgressive   percentage={item.VISIT_PER} />
                </div>
              </div>
              <div className="handle-progress">
                <h1 className="text-[12px] 2xl:text-[.7vw] font-semibold text-white text-center">
                  Inst/Corp
                </h1>
                <div className="text-[12px] 2xl:text-[.7vw] font-semibold text-white ">
                  <SemiCircularProgressive  percentage={item.INSTALL_PER} />
                </div>
              </div>
            </div>
          </>
        ))}

        {/* TAble */}
        <div className="px-1 mt-4 pb-3 2xl:mt-[1vw] forthTable 2xl:pb-[.8vw]=">
          <table className="w-[250px] 2xl:w-[100%]">
            <tr className="text-white">
              <th></th>
              <th className="text-[10px] 2xl:text-[.6vw] font-normal">Parts</th>
              <th className="text-[10px] 2xl:text-[.6vw] font-normal">
                Services
              </th>
              <th className="text-[10px] 2xl:text-[.6vw] font-normal">
                Visits
              </th>
              <th className="text-[10px] 2xl:text-[.6vw] font-normal">
                Inst/Corp
              </th>
            </tr>
            {data2.map((item) => (
              <>
                <tr>
                  <td className="border-r border-t border-solid text-[12px] 2xl:text-[.8vw]  font-normal text-white pr-3">
                    {item.WEEKS}
                  </td>
                  <td className=" border-t border-solid  text-white 2xl:text-[.9vw] text-[14px] font-normal pl-1 text-center ">
                    {parseFloat(item.PARTS).toFixed(2)}
                  </td>
                  <td className=" border-t border-solid  text-white 2xl:text-[.9vw] text-[14px] font-normal pl-4">
                    {parseFloat(item.SERVICE).toFixed(2)}
                  </td>
                  <td className=" border-t border-solid  text-white 2xl:text-[.9vw] text-[14px] font-normal text-center">
                    {parseFloat(item.VISIT_CHARGES).toFixed(2)}
                  </td>
                  <td className=" border-t border-solid  text-white 2xl:text-[.9vw] text-[14px] font-normal text-right pr-2">
                    {parseFloat(item.INSTALL_CORPORATE).toFixed(2)}
                  </td>
                </tr>
              </>
            ))}
          </table>
        </div>
        <Component2 chartData={chartData} />
        {data.map((item) => (
          <>
            <div className="chart flex items-center px-1 mt-[12px] pt-1 2xl:pt-[.4vw] 2xl:mt-[.8vw]">
              <div className="content leading-5 2xl:leading-[1.3vw] flex flex-col justify-center items-center min-w-[50px] max-w-[50px] 2xl:min-w-[3.3vw] 2xl:max-w-[3.3vw]">
                <h1 className="font-bold text-white text-[14px] 2xl:text-[.9vw]">
                  Center
                </h1>
                <h1 className="text-white font-bold text-[20px] 2xl:text-[1.4vw]">
                  {item.CENTER_REVENUE}
                  {/* { item.CENTER_REVENUE.toString().length === 1 ? '0' + item.CENTER_REVENUE_PER :item.CENTER_REVENUE_PER} */}
                </h1>
                <p className="font-extralight text-[11px] text-white 2xl:text-[.7vw]">
                  millions
                </p>
              </div>
              {item.CENTER_REVENUE_PER >= 0 ? (
                <div className="icons flex flex-col items-center mx-1 z-0 w-[70px] 2xl:w-[4vw]">
                  <RiTriangleFill className="text-[#148D00] w-[20px] h-[20px] 2xl:w-[1.3vw] 2xl:h-[1.3vw]" />
                  <h1 className="text-[16px] font-bold text-[#148D00] 2xl:text-[.9vw]">
                    +
                    {Math.abs(item.CENTER_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.CENTER_REVENUE_PER)
                      : Math.abs(item.CENTER_REVENUE_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col items-center mx-1 z-0 w-[70px] 2xl:w-[4vw]">
                  <h1 className="text-[16px] font-bold text-[#BE1A1A] 2xl:text-[.9vw]">
                    -
                    {Math.abs(item.CENTER_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.CENTER_REVENUE_PER)
                      : Math.abs(item.CENTER_REVENUE_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-[#BE1A1A] w-[20px] h-[20px] 2xl:w-[1.3vw] 2xl:h-[1.3vw] rotate-180" />
                </div>
              )}

              <div className="ml-[6px] 2xl:ml-[.4vw] w-full h-[3.5vw] min-h-[50px]">
                <FourthChart chartData={data1} />
              </div>
            </div>
            <div className="chart flex items-center px-1 ">
              <div className="content leading-5 flex flex-col 2xl:leading-[1.3vw] justify-center items-center min-w-[50px] max-w-[50px] 2xl:min-w-[3.3vw] 2xl:max-w-[3.3vw]">
                <h1 className="font-bold text-white text-[14px] 2xl:text-[.9vw]">
                  North
                </h1>
                <h1 className="text-white font-bold text-[20px] 2xl:text-[1.4vw]">
                  {item.NORTH_REVENUE}
                </h1>
                <p className="font-extralight text-[11px] text-white 2xl:text-[.7vw]">
                  millions
                </p>
              </div>
              {item.NORTH_REVENUE_PER >= 0 ? (
                <div className="icons flex flex-col items-center mx-1 w-[70px] 2xl:w-[4vw]">
                  <RiTriangleFill className="text-[#148D00] w-[20px] h-[20px] 2xl:w-[1.3vw] 2xl:h-[1.3vw]" />
                  <h1 className="text-[16px] font-bold text-[#148D00] 2xl:text-[.9vw]">
                    +
                    {Math.abs(item.NORTH_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.NORTH_REVENUE_PER)
                      : Math.abs(item.NORTH_REVENUE_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col items-center mx-1 w-[70px] 2xl:w-[4vw]">
                  <h1 className="text-[16px] font-bold text-[#BE1A1A] 2xl:text-[.9vw]">
                    -
                    {Math.abs(item.NORTH_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.NORTH_REVENUE_PER)
                      : Math.abs(item.NORTH_REVENUE_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-[#BE1A1A] w-[20px] h-[20px] 2xl:w-[1.3vw] 2xl:h-[1.3vw] rotate-180" />
                </div>
              )}
              <div className="ml-[6px] 2xl:ml-[.4vw] w-full h-[3.5vw] min-h-[50px]">
                <FourthChart2 chartData={datanorth} />
              </div>
            </div>
            <div className="chart flex items-center px-1 ">
              <div className="content leading-5 flex flex-col 2xl:leading-[1.3vw] justify-center items-center min-w-[50px] max-w-[50px] 2xl:min-w-[3.3vw] 2xl:max-w-[3.3vw]">
                <h1 className="font-bold text-white text-[14px] 2xl:text-[.9vw]">
                  South
                </h1>
                <h1 className="text-white font-bold text-[20px] 2xl:text-[1.4vw]">
                  {item.SOUTH_REVENUE}
                </h1>
                <p className="font-extralight text-[11px] text-white 2xl:text-[.7vw]">
                  millions
                </p>
              </div>
              {item.SOUTH_REVENUE_PER >= 0 ? (
                <div className="icons flex flex-col items-center mx-1 w-[70px] 2xl:w-[4vw]">
                  <RiTriangleFill className="text-[#148D00] w-[20px] h-[20px] 2xl:w-[1.3vw] 2xl:h-[1.3vw]" />
                  <h1 className="text-[16px] font-bold text-[#148D00] 2xl:text-[.9vw]">
                    +
                    {Math.abs(item.NORTH_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.NORTH_REVENUE_PER)
                      : Math.abs(item.NORTH_REVENUE_PER)}
                    %
                  </h1>
                </div>
              ) : (
                <div className="icons flex flex-col items-center mx-1 w-[70px] 2xl:w-[4vw]">
                  <h1 className="text-[16px] font-bold text-[#BE1A1A] 2xl:text-[.9vw]">
                    -
                    {Math.abs(item.NORTH_REVENUE_PER).toString().length === 1
                      ? "0" + Math.abs(item.SOUTH_REVENUE_PER)
                      : Math.abs(item.SOUTH_REVENUE_PER)}
                    %
                  </h1>
                  <RiTriangleFill className="text-[#BE1A1A] w-[20px] h-[20px] 2xl:w-[1.3vw] 2xl:h-[1.3vw] rotate-180" />
                </div>
              )}
              <div className="ml-[6px] 2xl:ml-[.4vw] w-full h-[3.5vw] min-h-[50px]">
                <FourthChart2 chartData={datasouth} />
              </div>
            </div>
           

            <div className="flex mt-1 mb-1  bg-slate-300 w-[95%] gap-4 ml-[17px] 2xl:ml-[.6vw] px-2 rounded-[6px]">
              <p className="text-[11px] 2xl:text-[.7vw] text-[#05367d]">
                Parts
              </p>
              <p className="text-[11px] 2xl:text-[.7vw] text-[#ce0265]">
                Services
              </p>
              <p className="text-[11px] 2xl:text-[.7vw] text-[#148D00]">
                Visit Charges
              </p>

              <p className="text-[11px] 2xl:text-[.7vw] text-[#ae8104]">
                Inst/Corp
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FourthCard;
