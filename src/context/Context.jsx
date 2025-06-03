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
const [thirdPageTableData, setThirdPageTableData] = useState([]);
console.log(thirdPageTableData,"thirdPageTableDatathirdPageTableData")

useEffect(() => {
  const fetchInsetData = async () => {
    try {
      const dateId = filteredData[0]?.ID;
      if (!dateId) return;

      // First API call
      const response1 = await axios.get("https://dwpcare.com.pk/dwp/tat", {
        params: { EDATE:dateId},
      });
      setThirdPageOtherData(response1.data);
      
      // Second API call
      const response2 = await axios.get("https://dwpcare.com.pk/dwp/tat", {
        params: { SDATE: dateId, EDATE: dateId },
      });
      setThirdPageTableData(response2.data);

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


//  TABLE
const thirdTableCustomFieldNames = ["WEEKS", "DAY_0", "DAY2_3","DAY4_7","DAY8_ABOVE"];

const fieldsToExtractRawalpinditopTableThird = ["WEEKS","RWP_DAY_0","RWP_DAY2_3","RWP_DAY4_7","RWP_DAY8_ABOVE"];
const fieldsToExtractFaisalabadtopTableThird = ["WEEKS","FSD_DAY_0","FSD_DAY2_3","FSD_DAY4_7","FSD_DAY8_ABOVE"];
const fieldsToExtractGujranwalatopTableThird = ["WEEKS","GUJ_DAY_0","GUJ_DAY2_3","GUJ_DAY4_7","GUJ_DAY8_ABOVE"];
const fieldsToExtractLahoretopTableThird =     ["WEEKS","LHE_DAY_0","LHE_DAY2_3","LHE_DAY4_7","LHE_DAY8_ABOVE"];
const fieldsToExtractMultantopTableThird =     ["WEEKS","MUL_DAY_0","MUL_DAY2_3","MUL_DAY4_7","MUL_DAY8_ABOVE"];
const fieldsToExtractHyderabadtopTableThird =  ["WEEKS","HYD_DAY_0","HYD_DAY2_3","HYD_DAY4_7","HYD_DAY8_ABOVE"];
const fieldsToExtractKarachitopTableThird =    ["WEEKS","KHI_DAY_0","KHI_DAY2_3","KHI_DAY4_7","KHI_DAY8_ABOVE"];

const topTableRawalpindiDataThird = extractMultipleFields(thirdPageTableData, fieldsToExtractRawalpinditopTableThird, thirdTableCustomFieldNames);
const topTableFaisalabadDataThird = extractMultipleFields(thirdPageTableData, fieldsToExtractFaisalabadtopTableThird, thirdTableCustomFieldNames);
const topTableGujranwalaDataThird = extractMultipleFields(thirdPageTableData, fieldsToExtractGujranwalatopTableThird, thirdTableCustomFieldNames);
const topTableLahoreDataThird = extractMultipleFields(thirdPageTableData, fieldsToExtractLahoretopTableThird, thirdTableCustomFieldNames);
const topTableMultanDataThird = extractMultipleFields(thirdPageTableData, fieldsToExtractMultantopTableThird, thirdTableCustomFieldNames);
const topTableHyderabadDataThird = extractMultipleFields(thirdPageTableData, fieldsToExtractHyderabadtopTableThird, thirdTableCustomFieldNames);
const topTableKarachiDataThird = extractMultipleFields(thirdPageTableData, fieldsToExtractKarachitopTableThird, thirdTableCustomFieldNames);

// PRODUCT TABLE
const thirdProductTableCustomFieldNames = ["WEEKS", "PRODUCT_DAY_0", "PRODUCT_DAY2_3","PRODUCT_DAY4_7","PRODUCT_DAY8_ABOVE"];

const fieldsToExtractEcostar = ["WEEKS","ECOSTAR_AC_DAY_0","ECOSTAR_AC_DAY2_3","ECOSTAR_AC_DAY4_7","ECOSTAR_AC_DAY8_ABOVE"];
const fieldsToExtractLed = ["WEEKS","ECOSTAR_LED_TV_DAY_0","ECOSTAR_LED_TV_DAY2_3","ECOSTAR_LED_TV_DAY4_7","ECOSTAR_LED_TV_DAY8_ABOVE"];
const fieldsToExtractRefrigerator = ["WEEKS","REFRIGERATOR_DAY_0","REFRIGERATOR_DAY2_3","REFRIGERATOR_DAY4_7","REFRIGERATOR_DAY8_ABOVE"];
const fieldsToExtractOther = ["WEEKS","OTHERS_DAY_0","OTHERS_DAY2_3","OTHERS_DAY4_7","OTHERS_DAY8_ABOVE"];

const productTableEcostar = extractMultipleFields(thirdPageTableData, fieldsToExtractEcostar, thirdProductTableCustomFieldNames);
const productTableLed = extractMultipleFields(thirdPageTableData, fieldsToExtractLed, thirdProductTableCustomFieldNames);
const productTableRefrigerator = extractMultipleFields(thirdPageTableData, fieldsToExtractRefrigerator, thirdProductTableCustomFieldNames);
const productTableOther = extractMultipleFields(thirdPageTableData, fieldsToExtractOther, thirdProductTableCustomFieldNames);
// ######################################################################################################################################

// FOURTH PAGE

const [fourthPageOtherData, setFourthPageOtherData] = useState([]);
const [fourthPageTableData, setFourthPageTableData] = useState([]);

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
      // SECOND API call
      const response2 = await axios.get(
         `https://dwpcare.com.pk/dwp/pending`,
          {
            params: {
              STARTWEEK: dateId,
              ENDWEEK: dateId,
            },
          }
      );
      setFourthPageTableData(response2.data);

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


//  TABLE
const fourthTableCustomFieldNames = ["WEEKS", "PART_WAITING", "UNDER_REPAIR","COMPLETED","OTHER","DAY_0","DAY_0_PER","DAY2_3","DAY2_3_PER","DAY4_7","DAY4_7_PER","DAY8_ABOVE","DAY8_ABOVE_PER"];

const fieldsToExtractRawalpinditopTableFourth = ["WEEKS","RWP_PART_WAITING","RWP_UNDER_REPAIR","RWP_COMPLETED","RWP_OTHERS","RWP_DAY_0","RWP_DAY_0_PER","RWP_DAY2_3","RWP_DAY2_3_PER","RWP_DAY4_7","RWP_DAY4_7_PER","RWP_DAY8_ABOVE","RWP_DAY8_ABOVE_PER"];
const fieldsToExtractFaisalabadtopTableFourth = ["WEEKS","FSD_PART_WAITING","FSD_UNDER_REPAIR","FSD_COMPLETED","FSD_OTHERS","FSD_DAY_0","FSD_DAY_0_PER","FSD_DAY2_3","FSD_DAY2_3_PER","FSD_DAY4_7","FSD_DAY4_7_PER","FSD_DAY8_ABOVE","FSD_DAY8_ABOVE_PER"];
const fieldsToExtractGujranwalatopTableFourth = ["WEEKS","GUJ_PART_WAITING","GUJ_UNDER_REPAIR","GUJ_COMPLETED","GUJ_OTHERS","GUJ_DAY_0","GUJ_DAY_0_PER","GUJ_DAY2_3","GUJ_DAY2_3_PER","GUJ_DAY4_7","GUJ_DAY4_7_PER","GUJ_DAY8_ABOVE","GUJ_DAY8_ABOVE_PER"];
const fieldsToExtractLahoretopTableFourth =     ["WEEKS","LHE_PART_WAITING","LHE_UNDER_REPAIR","LHE_COMPLETED","LHE_OTHERS","LHE_DAY_0","LHE_DAY_0_PER","LHE_DAY2_3","LHE_DAY2_3_PER","LHE_DAY4_7","LHE_DAY4_7_PER","LHE_DAY8_ABOVE","LHE_DAY8_ABOVE_PER"];
const fieldsToExtractMultantopTableFourth =     ["WEEKS","MUL_PART_WAITING","MUL_UNDER_REPAIR","MUL_COMPLETED","MUL_OTHERS","MUL_DAY_0","MUL_DAY_0_PER","MUL_DAY2_3","MUL_DAY2_3_PER","MUL_DAY4_7","MUL_DAY4_7_PER","MUL_DAY8_ABOVE","MUL_DAY8_ABOVE_PER"];
const fieldsToExtractHyderabadtopTableFourth =  ["WEEKS","HYD_PART_WAITING","HYD_UNDER_REPAIR","HYD_COMPLETED","HYD_OTHERS","HYD_DAY_0","HYD_DAY_0_PER","HYD_DAY2_3","HYD_DAY2_3_PER","HYD_DAY4_7","HYD_DAY4_7_PER","HYD_DAY8_ABOVE","HYD_DAY8_ABOVE_PER"];
const fieldsToExtractKarachitopTableFourth =    ["WEEKS","KHI_PART_WAITING","KHI_UNDER_REPAIR","KHI_COMPLETED","KHI_OTHERS","KHI_DAY_0","KHI_DAY_0_PER","KHI_DAY2_3","KHI_DAY2_3_PER","KHI_DAY4_7","KHI_DAY4_7_PER","KHI_DAY8_ABOVE","KHI_DAY8_ABOVE_PER"];

const topTableRawalpindiDataFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractRawalpinditopTableFourth, fourthTableCustomFieldNames);
const topTableFaisalabadDataFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractFaisalabadtopTableFourth, fourthTableCustomFieldNames);
const topTableGujranwalaDataFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractGujranwalatopTableFourth, fourthTableCustomFieldNames);
const topTableLahoreDataFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractLahoretopTableFourth, fourthTableCustomFieldNames);
const topTableMultanDataFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractMultantopTableFourth, fourthTableCustomFieldNames);
const topTableHyderabadDataFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractHyderabadtopTableFourth, fourthTableCustomFieldNames);
const topTableKarachiDataFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractKarachitopTableFourth, fourthTableCustomFieldNames);


