import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { IoStatsChart } from "react-icons/io5";
import icon from '../assets/total.png'
import bg from '../assets/option 1.png'
import dbg from '../assets/dark-oop.png'
const ExpenseCard = ({title,value}) => {
    const { dark } = useContext(DarkModeContext)
  return (
    <div className={`relative w-[325px] md:w-[248px] h-[90px]  rounded-xl py-4 px-2 ${dark ? " bg-gradient-to-l from-purple-300 to-purple-100 " : "text-text-primary  "} rounded-2xl  flex items-center justify-center gap-8`}>
      {dark?<img src={dbg} className="absolute w-full h-full top-0 left-0 object-fill "></img>: <img src={bg} className="absolute w-full h-full top-0 left-0 object-fill "></img>}
        <div className='  flex items-center justify-center flex-col gap-3 z-10 '>
            <h1 className='  font-thin text-center text-white text-sm'>{ title}</h1>
                <h2 className={`text-3xl font-light text-center text-white `}>{ value}</h2>
        </div>
          <img src={icon} className="w-[50px] h-[50px] object-fill z-10"></img>            
      </div>
    )
  }

export default ExpenseCard
//  className={`w-[275px] md:w-[350px] h-[175px]  rounded-2xl p-2 ${dark ? "bg-text-primary bg-opacity-70 shadow-md shadow-background-dark " : "bg-white  shadow-xl shadow-secondairy"} rounded-2xl p-2 flex items-center justify-center gap-2`}