  import React, { useState, useEffect, useContext } from "react";
  import axios from "axios";
  import { FaCaretUp } from "react-icons/fa6";
  import { FaCaretDown } from "react-icons/fa6";
  import { Context } from "@/context/Context";

  const Header = () => {
      const { startWeek, endWeek,setStartWeek,setEndWeek,CurrentWeek,Week,handleStartWeekChange } = useContext(Context);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [endWeekError, setEndWeekError] = useState("");
    const [startWeekError, setStartWeekError] = useState(""); 

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
        <div className="flex flex-wrap bg-[#07295d]  items-center rounded-xl h-[50px] mt-2">
          <div className="flex title-font font-medium items-center text-gray-900">
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
            </span>
          </div>
          {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
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
            </nav> */}
        </div>
      </>
    );
  };

  export default Header;