// PRODUCT TABLE
const fourthProductTableCustomFieldNames = ["WEEKS", "PRODUCT_PART_WAITING", "PRODUCT_UNDER_REPAIR","PRODUCT_COMPLETED","PRODUCT_OTHERS"];

const fieldsToExtractEcostarFourth = ["WEEKS","ECOSTAR_AC_PART_WAITING","ECOSTAR_AC_UNDER_REPAIR","ECOSTAR_AC_COMPLETED","ECOSTAR_AC_OTHERS"];
const fieldsToExtractLedFourth = ["WEEKS","ECOSTAR_LED_TV_PART_WAITING","ECOSTAR_LED_TV_UNDER_REPAIR","ECOSTAR_LED_TV_COMPLETED","ECOSTAR_LED_TV_OTHERS"];
const fieldsToExtractRefrigeratorFourth = ["WEEKS","REFRIGERATOR_PART_WAITING","REFRIGERATOR_UNDER_REPAIR","REFRIGERATOR_COMPLETED","REFRIGERATOR_OTHERS"];
const fieldsToExtractOtherFourth = ["WEEKS","OTHERS_PART_WAITING","OTHERS_UNDER_REPAIR","OTHERS_COMPLETED","OTHERS_OTHERS"];

const productTableEcostarFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractEcostarFourth, fourthProductTableCustomFieldNames);
const productTableLedFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractLedFourth, fourthProductTableCustomFieldNames);
const productTableRefrigeratorFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractRefrigeratorFourth, fourthProductTableCustomFieldNames);
const productTableOtherFourth = extractMultipleFields(fourthPageTableData, fieldsToExtractOtherFourth, fourthProductTableCustomFieldNames);

// ######################################################################################################################################

// FIFTH PAGE
const [fifthPageOtherData, setFifthPageOtherData] = useState([]);
const [fifthPageTableData, setFifthPageTableData] = useState([]);

