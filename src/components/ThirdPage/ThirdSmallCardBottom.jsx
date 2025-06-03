import React, { useContext, useEffect, useState } from "react";
import { ThirdMainChart } from "./charts/ThirdMainChart";
import axios from "axios";
import { Context } from "@/context/Context";
import ResponsiveLineChart from "../SecondPage/charts/ResponsiveLineChart";
const ThirdSmallCardBottom = ({ name,productTable,lineChart }) => {

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

  const formattedLineChartDataProducts = lineChart.map(
    (week, index) => ({
      week: `Week ${week.SHORT_WEEKS}`,
      DAY_0: week.Product_Day_0,
      DAY2_3: week.Product_Day_2_3,
      DAY4_7: week.Product_Day_4_7,
      DAY8_ABOVE: week.Product_Day8_above,
    })
  );
 
  return (
     <div className="w-[300px] 2xl:w-[100%] pb-10 smallcardMain first-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vw] mt-3">
          {/* FIRST  */}
          <div>
            <h1 className="text-white font-semibold text-[13px] 2xl:text-[.8vw] tracking-wide text-center">
             {name}  ATAT Nation Wise
            </h1>
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
    
                {productTable.map((data, index) => {
                  return (
                    <tr>
                      <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                        {data?.WEEKS ?? 0}
                      </td>
                      <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                        {data?.PRODUCT_DAY_0 ?? 0}
                      </td>
                      <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                        {data?.PRODUCT_DAY2_3 ?? 0}
                      </td>
                      <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                        {data?.PRODUCT_DAY4_7 ?? 0}
                      </td>
                      <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                        {data?.PRODUCT_DAY8_ABOVE ?? 0}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <hr className="mx-6" />
            <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.4vw] -ml-2">
              {/* <ThirdMainChart chartData={chartData2} /> */}
                     <ResponsiveLineChart
                chartData={formattedLineChartDataProducts}
                keysToDisplay={[
                  "DAY_0",
                  "DAY2_3",
                  "DAY4_7",
                  "DAY8_ABOVE",
                ]}
              />
              
            </div>
          </div>
        </div>
  );
};

export default ThirdSmallCardBottom;
