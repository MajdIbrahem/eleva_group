import { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import darkbackground from '../assets/6780104_3433372.jpg'
import Sidbar from '../compnents/Sidbar';
import Navbar from '../compnents/Navbar';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { IoMdAddCircleOutline } from "react-icons/io";
const CreateRequest = () => {
    const { dark } = useContext(DarkModeContext)
    const [reciever,setReciever]=useState("")
    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [details,setDetails]=useState("")
    const [items, setItems] = useState([])
    const [notes, setNotes] = useState("")
    const [file, setFile] = useState(null)
    const [departmentOption, setDepartmentOption] = useState('all');
    const [locationOption, setlocationOption] = useState('all');
    const [request,setRequest]=useState({})
    const [open,setOpen]=useState(false)
    
    const addHandler = (e) => {
        e.preventDefault()
        const newItem = {
        item: item,
        quantity: quantity,
        details: details,
    };

    // Use the current state to append the new item
    setItems(prevItems => [...prevItems, newItem]);

    // Reset fields after adding
    setQuantity(1);
    setDetails('');
    setItem('');
    }
    const removeItem = (name) => {
    const newItems= items.filter((item) => {
            return item.item!== name 
    })
        
        setItems(newItems)
    }
    const editItem = (eItem) => {
        const newItems= items.filter((item) => {
            return item.item!== eItem.item 
        })
        setItems(newItems)
        setItem(eItem.item)
        setQuantity(eItem.quantity)
        setDetails(eItem.details)
    }
    const submitHandler = (e) => {
        
        e.preventDefault()
        const newRequest = {
            reciever: reciever,
            submitionsNotes:notes,
            attachmentFile: file,
            items: items,
            department: departmentOption,
            project:locationOption
        }
        setRequest(newRequest)
        setOpen(true)
    }
    const sendHandler = (e) => {
        e.preventDefault()
        console.log(request)
        setOpen(false)
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
                {open?<div className={`w-full h-full absolute flex items-center justify-center z-50`}>
                    <div className={`w-2/5 ${dark?"bg-text-primary text-white":"bg-[#EFF6FE]"}  rounded-2xl flex flex-col justify-center items-center p-4`}>
                    <h1>You are sending the request to {request.reciever } are you sure?</h1>
                    <div className='flex justify-center items-center gap-4'>
                        <button className='rounded-2xl bg-primary text-white px-8 py-1 mt-1' onClick={sendHandler} >Send</button>
                        <button className='rounded-2xl bg-secondairy text-text-primary px-8 py-1 mt-1' onClick={() => { setOpen(false) }}>Back</button>
                    </div>
                    </div>
                
                </div>:null}
                <div className={`w-full md:w-5/6 md:ml-64 ml-32 mr-8 h-full mt-32 ${dark ? "text-white" : "text-primary "} px-8 `}>
                    <div className={`w-full pt-4  ml-6 md:ml-0 rounded-2xl ${dark ? "bg-card-dark shadow-md border border-gray-700" : "bg-white shadow-xl shadow-secondairy"} flex flex-col items-center justify-start gap-6 p-5 `}>
                        <div className='flex jutify-start items-start gap-16 w-full flex-wrap mx-16'>
                            <div className={`flex flex-col justify-center items-center gap-2 p-3 rounded-2xl ${dark?"bg-background-dark  shadow-md border border-gray-700":"bg-primary/20 border  bg-opacity-70 shadow-md shadow-gry-300"}`}>
                                <h1 className='text-xl'>New Item</h1>
                                <form onSubmit={addHandler} className='flex flex-col justify-center items-center gap-1 w-full'>
                                    <div className='flex justify-between items-center gap-1 w-full'>
                                        <h1 className=' text-start w-1/2'>Item Name:</h1>
                                        <input
                                        name="item"
                                          type="text"
                                          value={item}
                                          onChange={(e)=>{setItem(e.target.value)}}
                                        placeholder="Add your Item"
                                        id="item"
                                        className={` w-[210px] text-center p-1 rounded-lg focus:outline-none appearance-none ${dark?" text-white bg-card-dark shadow-md shadow-background-dark ":"border border-gray-300 bg-[#ffffff]  text-sm font-thin"} `}
                                        
                            />
                                </div>
                                <div className='flex justify-between items-center gap-1  w-full'>
                                    <h1 className=' text-start w-1/2'>Quantity:</h1>
                                    <input
                                name="quantity"
                                type="number"
                                          id="number"
                                          value={quantity}
                                          onChange={(e)=>{setQuantity(e.target.value)}}
                                    defaultValue={1}
                                className={` w-[210px] p-1 text-center  rounded-lg focus:outline-none appearance-none ${dark?" text-white bg-card-dark  shadow-md shadow-background-dark ":"border border-gray-300 bg-[#ffffff]   text-sm font-thin"} `}
                            />
                            </div>
                                <div className='flex justify-between items-center gap-1  w-full'>
                                    <h1 className=' text-start w-1/2'>Details:</h1>
                                    <input
                                name="details"
                                type="text"
                                          value={details}
                                          onChange={(e)=>{setDetails(e.target.value)}}
                                placeholder="Details..."
                                id="details"
                                className={` w-[210px] h-[70px] text-center p-1 rounded-lg focus:outline-none appearance-none ${dark?" text-white bg-card-dark  shadow-md shadow-background-dark ":"border border-gray-300 bg-[#ffffff]  text-sm font-thin"} `}      
                            />
                            </div>
                        
                            <button type="submit" >
                                <IoMdAddCircleOutline className='text-4xl mt-2 text-blue-chart' />
                            </button>
                            </form>
                            </div>
                            <div className={`flex flex-col justify-center items-center gap-4 lg:w-[60%] w-full p-5 rounded-2xl ${dark ? "bg-background-dark  shadow-md border border-gray-700" : "bg-primary/20  bg-opacity-70 shadow-md shadow-gry-300"}`}>
                                <h1 className='text-xl'>Your Items </h1>
                            <div className={`${dark ? "" : "bg-[#ffffff]"} rounded-2xl w-full  `}>
                                
                                <table className="table-auto md:w-full  px-2 text-xs md:text-md">
                        <thead className="border-b border-seo  w-[90%]">
                        <tr className=" text-xs md:text-md font-semibold text-center">
                            <th className="w-1/6 p-2">ItemName</th>
                            <th className="w-1/6 p-2">Quantity</th>
                            <th className="w-2/6 p-2">Details</th>
                            <th className="w-1/6 p-2">Edit</th>
                            <th className="w-1/6 text-center p-2">Delete</th>
                        
                        </tr>
                        </thead>
                        <tbody className="text-text-primary  text-center text-xs md:text-sm">
                        {items.map(item => (
                            <tr key={item.item} className="border-b rounded-b-2xl ">
                            <td className={`px-2  py-5   ${dark?"text-white":""}`}>{item.item}</td>
                            <td className={`px-2  py-5 ${dark?"text-white":""}`}>{item.quantity}</td>
                            <td className={`px-2  py-5 ${dark?"text-white":""}`}>{item.details}</td>
                            <td className={`px-2 py-5 text-end  ${dark?"text-white":""}`}><TbEdit  onClick={()=>{editItem(item)}} className='text-xl text-blue-chart cursor-pointer ml-8'/></td>
                            <td className={`px-2 py-5 text-end   ${dark?"text-white":""}`}><MdOutlineDeleteOutline onClick={()=>{removeItem(item.item)}} className='text-xl text-red cursor-pointer ml-10'/></td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
                            </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  gap-1  '>
                            <div className={`flex justify-start items-center gap-1  p-2 rounded-2xl flex-wrap lg:flex-nowrap w-[90%] md:w-full ${dark?"bg-background-dark  shadow-md border border-gray-700":"bg-primary/20  bg-opacity-70 shadow-md shadow-gry-300"}`}>
                                        <h1 className=' text-start text-sm'>Submitions Notes:</h1>
                                        <input
                                    name="notes"
                                    type="text"
                                    value={notes}
                                    onChange={(e)=>{setNotes(e.target.value)}}
                                    placeholder="Submitions Notes..."
                                    id="notes"
                                    className={` w-[150px] h-[90px] p-1 text-center rounded-lg focus:outline-none appearance-none ${dark?" text-white bg-card-dark  border border-gray-700 ":"border border-gray-300 bg-[#ffffff]  text-sm font-thin"} `}      
                                />
                                <div className={`flex justify-center items-center   py-1  rounded-2xl `}>
                                            <h1 className=' text-sm  '>Procument Attchment:</h1>
                                            <input
                                        name="files"
                                        type="file"
                                        
                                        onChange={(e)=>{setFile(e.target.files[0])}}
                                        id="file"
                                        className={` p-1 rounded-2xl focus:outline-none text-sm ${dark?"  ":"   font-thin"} `}      
                                    />
                                    </div>
                            <div className='flex items-center justify-center '>
                    
                    
                
                    <label htmlFor="department" className="block  text-sm font-medium ">
                    Department
                                      </label>
                    <select
                        id="department"
                        name="department"
                        value={departmentOption}
                        onChange={(e) => {
                        setDepartmentOption(e.target.value)
                        console.log(e.target.value)
                        }}
                        className={` w-[120px] p-1 rounded-xl focus:outline-none  text-xs ${dark?"text-white bg-card-dark  border border-gray-700":"text-text-primary bg-white"} `}
                    >
                        
                        <option className='rounded' value="all" disabled>Select Departments</option>
                        <option className='rounded'  value="department-1">department-1</option>
                        <option className='rounded'  value="department-2">department-2</option>
                        <option className='rounded'  value="department-3">department-3</option>
                    </select>
                   
                            </div>
                            <div className='flex items-center justify-center gap-1'>
                                
                                <form className='flex items-center justify-center gap-1' >
                                <label htmlFor="location" className="block  text-sm font-medium  ">
                                Project
                                      </label>
                                <select
                                    id="status"
                                    name="department"
                                    value={locationOption}
                                    onChange={(e) => {
                                    setlocationOption(e.target.value)
                                    console.log(e.target.value)
                                    }}
                                    className={` w-[120px] p-1 rounded-xl focus:outline-none  text-xs ${dark?"text-white bg-card-dark  border border-gray-700":"text-text-primary bg-white"} `}
                                >
                                    
                                    <option className='rounded' value="all" disabled>Select Project</option>
                                    <option className='rounded'  value="location-1">project-1</option>
                                    <option className='rounded'  value="location-2">project-2</option>
                                    <option className='rounded'  value="location-3">project-3</option>
                                </select>
                                </form>
                            </div>
                            </div>
                        </div>
                            <div className='flex justify-center items-center gap-2'>
                                <label htmlFor="send to" className="block  text-sm font-medium "> Send To</label>
                            <select
                                id="send to"
                              name="send to"
                              value={reciever}
                                onChange={(e) => {setReciever(e.target.value)}}
                                className={` w-[150px] px-1 py-1 rounded-2xl focus:outline-none  ${dark?"bg-background-dark  shadow-md border border-gray-700 text-white":"border border-gray-300 bg-white  text-sm font-thin"} `}
                                    >
                                        <option value="" disabled >Select person</option>
                                    <option className='rounded' value="all">Majd</option>
                                <option className='rounded'  value="munjed">munjed</option>
                                <option className='rounded'  value="Khaled">Khaled</option>
                                <option className='rounded'  value="Saleem">Saleem</option>
                            </select>
                            
                                </div>
                      <button onClick={submitHandler} className={`w-[150px] p-2 rounded-2xl ${dark?"bg-blue-chart":"bg-primary"}  text-white text-md`}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRequest