import React from 'react';

const SemiCircularProgressive = ({ percentage }) => {
  const radius = 50;
  const fullCircumference = 2 * Math.PI * radius;
  const semiCircumference = fullCircumference / 2;
  const progress = semiCircumference - (percentage / 100) * semiCircumference;

  return (
    <div className="flex justify-center items-center w-full h-full pb-3 2xl:pb-[.8vw]">
      <div className="relative">
        <svg
          className="w-12 h-6 2xl:w-[3.2vw] 2xl:h-[1.5vw]"
          viewBox="0 0 120 60"
        >
          {/* Background semi-circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#ffffff"
            strokeWidth="15"
            strokeDasharray={semiCircumference}
            strokeDashoffset={0}
            transform="rotate(180, 60, 60)"
          />
          {/* Foreground (progress) semi-circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#050c2c"
            strokeWidth="15"
            strokeDasharray={semiCircumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            transform="rotate(180, 60, 60)"
          />
        </svg>

        {/* Centered percentage text */}
        <div className="absolute inset-0 flex justify-center items-center h-[2.4vw]">
          <p className="2xl:text-[.5vw] text-[8px] font-bold text-blue-500">
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SemiCircularProgressive;