useEffect(() => {
  const fetchInsetData = async () => {
    try {
      const dateId = filteredData[0]?.ID;
      if (!dateId) return;

      // First API call
      const response1 = await axios.get(
        `https://dwpcare.com.pk/dwp/revenue`,
        {
          params: { ENDWEEK: dateId },
        }
      );
      setFifthPageOtherData(response1.data);
      // SECOND API call
      const response2 = await axios.get(
         `https://dwpcare.com.pk/dwp/revenue`,
          {
            params: {
              STARTWEEK: dateId,
              ENDWEEK: dateId,
            },
          }
      );
      setFifthPageTableData(response2.data);

    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };
  
  fetchInsetData();
}, [filteredData[0]?.ID]);


// OTHERS DATA
const fifthPageCustomFieldNames = ["TOTAL_REVENUE", "TOTAL_REVENUE_PER", "YTD_REVENUE","PARTS","SERVICE_PER","VISIT_PER","INSTALL_PER"];

const fieldsToExtractRawalpindiFifthPage = ["RWP_REVENUE", "RWP_REVENUE_PER", "RWP_YTD_REVENUE","RWP_PARTS","RWP_SERVICE_PER","RWP_VISIT_PER","RWP_INSTALL_PER"];
const fieldsToExtractFaisalabadFifthPage = ["FSD_REVENUE", "FSD_REVENUE_PER", "FSD_YTD_REVENUE","FSD_PARTS","FSD_SERVICE_PER","FSD_VISIT_PER","FSD_INSTALL_PER"];
const fieldsToExtractGujranwalaFifthPage = ["GUJ_REVENUE", "GUJ_REVENUE_PER", "GUJ_YTD_REVENUE","GUJ_PARTS","GUJ_SERVICE_PER","GUJ_VISIT_PER","GUJ_INSTALL_PER"];
const fieldsToExtractLahoreFifthPage =     ["LHE_REVENUE", "LHE_REVENUE_PER", "LHE_YTD_REVENUE","LHE_PARTS","LHE_SERVICE_PER","LHE_VISIT_PER","LHE_INSTALL_PER"];
const fieldsToExtractMultanFifthPage =     ["MUL_REVENUE", "MUL_REVENUE_PER", "MUL_YTD_REVENUE","MUL_PARTS","MUL_SERVICE_PER","MUL_VISIT_PER","MUL_INSTALL_PER"];
const fieldsToExtractHyderabadFifthPage =  ["HYD_REVENUE", "HYD_REVENUE_PER", "HYD_YTD_REVENUE","HYD_PARTS","HYD_SERVICE_PER","HYD_VISIT_PER","HYD_INSTALL_PER"];
const fieldsToExtractKarachiFifthPage =    ["KHI_REVENUE", "KHI_REVENUE_PER", "KHI_YTD_REVENUE","KHI_PARTS","KHI_SERVICE_PER","KHI_VISIT_PER","KHI_INSTALL_PER"];

const OthersRawalpindiDataFifthPage = extractMultipleFields(fifthPageOtherData, fieldsToExtractRawalpindiFifthPage, fifthPageCustomFieldNames);
const OthersFaisalabadDataFifthPage = extractMultipleFields(fifthPageOtherData, fieldsToExtractFaisalabadFifthPage, fifthPageCustomFieldNames);
const OthersGujranwalaDataFifthPage = extractMultipleFields(fifthPageOtherData, fieldsToExtractGujranwalaFifthPage, fifthPageCustomFieldNames);
const OthersLahoreDataFifthPage = extractMultipleFields(fifthPageOtherData, fieldsToExtractLahoreFifthPage, fifthPageCustomFieldNames);
const OthersMultanDataFifthPage = extractMultipleFields(fifthPageOtherData, fieldsToExtractMultanFifthPage, fifthPageCustomFieldNames);
const OthersHyderabadDataFifthPage = extractMultipleFields(fifthPageOtherData, fieldsToExtractHyderabadFifthPage, fifthPageCustomFieldNames);
const OthersKarachiDataFifthPage = extractMultipleFields(fifthPageOtherData, fieldsToExtractKarachiFifthPage, fifthPageCustomFieldNames);

//  TABLE
const fifthTableCustomFieldNames = ["WEEKS", "PARTS", "SERVICE","VISIT_CHARGES","INSTALL_CORPORATE"];

const fieldsToExtractRawalpinditopTableFifth = ["WEEKS","RWP_PARTS","RWP_SERVICE","RWP_VISIT","RWP_INSTALL"];
const fieldsToExtractFaisalabadtopTableFifth = ["WEEKS","FSD_PARTS","FSD_SERVICE","FSD_VISIT","FSD_INSTALL"];
const fieldsToExtractGujranwalatopTableFifth = ["WEEKS","GUJ_PARTS","GUJ_SERVICE","GUJ_VISIT","GUJ_INSTALL"];
const fieldsToExtractLahoretopTableFifth =     ["WEEKS","LHE_PARTS","LHE_SERVICE","LHE_VISIT","LHE_INSTALL"];
const fieldsToExtractMultantopTableFifth =     ["WEEKS","MUL_PARTS","MUL_SERVICE","MUL_VISIT","MUL_INSTALL"];
const fieldsToExtractHyderabadtopTableFifth =  ["WEEKS","HYD_PARTS","HYD_SERVICE","HYD_VISIT","HYD_INSTALL"];
const fieldsToExtractKarachitopTableFifth =    ["WEEKS","KHI_PARTS","KHI_SERVICE","KHI_VISIT","KHI_INSTALL"];

const topTableRawalpindiDataFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractRawalpinditopTableFifth, fifthTableCustomFieldNames);
const topTableFaisalabadDataFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractFaisalabadtopTableFifth, fifthTableCustomFieldNames);
const topTableGujranwalaDataFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractGujranwalatopTableFifth, fifthTableCustomFieldNames);
const topTableLahoreDataFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractLahoretopTableFifth, fifthTableCustomFieldNames);
const topTableMultanDataFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractMultantopTableFifth, fifthTableCustomFieldNames);
const topTableHyderabadDataFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractHyderabadtopTableFifth, fifthTableCustomFieldNames);
const topTableKarachiDataFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractKarachitopTableFifth, fifthTableCustomFieldNames);

// PRODUCT TABLE
const fifthProductTableCustomFieldNames = ["WEEKS", "PRODUCT_PARTS", "PRODUCT_SERVICE","PRODUCT_VISIT","PRODUCT_INSTALL"];

