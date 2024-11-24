import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
const TopVendors = ({ topVendorsData }) => {
    const { dark } = useContext(DarkModeContext)
  return (
    <div className=''>
                  <div className={`flex justify-start items-start gap-2 flex-col font-medium w-[325px] md:w-[500px]  md:h-[400px] ${dark?"bg-card-dark border-gray-700 border shadow-md shadow-background-dark ":"text-text-primary bg-white shadow-lg"} rounded-2xl p-2`}>
                  <h1 className='text-xl font-semibold'>Top Vendors</h1>
                  <table className="table-auto text-xs md:text-lg  md:w-full h-[90%]">
                    <thead className="border-b w-[80%]">
                      <tr className="text-xs md:text-md font-semibold text-center">
                        <th className="w-1/5 md:p-2">ID</th>
                        <th className="w-1/5 md:p-2">Vendor</th>
                        <th className="w-1/5 md:p-2 ">Payments</th>
                        <th className="w-1/5 md:p-2 ">Status</th>
                        <th className="w-1/5 md:p-2 ">Rate</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-primary text-center  text-xs md:text-sm w-[90%]">
                      {topVendorsData.map(item => (
                        <tr key={item.vendor} className="border-b">
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.id}</td>
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.vendor}</td>
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.Payments}</td>
                          <td className={`p-2 ${item.Status==="active"?"text-green-400":"text-red"}`}>{item.Status}</td>
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.rate}</td>
                          
                        </tr>
                      ))}
                    </tbody>
                    </table>
                    <Link to='/vendors' className='text-center  ml-60'><h3>See All</h3></Link>
                    
                  </div>
              </div>
  )
}

export default TopVendors