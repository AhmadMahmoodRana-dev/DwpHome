import React, { useContext } from "react";
import "../Styling/Home.css";
import Sidebar from "../components/Sidebar";
import { GoSidebarCollapse } from "react-icons/go";
import MobileSidebar from "@/components/MobileSidebar";
import { Context } from "@/context/Context";

const Layout = ({ children }) => {
  const { openSidebar, setOpenSidebar } = useContext(Context);

  return (
    <div className="flex w-full min-h-screen h-auto">
      <Sidebar />
      <div className=" w-full px-3 pb-10 flex flex-col">
        <div>
          {openSidebar ? (
            <GoSidebarCollapse
            size={30}
              className="text-white text-xl mt-2 ml-1 sm:hidden block"
              onClick={() => setOpenSidebar(false)} // Close the sidebar when collapse icon is clicked
            />
          ) : (
            <MobileSidebar
              setOpenSidebar={setOpenSidebar}
              openSidebar={openSidebar}
            />
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