const fieldsToExtractEcostarFifth = ["WEEKS","ECOSTAR_AC_PARTS","ECOSTAR_AC_SERVICE","ECOSTAR_AC_VISIT","ECOSTAR_AC_INSTALL"];
const fieldsToExtractLedFifth = ["WEEKS","ECOSTAR_LED_TV_PARTS","ECOSTAR_LED_TV_SERVICE","ECOSTAR_LED_TV_VISIT","ECOSTAR_LED_TV_INSTALL"];
const fieldsToExtractRefrigeratorFifth = ["WEEKS","REFRIGERATOR_PARTS","REFRIGERATOR_SERVICE","REFRIGERATOR_VISIT","REFRIGERATOR_INSTALL"];
const fieldsToExtractOtherFifth = ["WEEKS","OTHERS_PARTS","OTHERS_SERVICE","OTHERS_VISIT","OTHERS_INSTALL"];

const productTableEcostarFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractEcostarFifth, fifthProductTableCustomFieldNames);
const productTableLedFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractLedFifth, fifthProductTableCustomFieldNames);
const productTableRefrigeratorFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractRefrigeratorFifth, fifthProductTableCustomFieldNames);
const productTableOtherFifth = extractMultipleFields(fifthPageTableData, fieldsToExtractOtherFifth, fifthProductTableCustomFieldNames);


// SECOND PAGE LINE CHART API

const [secondLineChart,setSecondLineChart] = useState([]) 

