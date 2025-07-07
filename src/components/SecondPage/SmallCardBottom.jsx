import React from "react";
import InsetResponsiveLineChart from "./charts/InsetResponsiveLineChart";
import OutsetResponsiveLineChart from "./charts/OutsetResponsiveLineChart";

const SmallCardBottom = ({ name, bottomTable1, bottomTable2,SmallLineChart }) => {
 const formattedLineChartDataProductsInset = SmallLineChart.map(
    (week, index) => ({
      week: `${week.SHORT_WEEKS}`,
      GREE_AC: week.IN_GREE_AC,
      ES_AC: week.IN_ECOSTAR_AC,
      ES_LED: week.IN_ECOSTAR_LED_TV,
      REF: week.IN_REFRIGERATOR,
      OTHERS: week.IN_OTHERS,
    })
  );
  const formattedLineChartDataProductsOutset = SmallLineChart.map(
    (week, index) => ({
      week: `${week.SHORT_WEEKS}`,
      GREE_AC: week.OUT_GREE_AC,
      ES_AC: week.OUT_ECOSTAR_AC,
      ES_LED: week.OUT_ECOSTAR_LED_TV,
      REF: week.OUT_REFRIGERATOR,
      OTHERS: week.OUT_OTHERS || 0,
    })
  );


  return (
    <div className="smallcardMain w-[300px] 2xl:w-[100%]  first-div h-auto rounded-[10px] px-3 pb-6 pt-2 mt-4">
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
        <InsetResponsiveLineChart
            chartData={formattedLineChartDataProductsInset}
            keysToDisplay={[
              "GREE_AC",
              "ES_AC",
              "ES_LED",
              "REF",
              "OTHERS",
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
       <OutsetResponsiveLineChart
            chartData={formattedLineChartDataProductsOutset}
           keysToDisplay={[
              "GREE_AC",
              "ES_AC",
              "ES_LED",
              "REF",
              "OTHERS",
            ]}
          />
      </div>
    </div>
  );
};

export default SmallCardBottom;
