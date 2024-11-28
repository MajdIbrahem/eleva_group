import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import bg from '../assets/2.jpg'
import logo from '../assets/image.png'
const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [code, setCode] = useState("")
  const [empty,setEmpty]=useState(false)
  const navigate=useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (email  === "") {
            setEmpty(true)
            return
        }
    // axios.post('',
    //     {
    //         email :email,
    //
    //     })
    //     .then(res =>{ 
    //     
    //         })
    //     .catch(error => console.log(error))
    // }
    setIsSent(true)
  }
  const VerfiyHandler = (e) => {
    e.preventDefault()
    if (code=== "") {
            setEmpty(true)
            return
        }
    localStorage.setItem('code',code)
    // axios.post('',
    //     {
    //         code :code,
    //
    //     })
    //     .then(res =>{ 
    //          
    //         })
    //     .catch(error => console.log(error))
    // }
    navigate("/reset-password")
  }
  return (
    <div className='w-full h-screen relative'>
            <div className='absolute w-full h-full backdrop-blur '>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-[75%] h-[80%] rounded-3xl bg-white flex items-center justify-center shadow-2xl shadow-black flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 h-full rounded-3xl relative'>
                        <img className='w-full h-full object-cover  md:rounded-l-3xl' src={bg} alt='/'></img>
                            <div className='absolute w-full h-full top-0 right-0 text-white flex flex-col justify-between items-center md:pt-32 pt-8 pb-4 '>
                                <div className='flex items-center justify-center flex-col gap-2 md:gap-4  mt-16 md:mt-8'>
                                    <h1 className='text-lg md:text-3xl font-bold'>TEAM</h1>
                            <h1 className='text-lg md:text-3xl font-bold text-center'>Get Every Thing You Want</h1>
                                <p className='text-sm md:text-lg'>Trust the procces, and stick the <br></br><p className='text-center'>plan.</p> </p>
                                </div>
                                <h1 className='text-sm md:text-lg font-semibold rounded-3xl px-2  border-2 border-white'>Procurment App</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-8 flex-col w-full md:w-1/2 h-full py-8 px-5 bg-white text-primary rounded-3xl md:rounded-r-3xl'>
                        <div className={isSent?"hidden":"flex justify-center items-center gap-12 flex-col w-[75%] py-8 px-5"}>
                            <h1 className='text-3xl text-text-primary font-bold text-center'>Forget Password</h1>
                            <div className='flex flex-col justify-center items-center gap-2 w-full'>
                                <label className='text-secondairy'>Email</label>
                                <input className='bg-white border border-secondairy placeholder:text-secondairy rounded-3xl w-full px-5 py-2 outline-none' type='email' placeholder='Your Email Adress' onChange={(e)=>{setEmail(e.target.value)}} required></input>
                            </div>
              <button className=' bg-text-primary rounded-3xl w-full px-5 py-2 text-white outline-none hover:bg-secondairy cursor-pointer' onClick={submitHandler}>Send The Code</button>
              {empty?<p className='text-xs text-red'>Some fileds Are Empty</p>:null }
                        </div>
            <div className={isSent ? 'flex justify-center items-center gap-12 flex-col w-full py-8 px-5' : "hidden"}>
                            <h1 className='text-3xl text-text-primary font-bold'>Forget Password</h1>
                            <p className='text-text-primary'>Check your Emaile and Enter the code </p>
                            <input className='bg-white border border-secondairy text-center text-lg placeholder:text-secondairy rounded-3xl w-full px-5 py-2 outline-none' type='text' placeholder='Your Code' onChange={(e)=>{setCode(e.target.value)}} required></input>
              <button className=' bg-text-primary rounded-3xl w-full px-5 py-2 text-white outline-none hover:bg-secondairy cursor-pointer' onClick={VerfiyHandler}>Verfiy</button>
              
                        </div>
                </div>
                    </div>
                
            </div>
            </div>
         <img src={logo} alt='logo' className='w-[150px] h-[70px] absolute top-2 left-2 object-fill'></img>
        <img className='w-full h-full object-cover ' src={bg} alt='/'></img>
    </div>
  )
}

export default ForgetPassword

