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
const topTableCustomFieldNames = ["NO_OF_WEEKS", "IN_SETS", "OUT_SETS","IOF","SHORT_WEEKS","IN_GREE_AC", "IN_ECOSTAR_AC","IN_ECOSTAR_LED_TV","IN_REFRIGERATOR","IN_OTHERS", "OUT_GREE_AC", "OUT_ECOSTAR_AC","OUT_ECOSTAR_LED_TV","OUT_REFRIGERATOR","OUT_OTHERS","RWP_OUT_GREE_AC","RWP_OUT_ECOSTAR_AC","RWP_OUT_ECOSTAR_LED_TV","RWP_OUT_REFRIGERATOR","RWP_OUT_OTHERS"];

const fieldsToExtractRawalpinditopTable = ["NO_OF_WEEKS","RWP_IN_SETS","RWP_OUT_SETS","IOF_RWP","SHORT_WEEKS","RWP_IN_GREE_AC","RWP_IN_ECOSTAR_AC","RWP_IN_ECOSTAR_LED_TV","RWP_IN_REFRIGERATOR","RWP_IN_OTHERS","RWP_OUT_GREE_AC","RWP_OUT_ECOSTAR_AC","RWP_OUT_ECOSTAR_LED_TV","RWP_OUT_REFRIGERATOR","RWP_OUT_OTHERS"];
const fieldsToExtractFaisalabadtopTable = ["NO_OF_WEEKS","FSD_IN_SETS","FSD_OUT_SETS","IOF_FSD","SHORT_WEEKS","FSD_IN_GREE_AC","FSD_IN_ECOSTAR_AC","FSD_IN_ECOSTAR_LED_TV","FSD_IN_REFRIGERATOR","FSD_IN_OTHERS","FSD_OUT_GREE_AC","FSD_OUT_ECOSTAR_AC","FSD_OUT_ECOSTAR_LED_TV","FSD_OUT_REFRIGERATOR","FSD_OUT_OTHERS"];
const fieldsToExtractGujranwalatopTable = ["NO_OF_WEEKS", "GUJ_IN_SETS","GUJ_OUT_SETS","IOF_GUJ","SHORT_WEEKS", "GUJ_IN_GREE_AC","GUJ_IN_ECOSTAR_AC","GUJ_IN_ECOSTAR_LED_TV","GUJ_IN_REFRIGERATOR","GUJ_IN_OTHERS", "GUJ_OUT_GREE_AC","GUJ_OUT_ECOSTAR_AC","GUJ_OUT_ECOSTAR_LED_TV","GUJ_OUT_REFRIGERATOR","GUJ_OUT_OTHERS"];
const fieldsToExtractLahoretopTable =     ["NO_OF_WEEKS","LHE_IN_SETS","LHE_OUT_SETS","IOF_LHE","SHORT_WEEKS","LHE_IN_GREE_AC","LHE_IN_ECOSTAR_AC","LHE_IN_ECOSTAR_LED_TV","LHE_IN_REFRIGERATOR","LHE_IN_OTHERS","LHE_OUT_GREE_AC","LHE_OUT_ECOSTAR_AC","LHE_OUT_ECOSTAR_LED_TV","LHE_OUT_REFRIGERATOR","LHE_OUT_OTHERS"];
const fieldsToExtractMultantopTable =     ["NO_OF_WEEKS","MUL_IN_SETS","MUL_OUT_SETS","IOF_MUL","SHORT_WEEKS","MUL_IN_GREE_AC","MUL_IN_ECOSTAR_AC","MUL_IN_ECOSTAR_LED_TV","MUL_IN_REFRIGERATOR","MUL_IN_OTHERS","MUL_OUT_GREE_AC","MUL_OUT_ECOSTAR_AC","MUL_OUT_ECOSTAR_LED_TV","MUL_OUT_REFRIGERATOR","MUL_OUT_OTHERS"];
const fieldsToExtractHyderabadtopTable =  ["NO_OF_WEEKS","HYD_IN_SETS","HYD_OUT_SETS","IOF_HYD","SHORT_WEEKS","HYD_IN_GREE_AC","HYD_IN_ECOSTAR_AC","HYD_IN_ECOSTAR_LED_TV","HYD_IN_REFRIGERATOR","HYD_IN_OTHERS","HYD_OUT_GREE_AC","HYD_OUT_ECOSTAR_AC","HYD_OUT_ECOSTAR_LED_TV","HYD_OUT_REFRIGERATOR","HYD_OUT_OTHERS"];
const fieldsToExtractKarachitopTable =    ["NO_OF_WEEKS","KHI_IN_SETS","KHI_OUT_SETS","IOF_KHI","SHORT_WEEKS","KHI_IN_GREE_AC","KHI_IN_ECOSTAR_AC","KHI_IN_ECOSTAR_LED_TV","KHI_IN_REFRIGERATOR","KHI_IN_OTHERS","KHI_OUT_GREE_AC","KHI_OUT_ECOSTAR_AC","KHI_OUT_ECOSTAR_LED_TV","KHI_OUT_REFRIGERATOR","KHI_OUT_OTHERS"];