useEffect(() => {
  const fetchChartData = async () => {
    try {
      const response1 = await axios.get(
        `https://dwpcare.com.pk/dwp/inset/allweeks`
      );
      setSecondLineChart(response1.data);
     

    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };
  
  fetchChartData();
}, []);

// CHART REGION DATA FILTERATION
const secondLineChartCustomFieldName = ["SHORT_WEEKS", "IN_SETS", "OUT_SETS"];

const fieldsToExtractRawalpindiSecondLineChart = ["SHORT_WEEKS","RWP_IN_SETS","RWP_OUT_SETS"];
const fieldsToExtractFaisalabadSecondLineChart = ["SHORT_WEEKS","FSD_IN_SETS","FSD_OUT_SETS"];
const fieldsToExtractGujranwalaSecondLineChart = ["SHORT_WEEKS","GUJ_IN_SETS","GUJ_OUT_SETS"];
const fieldsToExtractLahoreSecondLineChart =     ["SHORT_WEEKS","LHE_IN_SETS","LHE_OUT_SETS"];
const fieldsToExtractMultanSecondLineChart =     ["SHORT_WEEKS","MUL_IN_SETS","MUL_OUT_SETS"];
const fieldsToExtractHyderabadSecondLineChart =  ["SHORT_WEEKS","HYD_IN_SETS","HYD_OUT_SETS"];
const fieldsToExtractKarachiSecondLineChart =    ["SHORT_WEEKS","KHI_IN_SETS","KHI_OUT_SETS"];

const LineChartRawalpindiDataSecond = extractMultipleFields(secondLineChart, fieldsToExtractRawalpindiSecondLineChart, secondLineChartCustomFieldName);
const LineChartFaisalabadDataSecond = extractMultipleFields(secondLineChart, fieldsToExtractFaisalabadSecondLineChart, secondLineChartCustomFieldName);
const LineChartGujranwalaDataSecond = extractMultipleFields(secondLineChart, fieldsToExtractGujranwalaSecondLineChart, secondLineChartCustomFieldName);
const LineChartLahoreDataSecond = extractMultipleFields(secondLineChart, fieldsToExtractLahoreSecondLineChart, secondLineChartCustomFieldName);
const LineChartMultanDataSecond = extractMultipleFields(secondLineChart, fieldsToExtractMultanSecondLineChart, secondLineChartCustomFieldName);
const LineChartHyderabadDataSecond = extractMultipleFields(secondLineChart, fieldsToExtractHyderabadSecondLineChart, secondLineChartCustomFieldName);
const LineChartKarachiDataSecond = extractMultipleFields(secondLineChart, fieldsToExtractKarachiSecondLineChart, secondLineChartCustomFieldName);


// CHART PRODUCT THROUGH REGION WISE
const secondLineChartCustomFieldNameProductRegion = ["SHORT_WEEKS", "OUT_GREE_AC", "OUT_ECOSTAR_AC", "OUT_ECOSTAR_LED_TV", "OUT_REFRIGERATOR", "OUT_OTHERS","IN_GREE_AC", "IN_ECOSTAR_AC", "IN_ECOSTAR_LED_TV", "IN_REFRIGERATOR", "IN_OTHERS"];


const fieldsToExtractRawalpindiSecondLineChartProductRegion = ["SHORT_WEEKS","RWP_OUT_GREE_AC", "RWP_OUT_ECOSTAR_AC", "RWP_OUT_ECOSTAR_LED_TV", "RWP_OUT_REFRIGERATOR", "RWP_OUT_OTHERS","RWP_IN_GREE_AC", "RWP_IN_ECOSTAR_AC", "RWP_IN_ECOSTAR_LED_TV", "RWP_IN_REFRIGERATOR", "RWP_IN_OTHERS"];
const fieldsToExtractFaisalabadSecondLineChartProductRegion = ["SHORT_WEEKS","FSD_OUT_GREE_AC", "FSD_OUT_ECOSTAR_AC", "FSD_OUT_ECOSTAR_LED_TV", "FSD_OUT_REFRIGERATOR", "FSD_OUT_OTHERS","FSD_IN_GREE_AC", "FSD_IN_ECOSTAR_AC", "FSD_IN_ECOSTAR_LED_TV", "FSD_IN_REFRIGERATOR", "FSD_IN_OTHERS"];
const fieldsToExtractGujranwalaSecondLineChartProductRegion = ["SHORT_WEEKS","GUJ_OUT_GREE_AC", "GUJ_OUT_ECOSTAR_AC", "GUJ_OUT_ECOSTAR_LED_TV", "GUJ_OUT_REFRIGERATOR", "GUJ_OUT_OTHERS","GUJ_IN_GREE_AC", "GUJ_IN_ECOSTAR_AC", "GUJ_IN_ECOSTAR_LED_TV", "GUJ_IN_REFRIGERATOR", "GUJ_IN_OTHERS"];
const fieldsToExtractLahoreSecondLineChartProductRegion =     ["SHORT_WEEKS","LHE_OUT_GREE_AC", "LHE_OUT_ECOSTAR_AC", "LHE_OUT_ECOSTAR_LED_TV", "LHE_OUT_REFRIGERATOR", "LHE_OUT_OTHERS","LHE_IN_GREE_AC", "LHE_IN_ECOSTAR_AC", "LHE_IN_ECOSTAR_LED_TV", "LHE_IN_REFRIGERATOR", "LHE_IN_OTHERS"];
const fieldsToExtractMultanSecondLineChartProductRegion =     ["SHORT_WEEKS","MUL_OUT_GREE_AC", "MUL_OUT_ECOSTAR_AC", "MUL_OUT_ECOSTAR_LED_TV", "MUL_OUT_REFRIGERATOR", "MUL_OUT_OTHERS","MUL_IN_GREE_AC", "MUL_IN_ECOSTAR_AC", "MUL_IN_ECOSTAR_LED_TV", "MUL_IN_REFRIGERATOR", "MUL_IN_OTHERS"];
const fieldsToExtractHyderabadSecondLineChartProductRegion =  ["SHORT_WEEKS","HYD_OUT_GREE_AC", "HYD_OUT_ECOSTAR_AC", "HYD_OUT_ECOSTAR_LED_TV", "HYD_OUT_REFRIGERATOR", "HYD_OUT_OTHERS","HYD_IN_GREE_AC", "HYD_IN_ECOSTAR_AC", "HYD_IN_ECOSTAR_LED_TV", "HYD_IN_REFRIGERATOR", "HYD_IN_OTHERS"];
const fieldsToExtractKarachiSecondLineChartProductRegion =    ["SHORT_WEEKS","KHI_OUT_GREE_AC", "KHI_OUT_ECOSTAR_AC", "KHI_OUT_ECOSTAR_LED_TV", "KHI_OUT_REFRIGERATOR", "KHI_OUT_OTHERS","KHI_IN_GREE_AC", "KHI_IN_ECOSTAR_AC", "KHI_IN_ECOSTAR_LED_TV", "KHI_IN_REFRIGERATOR", "KHI_IN_OTHERS"];

const LineChartRawalpindiDataSecondProductRegion = extractMultipleFields(secondLineChart, fieldsToExtractRawalpindiSecondLineChartProductRegion, secondLineChartCustomFieldNameProductRegion);
const LineChartFaisalabadDataSecondProductRegion = extractMultipleFields(secondLineChart, fieldsToExtractFaisalabadSecondLineChartProductRegion, secondLineChartCustomFieldNameProductRegion);
const LineChartGujranwalaDataSecondProductRegion = extractMultipleFields(secondLineChart, fieldsToExtractGujranwalaSecondLineChartProductRegion, secondLineChartCustomFieldNameProductRegion);
const LineChartLahoreDataSecondProductRegion = extractMultipleFields(secondLineChart, fieldsToExtractLahoreSecondLineChartProductRegion, secondLineChartCustomFieldNameProductRegion);
const LineChartMultanDataSecondProductRegion = extractMultipleFields(secondLineChart, fieldsToExtractMultanSecondLineChartProductRegion, secondLineChartCustomFieldNameProductRegion);
const LineChartHyderabadDataSecondProductRegion = extractMultipleFields(secondLineChart, fieldsToExtractHyderabadSecondLineChartProductRegion, secondLineChartCustomFieldNameProductRegion);
const LineChartKarachiDataSecondProductRegion = extractMultipleFields(secondLineChart, fieldsToExtractKarachiSecondLineChartProductRegion, secondLineChartCustomFieldNameProductRegion);



// THIRD PAGE LINE CHART API

const [thirdLineChart,setThirdLineChart] = useState([]) 

useEffect(() => {
  const fetchChartData = async () => {
    try {
      const response1 = await axios.get(
        `https://dwpcare.com.pk/dwp/tat/allWeeks`
      );
      setThirdLineChart(response1.data);
     

    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };
  
  fetchChartData();
}, []);

// CHART REGION DATA FILTERATION

const thirdLineChartCustomFieldName = ["SHORT_WEEKS","ATAT"];

const fieldsToExtractRawalpindiThirdLineChart = ["SHORT_WEEKS","RWP_ATAT"];
const fieldsToExtractFaisalabadThirdLineChart = ["SHORT_WEEKS","FSD_ATAT"];
const fieldsToExtractGujranwalaThirdLineChart = ["SHORT_WEEKS","GUJ_ATAT"];
const fieldsToExtractLahoreThirdLineChart =     ["SHORT_WEEKS","LHE_ATAT"];
const fieldsToExtractMultanThirdLineChart =     ["SHORT_WEEKS","MUL_ATAT"];
const fieldsToExtractHyderabadThirdLineChart =  ["SHORT_WEEKS","HYD_ATAT"];
const fieldsToExtractKarachiThirdLineChart =    ["SHORT_WEEKS","KHI_ATAT"];

const LineChartRawalpindiDataThird = extractMultipleFields(thirdLineChart, fieldsToExtractRawalpindiThirdLineChart, thirdLineChartCustomFieldName);
const LineChartFaisalabadDataThird = extractMultipleFields(thirdLineChart, fieldsToExtractFaisalabadThirdLineChart, thirdLineChartCustomFieldName);
const LineChartGujranwalaDataThird = extractMultipleFields(thirdLineChart, fieldsToExtractGujranwalaThirdLineChart, thirdLineChartCustomFieldName);
const LineChartLahoreDataThird = extractMultipleFields(thirdLineChart, fieldsToExtractLahoreThirdLineChart, thirdLineChartCustomFieldName);
const LineChartMultanDataThird = extractMultipleFields(thirdLineChart, fieldsToExtractMultanThirdLineChart, thirdLineChartCustomFieldName);
const LineChartHyderabadDataThird = extractMultipleFields(thirdLineChart, fieldsToExtractHyderabadThirdLineChart, thirdLineChartCustomFieldName);
const LineChartKarachiDataThird = extractMultipleFields(thirdLineChart, fieldsToExtractKarachiThirdLineChart, thirdLineChartCustomFieldName);

// CHART PRODUCT DATA FILTERATION

const thirdLineChartCustomFieldNameProducts = ["SHORT_WEEKS","Product_Day_0","Product_Day_2_3","Product_Day_4_7","Product_Day8_above"];

const fieldsToExtractEcostarThirdLineChart = ["SHORT_WEEKS","ECOSTAR_AC_DAY_0","ECOSTAR_AC_DAY2_3","ECOSTAR_AC_DAY4_7","ECOSTAR_AC_DAY8_ABOVE"];
const fieldsToExtractLedThirdLineChart = ["SHORT_WEEKS","ECOSTAR_LED_TV_DAY_0","ECOSTAR_LED_TV_DAY2_3","ECOSTAR_LED_TV_DAY4_7","ECOSTAR_LED_TV_DAY8_ABOVE"];
const fieldsToExtractRefrigeratorThirdLineChart = ["SHORT_WEEKS","REFRIGERATOR_DAY_0","REFRIGERATOR_DAY2_3","REFRIGERATOR_DAY4_7","REFRIGERATOR_DAY8_ABOVE"];
const fieldsToExtractOtherThirdLineChart = ["SHORT_WEEKS","OTHERS_DAY_0","OTHERS_DAY2_3","OTHERS_DAY4_7","OTHERS_DAY8_ABOVE"];

const productTableEcostarThirdLine = extractMultipleFields(thirdLineChart, fieldsToExtractEcostarThirdLineChart, thirdLineChartCustomFieldNameProducts);
const productTableLedThirdLine = extractMultipleFields(thirdLineChart, fieldsToExtractLedThirdLineChart, thirdLineChartCustomFieldNameProducts);
const productTableRefrigeratorThirdLine = extractMultipleFields(thirdLineChart, fieldsToExtractRefrigeratorThirdLineChart, thirdLineChartCustomFieldNameProducts);
const productTableOtherThirdLine = extractMultipleFields(thirdLineChart, fieldsToExtractOtherThirdLineChart, thirdLineChartCustomFieldNameProducts);



// FOURTH PAGE LINE CHART API

const [fourthLineChart,setFourthLineChart] = useState([]) 

useEffect(() => {
  const fetchChartData = async () => {
    try {
      const response1 = await axios.get(
        `https://dwpcare.com.pk/dwp/pending/allWeeks`
      );
      setFourthLineChart(response1.data);
    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };
  
  fetchChartData();
}, []);

// CHART REGION DATA FILTERATION

const fourthLineChartCustomFieldName = ["DISPLAY_WEEK","PART_WAITING","UNDER_REPAIR","COMPLETED","OTHER"];

const fieldsToExtractRawalpindiFourthLineChart = ["DISPLAY_WEEK","RWP_PART_WAITING","RWP_UNDER_REPAIR","RWP_COMPLETED","RWP_OTHER"];
const fieldsToExtractFaisalabadFourthLineChart = ["DISPLAY_WEEK","FSD_PART_WAITING","FSD_UNDER_REPAIR","FSD_COMPLETED","FSD_OTHER"];
const fieldsToExtractGujranwalaFourthLineChart = ["DISPLAY_WEEK","GUJ_PART_WAITING","GUJ_UNDER_REPAIR","GUJ_COMPLETED","GUJ_OTHER"];
const fieldsToExtractLahoreFourthLineChart =     ["DISPLAY_WEEK","LHE_PART_WAITING","LHE_UNDER_REPAIR","LHE_COMPLETED","LHE_OTHER"];
const fieldsToExtractMultanFourthLineChart =     ["DISPLAY_WEEK","MUL_PART_WAITING","MUL_UNDER_REPAIR","MUL_COMPLETED","MUL_OTHER"];
const fieldsToExtractHyderabadFourthLineChart =  ["DISPLAY_WEEK","HYD_PART_WAITING","HYD_UNDER_REPAIR","HYD_COMPLETED","HYD_OTHER"];
const fieldsToExtractKarachiFourthLineChart =    ["DISPLAY_WEEK","KHI_PART_WAITING","KHI_UNDER_REPAIR","KHI_COMPLETED","KHI_OTHER"];

const LineChartRawalpindiDataFourth = extractMultipleFields(fourthLineChart, fieldsToExtractRawalpindiFourthLineChart, fourthLineChartCustomFieldName);
const LineChartFaisalabadDataFourth = extractMultipleFields(fourthLineChart, fieldsToExtractFaisalabadFourthLineChart, fourthLineChartCustomFieldName);
const LineChartGujranwalaDataFourth = extractMultipleFields(fourthLineChart, fieldsToExtractGujranwalaFourthLineChart, fourthLineChartCustomFieldName);
const LineChartLahoreDataFourth = extractMultipleFields(fourthLineChart, fieldsToExtractLahoreFourthLineChart, fourthLineChartCustomFieldName);
const LineChartMultanDataFourth = extractMultipleFields(fourthLineChart, fieldsToExtractMultanFourthLineChart, fourthLineChartCustomFieldName);
const LineChartHyderabadDataFourth = extractMultipleFields(fourthLineChart, fieldsToExtractHyderabadFourthLineChart, fourthLineChartCustomFieldName);
const LineChartKarachiDataFourth = extractMultipleFields(fourthLineChart, fieldsToExtractKarachiFourthLineChart, fourthLineChartCustomFieldName);


// CHART PRODUCT DATA FILTERATION

const fourthLineChartCustomFieldNameProducts = ["DISPLAY_WEEK","Product_PART_WAITING","Product_UNDER_REPAIR","Product_COMPLETED","Product_OTHERS"];

const fieldsToExtractEcostarFourthLineChart = ["DISPLAY_WEEK","ECOSTAR_AC_PART_WAITING","ECOSTAR_AC_UNDER_REPAIR","ECOSTAR_AC_COMPLETED","ECOSTAR_AC_OTHERS"];
const fieldsToExtractLedFourthLineChart = ["DISPLAY_WEEK","ECOSTAR_LED_TV_PART_WAITING","ECOSTAR_LED_TV_UNDER_REPAIR","ECOSTAR_LED_TV_COMPLETED","ECOSTAR_LED_TV_OTHERS"];
const fieldsToExtractRefrigeratorFourthLineChart = ["DISPLAY_WEEK","REFRIGERATOR_PART_WAITING","REFRIGERATOR_UNDER_REPAIR","REFRIGERATOR_COMPLETED","REFRIGERATOR_OTHERS"];
const fieldsToExtractOtherFourthLineChart = ["DISPLAY_WEEK","OTHERS_PART_WAITING","OTHERS_UNDER_REPAIR","OTHERS_COMPLETED","OTHERS_OTHERS"];

const productTableEcostarFourthLine = extractMultipleFields(fourthLineChart, fieldsToExtractEcostarFourthLineChart, fourthLineChartCustomFieldNameProducts);
const productTableLedFourthLine = extractMultipleFields(fourthLineChart, fieldsToExtractLedFourthLineChart, fourthLineChartCustomFieldNameProducts);
const productTableRefrigeratorFourthLine = extractMultipleFields(fourthLineChart, fieldsToExtractRefrigeratorFourthLineChart, fourthLineChartCustomFieldNameProducts);
const productTableOtherFourthLine = extractMultipleFields(fourthLineChart, fieldsToExtractOtherFourthLineChart, fourthLineChartCustomFieldNameProducts);


// FIFTH PAGE LINE CHART API

const [fifthLineChart,setFifthLineChart] = useState([]) 

useEffect(() => {
  const fetchChartData = async () => {
    try {
      const response1 = await axios.get(
        `https://dwpcare.com.pk/dwp/revenue/allWeeks`
      );
      setFifthLineChart(response1.data);
    } catch (error) {
      console.error("Error fetching inset data:", error);
    }
  };
  
  fetchChartData();
}, []);

// CHART REGION DATA FILTERATION

const fifthLineChartCustomFieldName = ["DISPLAY_WEEK","PARTS","SERVICE","VISIT_CHARGES","INSTALL_CORPORATE"];

const fieldsToExtractRawalpindiFifthLineChart = ["DISPLAY_WEEK","RWP_PARTS","RWP_SERVICE","RWP_VISIT","RWP_INSTALL"];
const fieldsToExtractFaisalabadFifthLineChart = ["DISPLAY_WEEK","FSD_PARTS","FSD_SERVICE","FSD_VISIT","FSD_INSTALL"];
const fieldsToExtractGujranwalaFifthLineChart = ["DISPLAY_WEEK","GUJ_PARTS","GUJ_SERVICE","GUJ_VISIT","GUJ_INSTALL"];
const fieldsToExtractLahoreFifthLineChart =     ["DISPLAY_WEEK","LHE_PARTS","LHE_SERVICE","LHE_VISIT","LHE_INSTALL"];
const fieldsToExtractMultanFifthLineChart =     ["DISPLAY_WEEK","MUL_PARTS","MUL_SERVICE","MUL_VISIT","MUL_INSTALL"];
const fieldsToExtractHyderabadFifthLineChart =  ["DISPLAY_WEEK","HYD_PARTS","HYD_SERVICE","HYD_VISIT","HYD_INSTALL"];
const fieldsToExtractKarachiFifthLineChart =    ["DISPLAY_WEEK","KHI_PARTS","KHI_SERVICE","KHI_VISIT","KHI_INSTALL"];

const LineChartRawalpindiDataFifth = extractMultipleFields(fifthLineChart, fieldsToExtractRawalpindiFifthLineChart, fifthLineChartCustomFieldName);
const LineChartFaisalabadDataFifth = extractMultipleFields(fifthLineChart, fieldsToExtractFaisalabadFifthLineChart, fifthLineChartCustomFieldName);
const LineChartGujranwalaDataFifth = extractMultipleFields(fifthLineChart, fieldsToExtractGujranwalaFifthLineChart, fifthLineChartCustomFieldName);
const LineChartLahoreDataFifth = extractMultipleFields(fifthLineChart, fieldsToExtractLahoreFifthLineChart, fifthLineChartCustomFieldName);
const LineChartMultanDataFifth = extractMultipleFields(fifthLineChart, fieldsToExtractMultanFifthLineChart, fifthLineChartCustomFieldName);
const LineChartHyderabadDataFifth = extractMultipleFields(fifthLineChart, fieldsToExtractHyderabadFifthLineChart, fifthLineChartCustomFieldName);
const LineChartKarachiDataFifth = extractMultipleFields(fifthLineChart, fieldsToExtractKarachiFifthLineChart, fifthLineChartCustomFieldName);


// // CHART PRODUCT DATA FILTERATION

const fifthLineChartCustomFieldNameProducts = ["DISPLAY_WEEK","Product_PARTS","Product_SERVICE","Product_VISIT","Product_INSTALL"];

const fieldsToExtractEcostarFifthLineChart = ["DISPLAY_WEEK","ECOSTAR_AC_PARTS","ECOSTAR_AC_SERVICE","ECOSTAR_AC_VISIT","ECOSTAR_AC_INSTALL"];
const fieldsToExtractLedFifthLineChart = ["DISPLAY_WEEK","ECOSTAR_LED_TV_PARTS","ECOSTAR_LED_TV_SERVICE","ECOSTAR_LED_TV_VISIT","ECOSTAR_LED_TV_INSTALL"];
const fieldsToExtractRefrigeratorFifthLineChart = ["DISPLAY_WEEK","REFRIGERATOR_PARTS","REFRIGERATOR_SERVICE","REFRIGERATOR_VISIT","REFRIGERATOR_INSTALL"];
const fieldsToExtractOtherFifthLineChart = ["DISPLAY_WEEK","OTHERS_PARTS","OTHERS_SERVICE","OTHERS_VISIT","OTHERS_INSTALL"];

const productTableEcostarFifthLine = extractMultipleFields(fifthLineChart, fieldsToExtractEcostarFifthLineChart, fifthLineChartCustomFieldNameProducts);
const productTableLedFifthLine = extractMultipleFields(fifthLineChart, fieldsToExtractLedFifthLineChart, fifthLineChartCustomFieldNameProducts);
const productTableRefrigeratorFifthLine = extractMultipleFields(fifthLineChart, fieldsToExtractRefrigeratorFifthLineChart, fifthLineChartCustomFieldNameProducts);
const productTableOtherFifthLine = extractMultipleFields(fifthLineChart, fieldsToExtractOtherFifthLineChart, fifthLineChartCustomFieldNameProducts);







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
    otherData,
    table,
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
    thirdPageOtherData,
    thirdPageTableData,
    OthersRawalpindiDataThirdPage,
    OthersFaisalabadDataThirdPage,
    OthersGujranwalaDataThirdPage,
    OthersLahoreDataThirdPage,
    OthersMultanDataThirdPage,
    OthersHyderabadDataThirdPage,
    OthersKarachiDataThirdPage,
    // #####################  THIRD PAGE TOP TABLE  #########################
    topTableRawalpindiDataThird,
    topTableFaisalabadDataThird,
    topTableGujranwalaDataThird,
    topTableLahoreDataThird,
    topTableMultanDataThird,
    topTableHyderabadDataThird,
    topTableKarachiDataThird,
    // #####################  THIRD PAGE PRODUCT TABLE  #########################
    productTableEcostar,
    productTableLed,
    productTableRefrigerator,
    productTableOther,
    
    // #####################  FOURTH PAGE  #########################
    fourthPageOtherData,
    fourthPageTableData,
    OthersRawalpindiDataFourthPage,
    OthersFaisalabadDataFourthPage,
    OthersGujranwalaDataFourthPage,
    OthersLahoreDataFourthPage,
    OthersMultanDataFourthPage,
    OthersHyderabadDataFourthPage,
    OthersKarachiDataFourthPage,
    // #####################  Fourth PAGE TOP TABLE  #########################
    topTableRawalpindiDataFourth,
    topTableFaisalabadDataFourth,
    topTableGujranwalaDataFourth,
    topTableLahoreDataFourth,
    topTableMultanDataFourth,
    topTableHyderabadDataFourth,
    topTableKarachiDataFourth,
    // #####################  FOURTH PAGE PRODUCT TABLE  #########################
    productTableEcostarFourth,
    productTableLedFourth,
    productTableRefrigeratorFourth,
    productTableOtherFourth,

    // #####################  FIFTH PAGE  #########################
    fifthPageOtherData,
    fifthPageTableData,
    OthersRawalpindiDataFifthPage,
    OthersFaisalabadDataFifthPage,
    OthersGujranwalaDataFifthPage,
    OthersLahoreDataFifthPage,
    OthersMultanDataFifthPage,
    OthersHyderabadDataFifthPage,
    OthersKarachiDataFifthPage,
    // #####################  FIFTH PAGE TOP TABLE  #########################
    topTableRawalpindiDataFifth,
    topTableFaisalabadDataFifth,
    topTableGujranwalaDataFifth,
    topTableLahoreDataFifth,
    topTableMultanDataFifth,
    topTableHyderabadDataFifth,
    topTableKarachiDataFifth,
       // #####################  FIFTH PAGE PRODUCT TABLE  #########################
    productTableEcostarFifth,
    productTableLedFifth,
    productTableRefrigeratorFifth,
    productTableOtherFifth,
    // #####################  SECOND PAGE LINE CHARTS  #########################
    secondLineChart,
    LineChartRawalpindiDataSecond,
    LineChartFaisalabadDataSecond,
    LineChartGujranwalaDataSecond,
    LineChartLahoreDataSecond,
    LineChartMultanDataSecond,
    LineChartHyderabadDataSecond,
    LineChartKarachiDataSecond,
    // #####################  SECOND PAGE LINE CHARTS  #########################
    LineChartRawalpindiDataSecondProductRegion,
    LineChartFaisalabadDataSecondProductRegion,
    LineChartGujranwalaDataSecondProductRegion,
    LineChartLahoreDataSecondProductRegion,
    LineChartMultanDataSecondProductRegion,
    LineChartHyderabadDataSecondProductRegion,
    LineChartKarachiDataSecondProductRegion,
    // #####################  THIRD PAGE LINE CHARTS  #########################
    thirdLineChart,
    LineChartRawalpindiDataThird,
    LineChartFaisalabadDataThird,
    LineChartGujranwalaDataThird,
    LineChartLahoreDataThird,
    LineChartMultanDataThird,
    LineChartHyderabadDataThird,
    LineChartKarachiDataThird,
    // #####################  THIRD PAGE LINE CHARTS PRODUCTS  #########################
    productTableEcostarThirdLine,
    productTableLedThirdLine,
    productTableRefrigeratorThirdLine,
    productTableOtherThirdLine,
    // #####################  FOURTH PAGE LINE CHARTS  #########################
    fourthLineChart,
    LineChartRawalpindiDataFourth,
    LineChartFaisalabadDataFourth,
    LineChartGujranwalaDataFourth,
    LineChartLahoreDataFourth,
    LineChartMultanDataFourth,
    LineChartHyderabadDataFourth,
    LineChartKarachiDataFourth,
    
    // #####################  FOURTH PAGE LINE CHARTS PRODUCTS  #########################
    productTableEcostarFourthLine,
    productTableLedFourthLine,
    productTableRefrigeratorFourthLine,
    productTableOtherFourthLine,
    // #####################  Fifth PAGE LINE CHARTS  #########################
    fifthLineChart,
    LineChartRawalpindiDataFifth,
    LineChartFaisalabadDataFifth,
    LineChartGujranwalaDataFifth,
    LineChartLahoreDataFifth,
    LineChartMultanDataFifth,
    LineChartHyderabadDataFifth,
    LineChartKarachiDataFifth,
    // #####################  Fifth PAGE LINE CHARTS PRODUCTS  #########################
    productTableEcostarFifthLine,
    productTableLedFifthLine,
    productTableRefrigeratorFifthLine,
    productTableOtherFifthLine,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;