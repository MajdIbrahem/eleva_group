import React, { useState } from 'react'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import {NavLink,Link} from 'react-router-dom'
import { IoHome ,IoGitPullRequest ,IoCreateOutline,IoLogOutOutline } from "react-icons/io5";
import { LuFolderInput } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import logo from '../assets/logo.png'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";

const Sidbar = () => {
    const { dark } = useContext(DarkModeContext)
    const [isOpen,setIsopen]=useState(true)
    return (
        <div
            className={dark?`${isOpen?" w-[75px] lg:w-1/6 ":"w-[75px]"}  h-[100%]  bg-[#3F366F] rounded-r-3xl shadow-md fixed top-0  left-0  mr-32`:`${isOpen?"w-[75px] lg:w-1/6":"w-[75px]"} h-[100%]  bg-primary rounded-r-3xl fixed top-0  left-0  mr-32 `}>
            
            <div className={dark?"flex items-center justify-center  py-5   flex-col text-white  font-medium":"flex items-center justify-center  py-5   flex-col text-white  font-medium"}>
                <div className={`mb-2 flex flex-col justify-center items-center mr-6 py-5 pb-5 ${!isOpen?"w-[50px] h-[40px]":"w-[30px] h-[30px] lg:w-[150px] lg:h-[80px]"}  `}>
                    {dark?<img src={logo} alt='logo' className='w-[40px] h-[40px] md:w-[150px] md:h-[80px] object-fill  '></img> :<img src={logo} alt='user' className='w-[40px] h-[40px] md:w-[150px] md:h-[80px] object-fill  '></img>}
                    
                </div>
                
                <div className='flex flex-col justify-center items-start  py-2 w-full gap-2'>
                    <div className='relative text-start w-full'>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -top-[3px] -right-[0px] " : "bg-primary -top-[4px] -right-[0px]"}  rounded-br-3xl`}></span>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -bottom-[3px] -right-[0px] " : "bg-primary -bottom-[4px] -right-[0px]"}  rounded-tr-3xl`}></span>
                        <NavLink to='/dashboard' className={({ isActive }) => {
                        return ` w-full no-underline hover:no-underline active:no-underline focus:no-underline py-1  flex justify-start items-center pl-2 gap-2 ${isActive ? `   gap-2 ml-3  rounded-l-full  font-semibold text-primary    ${dark?"bg-background-dark":"bg-gray-200"}  `:" ml-5 px-2 py-2  hover:text-blue-chart "}`
                    }}>
                        <IoHome className=' text-2xl' />
                        <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Majd's dashboard</h3>
                            </NavLink>
                        
                    </div>
                    <div className='relative w-full'>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -top-[3px] right-[0px] " : "bg-primary -top-[4px] -right-[0px]"}  rounded-br-3xl`}></span>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -bottom-[3px] -right-[0px] " : "bg-primary -bottom-[4px] -right-[0px]"}  rounded-tr-3xl`}></span>
                <NavLink to='/pending-request' className={({ isActive }) => {
                    return ` w-full no-underline hover:no-underline active:no-underline focus:no-underline py-1  flex justify-start items-center pl-2 gap-2 ${isActive ? `   gap-2 ml-3  rounded-l-full  font-semibold text-primary    ${dark?"bg-background-dark":"bg-gray-200"}  `:" ml-5 px-2 py-2  hover:text-blue-chart "}`
                }}>
                    < MdAssignmentAdd  className=' text-2xl' />
                    <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Pending Request</h3>
                        </NavLink>
                    </div>
                    <div className='relative w-full'>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -top-[3px] -right-[0px] " : "bg-primary -top-[4px] -right-[0px]"}  rounded-br-3xl`}></span>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -bottom-[3px] -right-[0px] " : "bg-primary -bottom-[4px] -right-[0px]"}  rounded-tr-3xl`}></span>
                <NavLink to='/creat-request' className={({ isActive }) => {
                    return ` w-full no-underline hover:no-underline active:no-underline focus:no-underline py-1  flex justify-start items-center pl-2 gap-2 ${isActive ? `   gap-2 ml-3  rounded-l-full  font-semibold text-primary    ${dark?"bg-background-dark":"bg-gray-200"}  `:" ml-5 px-2 py-2  hover:text-blue-chart "}`
                }}>
                    <IoCreateOutline className=' text-2xl ' />
                    <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Create Request</h3>
                        </NavLink>
                    </div>
                    <div className='relative w-full '>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -top-[3px] -right-[0px] " : "bg-primary -top-[4px] -right-[0px]"}  rounded-br-3xl`}></span>
                        <span className={`absolute  w-[100%] h-[6px] ${dark ? " bg-[#3F366F] -bottom-[3px] -right-[0px] " : "bg-primary -bottom-[4px] -right-[0px]"}  rounded-tr-3xl`}></span>
                <NavLink to='/log-request' className={({ isActive }) => {
                    return ` w-full no-underline hover:no-underline active:no-underline focus:no-underline py-1  flex justify-start items-center pl-2 gap-2 ${isActive ? `   gap-2 ml-3  rounded-l-full  font-semibold text-primary    ${dark?"bg-background-dark":"bg-gray-200"}  `:" ml-5 px-2 py-2  hover:text-blue-chart "}`
                }}>
                    <LuFolderInput  className=' text-2xl  ' />
                    <h3 className={isOpen ? "hidden lg:block " : "hidden"}>Log   Request</h3>
                        </NavLink>
                        </div>
                <NavLink to='/'  className={({ isActive }) => {
                    return ` absolute bottom-16 left-2  no-underline hover:no-underline active:no-underline focus:no-underline ${isActive ? ` flex justify-center items-center gap-2 rounded-3xl absolute -right-8 top-36  font-semibold text-primary border-y-1 border-l-4  border-[#6045E2]  ${dark?"":"bg-gray-200"}  `:"flex justify-center items-center gap-2 ml-5 px-2 py-2 rounded hover:text-blue-chart "}`
                }}>
                    <IoMdSettings   className=' text-2xl ' />
                    <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Setting</h3>
                </NavLink>
                <NavLink to='/'  className={({ isActive }) => {
                    return ` absolute bottom-4 left-2 no-underline hover:no-underline active:no-underline focus:no-underline ${isActive ? ` flex justify-center items-center gap-2 mr-3  rounded-3xl absolute -right-8 top-36  font-semibold text-primary border-y-1 border-l-4  border-[#6045E2]  ${dark?"":"bg-gray-200"}  `:"flex justify-center items-center gap-2 ml-5 px-2 py-2 rounded hover:text-blue-chart "}`
                }}>
                    <IoLogOutOutline  className=' text-2xl ' />
                    <h3 className={isOpen ? "hidden lg:block" : "hidden"}>Logout</h3>
                </NavLink>
                    </div>
                <div className='   cursor-pointer hidden lg:block'onClick={()=>{setIsopen(!isOpen)}}>
                        {!isOpen? <FaArrowAltCircleRight className={`ml-8 absolute bottom-32 right-0 mt-12 text-2xl text-end ${dark?"text-blue-chart":"text-[#6045E2]"} mr-4`} />:<FaArrowAltCircleLeft className={`text-xl absolute top-12 right-2  ${dark?"text-blue-chart":"text-[#6045E2]"} `} />}
                    </div>
            </div>
        </div>
    )
}

export default Sidbar
