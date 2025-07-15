import ResponsiveLineChart from "../SecondPage/charts/ResponsiveLineChart";

const FourthSmallCardBottom = ({ name,productTable,lineChart}) => {

 const formattedLineChartDataProducts = lineChart.map((week, index) => ({
    week: `${week.DISPLAY_WEEK}`,
    PART_WAITING: week.Product_PART_WAITING ??0,
    UNDER_REPAIR: week.Product_UNDER_REPAIR ??0,
    COMPLETED: week.Product_COMPLETED ??0,
    OTHERS: week.Product_OTHERS ??0,
  }));

  return (
    <div className="w-[300px] pb-10 smallcardMain 2xl:w-[100%] third-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vw] mt-3">
      {/* FIRST  */}
      <div>
        <h1 className="text-white font-semibold text-[13px] 2xl:text-[.8vw] tracking-wide text-center">
          Nation Wide {name} As On Pending
        </h1>
        {/* TABLE DIV */}
        <div className="w-full px-1 mt-4 2xl:px-[.2vw]">
          <table className="w-full mb-6 mt-1">
            <tr className="text-white 2xl:text-[.7vw] text-[12px] border-b">
              <th className="font-light border-r-2 text-left">Weeks</th>
              <th className="font-light border-r-2 text-center">P Wait</th>
              <th className="font-light border-r-2">U Repair</th>
              <th className="font-light border-r-2">Completed</th>
              <th className="font-light">Others</th>
            </tr>

            {productTable.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-normal text-white">
                    {data?.WEEKS}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-light text-center  text-white">
                  {data?.PRODUCT_PART_WAITING ?? 0}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-light text-center text-white">
                  {data?.PRODUCT_UNDER_REPAIR ?? 0}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-light text-center text-white">
                  {data?.PRODUCT_COMPLETED ?? 0}
                  </td>
                  <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-light  text-white">
                  {data?.PRODUCT_OTHERS ?? 0}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <hr className="mx-6" />
        <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.6vw] -ml-2">
          {/* <FourthBarChart chartData={chartData2} /> */}
               <ResponsiveLineChart
              chartData={formattedLineChartDataProducts}
              keysToDisplay={[
                "OTHERS",
                "COMPLETED",
                "UNDER_REPAIR",
                "PART_WAITING",
              ]}
            />{" "}
          
        </div>
      </div>
    </div>
  );
};

export default FourthSmallCardBottom;
