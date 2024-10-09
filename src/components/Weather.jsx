import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";

const Weather = ({
  startWeek,
  setStartWeek,
  endWeek,
  setEndWeek,
  CurrentWeek,
  Week,
}) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [endWeekError, setEndWeekError] = useState("");
  const [startWeekError, setStartWeekError] = useState(""); // New state for startWeek error

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://dwpcare.com.pk/dwp/weather/Lahore"
        );
        setWeather(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchWeather();
  }, []);

  const addStartWeek = () => {
    if (startWeek < CurrentWeek) {
      setStartWeek(startWeek + 1);
      setStartWeekError("");
    } else {
      setStartWeekError("");
    }
  };

  const subStartWeek = () => {
    setStartWeek(startWeek - 1);
    setStartWeekError("");
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  const forecast = weather.forecast.forecastday;

  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <>
      <header className="text-white body-font mt-2  w-[92%] 2xl:w-[96%] weather  2xl:hidden block">
        <div className="container mx-auto flex flex-wrap bg-[#07295d] flex-col md:flex-row items-center rounded-xl">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-[15px] text-white font-normal">
              Current : Week<span className="font-bold pl-1">{Week}</span>
            </span>
            <span className="ml-3 text-[15px] text-white gap-1 flex justify-center items-center">
              Start Week <span className="font-bold">{startWeek}</span>
              <div>
                <FaCaretUp className="text-[10px]" onClick={addStartWeek} />
                <FaCaretDown className="text-[10px]" onClick={subStartWeek} />
              </div>
              {/* {startWeekError && <div className="text-red-500 text-sm mt-2">{startWeekError}</div>} */}
            </span>
            <span className="ml-3 text-[15px] text-white gap-1 flex justify-center items-center">
              End Week <span className="font-bold">{endWeek}</span>
              {/* Disabled controls for End Week */}
              <div>
                <FaCaretUp className="text-[10px] text-gray-500 cursor-not-allowed" />
                <FaCaretDown className="text-[10px] text-gray-500 cursor-not-allowed" />
              </div>
              {/* {endWeekError && <div className="text-red-500 text-sm mt-2">{endWeekError}</div>} */}
            </span>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <h1 className="text-[12px] font-semibold">Weather Forecast :</h1>
            {forecast.map((day) => (
              <div key={day.date} className="flex justify-center items-center">
                <h3 className="text-[8px] flex justify-center items-center gap-[3.5px] mt-[1.5px] ml-1">
                  {getDayName(day.date)}
                  <img
                    className="w-[20px]"
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                  />
                  {day.day.mintemp_c}°/{day.day.maxtemp_c}°
                </h3>
              </div>
            ))}
          </nav>
        </div>
      </header>

      <div className="w-[96%] h-[2.2vw] mt-[.4vw] 2xl:flex justify-between 2xl:pr-[.5vw] rounded-xl sidebar  hidden">
        <div className="flex title-font font-medium items-center h-full md:mb-0">
          <span className="2xl:ml-[.8vw] 2xl:text-[.9vw] text-white font-normal">
            Current : Week<span className="font-bold  2xl:pl-[.4vw]">{Week}</span>
          </span>
          <span className="2xl:ml-[.6vw] 2xl:text-[.9vw] font-normal text-white 2xl:gap-[.3vw] flex justify-center items-center">
            Start Week <span className="font-bold">{startWeek}</span>
            <div>
              <FaCaretUp className="2xl:text-[.6vw]" onClick={addStartWeek} />
              <FaCaretDown className="2xl:text-[.6vw]" onClick={subStartWeek} />
            </div>
            {/* {startWeekError && <div className="text-red-500 text-sm mt-2">{startWeekError}</div>} */}
          </span>
          <span className="2xl:ml-[.6vw] 2xl:text-[.9vw] font-normal text-white 2xl:gap-[.3vw] flex justify-center items-center">
            End Week <span className="font-bold">{endWeek}</span>
            {/* Disabled controls for End Week */}
            <div>
              <FaCaretUp className="2xl:text-[.6vw] text-white cursor-not-allowed" />
              <FaCaretDown className="2xl:text-[.6vw] text-white cursor-not-allowed" />
            </div>
            {/* {endWeekError && <div className="text-red-500 text-sm mt-2">{endWeekError}</div>} */}
          </span>
        </div>
        <div className="flex items-center">
          <h1 className="2xl:text-[.8vw] font-semibold text-white">Weather Forecast :</h1>
          <div className="flex 2xl:gap-[.7vw]">
          {forecast.map((day) => (
            <div key={day.date} className="flex justify-center items-center">
              <h3 className="2xl:text-[.6vw] text-white flex justify-center items-center 2xl:gap-[.22vw] mt-[1.5px] 2xl:ml-[.3vw]">
                {getDayName(day.date)}
                <img
                  className="2xl:w-[1.3vw]"
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                />
                {day.day.mintemp_c}°/{day.day.maxtemp_c}°
              </h3>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;