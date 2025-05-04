import React from "react";
import SmallBarChart from "./charts/SmallBarChart";

const SmallCardBottom = ({ name }) => {
  const NationWideInsetData = [
    {
      id: 1,
      weeks: "Week 39",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
    {
      id: 2,
      weeks: "Week 40",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
    {
      id: 3,
      weeks: "Week 41",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
    {
      id: 4,
      weeks: "Week 42",
      greeAc: "4,000",
      es_Ac: "293",
      es_Led: "139",
      ref: "123",
      others: "111",
    },
  ];
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

            {NationWideInsetData.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.65vw] px-1  font-normal text-white">
                    {data?.weeks}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center  text-white">
                    {data?.greeAc}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.es_Ac}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.es_Led}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.ref}
                  </td>
                  <td className="text-right pt-2  2xl:text-[.75vw] pr-1 text-[12px] font-semibold  text-white">
                    {data.others}
                  </td>
                </tr>
              );
            })}
          </table>
          <hr className="2xl:mt-8" />
        </div>
        <SmallBarChart />
        <hr className="mt-[2vw]" />
      </div>

      {/* Second Card */}
      <div className="mt-5">
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

            {NationWideInsetData.map((data, index) => {
              return (
                <tr>
                  <td className="border-r-2 pt-2 text-[12px] 2xl:text-[.65vw] px-1  font-normal text-white">
                    {data?.weeks}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center  text-white">
                    {data?.greeAc}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.es_Ac}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.es_Led}
                  </td>
                  <td className="border-r-2 pt-2  text-[12px] 2xl:text-[.65vw] px-2 font-normal text-center text-white">
                    {data.ref}
                  </td>
                  <td className="text-right pt-2  2xl:text-[.75vw] pr-1 text-[12px] font-semibold  text-white">
                    {data.others}
                  </td>
                </tr>
              );
            })}
          </table>
          <hr />
        </div>

        <SmallBarChart />
      </div>
    </div>
  );
};

export default SmallCardBottom;
