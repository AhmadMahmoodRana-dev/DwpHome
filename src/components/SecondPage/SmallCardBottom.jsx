import React from "react";
import ResponsiveLineChart from "./charts/ResponsiveLineChart";

const SmallCardBottom = ({ name, bottomTable1, bottomTable2,SmallLineChart }) => {
 const formattedLineChartDataProductsInset = SmallLineChart.map(
    (week, index) => ({
      week: `Week ${week.SHORT_WEEKS}`,
      GREE_IN_SETS: week.IN_GREE_AC,
      ESAC_IN_SETS: week.IN_ECOSTAR_AC,
      ESLED_IN_SETS: week.IN_ECOSTAR_LED_TV,
      REF_IN_SETS: week.IN_REFRIGERATOR,
      OTHERS_IN_SETS: week.IN_OTHERS,
    })
  );
  const formattedLineChartDataProductsOutset = SmallLineChart.map(
    (week, index) => ({
      week: `Week ${week.SHORT_WEEKS}`,
      GREE_OUT_SETS: week.OUT_GREE_AC,
      ESAC_OUT_SETS: week.OUT_ECOSTAR_AC,
      ESLED_OUT_SETS: week.OUT_ECOSTAR_LED_TV,
      REF_OUT_SETS: week.OUT_REFRIGERATOR,
      OTHERS_OUT_SETS: week.OUT_OTHERS,
    })
  );


  return (
    <div className="smallcardMain w-[300px] 2xl:w-[100%]  first-div min-h-[80vh] h-auto rounded-[10px] px-3 pb-6 pt-2 mt-4">
      {/* FIRST  */}
      <div>
        <h1 className="text-white font-semibold text-[14px] 2xl:text-[.85vw] tracking-wide text-center">
          {name} Inset Category Wise
        </h1>
        {/* TABLE */}

        <div className="px-1">
          <table className="w-full mt-3 2xl:mt-[1vw] mb-6">
            <tr className="text-white text-[10px] 2xl:text-[.6vw] border-b">
              <th className="font-medium border-r-2 text-left">Weeks</th>
              <th className="font-medium border-r-2">Gree Ac</th>
              <th className="font-medium border-r-2">ES - AC</th>
              <th className="font-medium border-r-2">LED</th>
              <th className="font-medium border-r-2">Ref</th>
              <th className="font-medium">Others</th>
            </tr>

            {bottomTable1.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.65vw] px-1  font-normal text-white">
                    {data?.NO_OF_WEEKS}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center  text-white">
                    {data?.IN_GREE_AC?.toLocaleString()}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data?.IN_ECOSTAR_AC?.toLocaleString()}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data?.IN_ECOSTAR_LED_TV?.toLocaleString()}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data?.IN_REFRIGERATOR?.toLocaleString()}
                  </td>
                  <td className="text-right pt-2  2xl:text-[.75vw] pr-1 text-[12px] font-semibold  text-white">
                    {data?.IN_OTHERS?.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </table>
          <hr className="2xl:mt-8" />
        </div>
        {/* <SmallBarChart data={insetBarChart} /> */}
        <ResponsiveLineChart
            chartData={formattedLineChartDataProductsInset}
            keysToDisplay={[
              "GREE_IN_SETS",
              "ESAC_IN_SETS",
              "ESLED_IN_SETS",
              "REF_IN_SETS",
              "OTHERS_IN_SETS",
            ]}
          />
        <hr className="mt-[2vw]" />
      </div>

      {/* Second Card */}
      <div className="mt-5">
        <h1 className="text-white font-semibold text-[14px] 2xl:text-[.85vw] tracking-wide text-center">
          {name} Outset Category Wise
        </h1>
        {/* TABLE */}

        <div className="px-1">
          <table className="w-full mt-3 2xl:mt-[1vw] mb-6">
            <tr className="text-white text-[10px] 2xl:text-[.6vw] border-b">
              <th className="font-medium border-r-2 text-left">Weeks</th>
              <th className="font-medium border-r-2">Gree Ac</th>
              <th className="font-medium border-r-2">ES - AC</th>
              <th className="font-medium border-r-2">LED</th>
              <th className="font-medium border-r-2">Ref</th>
              <th className="font-medium">Others</th>
            </tr>

            {bottomTable2.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.65vw] px-1  font-normal text-white">
                    {data?.NO_OF_WEEKS}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center  text-white">
                    {data?.OUT_GREE_AC}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.OUT_ECOSTAR_AC}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.OUT_ECOSTAR_LED_TV}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.OUT_REFRIGERATOR}
                  </td>
                  <td className="text-right pt-2  2xl:text-[.75vw] pr-1 text-[12px] font-semibold  text-white">
                    {data.OUT_OTHERS}
                  </td>
                </tr>
              );
            })}
          </table>
          <hr />
        </div>
       <ResponsiveLineChart
            chartData={formattedLineChartDataProductsOutset}
            keysToDisplay={[
              "GREE_OUT_SETS",
              "ESAC_OUT_SETS",
              "ESLED_OUT_SETS",
              "REF_OUT_SETS",
              "OTHERS_OUT_SETS",
            ]}
          />

      </div>
    </div>
  );
};

export default SmallCardBottom;
