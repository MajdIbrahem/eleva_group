import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import dbg from '../assets/dark-oop.png'
import bg from '../assets/option 1.png'
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { FaFileCircleXmark } from "react-icons/fa6";
import appr from '../assets/approve.png'
import rej from "../assets/reject.png"
import pend from '../assets/pending.png'
const RequestCard = ({title,value}) => {
    const { dark } = useContext(DarkModeContext)
    return (
    <div
          
            className={` relative w-[325px] md:w-[248px] h-[90px]  rounded-xl py-4 px-2 p-2 flex items-center justify-center gap-4`}>
                {dark?<img src={dbg} className="absolute w-full h-full top-0 left-0 object-fill "></img>: <img src={bg} className="absolute w-full h-full top-0 left-0 object-fill "></img>}
            
        <div className='  flex items-center justify-center flex-col gap-3 z-10 '>
            <h1 className='  font-thin text-center text-white text-sm'>{ title}</h1>
                <h2 className={`text-3xl font-light text-center text-white `}>{ value}</h2>
        </div>
          <div className=' flex items-center justify-center z-10 '>
                {title === "Approved Requests" ?<img src={appr} className='w-[50px] h-[50px] object-fill z-10'></img>:null}
            {title==="Rejected Requests"?<img src={rej} className='w-[50px] h-[50px] object-fill z-10'></img>:null}
            {title==="Pending Requests"?<img src={pend} className='w-[50px] h-[50px] object-fill z-10'></img> :null}
        </div>
    </div>
    )
}

export default RequestCard
