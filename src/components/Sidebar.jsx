import React from 'react';
import { IoPerson, IoHomeSharp, IoLogOut, IoBarChartOutline } from "react-icons/io5";
import { RiBarChart2Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { PiClockClockwiseLight } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');

  const Logout = () => {
    localStorage.clear();
    navigate('/');
  }

  const imageUrl = 'https://dwpcare.com.pk/uploads/dwpcarewhite.PNG';

  return (
    <div className='sidebar w-[380px] 2xl:w-[20%] h-[600px] 2xl:h-[80vh] mt-3 rounded-[10px] ml-3 flex flex-col justify-between'>
      <div className='main-handle pt-2 2xl:pt-[.5vw]'>
        <div className='image ml-2 2xl:ml-[.7vw]'>
          <img src={imageUrl} alt="" className='w-[110px] 2xl:w-[8vw]' />
        </div>
        <Link to={'/Home'} className='flex items-center gap-3 ml-3 2xl:ml-[.7vw] mt-4 2xl:mt-[1vw] holdder1 bg-[#101e42dd] w-[75%] rounded-[6px] py-1 pl-2 group relative'>
          <IoHomeSharp className='text-white icon-1 icons 2xl:text-[1.2vw]' />
          <p className='text-[14px] 2xl:text-[.9vw] removal-side text-white font-bold'>Summary</p>
          <span className="tooltip-text">Summary</span>
        </Link>
        <Link to={'/secondPage'} className='flex items-center gap-3 ml-3 mt-1 2xl:ml-[.7vw] 2xl:mt-[.7vw] holdder pl-2 py-1 group relative'>
          <RiBarChart2Line className='text-white icons 2xl:text-[1.2vw]' />
          <p className='text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium'>Inset Out</p>
          <span className="tooltip-text">Inset Out</span>
        </Link>
        <Link to={`/thirdPage`} className='flex items-center gap-3 ml-3 mt-1 2xl:ml-[.7vw] 2xl:mt-[.7vw] holdder pl-2 py-1 group relative'>
          <CiSettings className='text-white icons 2xl:text-[1.2vw]' />
          <p className='text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium'>TAT</p>
          <span className="tooltip-text">Settings</span>
        </Link>
        <div className='flex items-center gap-3 ml-3 2xl:ml-[.7vw] 2xl:mt-[.7vw] mt-1 holdder pl-2 py-1 group relative'>
          <PiClockClockwiseLight className='text-white icons 2xl:text-[1.2vw]' />
          <p className='text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium'>Pending</p>
          <span className="tooltip-text">Pending</span>
        </div>
        <div className='flex items-center gap-3 ml-3 2xl:ml-[.7vw] 2xl:mt-[.7vw] mt-1 holdder pl-2 py-1 group relative'>
          <IoBarChartOutline className='text-white icons 2xl:text-[1.2vw]' />
          <p className='text-[14px] 2xl:text-[.9vw] removal-side text-white font-medium'>Revenue</p>
          <span className="tooltip-text">Revenue</span>
        </div>
      </div>
      <div className='profile-section pb-4'>
        <div className='hold flex items-center'>
          <div className='circle bg-[#1A1F37] w-[30px] h-[30px] 2xl:w-[2.5vw] 2xl:h-[2.5vw] 2xl:ml-[.7vw] ml-3 rounded-[1vw] flex justify-center items-center group relative'>
            <Link to="/profile" className='text-[1.1vw]'>
              <IoPerson className='text-[#0075FF] 2xl:text-[1vw]' />
            </Link>
            <span className="tooltip-text">Profile</span>
          </div>
          <p className='ml-2 text-white font-medium text-[16px] removal-side'>
            <Link to="/profile" className='text-[1.1vw]'>Profile</Link>
          </p>
        </div>
        <div className='hold flex items-center mt-3'>
          <div className='circle bg-[#1A1F37] w-[30px] h-[30px] ml-3 rounded-[1vw] flex justify-center items-center 2xl:w-[2.5vw] 2xl:h-[2.5vw] 2xl:ml-[.7vw] group relative'>
            <Link onClick={Logout} to="/">
              <IoLogOut className='text-[#0075FF] 2xl:text-[1vw]' />
            </Link>
            <span className="tooltip-text">Logout</span>
          </div>
          <p className='ml-2 text-white font-medium text-[16px] 2xl:text-[.9vw] removal-side'>
            <Link onClick={Logout} to="/">Logout ({JSON.parse(auth).user.user})</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