const topTableRawalpindiData = extractMultipleFields(table, fieldsToExtractRawalpinditopTable, topTableCustomFieldNames);
const topTableFaisalabadData = extractMultipleFields(table, fieldsToExtractFaisalabadtopTable, topTableCustomFieldNames);
const topTableGujranwalaData = extractMultipleFields(table, fieldsToExtractGujranwalatopTable, topTableCustomFieldNames);
const topTableLahoreData = extractMultipleFields(table, fieldsToExtractLahoretopTable, topTableCustomFieldNames);
const topTableMultanData = extractMultipleFields(table, fieldsToExtractMultantopTable, topTableCustomFieldNames);
const topTableHyderabadData = extractMultipleFields(table, fieldsToExtractHyderabadtopTable, topTableCustomFieldNames);
const topTableKarachiData = extractMultipleFields(table, fieldsToExtractKarachitopTable, topTableCustomFieldNames);

// ######################################################################################################################################

// THIRD PAGE

const [thirdPageOtherData, setThirdPageOtherData] = useState([]);

useEffect(() => {
  const fetchInsetData = async () => {
    try {
      const dateId = filteredData[0]?.ID;
      if (!dateId) return;

      // First API call
      const response1 = await axios.get("https://dwpcare.com.pk/dwp/tat", {
        params: { EDATE: 71 },
      });
      setThirdPageOtherData(response1.data);

    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };

  fetchInsetData();
}, [filteredData[0]?.ID]);


// OTHERS DATA
const thirdPageCustomFieldNames = ["ATAT", "ATAT_PER", "YTD_ATAT","DAY_0","DAY_0_PER","DAY2_3","DAY2_3_PER","DAY4_7","DAY4_7_PER","DAY8_ABOVE","DAY8_ABOVE_PER"];

const fieldsToExtractRawalpindiThirdPage = ["RWP_ATAT", "RWP_ATAT_PER", "RWP_YTD_ATAT","RWP_DAY_0","RWP_DAY_0_PER","RWP_DAY2_3","RWP_DAY2_3_PER","RWP_DAY4_7","RWP_DAY4_7_PER","RWP_DAY8_ABOVE","RWP_DAY8_ABOVE_PER"];
const fieldsToExtractFaisalabadThirdPage = ["FSD_ATAT", "FSD_ATAT_PER", "FSD_YTD_ATAT","FSD_DAY_0","FSD_DAY_0_PER","FSD_DAY2_3","FSD_DAY2_3_PER","FSD_DAY4_7","FSD_DAY4_7_PER","FSD_DAY8_ABOVE","FSD_DAY8_ABOVE_PER"];
const fieldsToExtractGujranwalaThirdPage = ["GUJ_ATAT", "GUJ_ATAT_PER", "GUJ_YTD_ATAT","GUJ_DAY_0","GUJ_DAY_0_PER","GUJ_DAY2_3","GUJ_DAY2_3_PER","GUJ_DAY4_7","GUJ_DAY4_7_PER","GUJ_DAY8_ABOVE","GUJ_DAY8_ABOVE_PER"];
const fieldsToExtractLahoreThirdPage = ["LHE_ATAT", "LHE_ATAT_PER", "LHE_YTD_ATAT","LHE_DAY_0","LHE_DAY_0_PER","LHE_DAY2_3","LHE_DAY2_3_PER","LHE_DAY4_7","LHE_DAY4_7_PER","LHE_DAY8_ABOVE","LHE_DAY8_ABOVE_PER"];
const fieldsToExtractMultanThirdPage = ["MUL_ATAT", "MUL_ATAT_PER", "MUL_YTD_ATAT","MUL_DAY_0","MUL_DAY_0_PER","MUL_DAY2_3","MUL_DAY2_3_PER","MUL_DAY4_7","MUL_DAY4_7_PER","MUL_DAY8_ABOVE","MUL_DAY8_ABOVE_PER"];
const fieldsToExtractHyderabadThirdPage = ["HYD_ATAT", "HYD_ATAT_PER", "HYD_YTD_ATAT","HYD_DAY_0","HYD_DAY_0_PER","HYD_DAY2_3","HYD_DAY2_3_PER","HYD_DAY4_7","HYD_DAY4_7_PER","HYD_DAY8_ABOVE","HYD_DAY8_ABOVE_PER"];
const fieldsToExtractKarachiThirdPage = ["KHI_ATAT", "KHI_ATAT_PER", "KHI_YTD_ATAT","KHI_DAY_0","KHI_DAY_0_PER","KHI_DAY2_3","KHI_DAY2_3_PER","KHI_DAY4_7","KHI_DAY4_7_PER","KHI_DAY8_ABOVE","KHI_DAY8_ABOVE_PER"];

const OthersRawalpindiDataThirdPage = extractMultipleFields(thirdPageOtherData, fieldsToExtractRawalpindiThirdPage, thirdPageCustomFieldNames);
const OthersFaisalabadDataThirdPage = extractMultipleFields(thirdPageOtherData, fieldsToExtractFaisalabadThirdPage, thirdPageCustomFieldNames);
const OthersGujranwalaDataThirdPage = extractMultipleFields(thirdPageOtherData, fieldsToExtractGujranwalaThirdPage, thirdPageCustomFieldNames);
const OthersLahoreDataThirdPage = extractMultipleFields(thirdPageOtherData, fieldsToExtractLahoreThirdPage, thirdPageCustomFieldNames);
const OthersMultanDataThirdPage = extractMultipleFields(thirdPageOtherData, fieldsToExtractMultanThirdPage, thirdPageCustomFieldNames);
const OthersHyderabadDataThirdPage = extractMultipleFields(thirdPageOtherData, fieldsToExtractHyderabadThirdPage, thirdPageCustomFieldNames);
const OthersKarachiDataThirdPage = extractMultipleFields(thirdPageOtherData, fieldsToExtractKarachiThirdPage, thirdPageCustomFieldNames);

// ######################################################################################################################################

// FOURTH PAGE

const [fourthPageOtherData, setFourthPageOtherData] = useState([]);

useEffect(() => {
  const fetchInsetData = async () => {
    try {
      const dateId = filteredData[0]?.ID;
      if (!dateId) return;

      // First API call
      const response1 = await axios.get(
        `https://dwpcare.com.pk/dwp/pending`,
        {
          params: { ENDWEEK: dateId },
        }
      );
      setFourthPageOtherData(response1.data);

    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };

  fetchInsetData();
}, [filteredData[0]?.ID]);


// OTHERS DATA
const fourthPageCustomFieldNames = ["TOTAL_PENDING_SETS", "TOTAL_PENDING_PER", "AGING","PTAT","PART_WAITING","UNDER_REPAIR","COMPLETED","OTHER"];

const fieldsToExtractRawalpindiFourthPage = ["RWP_TOTAL_PENDING_SETS", "RWP_TOTAL_PENDING_PER", "RWP_AGING","RWP_PTAT","RWP_PART_WAITING","RWP_UNDER_REPAIR","RWP_COMPLETED","RWP_OTHER"];
const fieldsToExtractFaisalabadFourthPage = ["FSD_TOTAL_PENDING_SETS", "FSD_TOTAL_PENDING_PER", "FSD_AGING","FSD_PTAT","FSD_PART_WAITING","FSD_UNDER_REPAIR","FSD_COMPLETED","FSD_OTHER"];
const fieldsToExtractGujranwalaFourthPage = ["GUJ_TOTAL_PENDING_SETS", "GUJ_TOTAL_PENDING_PER", "GUJ_AGING","GUJ_PTAT","GUJ_PART_WAITING","GUJ_UNDER_REPAIR","GUJ_COMPLETED","GUJ_OTHER"];
const fieldsToExtractLahoreFourthPage = ["LHE_TOTAL_PENDING_SETS", "LHE_TOTAL_PENDING_PER", "LHE_AGING","LHE_PTAT","LHE_PART_WAITING","LHE_UNDER_REPAIR","LHE_COMPLETED","LHE_OTHER"];
const fieldsToExtractMultanFourthPage = ["MUL_TOTAL_PENDING_SETS", "MUL_TOTAL_PENDING_PER", "MUL_AGING","MUL_PTAT","MUL_PART_WAITING","MUL_UNDER_REPAIR","MUL_COMPLETED","MUL_OTHER"];
const fieldsToExtractHyderabadFourthPage = ["HYD_TOTAL_PENDING_SETS", "HYD_TOTAL_PENDING_PER", "HYD_AGING","HYD_PTAT","HYD_PART_WAITING","HYD_UNDER_REPAIR","HYD_COMPLETED","HYD_OTHER"];
const fieldsToExtractKarachiFourthPage = ["KHI_TOTAL_PENDING_SETS", "KHI_TOTAL_PENDING_PER", "KHI_AGING","KHI_PTAT","KHI_PART_WAITING","KHI_UNDER_REPAIR","KHI_COMPLETED","KHI_OTHER"];

const OthersRawalpindiDataFourthPage = extractMultipleFields(fourthPageOtherData, fieldsToExtractRawalpindiFourthPage, fourthPageCustomFieldNames);
const OthersFaisalabadDataFourthPage = extractMultipleFields(fourthPageOtherData, fieldsToExtractFaisalabadFourthPage, fourthPageCustomFieldNames);
const OthersGujranwalaDataFourthPage = extractMultipleFields(fourthPageOtherData, fieldsToExtractGujranwalaFourthPage, fourthPageCustomFieldNames);
const OthersLahoreDataFourthPage = extractMultipleFields(fourthPageOtherData, fieldsToExtractLahoreFourthPage, fourthPageCustomFieldNames);
const OthersMultanDataFourthPage = extractMultipleFields(fourthPageOtherData, fieldsToExtractMultanFourthPage, fourthPageCustomFieldNames);
const OthersHyderabadDataFourthPage = extractMultipleFields(fourthPageOtherData, fieldsToExtractHyderabadFourthPage, fourthPageCustomFieldNames);
const OthersKarachiDataFourthPage = extractMultipleFields(fourthPageOtherData, fieldsToExtractKarachiFourthPage, fourthPageCustomFieldNames);



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
    topTableKarachiData,

    // #####################  THIRD PAGE  #########################
    OthersRawalpindiDataThirdPage,
    OthersFaisalabadDataThirdPage,
    OthersGujranwalaDataThirdPage,
    OthersLahoreDataThirdPage,
    OthersMultanDataThirdPage,
    OthersHyderabadDataThirdPage,
    OthersKarachiDataThirdPage,
    // #####################  FOURTH PAGE  #########################
    OthersRawalpindiDataFourthPage,
    OthersFaisalabadDataFourthPage,
    OthersGujranwalaDataFourthPage,
    OthersLahoreDataFourthPage,
    OthersMultanDataFourthPage,
    OthersHyderabadDataFourthPage,
    OthersKarachiDataFourthPage,
    
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
