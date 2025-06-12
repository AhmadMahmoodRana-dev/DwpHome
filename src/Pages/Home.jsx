// import BottomTable from "@/components/BottomTable";
// import FirstCard from "@/components/FirstCard";
// import FourthCard from "@/components/FourthCard";
// import SecondCard from "@/components/SecondCard";
// import ThirdCard from "@/components/ThirdCard";
// import Weather from "@/components/Weather";
// import { Context } from "@/context/Context";
// import React, { useContext } from "react";

// const Home = () => {
//   const {
//     week, setWeek, filteredData,
//     currentWeek,
//     nextWeek,
//     previousWeek } = useContext(Context);
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center w-full">
//         <Weather
//           startWeek={filteredData[0]?.START_WEEK}
//           endWeek={filteredData[0]?.END_WEEK}
//           week={week}
//           setWeek={setWeek}
//           nextWeek={nextWeek}
//           previousWeek={previousWeek}
//           currentWeek={currentWeek}
//         />
//       </div>
//       <div className="allcards bg-transparent items-center justify-center  w-full  h-auto  pt-2 flex flex-wrap gap-2 2xl:pt-[.6vw] 2xl:gap-[.5vw]">
//         <FirstCard />
//         <SecondCard/>
//         <ThirdCard/>
//         <FourthCard startWeek={filteredData[0]?.ID}
//           endWeek={filteredData[0]?.ID} />
//       </div>
//       <div className="data-center w-full flex justify-center">
//         <BottomTable startWeek={filteredData[0]?.ID}
//           endWeek={filteredData[0]?.ID} />
//       </div>
//     </div>
//   );
// };

// export default Home;






import BottomTable from "@/components/BottomTable";
import FirstCard from "@/components/FirstCard";
import FourthCard from "@/components/FourthCard";
import SecondCard from "@/components/SecondCard";
import ThirdCard from "@/components/ThirdCard";
import ToggleButtons from "@/components/ToggleButtons";
import Weather from "@/components/Weather";
import { Context } from "@/context/Context";
import React, { useContext} from "react";

const Home = () => {
  const {
    week,
    setWeek,
    filteredData,
    currentWeek,
    nextWeek,
    previousWeek,
    isWrap
  } = useContext(Context);


  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <Weather
          startWeek={filteredData[0]?.START_WEEK}
          endWeek={filteredData[0]?.END_WEEK}
          week={week}
          setWeek={setWeek}
          nextWeek={nextWeek}
          previousWeek={previousWeek}
          currentWeek={currentWeek}
        />
      </div>
      <ToggleButtons/>


      {/* Cards Container */}
      <div
        className={`allcards bg-transparent w-full h-auto pt-2 2xl:pt-[.6vw] ${
          isWrap
            ? "flex flex-wrap items-center justify-center gap-2 2xl:gap-[.5vw]"
            : "flex nowrap overflow-x-auto gap-2 px-4"
        }`}
      >
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard
          startWeek={filteredData[0]?.ID}
          endWeek={filteredData[0]?.ID}
        />
      </div>

      <div className="data-center w-full flex justify-center">
        <BottomTable
          startWeek={filteredData[0]?.ID}
          endWeek={filteredData[0]?.ID}
        />
      </div>
    </div>
  );
};

export default Home;
