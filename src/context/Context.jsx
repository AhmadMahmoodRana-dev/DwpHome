import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [data, setData] = useState([]);
  const [week, setWeek] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const currentWeek = data[0]?.END_WEEK;
  const fetchApi = async () => {
    const response = await axios.get("https://dwpcare.com.pk/dwp/currentWeek");
    setData(response.data);
    console.log(response.data, "response");
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    const filtered = data[week];
    setFilteredData(filtered ? [filtered] : []);
    console.log(filtered, "filtered data");
  }, [week, data]);

  // Increment the week index, looping back to 0 if necessary
  const nextWeek = () => {
    setWeek((prevWeek) => (prevWeek < data.length - 1 ? prevWeek + 1 : 0));
  };

  // Decrement the week index, looping back to the last item if necessary (except when at index 0)
  const previousWeek = () => {
    if (week > 0) {
      setWeek((prevWeek) => prevWeek - 1); // Only decrement if not at the first index
    }
  };
  // ######################################################################################################################################

  const contextValue = {
    openSidebar,
    setOpenSidebar,
    filteredData,
    currentWeek,
    nextWeek,
    previousWeek,
    week,
    setWeek
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
