import React, { useState, useEffect } from 'react';
import "../Styling/Home.css";
import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard";
import ThirdCard from "../components/ThirdCard";
import FourthCard from "../components/FourthCard";
import Sidebar from "../components/Sidebar";
import BottomTable from "@/components/BottomTable";
import Weather from "@/components/Weather";
import { GoSidebarCollapse } from "react-icons/go";
import MobileSidebar from '@/components/MobileSidebar';

const Home = () => {
  const [startWeek, setStartWeek] = useState(0);
  const [endWeek, setEndWeek] = useState(0);
  const [CurrentWeek, setCurrentWeek] = useState(0);
  const [Week, setWeek] = useState(0);
  const [error, setError] = useState(null);
  const [openSidebar,setOpenSidebar] = useState(true)

  
    useEffect(() => {
     

        const fetchWeekData = async () => {
          try {
            const response = await fetch('https://dwpcare.com.pk/dwp/currentWeek');
            const data = await response.json();
            
            // Check if the data is an array and extract the first element
            if (Array.isArray(data) && data.length > 0) {
              const weekData = data[0]; // Extract the object from the array
      
              // Log the extracted data
             /// console.log("Extracted week data:", weekData);
      
              // Access the properties and set state
              setStartWeek(Number(weekData.START_WEEK));
              setEndWeek(Number(weekData.END_WEEK));
              setCurrentWeek(Number(weekData.START_WEEK));
              setWeek(Number(weekData.END_WEEK));
            } else {
              console.log("Invalid response format");
            }
          } catch (err) {
            setError(err);
            console.error('Error fetching week data:', err);
          }
        };
      
        fetchWeekData();
      
    }, []);
    
  useEffect(() => {
    if (startWeek !== null) {
      setEndWeek(startWeek + 3);
    }
  }, [startWeek]);

  const handleStartWeekChange = (newStartWeek) => {
    setStartWeek(newStartWeek);
  };

  return (
    <div className="flex w-full min-h-screen h-auto">
      <Sidebar />
      <div className=" w-full px-3 pb-10 flex flex-col">
      <div>
      {openSidebar ? (
        <GoSidebarCollapse
          className="text-white text-xl ml-1 sm:hidden block"
          onClick={() => setOpenSidebar(false)}  // Close the sidebar when collapse icon is clicked
        />
      ) : (
        <MobileSidebar
          setOpenSidebar={setOpenSidebar}
          openSidebar={openSidebar}
        />
      )}
    </div> 
        <div className="flex flex-col items-center justify-center w-full">
          <Weather startWeek={startWeek} setStartWeek={setStartWeek} endWeek={endWeek} setEndWeek={setEndWeek} CurrentWeek={CurrentWeek} Week={Week} onChange={(e) => handleStartWeekChange(parseInt(e.target.value))} />
        </div>
        <div className="allcards bg-transparent items-center justify-center  w-full  h-auto  pt-2 flex flex-wrap gap-2 2xl:pt-[.6vw] 2xl:gap-[.5vw]">
          <FirstCard startWeek={startWeek} endWeek={endWeek} />
          <SecondCard startWeek={startWeek} endWeek={endWeek} />
          <ThirdCard startWeek={startWeek} endWeek={endWeek} />
        <FourthCard startWeek={startWeek} endWeek={endWeek} /> 
        </div>
        <div className="data-center w-full flex justify-center">
          <BottomTable startWeek={startWeek} endWeek={endWeek} />
        </div>
      </div>
    </div>
  );
};

export default Home;

/*import React, { useState, useEffect } from 'react';
import "../Styling/Home.css";
import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard";
import ThirdCard from "../components/ThirdCard";
import FourthCard from "../components/FourthCard";
import Sidebar from "../components/Sidebar";
import BottomTable from "@/components/BottomTable";
import Weather from "@/components/Weather";
const Home = () => {
  const [startWeek, setStartWeek] = useState(0);
  const [endWeek, setEndWeek] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const getCurrentWeek = () => {
          const date = new Date();
          const oneJan = new Date(date.getFullYear(), 0, 1);
          const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
          const weekNumber = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
          return weekNumber;
        };

        // Get the current week number
        const weekNumber = getCurrentWeek();
        setStartWeek(weekNumber - 5);
      } catch (err) {
        setError(err);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    if (startWeek !== null) {
      setEndWeek(startWeek + 3);
    }
  }, [startWeek]);

  const handleStartWeekChange = (newStartWeek) => {
    setStartWeek(newStartWeek);
  };

  return (
    <div className="flex w-full min-h-screen h-auto">
      <Sidebar />
      <div className="w-full px-3 pb-10 flex flex-col">
        <div className=" flex flex-col items-center justify-center w-full ">

          <Weather startWeek={startWeek} setStartWeek={setStartWeek} endWeek={endWeek} setEndWeek={setEndWeek} onChange={(e) => handleStartWeekChange(parseInt(e.target.value))} />
        </div>
        <div className="allcards bg-transparent items-center justify-center  w-full  h-auto  pt-2 flex flex-wrap gap-2">
          <FirstCard startWeek={startWeek} endWeek={endWeek} />
          <SecondCard startWeek={startWeek} endWeek={endWeek} />
          <ThirdCard startWeek={startWeek} endWeek={endWeek} />
          <FourthCard startWeek={startWeek} endWeek={endWeek} />
        </div>
        <div className="data-center w-full flex justify-center">
          <BottomTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
*/