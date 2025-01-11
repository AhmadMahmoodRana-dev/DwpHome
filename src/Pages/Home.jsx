import BottomTable from "@/components/BottomTable";
import FirstCard from "@/components/FirstCard";
import FourthCard from "@/components/FourthCard";
import SecondCard from "@/components/SecondCard";
import ThirdCard from "@/components/ThirdCard";
import Weather from "@/components/Weather";
import { Context } from "@/context/Context";
import React, { useContext } from "react";

const Home = () => {
  const { startWeek, endWeek,setStartWeek,setEndWeek,CurrentWeek,Week,handleStartWeekChange } = useContext(Context);
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <Weather
          startWeek={startWeek}
          setStartWeek={setStartWeek}
          endWeek={endWeek}
          setEndWeek={setEndWeek}
          CurrentWeek={CurrentWeek}
          Week={Week}
          onChange={(e) => handleStartWeekChange(parseInt(e.target.value))}
        />
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
  );
};

export default Home;
