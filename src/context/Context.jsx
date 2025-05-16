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

  console.log(filteredData, "FilterData");

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

  // ##########################################################################################

  const extractMultipleFields = (dataArray, fieldNames, customNames = []) => {
    if (!Array.isArray(dataArray) || dataArray.length === 0) return [];
  
    return dataArray.map((item) => {
      const filteredItem = {};
      fieldNames.forEach((field, index) => {
        const customKey = customNames[index] || field;
        filteredItem[customKey] = item[field];
      });
      return filteredItem;
    });
  };
  

  



 





// ##############################    SECOND PAGE    ################################
const [otherData, setOtherData] = useState([]);
const [table, setTableData] = useState([]);

useEffect(() => {
  const fetchInsetData = async () => {
    try {
      const dateId = filteredData[0]?.ID;
      console.log("DAte id",dateId)
      if (!dateId) return;

      // First API call
      const response1 = await axios.get("https://dwpcare.com.pk/dwp/inset", {
        params: { EDATE: dateId },
      });
      setOtherData(response1.data);

      // Second API call
      const response2 = await axios.get("https://dwpcare.com.pk/dwp/inset", {
        params: { SDATE: dateId, EDATE: dateId },
      });
      setTableData(response2.data);
    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };

  fetchInsetData();
}, [filteredData[0]?.ID]);

console.log(filteredData[0]?.ID)
// console.log(otherData,"OTHER DATA")
console.log(table,"SET TABLE")



// OTHERS DATA
const customFieldNames = ["IN_SETS", "IN_SETS_PER", "OUT_SETS","OUT_SETS_PER","IOF","IN_SETS_YTD","OUT_SETS_YTD","WARR_PER","CASH_PER"];

const fieldsToExtractRawalpindi = ["RWP_IN_SETS", "RWP_IN_SETS_PER", "RWP_OUT_SETS","RWP_OUT_SETS_PER","IOF_RWP","RWP_IN_SETS_YTD","RWP_OUT_SETS_YTD","RWP_WARR_PER","RWP_CASH_PER"];
const fieldsToExtractFaisalabad = ["FSD_IN_SETS", "FSD_IN_SETS_PER", "FSD_OUT_SETS","FSD_OUT_SETS_PER","IOF_FSD","FSD_IN_SETS_YTD","FSD_OUT_SETS_YTD","FSD_WARR_PER","FSD_CASH_PER"];
const fieldsToExtractGujranwala = ["GUJ_IN_SETS", "GUJ_IN_SETS_PER", "GUJ_OUT_SETS","GUJ_OUT_SETS_PER","IOF_GUJ","GUJ_IN_SETS_YTD","GUJ_OUT_SETS_YTD","GUJ_WARR_PER","GUJ_CASH_PER"];
const fieldsToExtractLahore = ["LHE_IN_SETS", "LHE_IN_SETS_PER", "LHE_OUT_SETS","LHE_OUT_SETS_PER","IOF_LHE","LHE_IN_SETS_YTD","LHE_OUT_SETS_YTD","LHE_WARR_PER","LHE_CASH_PER"];
const fieldsToExtractMultan = ["MUL_IN_SETS", "MUL_IN_SETS_PER", "MUL_OUT_SETS","MUL_OUT_SETS_PER","IOF_MUL","MUL_IN_SETS_YTD","MUL_OUT_SETS_YTD","MUL_WARR_PER","MUL_CASH_PER"];
const fieldsToExtractHyderabad = ["HYD_IN_SETS", "HYD_IN_SETS_PER", "HYD_OUT_SETS","HYD_OUT_SETS_PER","IOF_HYD","HYD_IN_SETS_YTD","HYD_OUT_SETS_YTD","HYD_WARR_PER","HYD_CASH_PER"];
const fieldsToExtractKarachi = ["KHI_IN_SETS", "KHI_IN_SETS_PER", "KHI_OUT_SETS","KHI_OUT_SETS_PER","IOF_KHI","KHI_IN_SETS_YTD","KHI_OUT_SETS_YTD","KHI_WARR_PER","KHI_CASH_PER"];

const OthersRawalpindiData = extractMultipleFields(otherData, fieldsToExtractRawalpindi, customFieldNames);
const OthersFaisalabadData = extractMultipleFields(otherData, fieldsToExtractFaisalabad, customFieldNames);
const OthersGujranwalaData = extractMultipleFields(otherData, fieldsToExtractGujranwala, customFieldNames);
const OthersLahoreData = extractMultipleFields(otherData, fieldsToExtractLahore, customFieldNames);
const OthersMultanData = extractMultipleFields(otherData, fieldsToExtractMultan, customFieldNames);
const OthersHyderabadData = extractMultipleFields(otherData, fieldsToExtractHyderabad, customFieldNames);
const OthersKarachiData = extractMultipleFields(otherData, fieldsToExtractKarachi, customFieldNames);


// TOP TABLE
const topTableCustomFieldNames = ["NO_OF_WEEKS", "IN_SETS", "OUT_SETS","IOF","SHORT_WEEKS"];

const fieldsToExtractRawalpinditopTable = ["NO_OF_WEEKS","RWP_IN_SETS","RWP_OUT_SETS","IOF_RWP","SHORT_WEEKS"];
const fieldsToExtractFaisalabadtopTable = ["NO_OF_WEEKS","FSD_IN_SETS","FSD_OUT_SETS","IOF_FSD","SHORT_WEEKS"];
const fieldsToExtractGujranwalatopTable = ["NO_OF_WEEKS", "GUJ_IN_SETS","GUJ_OUT_SETS","IOF_GUJ","SHORT_WEEKS"];
const fieldsToExtractLahoretopTable =     ["NO_OF_WEEKS","LHE_IN_SETS","LHE_OUT_SETS","IOF_LHE","SHORT_WEEKS"];
const fieldsToExtractMultantopTable =     ["NO_OF_WEEKS","MUL_IN_SETS","MUL_OUT_SETS","IOF_MUL","SHORT_WEEKS"];
const fieldsToExtractHyderabadtopTable =  ["NO_OF_WEEKS","HYD_IN_SETS","HYD_OUT_SETS","IOF_HYD","SHORT_WEEKS"];
const fieldsToExtractKarachitopTable =    ["NO_OF_WEEKS","KHI_IN_SETS","KHI_OUT_SETS","IOF_KHI","SHORT_WEEKS"];

const topTableRawalpindiData = extractMultipleFields(table, fieldsToExtractRawalpinditopTable, topTableCustomFieldNames);
const topTableFaisalabadData = extractMultipleFields(table, fieldsToExtractFaisalabadtopTable, topTableCustomFieldNames);
const topTableGujranwalaData = extractMultipleFields(table, fieldsToExtractGujranwalatopTable, topTableCustomFieldNames);
const topTableLahoreData = extractMultipleFields(table, fieldsToExtractLahoretopTable, topTableCustomFieldNames);
const topTableMultanData = extractMultipleFields(table, fieldsToExtractMultantopTable, topTableCustomFieldNames);
const topTableHyderabadData = extractMultipleFields(table, fieldsToExtractHyderabadtopTable, topTableCustomFieldNames);
const topTableKarachiData = extractMultipleFields(table, fieldsToExtractKarachitopTable, topTableCustomFieldNames);



  // ######################################################################################################################################

  const contextValue = {
    openSidebar,
    setOpenSidebar,
    filteredData,
    currentWeek,
    nextWeek,
    previousWeek,
    week,
    setWeek,
    // #####################  SECOND PAGE  #########################
    OthersRawalpindiData,
    OthersFaisalabadData,
    OthersGujranwalaData,
    OthersLahoreData,
    OthersMultanData,
    OthersHyderabadData,
    OthersKarachiData,
    // #####################  SECOND PAGE TOP TABLE  #########################
    topTableRawalpindiData,
    topTableFaisalabadData,
    topTableGujranwalaData,
    topTableLahoreData,
    topTableMultanData,
    topTableHyderabadData,
    topTableKarachiData
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
