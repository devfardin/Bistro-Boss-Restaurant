import React, { useContext, useEffect, useState } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha,  } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { providerContext } from '../components/AuthContext';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import SocilLogin from '../components/SocilLogin';

const Login = () => {
const {loginEmailPass}=useContext(providerContext)
const navigate= useNavigate()
const location = useLocation()

  useEffect(()=>{
    loadCaptchaEnginge(6,'transparent', 'black', 'numbers')
  },[])
const handelSubmite=(e)=>{
  e.preventDefault()
  const email= e.target.email.value;
  const password= e.target.password.value;
  const validation= e.target.validation.value;
 if(validateCaptcha(validation)===true){
  loginEmailPass(email, password)
  .then((res)=>{
     toast.success("Login Successful. Welcome back!")
     navigate(location?.state ? location.state : '/')
     return
  })
  .catch(error=>{
    return toast.error("Login Failed. Please check your credentials and try again.")
  })
  }else{
   return  toast.error("Captcha Does Not Match")
}
}

  return (
    <div className='bg-loginbg bg-cover bg-no-repeat bg-center py-10'>
      <div className='container mx-auto p-5 lg:p-8 md:flex justify-between items-center border-2 shadow-lg gap-x-10'>

        <div className='hidden lg:block lg:flex-1'>
          <img className='w-full' src="https://i.ibb.co/6WHc6Ch/authentication2.png" alt="" />
        </div>
        <ToastContainer/>
        <div className='w-full  lg:w-[40%] md:mr-7'>
          <h1 className='text-4xl font-semibold text-black text-center mb-10'>Login</h1>

          <form onSubmit={handelSubmite}>
           <div>
           <label className='text-xl font-medium text-black ml-1'> Email</label>
            <input className='w-full py-4 outline-none px-5 rounded-md border-2 border-[#D0D0D0] bg-white mt-1' type="email" name="email" placeholder='Type here'/>
           </div>
            <div>
            <label className='text-xl font-medium text-black ml-1 mt-6 block'> Password</label>
            <input className='w-full py-4 outline-none px-5 rounded-md border-2 border-[#D0D0D0] bg-white mt-1' type="password" name="password" placeholder='Enter your password' />
            </div>
            <div className='mt-6'>
             <LoadCanvasTemplate reloadColor="black" /> 
            </div>
            <div>
            <input className='w-full py-4 outline-none px-5 rounded-md border-2 border-[#D0D0D0] bg-white mt-1' name="validation" placeholder='Type here' />
            </div>

            <div className='mt-5 '>
            <input className='w-full py-4 outline-none px-5 rounded-md bg-[#DBB984] text-lg font-medium text-white mt-1' type="submit" value='Sign In'/>
            </div>
          </form>

            <div className='mt-5 '>
          <Link to='/Registration' className='text-xl block font-medium text-[#D1A054] text-center'><span className='text-lg text-[#D1A054] font-normal'>New here? </span>Create a New Account</Link>
          <h1 className='text-lg font-medium text-black1 my-3 text-center'>Or sign in with</h1>
            </div>
         <SocilLogin> </SocilLogin>
        </div>
      </div>
    </div>
  )
}

export default Login