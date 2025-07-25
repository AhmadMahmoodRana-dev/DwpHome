import { RiTriangleFill } from "react-icons/ri";
import { BsCaretRightFill } from "react-icons/bs";
import ResponsiveLineChart from "../SecondPage/charts/ResponsiveLineChart";

const ThirdSmallCard = ({ name, others, topTable, lineChart }) => {
  // FIRST SECTION APIS
  const formattedLineChartData = lineChart.map((week, index) => ({
    week: `${week.SHORT_WEEKS}`,
    ATAT: week.ATAT,
  }));

  return (
    <>
      <div className="w-[300px] smallcardMain pb-10 2xl:w-[100%] first-div h-auto rounded-[10px] px-3 2xl:px-[1.4vh] py-2 2xl:py-[.75vw] mt-3">
        {/* Top Container */}

        <h1 className="text-white font-bold text-[20px] text-center 2xl:text-[1.2vw]">
          {name}
        </h1>
        <div className="SecondMainContainer flex xl:mt-0">
          {/* LEFT */}
          <div className="w-[68%]">
            <div className="holder flex items-end h-[62px] 2xl:h-[4vw]  2xl:mt-[1.65vw] mt-[2vw]">
              <p className="text-[rgb(107,219,107)] 2xl:text-[3.2vw] font-bold text-[60px] flex justify-center">
                {others[0]?.ATAT ?? 0}
                <div className="2xl:mt-5">
                  {others[0]?.ATAT_PER >= 0 ? (
                    <div className="icons flex flex-col justify-center items-center ml-2">
                      <h1 className="text-[12px] 2xl:text-[.9vw] font-bold text-red-600">
                        +
                        {Math.abs(others[0]?.ATAT_PER).toString().length === 1
                          ? "0" + Math.abs(others[0]?.ATAT_PER)
                          : Math.abs(others[0]?.ATAT_PER)}
                        %
                      </h1>
                      <RiTriangleFill className="text-red-600 w-[22px] h-[22px] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                    </div>
                  ) : (
                    <div className="icons flex flex-col justify-center items-center ml-2">
                      <RiTriangleFill className="text-green-400 rotate-180 w-[22px] h-[22px] 2xl:w-[1.2vw] 2xl:h-[1.2vw]" />
                      <h1 className="text-[12px] 2xl:text-[.9vw] font-bold text-green-400">
                        -
                        {Math.abs(others[0]?.ATAT_PER).toString().length === 1
                          ? "0" + Math.abs(others[0]?.ATAT_PER)
                          : Math.abs(others[0]?.ATAT_PER)}
                        %
                      </h1>
                    </div>
                  )}

                  <h1 className="text-white text-[20px] 2xl:text-[1.3vw] text-center">
                    Days
                  </h1>
                </div>
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right_content_div w-[32%] border-l-white border-l pl-5 flex flex-col justify-center">
            <h1 className="text-white font-semibold 2xl:text-[1.2vw]">YTD</h1>
            <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
              ATAT
            </h1>
            <h1 className="text-[#49dd80] font-semibold tracking-wider  2xl:text-[1.3vw]">
              {others[0]?.YTD_ATAT ?? 0}
            </h1>
            <h1 className="text-white font-semibold tracking-wider 2xl:text-[1vw]">
              Days
            </h1>
          </div>
        </div>

        {/* BOXES */}
        <hr className="mx-7 2xl:mt-[1.4vw] mb-4 mt-[1vw]" />
        <div className="2xl:mt-[.9vw] mt-2 flex">
          <div className="box-1 flex flex-col">
            <div className="box-sigm-1 flex items-center">
              <div className="small-color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  {others[0]?.DAY_0 ?? 0}
                  {others[0]?.DAY_0_PER >= 0 ? (
                    <span className="text-green-400 text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(others[0]?.DAY_0_PER).toString().length === 1
                        ? "0" + Math.abs(others[0]?.DAY_0_PER)
                        : Math.abs(others[0]?.DAY_0_PER)}
                      %
                    </span>
                  ) : (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.8vw]">
                      -
                      {Math.abs(others[0]?.DAY_0_PER).toString().length === 1
                        ? "0" + Math.abs(others[0]?.DAY_0_PER)
                        : Math.abs(others[0]?.DAY_0_PER)}
                      %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-green-400 rotate- text-[25px] 2xl:text-[1.5vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white ml-[.7vw] font-thin">
              Day 1
            </p>
          </div>
          <div className="box-2 flex flex-col mx-[-5px] ml-[-18px]">
            <div className="box-sigm-2 flex items-center">
              <div className="small-color-boxe ml-[14px] bg-[#ededed] border-2 2xl:w-[3vw] 2xl:h-[2.4vw] border-yellow-300 w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  {others[0]?.DAY2_3 ?? 0}
                  {others[0]?.DAY2_3_PER >= 0 ? (
                    <span className="text-green-400  text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(others[0]?.DAY2_3_PER).toString().length === 1
                        ? "0" + Math.abs(others[0]?.DAY2_3_PER)
                        : Math.abs(others[0]?.DAY2_3_PER)}
                      %
                    </span>
                  ) : (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.8vw]">
                      -
                      {Math.abs(others[0]?.DAY2_3_PER).toString().length === 1
                        ? "0" + Math.abs(others[0]?.DAY2_3_PER)
                        : Math.abs(others[0]?.DAY2_3_PER)}
                      %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-yellow-300 text-[25px] 2xl:text-[1.5vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white  font-thin ml-[1.5vw]">
              Day2-3
            </p>
          </div>
          <div className="box-3 flex flex-col">
            <div className="box-sigm-3 flex items-center">
              <div className="small-color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  {others[0]?.DAY4_7 ?? 0}
                  {others[0]?.DAY4_7_PER >= 0 ? (
                    <span className="text-yellow-600 text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(others[0]?.DAY4_7_PER).toString().length === 1
                        ? "0" + Math.abs(others[0]?.DAY4_7_PER)
                        : Math.abs(others[0]?.DAY4_7_PER)}
                      %
                    </span>
                  ) : (
                    <span className="text-green-400 text-[12px] 2xl:text-[.8vw]">
                      -
                      {Math.abs(others[0]?.DAY4_7_PER).toString().length === 1
                        ? "0" + Math.abs(others[0]?.DAY4_7_PER)
                        : Math.abs(others[0]?.DAY4_7_PER)}
                      %
                    </span>
                  )}
                </p>
              </div>
              <BsCaretRightFill className="text-red-600 rotate- text-[25px] 2xl:text-[1.5vw] ml-[-.5vw]" />
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white ml-[.6vw] font-thin">
              Day4-7
            </p>
          </div>
          <div className="box-4 flex flex-col mx-[-4px]">
            <div className="box-sigm-4 flex items-center">
              <div className="small-color-boxe bg-[#ededed] border-2 border-green-600 2xl:w-[3vw] 2xl:h-[2.4vw] w-[54px] rounded-[4px] h-[36px]">
                <p className="font-bold text-center text-[16px] leading-4 2xl:leading-[1.2vw] flex flex-col justify-center items-center 2xl:text-[.9vw]">
                  {others[0]?.DAY8_ABOVE ?? 0}
                  {others[0]?.DAY8_ABOVE_PER >= 0 ? (
                    <span className="text-[#BE1A1A] text-[12px] 2xl:text-[.8vw]">
                      +
                      {Math.abs(others[0]?.DAY8_ABOVE_PER).toString().length ===
                      1
                        ? "0" + Math.abs(others[0]?.DAY8_ABOVE_PER)
                        : Math.abs(others[0]?.DAY8_ABOVE_PER)}
                      %
                    </span>
                  ) : (
                    <span className=" text-green-400  text-[12px] 2xl:text-[.8vw]">
                      -
                      {Math.abs(others[0]?.DAY8_ABOVE_PER).toString().length ===
                      1
                        ? "0" + Math.abs(others[0]?.DAY8_ABOVE_PER)
                        : Math.abs(others[0]?.DAY8_ABOVE_PER)}
                      %
                    </span>
                  )}
                </p>
              </div>
            </div>
            <p className="text-[12px] 2xl:text-[.6vw] text-white ml-[.9vw]  font-thin">
              8 & 8+
            </p>
          </div>
        </div>

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

            {topTable.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.8vw] font-medium text-white">
                    {data?.WEEKS ?? 0}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center  text-white">
                    {data?.DAY_0?.toLocaleString() ?? 0}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {data?.DAY2_3?.toLocaleString() ?? 0}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.8vw]  font-normal text-center text-white">
                    {data?.DAY4_7?.toLocaleString() ?? 0}
                  </td>
                  <td className="text-center pt-2  2xl:text-[.8vw] pr-1 text-[12px] font-semibold  text-white">
                    {data?.DAY8_ABOVE?.toLocaleString() ?? 0}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <hr className="mx-6" />
        <div className="2xl:h-[7.7vw] h-[105px] mt-4 2xl:mt-[1.4vw] -ml-2">
          {/* <ThirdMainChart chartData={chartData2} /> */}
          <ResponsiveLineChart
            chartData={formattedLineChartData}
            keysToDisplay={["ATAT"]}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default ThirdSmallCard;
