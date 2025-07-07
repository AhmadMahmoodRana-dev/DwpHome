import { Context } from "@/context/Context";
import React, { useContext } from "react";
import { PiArrowsHorizontalLight, PiArrowsVerticalLight } from "react-icons/pi";

const ToggleButtons = () => {
  const { isWrap, setIsWrap } = useContext(Context);

  return (
    <div className="md:hidden flex gap-2 justify-center mt-4">
      <button
        onClick={() => setIsWrap(false)}
        className={`px-4 py-2 rounded-lg flex items-center justify-center transition-all duration-200
          ${
            !isWrap
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        aria-label="Horizontal layout"
      >
        <PiArrowsHorizontalLight className="text-lg" />
        <span className="ml-2 text-sm font-medium">Horizontal</span>
      </button>
      <button
        onClick={() => setIsWrap(true)}
        className={`px-4 py-2 rounded-lg flex items-center justify-center transition-all duration-200
          ${
            isWrap
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        aria-label="Vertical layout"
      >
        <PiArrowsVerticalLight className="text-lg" />
        <span className="ml-2 text-sm font-medium">Vertical</span>
      </button>
    </div>
  );
};

export default ToggleButtons;