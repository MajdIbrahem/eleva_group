import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
const TopVendors = ({ topVendorsData }) => {
    const { dark } = useContext(DarkModeContext)
  return (
          <div className={`flex justify-start items-start gap-2 flex-col font-medium w-[325px] md:w-[325px]  md:h-[400px] ${dark?"bg-white bg-opacity-15 ":"text-text-primary bg-white shadow-lg"} rounded-2xl p-2`}>
            <div className='w-full flex justify-between items-center px-1'>
            <h1 className='text-lg  '>Top Vendors</h1>
              <Link to='/vendors' className='text-end text-sm text-primary '><h3>See All</h3></Link>
            </div>
            <div className='w-full flex justify-between flex-col items-center px-1'>
              {topVendorsData.map(vendor =>
                <div className='w-full flex justify-start items-start flex-col py-1 border-b px-1'>
                  <h1 className='text-text font-medium '>{vendor.vendor}</h1>
                  <div className='w-full flex justify-between items-start '>
                    <div className='flex justify-start items-start gap-2 '>
                      <h3 className={`text-xs ${vendor.Status==="active"?"text-green-500":"text-red-500"}`}>{vendor.Status}</h3>
                      <h3 className='text-xs'>Rate:{vendor.rate }</h3>
                    </div>
                    <div>{vendor.Payments}</div>
                  </div>
                    <div class="flex w-full h-2 bg-gray-200 rounded-3xl overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div class="flex flex-col justify-center w-[80%] rounded-3xl overflow-hidden bg-gradient-to-r from-[#66A5F3] to-[#80DFDF] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" ></div>
                    </div>
                </div>)}
            </div>
          </div>
              
  )
}

export default TopVendors