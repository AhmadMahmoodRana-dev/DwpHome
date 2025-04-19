import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { Context } from "@/context/Context";

const Header = () => {
  const { currentWeek, filteredData, nextWeek, previousWeek } =
    useContext(Context);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

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

  if (error) return <div>Error: {error.message}</div>;
  if (!weather) return <div>Loading...</div>;

  const forecast = weather.forecast.forecastday;

  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className="w-full mt-2 px-2 py-2 rounded-xl sidebar1 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-y-2 lg:gap-y-0">
      {/* Week Info */}
      <div className="flex flex-wrap items-center gap-4 text-white">
        <span className="text-sm md:text-base lg:text-[.9vw] font-normal">
          Current Week:{" "}
          <span className="font-bold">{currentWeek}</span>
        </span>

        <span className="text-sm md:text-base lg:text-[.9vw] font-normal flex items-center gap-1">
          Start Week:{" "}
          <span className="font-bold">
            {filteredData[0]?.START_WEEK <= 9
              ? `0${filteredData[0]?.START_WEEK}`
              : `${filteredData[0]?.START_WEEK}`}
          </span>
          <div className="flex flex-col text-white cursor-pointer">
            <FaCaretUp
              className="text-xs md:text-sm"
              onClick={() => previousWeek()}
            />
            <FaCaretDown
              className="text-xs md:text-sm"
              onClick={() => nextWeek()}
            />
          </div>
        </span>

        <span className="text-sm md:text-base lg:text-[.9vw] font-normal flex items-center gap-1">
          End Week: <span className="font-bold">{filteredData[0]?.END_WEEK}</span>
          <div className="flex flex-col text-white cursor-not-allowed">
            <FaCaretUp className="text-xs md:text-sm" />
            <FaCaretDown className="text-xs md:text-sm" />
          </div>
        </span>
      </div>

      {/* Weather Forecast */}
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-sm md:text-base lg:text-[.8vw] font-semibold text-white">
          Weather Forecast:
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          {forecast.map((day) => (
            <div key={day.date} className="flex items-center">
              <h3 className="text-xs md:text-sm lg:text-[.6vw] text-white flex items-center gap-1">
                {getDayName(day.date)}
                <img
                  className="w-4 md:w-5 lg:w-[1.3vw]"
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
  );
};

export default Header;
