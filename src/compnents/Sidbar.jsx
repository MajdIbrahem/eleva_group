import React, { useState } from 'react'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import {NavLink,Link} from 'react-router-dom'
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import logo from '../assets/image.png'
import { MdDarkMode } from "react-icons/md";

import { MdDashboard } from "react-icons/md";
import { GrUnorderedList } from "react-icons/gr";
import { FaClockRotateLeft } from "react-icons/fa6";

const Sidbar = () => {
    const { dark ,setDark} = useContext(DarkModeContext)
    const [isOpen,setIsopen]=useState(true)
    return (
        <div
            className={dark?`${isOpen?"w-[75px] lg:w-1/6":"w-[75px]"} h-[100%]  bg-white bg-opacity-15 z-30  fixed top-0  left-0 px-2 mr-16 `:`${isOpen?"w-[75px] lg:w-1/6":"w-[75px]"} h-[100%]  bg-white z-30  fixed top-0  left-0 px-2 mr-16 shadow-lg shadow-shadow `}>
            
            <div className={dark?"flex items-center justify-center  py-2   flex-col text-white  ":"flex items-start justify-start pb-5   flex-col text-text-primary  "}>
                <div className={` flex flex-col justify-center items-center mr-6 pt-2  mb-10 ${!isOpen?"w-[50px] h-[40px]":"w-[30px] h-[30px] md:w-[180px] md:h-[80px]"}  `}>
                    {dark?<img src={logo} alt='user' className='w-[40px] h-[40px] md:w-[90%] md:h-[60px] object-fill  '></img> :<img src={logo} alt='user' className='w-[40px] h-[40px] md:w-[90%] md:h-[60px] object-fill  '></img>}
                    
                </div>
                
                <div className='flex flex-col justify-center items-center px-2 py-2 w-full gap-4'>
                    <div className=' w-full'>
                        
                        <NavLink to='/dashboard' className={({ isActive }) => {
                        return ` w-full rounded-lg no-underline hover:no-underline active:no-underline focus:no-underline   flex justify-start items-start pl-2 gap-2 py-[6px] ${isActive ? ` text-white    ${dark?"bg-primary-dark":"bg-primary"}  `:`${dark?"hover:bg-secondairy-dark":"hover:bg-text-scondairy"}  `}`
                    }}>
                        <MdDashboard className=' text-2xl' />
                        <h3 className={isOpen ? "hidden lg:block" : "hidden"}> Dashboard</h3>
                            </NavLink>
                        
                    </div>
                    <div className=' w-full'>
                        
                <NavLink to='/pending-request' className={({ isActive }) => {
                    return ` w-full rounded-lg no-underline hover:no-underline active:no-underline focus:no-underline   flex justify-start items-start pl-2 gap-2 py-[6px] ${isActive ? ` text-white    ${dark?"bg-primary-dark":"bg-primary"}  `:`${dark?"hover:bg-secondairy-dark":"hover:bg-text-scondairy"}  `}`
                }}>
                    <FaClockRotateLeft className=' text-2xl' />
                    <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Pending Request</h3>
                        </NavLink>
                    </div> 
                    <div className=' w-full '>
                <NavLink to='/log-request' className={({ isActive }) => {
                    return ` w-full rounded-lg no-underline hover:no-underline active:no-underline focus:no-underline   flex justify-start items-start pl-2 gap-2 py-[6px] ${isActive ? ` text-white    ${dark?"bg-primary-dark":"bg-primary"}  `:`${dark?"hover:bg-secondairy-dark":"hover:bg-text-scondairy"}  `}`
                }}>
                    <GrUnorderedList  className=' text-2xl  ' />
                    <h3 className={isOpen ? "hidden lg:block " : "hidden"}>Log   Request</h3>
                        </NavLink>
                        
                    </div>
                    <hr className='w-full bg-[#E0E0ED] mb-8 mt-6'></hr>
                        <div className=' w-full rounded-lg  flex justify-start items-start pl-2 gap-2 py-[6px]'>
                            <MdDarkMode className=' text-2xl  ' />
                            <h3 className={isOpen ? "hidden lg:block " : "hidden"}>Dark Mode</h3>
                            <label  class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox"  checked={dark} onChange={()=>{setDark(!dark)}} class="sr-only peer"/>
                                <div class="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-dark hover:peer-checked:bg-primary-dark"></div>
                                </label>
                        </div>
                    <NavLink to='/'  className={({ isActive }) => {
                        return ` w-full rounded-lg no-underline hover:no-underline active:no-underline focus:no-underline   flex justify-start items-start pl-2 gap-2 py-[6px] ${isActive ? ` text-white    ${dark?"bg-primary-dark":"bg-primary"}  `:`${dark?"hover:bg-secondairy-dark":"hover:bg-text-scondairy"}  `}`
                    }}>
                        <IoMdSettings   className=' text-2xl ' />
                        <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Setting</h3>
                    </NavLink>
                    <NavLink to='/'  className={({ isActive }) => {
                        return ` w-full rounded-lg no-underline hover:no-underline active:no-underline focus:no-underline   flex justify-start items-start pl-2 gap-2 py-[6px] ${isActive ? ` text-white    ${dark?"bg-primary-dark":"bg-primary"}  `:`${dark?"hover:bg-secondairy-dark":"hover:bg-text-scondairy"}  `}`
                    }}>
                        <IoLogOutOutline  className=' text-2xl ' />
                        <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Logout</h3>
                    </NavLink>
                    </div>
             
            </div>
        </div>
    )
}

export default Sidbar
