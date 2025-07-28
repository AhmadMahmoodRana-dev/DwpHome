import AtatResponsiveLineChart from "./charts/AtatResponsiveLineChart";
const ThirdSmallCardBottom = ({ name,productTable,lineChart }) => {
  const formattedLineChartDataProducts = lineChart.map(
    (week, index) => ({
      week: `${week.SHORT_WEEKS}`,
      ATAT: week.ATAT,
    })
  );
 
  return (
     <div className="w-[300px] 2xl:w-[100%] pb-10 smallcardMain first-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[1vw] mt-3">
          {/* FIRST  */}
          <div>
            <h1 className="text-white font-semibold text-[13px] 2xl:text-[.8vw] tracking-wide text-center">
             {name}  ATAT Nation Wise
            </h1>
            {/* TABLE DIV */}
            <div className="w-full px-1 mt-4 2xl:px-[.2vw]">
              <table className="w-full mb-6 mt-1">
                <tr className="text-white 2xl:text-[.8vw] text-[14px] border-b">
                  <th className="font-medium border-r-2 text-left">Weeks</th>
                  <th className="font-medium border-r-2 text-center">Day1</th>
                  <th className="font-medium border-r-2">2-3</th>
                  <th className="font-medium border-r-2">4-7</th>
                  <th className="font-medium">8&+</th>
                </tr>
    
                {productTable.map((data, index) => {
                  return (
                    <tr>
                      <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                        {data?.WEEKS ?? 0}
                      </td>
                      <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                        {data?.PRODUCT_DAY_0 ?? 0}
                      </td>
                      <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                        {data?.PRODUCT_DAY2_3 ?? 0}
                      </td>
                      <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                        {data?.PRODUCT_DAY4_7 ?? 0}
                      </td>
                      <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                        {data?.PRODUCT_DAY8_ABOVE ?? 0}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <hr className="mx-6" />
            <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.4vw] -ml-2">
                     <AtatResponsiveLineChart
                chartData={formattedLineChartDataProducts}
                keysToDisplay={[
                  "ATAT",
                ]}
              />
              
            </div>
          </div>
        </div>
  );
};

export default ThirdSmallCardBottom;
