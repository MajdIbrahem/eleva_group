import { useContext,useState,useEffect } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import darkbackground from '../assets/6780104_3433372.jpg'
import Sidbar from '../compnents/Sidbar';
import Navbar from '../compnents/Navbar';
import PaymentHistory from '../compnents/PaymentHistory';
import RequestsBar from '../compnents/RequestsBar';
import PieChart from '../compnents/PieChart';
import ExpenseCard from '../compnents/ExpenseCard';
import RequestCard from '../compnents/RequestCard';
import TopVendors from '../compnents/TopVendors';
import TopRequests from '../compnents/TopRequests';
import lightBackground from '../assets/d35026c92c28c6c004145facdd38e305.jpg'
import 'rsuite/dist/rsuite.min.css';
import { MdFilterAlt } from "react-icons/md";


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
                
                <div className="fixed top-0 left-0 w-full h-full bg-[#262846]  z-0"></div>
                </>
            ) : (<>
          
           <div className="fixed top-0 left-0 w-full h-full bg-gray-200   z-0"></div>
          </>
            )}
            
            {/* Main Content */}
            <div className="relative  w-full h-full flex items-center justify-center mb-32 ">
                <Sidbar />
                <Navbar />
                <div className={`w-5/6 ml-56 h-full mt-40 ${dark?"text-white":"text-text-primary font-semibold"} px-8`}>
                  <div className='flex items-center justify-center flex-col gap-6 '>
                    {/* filters */}
                    <div className='relative z-50 flex items-center justify-center lg:gap-16 mr-8 gap-4 flex-wrap mb-2 mt-8'>
                      <div className='flex items-center justify-center lg:gap-10 gap-4'>
                
                <div className='flex items-center justify-center gap-4'>
                  <label htmlFor="start date"> From</label>
                  <input
                    type="date"
                    id="start date"
                    value={startDate}
                    onChange={(e) => { setStartDate(e.target.value) }}
                    className={` w-[140px] py-1 px-2 rounded-xl text-center focus:outline-none appearance-none text-sm ${dark?"bg-card-dark shadow-md shadow-background-dark text-white border border-gray-700":"text-text-primary font-thin text-center bg-white"} `}
                  />
                </div>
                <div className='flex items-center justify-center gap-4'>
                  <label htmlFor="end date"> To</label>
                  <input
                    type="date"
                    id="end date"
                    value={endDate}
                    onChange={(e) => { setEndDate(e.target.value) }}
                    className={` w-[140px] py-1 px-3 rounded-xl text-center focus:outline-none appearance-none text-sm ${dark?"bg-card-dark shadow-md shadow-background-dark text-white border border-gray-700":"text-text-primary font-thin text-center bg-white"} `}
                  />
                </div>
                    </div>
              <div className='flex items-center justify-center gap-1'>
                
                <form className='rounded relative' >
                  <MdFilterAlt className='absolute top-2 right-2 text-sm text-black z-10'/>
                  <label htmlFor="status" className="block  text-sm font-medium text-gray-700">
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={statusOption}
                    onChange={(e) => {
                      setStatusOption(e.target.value)
                      console.log(e.target.value)
                    }}
                    className={` w-[140px] py-1 px-3 rounded-xl text-center focus:outline-none appearance-none text-sm ${dark?" text-white bg-card-dark shadow-md shadow-background-dark border border-gray-700 ":"text-text-primary font-thin text-center bg-white"} `}
                  >
                    
                    <option className='rounded' value="all">All Status</option>
                    <option className='rounded'  value="approved">Approved</option>
                    <option className='rounded'  value="rejected">Rejected</option>
                    <option className='rounded'  value="pending">Pending</option>
                  </select>
                </form>
                      </div>
              <div className='flex items-center justify-center gap-1'>
                
                <form className='rounded relative' >
                  <MdFilterAlt className='absolute top-2 right-1 text-sm text-black z-10'/>
                  <label htmlFor="department" className="block  text-sm font-medium text-gray-700">
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={departmentOption}
                    onChange={(e) => {
                      setDepartmentOption(e.target.value)
                    console.log(e.target.value)
                    }}
                    className={` w-[140px] py-1 px-3 rounded-xl text-center focus:outline-none appearance-none text-sm ${dark?"bg-card-dark shadow-md shadow-background-dark text-white border border-gray-700":"text-text-primary font-thin text-center bg-white"} `}
                  >
                    
                    <option className='rounded' value="all">All Departments</option>
                    <option className='rounded'  value="department-1">department-1</option>
                    <option className='rounded'  value="department-2">department-2</option>
                    <option className='rounded'  value="department-3">department-3</option>
                  </select>
                </form>
                      </div>
              <div className='flex items-center justify-center gap-1'>
                
                <form className='rounded relative' >
                  <MdFilterAlt className='absolute top-2 right-2 text-sm text-black z-10'/>
                  <label htmlFor="location" className="block  text-sm font-medium text-text-primary ">
                  </label>
                  <select
                    id="status"
                    name="department"
                    value={locationOption}
                    onChange={(e) => {
                      setlocationOption(e.target.value)
                      console.log(e.target.value)
                    }}
                    className={` w-[140px] py-1 px-3 rounded-xl text-center focus:outline-none appearance-none text-sm ${dark?"bg-card-dark shadow-md shadow-background-dark text-white border border-gray-700":"text-text-primary font-thin  bg-white"} `}
                  >
                    
                    <option className='rounded' value="all">All Locations</option>
                    <option className='rounded'  value="location-1">location-1</option>
                    <option className='rounded'  value="location-2">location-2</option>
                    <option className='rounded'  value="location-3">location-3</option>
                  </select>
                </form>
                      </div>
                    </div>
                    <div className='flex justify-between items-start md:gap-10 flex-wrap mb-32'>
                          <div className='flex justify-start items-start flex-col gap-8'>
                            <div className='flex justify-center items-center flex-wrap md:mr-32 lg:mr-0 sm:mr-0 gap-2 lg:gap-9'>
                            <ExpenseCard title='Total Expenses' value='4000'/>
                            <RequestCard title='Approved Requests' value='230'/> 
                            <RequestCard title='Rejected Requests' value='40'/> 
                            <RequestCard title='Pending Requests' value='450' />
                            </div>
                            <div className='flex justify-center items- flex-col lg:flex-row  gap-4'>
                              <PaymentHistory paymentdata={ paymentdata} />
                              <RequestsBar requestdata={requestdata} />
                              </div>
                            <div className='flex justify-center items-center flex-col lg:flex-row  gap-4'>
                              <TopVendors topVendorsData={topVendorsData} />
                              <PieChart PieData={ departmentsData} title='Department Spending'/>
                              </div>
                            <div className='flex justify-center items-center flex-col lg:flex-row gap-4'>
                              <TopRequests topRequests={topRequests} />
                              <PieChart PieData={ProjectsData} title='Project Spending' />
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