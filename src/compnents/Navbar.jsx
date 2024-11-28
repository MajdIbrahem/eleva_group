import {useEffect, useState} from 'react'
import { IoCreateOutline } from "react-icons/io5";

import { CgDarkMode } from "react-icons/cg"
import { IoMdNotifications } from "react-icons/io";
import user from '../assets/team4.jpg';
import Search from './Search';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
    const { dark, setDark } = useContext(DarkModeContext)
    const [notiClick,setNotiClik]=useState(false)
    const [userClick, setUserClik] = useState(false)
    const [isTop,setIsTop]=useState(true)
    
    return (
        <div className={` ${dark?"bg-white bg-opacity-15":"bg-white"} z-20  lg:h-[9%] h-[10%] mb-12  shadow-shadow  fixed top-0 right-0 w-[83.3%]  flex justify-between items-center flex-wrap pl-8 pr-3`}>
            <div className='flex justify-between items-center flex-wrap relative '>
                <Search />
                <IoIosSearch className={`text-2xl ${dark?"text-text-scondairy":"text-text-primary"}  absolute top-2 right-2`} />
            </div>
            <div className='flex items-center justify-center gap-4 mr-2'>
                <div>
                    <div className={`w-[160px] rounded-lg  flex justify-start items-start pl-2 gap-2 py-[6px] ${dark?"bg-primary-dark":"bg-primary"}  text-white`}>
                              <IoCreateOutline className='text-xl' />
                            <h3 >Create Request</h3>
                        </div>
                </div>
                <div className='relative'>
                    <span className='absolute top-0 right-0 text-xs text-white w-[14px] rounded-full h-[14px] pl-[4px] pb-[4px] bg-red-500'>3</span>
                    <IoMdNotifications onClick={() => {
                        setNotiClik(!notiClick)
                        setUserClik(false)
                    }} className={` md:w-[30px] w-[20px] md:h-[30px] h-[20px] text-center cursor-pointer  ${dark ? "text-text-primary-dark" : "text-text-primary"}`} ></IoMdNotifications>
                    <div className={notiClick?"z-40":"hidden"}>
                    <div className={dark?"absolute buttom-0 right-0 w-[150px] h-[150px]  rounded-2xl p-2 flex flex-col justify-center text-white items-center gap-2 bg-secondairy  bg-opacity-40 ":"absolute buttom-0 right-0 w-[150px] h-[150px]  rounded-2xl p-2 flex flex-col justify-center items-center gap-2 bg-secondairy  bg-opacity-40 "}>
                        <h4 className='text-sm border-b border-primary'>you have request from Majd</h4>
                        <h4 className='text-sm border-b border-primary'>you have request from Majd</h4>
                        <h4 className='text-sm border-b border-primary'>See All</h4>
                        </div>
                    </div>    
                </div>
                <div className='relative'>
                    <img src={user} onClick={() => {
                        setUserClik(!userClick)
                        setNotiClik(false)
                    }} alt='user' className='md:w-[30px] w-[20px] md:h-[30px] h-[20px]object-cover rounded-full cursor-pointer'></img>
                     <div className={userClick?"z-50":"hidden"}>
                    <div className={dark?"absolute buttom-0 right-0 w-[120px] h-[120px]  rounded-2xl p-2 flex flex-col justify-center text-white items-center gap-2 bg-secondairy  bg-opacity-40 ":"absolute buttom-0 right-0 w-[120px] h-[120px]  rounded-2xl p-2 flex flex-col justify-center items-center gap-2 bg-secondairy  bg-opacity-40 "}>
                        <h4 className='text-sm border-b border-primary w-full text-center'>Majd Ibrahem</h4>
                        <h4 className='text-sm border-b border-primary w-full  text-center'>Pofile</h4>
                        <h4 className='text-sm border-b border-primary w-full  text-center'>Logout</h4>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
)
}

export default Navbar
// flex flex-col justify-start items-start gap-4