import React, { useState, useEffect } from "react";
import Gauge from "./Gauge";
import TableLineChart from "./TableLineChart";
import BottomCharts4 from "./BottomCharts4";
import BottomCharts2 from "./BottomCharts2";
import BottomCharts3 from "./BottomCharts3";
import axios from "axios";


const BottomTable = ({startWeek, endWeek }) => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartData4, setChartData4] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartData3, setChartData3] = useState([]);
  const chartConfig = {
    Complaints: {
      label: "Complaints",
    },
    calls: {
      label: "Calls",
      color: "#0347CD",
    },
    chat: {
      label: "Chat",
      color: "#CD0364",
    },
    social: {
      label: "Social",
      color: "#05FF00",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dwpcare.com.pk/DWP/dayWise?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`);
        const data = await response.json();

        const mappedData = data.map((item) => ({
          date: item?.SERIAL_NUMBER,
          Calls: item?.TOTAL_OFFERED,
          CallDate:item?.CALLDATE
        }));

        setChartData(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [startWeek, endWeek]);

  // useEffect(() => {
    
  //   fetch(
  //     `https://dwpcare.com.pk/dwp/getCallRecord?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`
  //   )
  //     .then((response) => {
  //       // if (!response.ok) {
  //       //   throw new Error("Network response was not ok");
  //       // }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, [startWeek, endWeek]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dwpcare.com.pk/dwp/getCallRecord?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle error state or display an error message
      }
    };
  
    fetchData();
  }, [startWeek, endWeek]);
  

  useEffect(() => {
        const fetchData4 = async () => {
          try {
       
            const response = await axios.get(`https://dwpcare.com.pk/DWP/cc_comp_reg?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`);
     
          
            const apiData = response.data[0];
                ///console.log(apiData);
            // Transform the API response to the chartData format
            const transformedData = [
              { browser: 'calls', Complaints: apiData.CALLS, fill: chartConfig.calls.color },
              { browser: 'chat', Complaints: apiData.CHATS, fill: chartConfig.chat.color },
              { browser: 'social', Complaints: apiData.SM, fill: chartConfig.social.color },
            ];
    
            setChartData4(transformedData);
          } catch (error) {
            console.error("Error fetching data from API:", error);
          }
        };
    
        fetchData4();
      }, [startWeek, endWeek]);


      useEffect(() => {
        // Fetch data from the API
        const fetchData2 = async () => {
          try {
            const response = await axios.get(`https://dwpcare.com.pk/DWP/cc_weekly_statistics?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`); // Replace with actual API endpoint
            setChartData2(response.data);
          } catch (error) {
            console.error("Error fetching chart data", error);
          }
        };
    
        fetchData2();
      }, [startWeek, endWeek]);
    

     

      useEffect(() => {
        const fetchData3 = async () => {
          try {
            const response = await fetch(`https://dwpcare.com.pk/DWP/categoryWise?STARTWEEK=${startWeek}&ENDWEEK=${endWeek}`); // Replace with your API endpoint
            const data = await response.json();
    
            // Convert the response data into the desired format
            const formattedData = [
              { cat: "Gree AC", calls: data[0]?.GREE_AC, chat: 103, social: 15 },
              { cat: "Eco AC", calls: data[0]?.ECO_AC, chat: 7, social: 3 },
              { cat: "LED", calls: data[0]?.LED, chat: 5, social: 2 },
              { cat: "Ref", calls: data[0]?.REF, chat: 10, social: 7 },
              { cat: "Others", calls: data[0]?.OTHERS, chat: 15, social: 7 },
            ];
    
            setChartData3(formattedData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData3();
      }, [startWeek, endWeek]);



  return (
      
    
    <div className="w-[92%]  2xl:w-[96%] min-h-[220px] h-auto bottom-table mt-3 rounded-[6px] py-2 flex flex-wrap">
       {data.map((item, index) => (
      <div key={index} className="table-content flex flex-col w-[220px] 2xl:w-[14.458vw]  gap-3 pl-4">
        <h className="text-[14px] text-white font-bold 2xl:text-[1vw]">
          Call Center Trend
        </h>
        
        <div className="boox-1 w-[157px] 2xl:w-[10.4vw] h-[62px] 2xl:h-[4.2vw] bottom-table-box flex gap-3 justify-center items-center rounded-[6px]">
        
          
        <div>
          <h1 className="text-[14px] text-white  2xl:text-[.7vw]">
            Received
          </h1>
          <h1 className="font-bold text-white text-[15px] 2xl:text-[1vw] text-center">
          {Number(item?.TOTAL_OFFERED_WEEKS).toLocaleString()} <span className="text-[14px] 2xl:text-[.6vw]">Calls</span>
          </h1>
          </div>
        <div>
          <h1 className="text-[14px] text-white  2xl:text-[.7vw] text-center">
          YTD
          </h1>
          <h1 className="font-bold text-white text-[15px] 2xl:text-[1vw] text-center">
          {Number(item.TOTAL_OFFERED_ALL).toLocaleString()} <span className="text-[14px] 2xl:text-[.6vw]"></span>
          </h1>
          </div>
        
        </div>
        <div className="boox-1 w-[157px] 2xl:w-[10.4vw] h-[62px] 2xl:h-[4.2vw] bottom-table-box flex gap-3 justify-center items-center rounded-[6px]">
        <div>
          <h1 className="text-[14px] text-white  2xl:text-[.7vw]">
            Answered
          </h1>
          <h1 className="font-bold text-white text-[15px] 2xl:text-[1vw] text-center">
          {Number(item?.ANSWERED_CALLS_WEEKS).toLocaleString()} <span className="text-[14px] 2xl:text-[.6vw]">Calls</span>
          </h1>
          </div>
        <div>
          <h1 className="text-[14px] text-white  2xl:text-[.7vw] text-center">
          YTD
          </h1>
          <h1 className="font-bold text-white text-[15px] 2xl:text-[1vw] text-center">
          {Number(item?.ANSWERED_CALLS_ALL).toLocaleString()} <span className="text-[14px] 2xl:text-[.6vw]"></span>
          </h1>
          </div>
        
        </div>
        <div className="boox-1 w-[157px] 2xl:w-[10.4vw] h-[62px] 2xl:h-[4.2vw] bottom-table-box flex gap-8 justify-center items-center rounded-[6px]">
        <div>
          <h1 className="text-[14px] text-white  2xl:text-[.7vw]">
           Abandon
          </h1>
          <h1 className="font-bold text-white text-[15px] 2xl:text-[1vw]">
          {Number(item?.ABANDONED_CALLS_WEEKS).toLocaleString()} <span className="text-[14px] 2xl:text-[.6vw]">Calls</span>
          </h1>
          </div>
        <div>
          <h1 className="text-[14px] text-white  2xl:text-[.7vw] text-center">
          YTD
          </h1>
          <h1 className="font-bold text-white text-[15px] 2xl:text-[1vw] text-center">
          {Number(item?.ABANDONED_CALLS_ALL).toLocaleString()} <span className="text-[14px] 2xl:text-[.6vw]"></span>
          </h1>
        
          </div>

        </div>
         
      </div>
       ))}      <div className="gauge w-[150px] 2xl:w-[11.813vw] flex justify-start items-center 2xl:ml-[-1.5vw] 2xl:pl-[-1vw] ">
        {data.map((item) => (   
       <Gauge abandonRatio={item?.ABANDONRATIO} answerRatio={item?.ANSWERRATIO} />
        ))} 
      </div>
      <div className="charts sm:w-[68%] 2xl:md:w-[69%] min-h-[220px] flex flex-col h-auto pl-4 2xl:ml-[-2vw]">
        <div className="tableline-chart  2xl:ml-[-48px]">
        <h1 className="text-center text-white tracking-widest">Call Center Data</h1>
        <TableLineChart chartData={chartData} />
        </div>
        <div className="multi-charts w-full flex flex-wrap gap-3 2xl:gap-[1vw]">
          <div className="chartt-1">
          <BottomCharts4 chartData={chartData4} />
          
          </div>
          <div className="chartt-2">
            <BottomCharts2  chartData={chartData2} />
          </div>
          <div className="chartt-3">
            <BottomCharts3  chartData={chartData3}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomTable;
