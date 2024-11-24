import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

import AnimatedNumbers from "react-animated-numbers";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { FaFileCircleXmark } from "react-icons/fa6";
import { motion } from 'framer-motion'
const RequestCard = ({title,value}) => {
    const { dark } = useContext(DarkModeContext)
    return (
    <div
          
            className={`w-[325px] md:w-[225px] h-[100px]  rounded-2xl py-4 px-2
                    ${dark ? `${title === "Approved Requests"?"bg-gradient-to-l from-green-300 to-green-100  shadow-green-200":""}
                    ${title === "Rejected Requests"?"bg-gradient-to-l from-red-300 to-red-100  shadow-red-200":""}
                    ${title === "Pending Requests"?"bg-gradient-to-l from-orange-300 to-orange-100  shadow-orange-200":""} ` : 
                ` text-text-primary
                    ${title === "Approved Requests"?"bg-gradient-to-l from-green-300 to-green-100 shadow-2xl shadow-green-200":""}
                    ${title === "Rejected Requests"?"bg-gradient-to-l from-red-300 to-red-100 shadow-2xl shadow-red-200":""}
                    ${title === "Pending Requests"?"bg-gradient-to-l from-orange-300 to-orange-100 shadow-2xl shadow-orange-200":""}
                `}
                rounded-2xl p-2 flex items-center justify-center gap-4`}>
        <div className=' flex items-center justify-center '>
                {title === "Approved Requests" ? <FaFileCircleCheck className={`text-white text-4xl`} />:null}
            {title==="Rejected Requests"?<FaFileCircleXmark className={`text-white text-4xl`} />:null}
            {title==="Pending Requests"?<FaFileCircleExclamation className={`text-white text-4xl`} /> :null}
        </div>  
        <div className='  flex items-center justify-center flex-col'>
                <h2 className={`text-2xl text-center text-white `}>{ value}</h2>
            <h1 className='  font-thin text-center text-white text-sm'>{ title}</h1>
        </div>
        
    </div>
    )
}

export default RequestCard
