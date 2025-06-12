import { Context } from "@/context/Context";
import React, { useContext } from "react";
import { PiArrowsHorizontalLight, PiArrowsVerticalLight } from "react-icons/pi";

const ToggleButtons = () => {
  const { isWrap, setIsWrap } = useContext(Context);

  return (
    <div className="md:hidden flex gap-2 justify-center mt-4">
      <button
        onClick={() => setIsWrap(false)}
        className={`px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center
          ${!isWrap ? "bg-blue-700 text-white" : "bg-blue-400 text-white/70"}`}
      >
        <PiArrowsHorizontalLight />
      </button>
      <button
        onClick={() => setIsWrap(true)}
        className={`px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center
          ${isWrap ? "bg-blue-700 text-white" : "bg-blue-400 text-white/70"}`}
      >
        <PiArrowsVerticalLight />
      </button>
    </div>
  );
};

export default ToggleButtons;
