import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { IoStatsChart } from "react-icons/io5";

const ExpenseCard = ({title,value}) => {
    const { dark } = useContext(DarkModeContext)
  return (
  <div className={`w-[325px] md:w-[225px] h-[100px]  rounded-2xl py-4 px-2 ${dark ? " bg-gradient-to-l from-purple-300 to-purple-100 " : "text-text-primary bg-gradient-to-l from-purple-300 to-purple-100 shadow-2xl shadow-purple-200 "} rounded-2xl p-2 flex items-center justify-center gap-4`}>
                  <IoStatsChart className={` text-white text-4xl `} /> 
                    <div className='flex items-center justify-center flex-col'>
                          <h2 className={`text-2xl text-center text-white`}>{ value} </h2>
                          <h1 className='text-sm  font-thin text-center text-white'>{ title}</h1>
                    </div>
                    
                            </div>
  )
}

export default ExpenseCard
//  className={`w-[275px] md:w-[350px] h-[175px]  rounded-2xl p-2 ${dark ? "bg-text-primary bg-opacity-70 shadow-md shadow-background-dark " : "bg-white  shadow-xl shadow-secondairy"} rounded-2xl p-2 flex items-center justify-center gap-2`}