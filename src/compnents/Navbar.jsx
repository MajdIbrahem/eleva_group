import {useEffect, useState} from 'react'

import { CgDarkMode } from "react-icons/cg"
import { IoMdNotifications } from "react-icons/io";
import user from '../assets/team4.jpg';
import Search from './Search';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
const Navbar = () => {
    const { dark, setDark } = useContext(DarkModeContext)
    const [notiClick,setNotiClik]=useState(false)
    const [userClick, setUserClik] = useState(false)
    const [isTop,setIsTop]=useState(true)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 15 ? setIsTop(false):setIsTop(true)
        })
    }, [])
    return (
        <div className={`${!isTop?` shadow-lg md:w-[82%] w-[85%] rounded-bl-2xl rounded-br-2xl ${dark?"bg-card-dark":"bg-white shadow-lg "}  z-40 `:"w-5/6  "} lg:h-[10%] h-[6%] mb-16 fixed top-0 right-0 md:w-[82%] w-[85%]  flex justify-between items-center flex-wrap pl-2 pr-6`}>
            <div className='flex justify-between items-center flex-wrap ml-6'>
                <Search top={isTop } />
            </div>
            <div className='flex items-center justify-center gap-4 mr-10'>
                <div>
                    <span className=' cursor-pointer' onClick={()=>{setDark(!dark)}}>
                        <CgDarkMode className={` md:w-[30px] w-[20px] md:h-[30px] h-[20px] text-center ${dark?"text-blue-chart":"text-primary"}` } />
                    </span>
                </div>
                <div className='relative'>
                    <IoMdNotifications onClick={() => {
                        setNotiClik(!notiClick)
                        setUserClik(false)
                    }} className={` md:w-[30px] w-[20px] md:h-[30px] h-[20px] text-center cursor-pointer  ${dark ? "text-blue-chart" : "text-primary"}`} ></IoMdNotifications>
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