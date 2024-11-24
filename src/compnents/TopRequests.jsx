import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import user from '../assets/team4.jpg'; 
const TopRequests = ({topRequests}) => {
    const { dark } = useContext(DarkModeContext)
  return (
    <div className=' '>
                  <div className={`flex justify-start items-start gap-2 flex-col  font-medium w-[325px] md:w-[500px] md:h-[400px] ${dark?"bg-card-dark border-gray-700 border  shadow-md shadow-background-dark ":"text-text-primary bg-white  shadow-lg "} rounded-2xl p-2`}>
                  <h1 className='text-xl font-semibold '>Top Requests</h1>
                  <table className="table-auto md:w-full h-[90%] text-xs md:text-md">
                    <thead className="border-b w-[90%]">
                      <tr className=" text-xs md:text-md font-semibold text-center">
                        <th className="w-1/5 p-2">ID</th>
                        <th className="w-1/5 p-2">Profile</th>
                        <th className="w-1/5 p-2">Name</th>
                        <th className="w-1/5 p-2">Total Items</th>
                        <th className="w-1/5 p-2">Spending</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-primary text-center text-xs md:text-sm">
                      {topRequests.map(item => (
                        <tr key={item.vendor} className="border-b">
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.id}</td>
                          <td className={`p-2  ${dark?"text-white":""} `}><img src={user}  alt='user' className='w-[30px] h-[30px] ml-6  object-cover rounded-full cursor-pointer'></img></td>
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.name}</td>
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.totalItems}</td>
                          <td className={`p-2  ${dark?"text-white":""}`}>{item.spending}</td>
                          
                        </tr>
                      ))}
                    </tbody>
                    </table>
                    <Link to='/vendors' className='text-center text-sm  ml-60'><h3>See All</h3></Link>
                    
                  </div>
              </div>
  )
}

export default TopRequests