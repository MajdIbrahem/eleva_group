import { useContext,useState,useEffect } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

import Sidbar from '../compnents/Sidbar';
import Navbar from '../compnents/Navbar';
import PaymentHistory from '../compnents/PaymentHistory';
import RequestsBar from '../compnents/RequestsBar';
import PieChart from '../compnents/PieChart';
import ExpenseCard from '../compnents/ExpenseCard';
import RequestCard from '../compnents/RequestCard';
import TopVendors from '../compnents/TopVendors';
import TopRequests from '../compnents/TopRequests';


import { MdFilterAlt } from "react-icons/md";
import EXpenseProject from '../compnents/EXpenseProject';

const Dashborad = () => {
  const { dark } = useContext(DarkModeContext)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [statusOption, setStatusOption] = useState('all');
const [departmentOption, setDepartmentOption] = useState('all');
const [locationOption, setlocationOption] = useState('all');

  useEffect(() => {
  console.log(statusOption,departmentOption,locationOption,endDate,startDate)
},[statusOption,departmentOption,locationOption,endDate,startDate])

  const paymentdata = [
  {
    name: 'jun',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'march',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'april',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'may',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'july',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  ];
  const requestdata = [
  {
    name: 'jun',
    pending: 400,
    approve: 1400,
    rejected: 100,
    all: 740,
  },
  {
    name: 'feb',
    pending: 3000,
    approve: 2400,
    rejected: 100,
    all: 740,
  },
  {
    name: 'mar',
    pending: 400,
    approve: 1400,
    rejected: 100,
    all: 740,
  },
  {
    name: 'aprile',
    pending: 150,
    approve: 2400,
    rejected: 100,
    all: 740,
  },
  {
    name: 'may',
    pending: 4000,
    approve: 240,
    rejected: 100,
    all: 740,
  },
  {
    name: 'jun',
    pending: 4000,
    approve: 240,
    rejected: 100,
    all: 740,
  },
  {
    name: 'july',
    pending: 400,
    approve: 1400,
    rejected: 100,
    all: 740,
    },
   {
    name: 'aug',
    pending: 400,
    approve: 1400,
    rejected: 100,
    all: 740,
  },
   {
    name: 'sep',
    pending: 400,
    approve: 1400,
    rejected: 100,
    all: 740,
  },
  ];
const departmentsData = [
  {
    subject: 'Department1',
    Spending: 2500,
  },
  {
    subject: 'Department2',
    Spending: 1200,
  },
  {
    subject: 'Department3',
    Spending: 1500,
  },
  {
    subject: 'Department4',
    Spending: 2230,
  },
  {
    subject: 'Department5',
    Spending: 1220,
  },
  {
    subject: 'Department6',
    Spending: 1240,
  },

];
 const ProjectsData = [
  {
    subject: 'Project1',
    Spending: 2200,
  },
  {
    subject: 'Project2',
    Spending: 3200,
  },
  {
    subject: 'Project3',
    Spending: 1500,
  },
  {
    subject: 'Project4',
    Spending: 2530,
  },
  {
    subject: 'Project5',
    Spending: 1520,
  },
  {
    subject: 'Project6',
    Spending: 1340,
  },
];
const topVendorsData=[
  {
    id:2,
    vendor: "BMW",
    Payments: "4500$",
    Status: "active",
    rate: "4.5"
  },
  {
    id:55,
    vendor: "Mercedes",
    Payments: "5000$",
    Status: "none active",
    rate: "4.7"
  },
  {
    id:26,
    vendor: "Audi",
    Payments: "4700$",
    Status: "active",
    rate: "4.3"
  },
  {
    id:322,
    vendor: "Tesla",
    Payments: "5200$",
    Status: "active",
    rate: "4.9"
  },
  {
    id:3235,
    vendor: "Toyota",
    Payments: "4300$",
    Status: "none active",
    rate: "4.2"
  }
  ]
  const topRequests=[
  {
    id: 1,
    name: "John Doe",
    totalItems: 3,
    spending: "3000$"
  },
  {
    id: 2,
    name: "Sara Ahmad",
    totalItems: 4,
    spending: "4500$"
  },
  {
    id: 3,
    name: "Emily Clark",
    totalItems: 5,
    spending: "5200$"
  },
  {
    id: 4,
    name: "Michael Lee",
    totalItems: 2,
    spending: "2500$"
  },
  {
    id: 5,
    name: "Anna Kim",
    totalItems: 6,
    spending: "6100$"
  }
]

  return (
    <div className="relative w-full h-screen">
            {/* Background Image or  Overlay */}
            {dark ? (<>
                
                <div className="fixed top-0 left-0 w-full h-full bg-background-dark  z-0"></div>
                </>
            ) : (<>
          
           <div className="fixed top-0 left-0 w-full h-full bg-background   z-0"></div>
          </>
            )}
            
            {/* Main Content */}
            <div className="relative   w-full h-full flex items-center justify-center ">
                <Sidbar />
                <Navbar />
                <div className={`w-5/6 ml-44 h-full mt-36  ${dark?"text-text-primary-dark":"text-text-primary font-semibold"} px-2`}>
                  <div className='w-full flex items-center  justify-center flex-col px-2 '>
                    {/* filters */}
                    <div className={`relative w-[1070px] ml-11 z-40 ${dark?"bg-white bg-opacity-15":"bg-white shadow-md shadow-shadow"}  rounded-lg  py-4 px-1  flex items-center justify-center lg:gap-12  gap-4  mb-6 mt-6`}>
                      <h1 className='text-xl'>Filter By</h1>
                      <div className='flex items-center justify-center lg:gap-12 gap-4'>
                        <div className='flex items-start flex-col justify-start gap-1'>
                        <label className="text-sm font-normal" htmlFor="start date"> From</label>
                        <input
                          type="date"
                          id="start date"
                          value={startDate}
                          onChange={(e) => { setStartDate(e.target.value) }}
                          className={` w-[140px] py-1 px-2 rounded-lg border text-center focus:outline-none appearance-none text-sm ${dark?"bg-white bg-opacity-0 text-white border border-gray-700":"text-text-primary font-thin text-center bg-white"} `}
                        />
                      </div>
                      <div className='flex items-start flex-col justify-start gap-1'>
                        <label className="text-sm font-normal" htmlFor="end date"> To</label>
                        <input
                          type="date"
                          id="end date"
                          value={endDate}
                          onChange={(e) => { setEndDate(e.target.value) }}
                          className={` w-[140px] py-1 px-3 rounded-lg border text-center focus:outline-none appearance-none text-sm ${dark?"bg-white bg-opacity-0 text-white border border-gray-700":"text-text-primary font-thin text-center bg-white"} `}
                        />
                      </div>
                          </div>
                    <div className='flex items-start flex-col justify-start gap-1'>
                      <h1 className='text-sm font-normal'>Status</h1>
                      <form className='rounded relative' >
                        <MdFilterAlt className={ `absolute top-2 right-2 text-sm ${dark?"text-black":"text-text-primary"}  z-10`} />
                        <label htmlFor="status" className="block  text-sm font-medium text-text-primary">
                        </label>
                        <select
                          id="status"
                          name="status"
                          value={statusOption}
                          onChange={(e) => {
                            setStatusOption(e.target.value)
                            console.log(e.target.value)
                          }}
                          className={` w-[140px] py-1 px-3 rounded-lg border text-center focus:outline-none appearance-none text-sm ${dark?" text-white bg-white bg-opacity-0 border border-gray-700 ":"text-text-primary font-thin text-center bg-white"} `}
                        >
                          
                          <option className='rounded' value="all">All </option>
                          <option className='rounded'  value="approved">Approved</option>
                          <option className='rounded'  value="rejected">Rejected</option>
                          <option className='rounded'  value="pending">Pending</option>
                        </select>
                      </form>
                            </div>
                    <div className='flex items-start flex-col justify-start gap-1'>
                      <h1 className='text-sm font-normal'>Depaetments</h1>
                      <form className='rounded relative' >
                        <MdFilterAlt className={ `absolute top-2 right-2 text-sm ${dark?"text-black":"text-text-primary"}  z-10`} />
                        <label htmlFor="department" className="block  text-sm font-medium text-text-primary">
                        </label>
                        <select
                          id="department"
                          name="department"
                          value={departmentOption}
                          onChange={(e) => {
                            setDepartmentOption(e.target.value)
                          console.log(e.target.value)
                          }}
                          className={` w-[140px] py-1 px-3 rounded-lg border text-center focus:outline-none appearance-none text-sm ${dark?"bg-white bg-opacity-0 text-white border border-gray-700":"text-text-primary font-thin text-center bg-white"} `}
                        >
                          
                          <option className='rounded' value="all">All </option>
                          <option className='rounded'  value="department-1">department-1</option>
                          <option className='rounded'  value="department-2">department-2</option>
                          <option className='rounded'  value="department-3">department-3</option>
                        </select>
                      </form>
                            </div>
                    <div className='flex items-start flex-col justify-start gap-1'>
                      <h1 className='text-sm font-normal'>Projects</h1>
                      <form className='rounded relative' >
                  <MdFilterAlt className={ `absolute top-2 right-2 text-sm ${dark?"text-black":"text-text-primary"}  z-10`} />
                        <label htmlFor="location" className="block  text-sm font-medium text-text-primary ">
                        </label>
                        <select
                          id="project"
                          name="project"
                          value={locationOption}
                          onChange={(e) => {
                            setlocationOption(e.target.value)
                            console.log(e.target.value)
                          }}
                          className={` w-[140px] py-1 px-3 rounded-lg border text-center focus:outline-none appearance-none text-sm ${dark?"bg-white bg-opacity-0  text-white border border-gray-700":"text-text-primary font-thin  bg-white"} `}
                        >
                          
                          <option className='rounded' value="all">All </option>
                          <option className='rounded'  value="project-1">project-1</option>
                          <option className='rounded'  value="project-2">project-2</option>
                          <option className='rounded'  value="project-3">project-3</option>
                        </select>
                      </form>
                      </div>
                    </div>
                    <div className='flex justify-between items-start  flex-wrap mt-4 '>
                          <div className='flex justify-start items-start flex-col gap-6'>
                            <div className='flex justify-center items-center   pl-14 gap-4 lg:gap-6'>
                            <ExpenseCard title='Total Expenses' value='4000'/>
                            <RequestCard title='Approved Requests' value='230'/> 
                            <RequestCard title='Rejected Requests' value='40'/> 
                            <RequestCard title='Pending Requests' value='450' />
                            </div>
                            <div className='w-full flex justify-center items-center pl-11 flex-col lg:flex-row  gap-6'>
                              <PaymentHistory paymentdata={ paymentdata} />
                              <PieChart PieData={ departmentsData} title='Expense By Department'/>
                              </div>
                            <div className='w-full pl-10 mb-24 flex justify-center items-center flex-col lg:flex-row gap-6'>
                                <TopRequests topRequests={topRequests} />
                                <TopVendors topVendorsData={topVendorsData} />
                                <EXpenseProject/>
                            </div>
                        </div>
                      
                        
                    </div>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Dashborad
//  className='flex flex-col justify-start items-start gap-4  mt-8'