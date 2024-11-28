import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import user from '../assets/team4.jpg'; 
const TopRequests = ({topRequests}) => {
    const { dark } = useContext(DarkModeContext)
  return (
                <div className={`flex justify-start items-start gap-2 flex-col  font-medium w-[325px] md:w-[325px] md:h-[400px] ${dark?"bg-white bg-opacity-15 ":"text-text-primary bg-white  shadow-lg "} rounded-2xl p-2`}>
                  <div className='w-full flex justify-between items-center px-1'>
                  <h1 className='text-lg  '>Top Requests</h1>
                    <Link to='/vendors' className='text-end text-sm text-primary '><h3>See All</h3></Link>
                  </div>
                  <div className='w-full flex justify-between flex-col items-center px-1'>
                  {topRequests.map(request =>
                  <div className='w-full flex justify-between items-center py-2 border-b px-1'>
                      <div className='flex justify-center items-center gap-2'>
                        <img src={user} alt="" className='w-[40px] h-[40px] rounded-full' />
                        <div className='flex flex-col justify-center items-center gap-1'>
                          <h4 className='text-text '>{request.name}</h4>
                          <p className='text-xs'>{ request.totalItems} Items</p>
                        </div>
                    </div>
                      <div className='font-semibold'>{ request.spending}</div>
                  </div>)}
                  </div>
                  </div>

  )
}

export default TopRequests