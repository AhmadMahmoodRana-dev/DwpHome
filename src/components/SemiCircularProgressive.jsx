import React from 'react';

const SemiCircularProgressive = ({ percentage }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = circumference - (percentage / 100) * circumference; // Progress

  return (
    <div className="flex justify-center items-center w-full h-full pb-3 2xl:pb-[.8vw] ">
      <div className="relative">
        <svg
          className="w-12 h-6 2xl:w-[3.2vw] 2xl:h-[1.5vw]" // Responsive sizing
          viewBox="0 0 120 60"
        >
          <circle
            cx="60"
            cy="60"  // Positioned for a full circle but only displaying the top half
            r={radius}
            fill="none"
            stroke="#fff" // Tailwind's gray-200 for background stroke
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={circumference / 2} // Half-circle background
            transform="rotate(-90, 60, 60)" // Rotate to start from top
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#050c2c" // Tailwind's blue-500 for progress stroke
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={progress + circumference / 2} // Adjusted for half-circle progress
            strokeLinecap="round"
            transform="rotate(-90, 60, 60)" // Rotate to start from top
          />
        </svg>
        <div className="absolute inset-0 flex justify-center items-center h-[2.4vw]">
          <p className=" 2xl:text-[.5vw] text-[8px] font-bold text-blue-500">{percentage}%</p>
        </div>
        
      </div>
    </div>
  );
};

export default SemiCircularProgressive;
