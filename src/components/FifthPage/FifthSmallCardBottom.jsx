import { FifthMainChart } from "./charts/FifthMainChart";
import ResponsiveLineChart from "../SecondPage/charts/ResponsiveLineChart";

const FifthSmallCardBottom = ({ name, productTable, lineChart }) => {
  // const formatDataForChart = (data) => {
  //   return data.map((item) => ({
  //     Week: item.SHORT_WEEKS,
  //     PARTS: item.PARTS,
  //     SERVICE: item.SERVICE,
  //     CHARGES: item.VISIT_CHARGES,
  //     INSTALL: item.INSTALL_CORPORATE,
  //   }));
  // };

  // const chartData = formatDataForChart(data2);
  const formattedLineChartDataProducts = lineChart.map((week, index) => ({
    week: `Week ${week.DISPLAY_WEEK}`,
    PARTS: week.Product_PARTS,
    SERVICE: week.Product_SERVICE,
    VISIT: week.Product_VISIT,
    INSTALL: week.Product_INSTALL,
  }));
  return (
    <div className="w-[300px] 2xl:w-[100%] first-div min-h-[45vh] h-auto mt-3 rounded-[10px] pl-4 pt-2 2xl:py-1 py-4">
      <h1 className="text-[#44cf86] text-xs 2xl:text-[.75vw] text-center mt-3 font-semibold">
        Nation Wide {name} Weekly Revenue
      </h1>
      {/* TABLE DIV */}
      <div className="w-full px-1 mt-4  2xl:mt-[1.4vw] pr-4">
        <table className="w-full mt-3 mb-6">
          <tr className="text-white 2xl:text-[.7vw] text-[14px] border-b">
            <th className="font-medium border-r-2 text-left">Weeks</th>
            <th className="font-medium border-r-2 text-center">Parts</th>
            <th className="font-medium border-r-2">Services</th>
            <th className="font-medium border-r-2">charges</th>
            <th className="font-medium">Ints/Corp</th>
          </tr>

          {productTable.map((data, index) => {
            return (
              <tr>
                <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                  {data?.WEEKS ?? 0}
                </td>
                <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                  {data?.PRODUCT_PARTS ?? 0}
                </td>
                <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                  {data?.PRODUCT_SERVICE ?? 0}
                </td>
                <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                  {data?.PRODUCT_VISIT ?? 0}
                </td>
                <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                  {data?.PRODUCT_INSTALL ?? 0}
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="-ml-2">
        {/* <FifthMainChart chartData={chartData} /> */}
        <ResponsiveLineChart
          chartData={formattedLineChartDataProducts}
          keysToDisplay={["PARTS", "SERVICE", "VISIT", "INSTALL"]}
        />

        {/* <div className="tooltips flex justify-center items-center gap-1 text-white mt-3">
          <div className="w-4 h-2 bg-[#953333]"></div>
          <h1 className="text-[10px]">parts</h1>
          <div className="w-4 h-2 bg-[#025ade]"></div>
          <h1 className="text-[10px]">services</h1>
          <div className="w-4 h-2 bg-[#ae8104]"></div>
          <h1 className="text-[10px]">charges</h1>
          <div className="w-4 h-2 bg-[#ce0265]"></div>
          <h1 className="text-[10px]">inst/corp</h1>
        </div> */}
      </div>
    </div>
  );
};

export default FifthSmallCardBottom;
