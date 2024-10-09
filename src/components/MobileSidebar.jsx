import React from "react";
import { CiSettings } from "react-icons/ci";
import { GoSidebarExpand } from "react-icons/go";
import {
  IoBarChartOutline,
  IoHomeSharp,
  IoLogOut,
  IoPerson,
} from "react-icons/io5";
import { PiClockClockwiseLight } from "react-icons/pi";
import { RiBarChart2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const MobileSidebar = ({ openSidebar, setOpenSidebar }) => {
  const imageUrl = "https://dwpcare.com.pk/uploads/dwpcarewhite.PNG";
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="w-[200px] mobile-sidebar  h-[72vh] absolute z-50 left-0 pr-2">
      <GoSidebarExpand
        className="text-white text-xl ml-1 float-right"
        onClick={() => setOpenSidebar(true)} // Show the collapse icon and hide the sidebar when expand icon is clicked
      />

      <div className="main-handle pt-2 2xl:pt-[.5vw]">
        <div className="image ml-2 2xl:ml-[.7vw]">
          <img src={imageUrl} alt="" className="w-[110px] 2xl:w-[8vw]" />
        </div>
        <div className="flex items-center gap-3 ml-3 2xl:ml-[.7vw] mt-4 2xl:mt-[1vw] holdder1 bg-[#101e42dd] w-[75%] rounded-[6px] py-1 pl-2">
          <IoHomeSharp className="text-white icon-1 icons 2xl:text-[1.2vw]" />
          <p className="text-[14px] 2xl:text-[.9vw] removal-side text-white font-bold ">
            Summary
          </p>
        </div>
        <div className="flex items-center gap-3 ml-3 mt-1 2xl:ml-[.7vw] 2xl:mt-[.7vw] holdder pl-2 py-1">
          <RiBarChart2Line className="text-white icons 2xl:text-[1.2vw]" />
          <p className="text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium ">
            Inset Out{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 ml-3 mt-1 2xl:ml-[.7vw] 2xl:mt-[.7vw] holdder pl-2 py-1">
          <CiSettings className="text-white icons 2xl:text-[1.2vw]" />
          <p className="text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium ">
            Tat
          </p>
        </div>
        <div className="flex items-center gap-3 ml-3 2xl:ml-[.7vw] 2xl:mt-[.7vw] mt-1 holdder pl-2 py-1">
          <PiClockClockwiseLight className="text-white icons 2xl:text-[1.2vw]" />
          <p className="text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium ">
            Pending
          </p>
        </div>
        <div className="flex items-center gap-3 ml-3 2xl:ml-[.7vw] 2xl:mt-[.7vw] mt-1 holdder pl-2 py-1">
          <IoBarChartOutline className="text-white icons 2xl:text-[1.2vw]" />
          <p className="text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium ">
            Revenue
          </p>
        </div>
      </div>
      <div className="profile-section pb-4 mt-40">
        <div className="hold flex items-center ">
          <div className="circle bg-[#1A1F37] w-[30px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2.5vw] 2xl:ml-[.7vw] ml-3 rounded-[1vw] flex justify-center items-center">
            <Link to="/profile" className="text-[12px]">
              {" "}
              <IoPerson className="text-[#0075FF] 2xl:text-[1vw]" />
            </Link>
          </div>
          <p className="ml-2 text-white font-medium text-[16px] removal-side">
            <Link to="/profile" className="text-[12px]">
              Profile
            </Link>{" "}
            {/* Profile Page Link */}
          </p>
        </div>
        <div className="hold flex items-center mt-2  ">
          <div className="circle bg-[#1A1F37] w-[30px] h-[30px] ml-3  rounded-[1vw] flex justify-center items-center 2xl:w-[2.5vw] 2xl:h-[2.5vw] 2xl:ml-[.7vw]">
            <Link onClick={Logout} to="/">
              {" "}
              <IoLogOut className="text-[#0075FF] 2xl:text-[1vw]" />{" "}
            </Link>
          </div>
          <p className="ml-2 text-white font-medium text-[12px]  2xl:text-[.9vw] removal-side">
            <Link onClick={Logout} to="/">
              {" "}
              Logout ({JSON.parse(auth).user.user}){" "}
            </Link>{" "}
          </p>
        </div>
      </div>
      {/* Add more content to the sidebar here */}
    </div>
  );
};

export default MobileSidebar;
