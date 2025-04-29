import { RiTriangleFill } from "react-icons/ri";

const RegionCard = ({ regionName, otc, inset, insetPer, outset, outsetPer }) => {
  const formatPercentage = (value) =>
    `${value >= 0 ? "+" : "-"}${Math.abs(value).toString().padStart(2, "0")}%`;

  const renderChange = (value) => {
    const isPositive = value >= 0;
    return (
      <div className="flex flex-col justify-center items-center">
        {isPositive ? (
          <>
            <RiTriangleFill className="text-green-400 2xl:text-[.6vw] mt-[-2px] w-[10px] h-[10px] 2xl:w-[.7vw] 2xl:h-[.7vw] ml-[-3px]" />
            <h1 className="text-green-400 2xl:text-[.7vw] text-[12px] ml-[-3px]">
              {formatPercentage(value)}
            </h1>
          </>
        ) : (
          <>
            <h1 className="text-[12px] 2xl:text-[.7vw] font-bold text-[#BE1A1A] ml-[-3px]">
              {formatPercentage(value)}
            </h1>
            <RiTriangleFill className="text-[#BE1A1A] 2xl:text-[.6vw] mt-[-2px] w-[10px] h-[10px] 2xl:w-[.7vw] 2xl:h-[.7vw] ml-[-3px] rotate-180" />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="first flex justify-between items-center data w-[263px] 2xl:w-[91.5%] 2xl:h-[4vw] h-[62.98px] rounded-[3px]">
      <div className="flex flex-col items-center gap-3 min-w-[120px]">
        <p className="text-[12px] text-white font-bold ml-1 2xl:text-[.8vw]">{regionName}</p>
        <p className="text-[12px] text-white font-bold ml-1 2xl:text-[.8vw]">OTC {otc.toLocaleString()} %</p>
      </div>
      <div className="flex flex-col pr-2">
        {/* Inset */}
        <div className="flex justify-center items-center gap-2">
          <div className="2xl:max-w-[3.7vw] 2xl:min-w-[4vw] max-w-[70px] min-w-[70px]">
            <p className="text-white text-[10px] flex flex-col mt-[2px] font-bold 2xl:text-[.6vw] ml-[8px]">
              Inset <span className="text-[12px] 2xl:text-[.7vw] font-bold">{inset.toLocaleString()}</span>
            </p>
          </div>
          {renderChange(insetPer)}
        </div>

        {/* Outset */}
        <div className="flex justify-center items-center gap-2">
          <div className="2xl:max-w-[3.7vw] 2xl:min-w-[4vw] max-w-[70px] min-w-[70px]">
            <p className="text-white flex flex-col text-[10px] font-bold ml-[8px] 2xl:text-[.6vw]">
              Outset <span className="text-[12px] 2xl:text-[.7vw] font-bold">{outset.toLocaleString()}</span>
            </p>
          </div>
          {renderChange(outsetPer)}
        </div>
      </div>
    </div>
  );
};

export default RegionCard;
