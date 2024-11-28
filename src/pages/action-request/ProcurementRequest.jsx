import React from 'react'
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

import Sidbar from '../../compnents/Sidbar';
import Navbar from '../../compnents/Navbar';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useParams } from 'react-router-dom';

const  ProcurementRequest = () => {
    const{id}=useParams()
    const { dark } = useContext(DarkModeContext)
    const [comment, setComment] = useState("")
    const [reciver,setReciever]=useState("")
    const [approve,setApprove]=useState("")
    const [esclate,setEsclate]=useState("")
    const [status, setStatus] = useState("")
    const [amend, setAmend] = useState("")
    const [reject, setReject] = useState(false) 
    const [open, setOpen] = useState(false)
    
    const request={
        "id":2,
        "requesterName": "majd ibrahem",
        "items": [
            {
                "name": "Item 0",
                "quantity": 1,
                "price": 300,
                "vendor": "vendor 1",
                "percentage": 20,
                "saving":50
            },
            {
                "name": "Item 1",
                "quantity": 2,
                "price": 300,
                "vendor": "vendor 1",
                "percentage": 20,
                "saving":50
            },
            {
                "name": "Item 2",
                "quantity": 3,
                "price": 300,
                "vendor": "vendor 1",
                "percentage": 20,
                "saving":50
            },
        ],
        "attachment": null,
        "department": 1,
        "project": 1,
        "status": "Pending",
        "request_history": [
            {
                "id": 103,
                "created_at": "2024-11-12T05:35:58.405812Z",
                "updated_at": "2024-11-12T05:35:58.405812Z",
                "status": "Pending",
                "comment": "",
                "procurment_request": 1,
                "reciever": "majd",
                "stage": null
            },
            {
                "id": 102,
                "created_at": "2024-11-12T05:34:54.256285Z",
                "updated_at": "2024-11-12T05:35:58.171491Z",
                "status": "Approved",
                "comment": "fsdffdsf",
                "procurment_request": 1,
                "reciever": "munjed",
                "stage": null
            },
            {
                "id": 101,
                "created_at": "2024-11-12T05:33:29.672431Z",
                "updated_at": "2024-11-12T05:34:54.080838Z",
                "status": "Escalated",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": "khaled",
                "stage": null
            },
            {
                "id": 10,
                "created_at": "2024-11-11T15:23:42.520519Z",
                "updated_at": "2024-11-12T05:33:29.125583Z",
                "status": "Emended",
                "comment": "hello",
                "procurment_request": 1,
                "reciever": "majd",
                "stage": null
            },
            {
                "id": 9,
                "created_at": "2024-11-11T15:23:42.399116Z",
                "updated_at": "2024-11-11T15:23:42.399116Z",
                "status": "Approved",
                "comment": "Comment for log 8",
                "procurment_request": 1,
                "reciever": "majd",
                "stage": null
            },
            {
                "id": 8,
                "created_at": "2024-11-11T15:23:42.270557Z",
                "updated_at": "2024-11-11T15:23:42.270557Z",
                "status": "Approved",
                "comment": "Comment for log 7",
                "procurment_request": 1,
                "reciever": "munjed",
                "stage": null
            },
            
            
         
        ],
        "notes": "Notes for request 0",
        "created_at": "2024-11-11T15:23:40.075218Z"
        }
    const getStatusColor = (status) => {
  switch (status) {
    case 'Approved':
      return 'rgba(34, 139, 34, 0.8)'; // Medium green with 60% opacity
    case 'Pending':
      return 'rgba(255, 165, 0, 0.8)'; // Medium orange with 60% opacity
    case 'Emended':
      return 'rgba(220, 20, 60, 0.8)'; // Medium red with 60% opacity
    case 'Escalated':
      return 'rgba(70, 130, 180, 0.8)'; // Medium blue with 60% opacity
    default:
      return 'rgba(169, 169, 169, 0.8)'; // Medium gray with 60% opacity
  }
};


    const submitHandler = (e) => {
        e.preventDefault()
        if(status!==""){setOpen(true)}
        
    }
    const sendHandler = (e) => {
        e.preventDefault()
        setOpen(false)
        console.log(status,reciver)
    }

    return (
        <div className="relative w-full h-screen">
                {/* Background Image or  Overlay */}
                {dark ? (<>
                     <div className="fixed top-0 left-0 w-full h-full bg-[#262846]  z-0"></div>
                    {open?<div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>:null}
                    </>
                ) : (
                    <>
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-200  z-0"></div>
                        {open?<div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>:null}
                    </>
                )}
                
            {/* Main Content */}
            <div className="relative  w-full h-full flex items-center justify-center mb-32    ">
                <Sidbar />
                <Navbar />

                {open?<div className={`w-full h-full fixed flex items-center justify-center z-50`}>
                    <div className={`w-2/5 ${dark?"bg-text-primary text-white":"bg-[#EFF6FE]"}  rounded-2xl flex flex-col justify-center items-center p-4`}>
                        <h1>You are {status}ing the request to { reciver} are you sure?</h1>
                    <div className='flex justify-center items-center gap-4'>
                        <button className='rounded-2xl bg-primary text-white px-8 py-1 mt-1' onClick={sendHandler} >Send</button>
                        <button className='rounded-2xl bg-secondairy text-text-primary px-8 py-1 mt-1' onClick={() => { setOpen(false) }}>Back</button>
                    </div>
                    </div>
                
                </div> : null}
                
                <div className={`w-full h-full md:w-5/6 md:ml-64 ml-32 mr-8  mt-32 ${dark ? "text-white" : "text-primary "} px-8 `}>
                    <div className={`w-full  pt-4  rounded-2xl ${dark ? "bg-card-dark shadow-md shadow-background-dark" : "bg-white shadow-xl shadow-secondairy"} flex flex-col items-center justify-start gap-6 p-5 `}>
                        <div className={ `w-full mt-4 p-3 `}>
                            <Box sx={{ width: '100%' }}>
                                <Stepper
                                    alternativeLabel
                                    sx={{
                                    '.MuiStepLabel-label': { marginTop: '4px' }, // Reduce space between icon and label
                                    '.MuiStepConnector-line': { minHeight: '20px' }, // Adjust connector line height
                                    }}
                                >
                                    {request.request_history.map((step) => (
                                    <Step key={step.id}>
                                        <StepLabel
                                        sx={{
                                            '& .MuiStepIcon-root': {
                                            color: getStatusColor(step.status), // Set icon color based on status
                                            fontSize: {
                                                xs: '1.5rem', // Default size for small screens
                                                md: '2rem', // Larger size for md and above
                                            },
                                            },
                                            '& .MuiStepIcon-text': {
                                            fill: 'white', // Optional: Make the step number contrast with the background
                                                    },
                                             '.MuiStepLabel-label': {
                                                color: 'black', // Set receiver text color to black
                                                 marginTop: '2px',
                                                  transform: 'translateY(-4px)',// Set receiver text font weight to bold
                                                },
                                        }}
                                        >
                                        {/* Date above the stepper icon */}
                                        <Box
                                            sx={{
                                            position: 'relative',
                                            bottom: '50px', // Fine-tuned positioning for date above the icon
                                            textAlign: 'center',
                                            }}
                                        >
                                            <div style={{ fontSize: '0.75rem', color: '#6F51FF' }}>
                                            {new Date(step.created_at).toISOString().split('T')[0]}
                                            </div>
                                        </Box>
                                        {step.reciever}
                                        </StepLabel>
                                    </Step>
                                    ))}
                                </Stepper>
                                </Box>;
                        </div>
                        <div className={`w-full p-3 flex justify-center items-start gap-8 rounded-2xl ${dark?"bg-background-dark bg-opacity-20 shadow-md shadow-background-dark":"bg-primary/20  bg-opacity-70 shadow-md shadow-gray-300"} px-10 flex-wrap `}>
                             <div className='flex justify-start  items-center gap-2'>
                                    <h3 className='text-md '>Request Id: </h3>
                                    <h3 className={`${dark?"text-white":"text-text-primary"} text-md`}>{id}</h3>
                                </div>
                                <div className='flex justify-start  items-center gap-2 '>
                                    <h3 className='text-md '>Requestor Name: </h3>
                                    <h3 className={`${dark?"text-white":"text-text-primary"} text-md`}>{request.requesterName}</h3>
                                </div>
                                <div className='flex justify-start  items-center gap-2 '>
                                    <h3 className='text-md '>Department: </h3>
                                    <h3 className={`${dark?"text-white":"text-text-primary"} text-md`}>{request.department}</h3>
                                </div>
                                <div className='flex justify-start items-center gap-2 '>
                                    <h3 className='text-md '>Project: </h3>
                                    <h3 className={`${dark?"text-white":"text-text-primary"} text-md`}>{request.project}</h3>
                                </div>
                                <div className='flex justify-start items-center gap-2 '>
                                    <h3 className='text-md '>Procurment attachment: </h3>
                                    <h3 className='text-text-primary text-xs '>
                                        <a
                                            href="#"
                                            download="Majd's Resume (react)"
                                            className="flex items-center justify-center px-2 py-1 bg-gray-500 rounded-3xl cursor-pointerno-underline hover:no-underline active:no-underline focus:no-underline"
                                        >
                                            
                                            <span>Download files</span>
                                        </a>
                                    </h3>
                                </div>
                        </div>
                        <div className={`flex flex-col justify-center items-center gap-2 w-full p-3 px-10 rounded-2xl ${dark?"bg-background-dark bg-opacity-20 shadow-md shadow-background-dark":"bg-primary/20  bg-opacity-70 shadow-md shadow-gray-300"}`}>
                            <h1 className='text-xl text-center'>Items</h1>
                            <table className={`table-auto w-full ${dark?"":"bg-white"} rounded-2xl  px-2 text-xs md:text-md`}>
                        <thead className="border-b border-seo  w-[90%]">
                        <tr className=" text-xs md:text-md font-semibold text-center">
                            <th className="w-[15%] p-2">ItemName</th>
                            <th className="w-[10%] p-2">Quantity</th>
                            <th className="w-[10%] p-2">Price</th>
                            <th className="w-[15%] p-2">Vendor</th>
                            <th className="w-[10%] p-2">Percentage</th>
                            <th className="w-[10%] p-2">Saving</th>
                            <th className="w-[30%] p-2">Details</th>
                            
                        
                        </tr>
                        </thead>
                        <tbody className="text-text-primary  text-center text-xs md:text-sm">
                                    {request.items.map(item => (
                            
                            <tr key={item.item} className="border-b rounded-b-2xl ">
                            <td className={`px-2  py-2   ${dark?"text-white":""}`}>{item.name}</td>
                            <td className={`px-2  py-2 ${dark?"text-white":""}`}>{item.quantity}</td>
                            <td className={`px-2  py-2 ${dark?"text-white":""}`}>{item.price}$</td>
                            <td className={`px-2  py-2 ${dark?"text-white":""}`}>{item.vendor}</td>
                            <td className={`px-2  py-2 ${dark?"text-white":""}`}>{item.percentage}%</td>
                            <td className={`px-2  py-2 ${dark?"text-white":""}`}>{item.saving}%</td>
                            <td className={`px-2  py-2 ${dark?"text-white":""}`}>any thing about the item</td>
                            
                            </tr>
                        ))}
                        </tbody>    
                            </table>
                            <div className={`text-lg `}><span className='text-lg text-red-500'>Total Price:</span>{ request.items.reduce((prev, curItem) => {
        return prev+curItem.quantity*curItem.price
      }, 0)}$</div>            
                            </div>
                        <div className={`w-full flex p-3 flex-col justify-center items-center gap-2 px-10 rounded-2xl ${dark?"bg-background-dark bg-opacity-20 shadow-md shadow-background-dark":"bg-primary/20  bg-opacity-70shadow-md shadow-gray-300"}`}>
                            <h1 className='text-xl text-center'>Approvals</h1>
                            <table className={`table-auto w-full ${dark?"":"bg-white"} rounded-2xl  px-2 text-xs md:text-md`}>
                        <thead className="border-b border-seo  w-[90%]">
                        <tr className=" text-xs md:text-md font-semibold text-center">
                            <th className="w-1/6 p-2">Reciever</th>
                            <th className="w-1/6 p-2">Status</th>
                            <th className="w-2/6 p-2">Date</th>
                            <th className="w-2/6 p-2">Comment</th>
                            
                        
                        </tr>
                        </thead>
                        <tbody className="text-text-primary  text-center text-xs md:text-sm">
                        {request.request_history.map(item => (
                            <tr key={item.item} className="border-b rounded-b-2xl ">
                            <td className={`px-2  py-2   ${dark?"text-white":""}`}>{item.reciever}</td>
                                <td className={`px-2  py-2
                                                ${item.status === "Pending" ? "text-orange-500" : ""}
                                                ${item.status === "Approved" ? "text-green-500" : ""}
                                                ${item.status === "Escalated" ? "text-primary" : ""}
                                                ${item.status === "Emended" ? "text-red-300" : ""}
                                                
                                                `}>{item.status}</td>
                            <td className={`px-2  py-2 ${dark ? "text-white" : ""}`}>{ new Date(item.created_at).toLocaleString()}</td>
                            <td className={`px-2  py-2 ${dark ? "text-white" : ""}`}>{item.comment}</td>
                            </tr>
                        ))}
                        </tbody>
                            </table>
                        </div>
                        <div className={`w-full flex p-3 flex-col justify-center items-center flex-wrap gap-4 px-10 rounded-2xl ${dark?"bg-background-dark bg-opacity-20 shadow-md shadow-background-dark":"bg-primary/20  bg-opacity-70 shadow-md shadow-gray-300"}`}>
                            <h1 className='text-xl text-center'>Action</h1>
                            <div className='flex justify-center items-center gap-2 flex-wrap w-full'>
                                    <h1 className=' text-start '>Comment:</h1>
                                    <input
                                        name="comment"
                                        type="text"
                                        value={comment}
                                        onChange={(e)=>{setComment(e.target.value)}}
                                        placeholder="Add Your Comment.."
                                        id="details"
                                        className={` w-[210px] h-[70px] text-center p-1 rounded-xl focus:outline-none appearance-none ${dark?" text-white bg-background-dark bg-opacity-50 shadow-md shadow-background-dark ":"border border-gray-300 bg-[#ffffff]  text-sm font-thin"} `}      
                                    />
                            </div>
                            <div className='w-full flex items-center flex-col md:flex-row justify-center gap-4 '>
                                <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="send to" className="block text-green-400  text-sm font-medium "> Approve To</label>
                                    <select
                                        id="approve to"
                                        name="approve to"
                                        value={approve}
                                        onChange={(e) => {
                                            setReciever(e.target.value)
                                            setApprove(e.target.value)
                                            setStatus("approve")
                                            setEsclate('')
                                            setAmend('')
                                            setReject(false)
                                        }}
                                        className={` w-[150px] px-2 py-1 rounded-xl text-green-500 focus:outline-none  ${dark?"bg-background-dark bg-opacity-50 shadow-md shadow-background-dark text-white":"border border-gray-300 bg-white  text-sm font-thin"} `}
                                            >
                                        <option value="" disabled >Select person</option>
                                        <option className='rounded' value="majd">Majd</option>
                                        <option className='rounded'  value="munjed">munjed</option>
                                        <option className='rounded'  value="Khaled">Khaled</option>
                                        <option className='rounded'  value="Saleem">Saleem</option>
                                    </select>
                            
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="send to" className="block   text-sm font-medium "> Esclate To</label>
                                    <select
                                        id="Esclate to"
                                        name="Esclate to"
                                        value={esclate}
                                        onChange={(e) => {
                                            setReciever(e.target.value)
                                            setEsclate(e.target.value)
                                            setApprove('')
                                            setAmend('')
                                            setStatus("esclate")
                                            setReject(false)
                                        }}
                                        className={` w-[150px] px-2 py-1 rounded-xl  focus:outline-none  ${dark?"bg-background-dark bg-opacity-50 shadow-md shadow-background-dark text-white":"border border-gray-300 bg-white  text-sm font-thin"} `}
                                            >
                                        <option value="" disabled >Select person</option>
                                        <option className='rounded' value="majd">Majd</option>
                                        <option className='rounded'  value="munjed">munjed</option>
                                        <option className='rounded'  value="Khaled">Khaled</option>
                                        <option className='rounded'  value="Saleem">Saleem</option>
                                    </select>
                            
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="send to" className="block  text-purple-400 text-sm font-medium "> Amend  To</label>
                                    <select
                                        id="Amend to"
                                        name="Amend to"
                                        value={amend}
                                        onChange={(e) => {
                                            setReciever(e.target.value)
                                            setAmend(e.target.value)
                                            setEsclate("")
                                            setApprove('')
                                            setStatus("amend")
                                            setReject(false)
                                        }}
                                        className={` w-[150px] px-2 py-1 rounded-xl  text-purple-400 focus:outline-none  ${dark?"bg-background-dark bg-opacity-50 shadow-md shadow-background-dark text-white":"border border-gray-300 bg-white  text-sm font-thin"} `}
                                            >
                                        <option value="" disabled >Select person</option>
                                        <option className='rounded' value="majd">Majd</option>
                                        <option className='rounded'  value="munjed">munjed</option>
                                        <option className='rounded'  value="Khaled">Khaled</option>
                                        <option className='rounded'  value="Saleem">Saleem</option>
                                    </select>
                            
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-8'>
                        <button onClick={submitHandler} className='w-[150px] p-2 rounded-2xl bg-primary text-white text-md'>Procced</button>
                            <button onClick={() => {
                                
                                    setReciever("")
                                            setAmend("")
                                            setEsclate("")
                                            setApprove('')
                                    setStatus("reject")
                                setReject(true)
                                setOpen(true)
                                }}
                                className={`w-[150px] p-2 rounded-2xl text-white ${reject?"bg-red-200":"bg-red-500"}`}
                            >Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcurementRequest