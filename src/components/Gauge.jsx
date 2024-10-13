import React from "react";

const Gauge = ({ abandonRatio, answerRatio }) => {
  return (
    <div className="relative w-36 h-36 2xl:w-[9.4vw] 2xl:h-[9.4vw] flex items-center justify-center bg-transparent text-white rounded-full">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{
          background: `conic-gradient(#34D399 0% ${100 - abandonRatio}%, #fd4242 ${100 - abandonRatio}% 100%)`,
        }}
      ></div>
      <div className="absolute w-28 2xl:w-[8vw] 2xl:h-[8vw] h-28 bg-blue-900 rounded-full flex flex-col justify-between py-5 items-center">
        <h1 className="text-[10px] 2xl:text-[.6vw] ">Abandon Ratio</h1>
        <h1 className="text-2xl font-bold text-[#fd4242] 2xl:text-[2.3vw]  ">
          {abandonRatio}%
        </h1>
        <h1 className="text-xl font-bold text-green-400 2xl:text-[1.3vw] ">
          {answerRatio}%
        </h1>
        <h1 className="text-[10px] 2xl:text-[.6vw]">Answer Ratio</h1>
      </div>
    </div>
  );
};

export default Gauge;



// import React from "react";

// const Gauge = () => {
//   return (
//     <div className="relative w-36  h-36 2xl:w-[9.4vw] 2xl:h-[9.4vw] flex items-center justify-center bg-transparent text-white rounded-full">
//       <div
//         className="absolute top-0 left-0 w-full h-full rounded-full"
//         style={{
//           background: "conic-gradient(#34D399 0% 97%, #fd4242 97% 100%)",
//         }}
//       ></div>
//       <div className="absolute w-28 2xl:w-[8vw] 2xl:h-[8vw]  h-28 bg-blue-900 rounded-full flex flex-col items-center justify-center 2xl:leading-[1.1vw]">
//         <div className="text-[10px] 2xl:text-[.7vw]  ">Abandon Ratio</div>
//         <div className="text-4xl  font-bold text-[#fd4242] 2xl:text-[2.4vw] ">
//           3%
//         </div>
//         <div className="text-2xl font-bold text-green-400 2xl:text-[1.4vw] ">
//           97%
//         </div>
//         <div className="text-[10px] 2xl:text-[.7vw] ">Answer Ratio</div>
//       </div>
//     </div>
//   );
// };

// export default Gauge;
