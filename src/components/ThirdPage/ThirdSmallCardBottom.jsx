import React, { useContext, useEffect, useState } from "react";
import { ThirdMainChart } from "./charts/ThirdMainChart";
import axios from "axios";
import { Context } from "@/context/Context";

const ThirdSmallCardBottom = ({ name }) => {

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
      OTC: "64%",
      OTC1: "64%",
    },
    {
      id: 2,
      weeks: "Week 40",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
      OTC1: "64%",
    },
    {
      id: 3,
      weeks: "Week 41",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
      OTC1: "64%",
    },
    {
      id: 4,
      weeks: "Week 42",
      Inset: "2,308",
      Outset: "2,378",
      OTC: "64%",
      OTC1: "64%",
    },
  ];
  return (
     <div className="w-[300px] 2xl:w-[100%] smallcardMain first-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vw] mt-3">
          {/* FIRST  */}
          <div>
            <h1 className="text-white font-semibold text-[13px] 2xl:text-[.8vw] tracking-wide text-center">
             {name} Ac ATAT Nation Wise
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
            <hr className="mx-6" />
            <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.4vw]">
              <ThirdMainChart chartData={chartData2} />
            </div>
          </div>
        </div>
  );
};

export default ThirdSmallCardBottom;
