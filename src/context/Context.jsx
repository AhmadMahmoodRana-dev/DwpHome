import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [startWeek, setStartWeek] = useState(0);
  const [endWeek, setEndWeek] = useState(0);
  const [CurrentWeek, setCurrentWeek] = useState(0);
  const [Week, setWeek] = useState(0);
  const [error, setError] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(true);

  useEffect(() => {
    const fetchWeekData = async () => {
      try {
        const response = await fetch("https://dwpcare.com.pk/dwp/currentWeek");
        const data = await response.json();

        // Check if the data is an array and extract the first element
        if (Array.isArray(data) && data.length > 0) {
          const weekData = data[0]; // Extract the object from the array

          // Log the extracted data
          /// console.log("Extracted week data:", weekData);

          // Access the properties and set state
          setStartWeek(Number(weekData.START_WEEK));
          setEndWeek(Number(weekData.END_WEEK));
          setCurrentWeek(Number(weekData.START_WEEK));
          setWeek(Number(weekData.END_WEEK));
        } else {
          console.log("Invalid response format");
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching week data:", err);
      }
    };

    fetchWeekData();
  }, []);

  useEffect(() => {
    if (startWeek !== null) {
      setEndWeek(startWeek + 3);
    }
  }, [startWeek]);

  const handleStartWeekChange = (newStartWeek) => {
    setStartWeek(newStartWeek);
  };
  // ######################################################################################################################################

  const contextValue = {
    openSidebar,
    setOpenSidebar,
    startWeek,
    setStartWeek,
    endWeek,
    setEndWeek,
    CurrentWeek,
    Week,
    handleStartWeekChange,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
