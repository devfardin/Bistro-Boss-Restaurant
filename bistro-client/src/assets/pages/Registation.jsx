import React, { useContext, useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { providerContext } from '../components/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import UseAxiospublic from '../components/hoks/UseAxiospublic';
import SocilLogin from '../components/SocilLogin';

const Registation = () => {
const {createUser, updataProfile}=useContext(providerContext)
const axiosPublic=UseAxiospublic()

const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit=(data)=>{
    createUser(data.email, data.password)
    .then((res)=>{
      updataProfile(data.name, data.profile)
      .then(()=>{
        const userInfo={
          name: data.name, 
          email: data.email}
        axiosPublic.post('/user', userInfo )
        .then(res=>{
          if(res.data.acknowledged){
            toast.success("Create Successful. Welcome back!")
            return
          }
        })
      })
  })
  .catch(()=>{
    toast.error("Account createting Failed. Please check your credentials and try again.")
    return
   })

  }

  return (
    <div className='bg-loginbg bg-cover bg-no-repeat bg-center py-10'>
      <div className='container mx-auto p-5 lg:p-8 md:flex flex-row-reverse justify-between items-center border-2 shadow-lg gap-x-10'>

        <div className='hidden lg:block lg:flex-1'>
          <img className='w-full' src="https://i.ibb.co/6WHc6Ch/authentication2.png" alt="" />
        </div>
        <ToastContainer/>
        <div className='w-full  lg:w-[40%] md:ml-7'>
          <h1 className='text-4xl font-semibold text-black text-center mb-10'>Sign Up</h1>

          <form  onSubmit={handleSubmit(onSubmit)}>
           <div>
           <label className='text-xl font-medium text-black ml-1'> Name</label>
            <input {...register("name")} className='w-full py-4 outline-none px-5 rounded-md border-2 border-[#D0D0D0] bg-white mt-1'  placeholder='Type here'/>
           </div>
           <div>
           <label className='text-xl font-medium text-black ml-1'> Profile</label>
            <input {...register("profile")} className='w-full py-4 outline-none px-5 rounded-md border-2 border-[#D0D0D0] bg-white mt-1'  placeholder='Type here'/>
           </div>
           <div>
           <label className='text-xl font-medium text-black ml-1 mt-6 block'> Email</label>
            <input {...register("email", {required: true})} className='w-full py-4 outline-none px-5  rounded-md border-2 border-[#D0D0D0] bg-white mt-1' type="email" name="email" placeholder='Type here'/>
            {errors.email && <span className='text-base text-red-500 mt-1 block font-medium ml-2'> Please fill in the required field</span>}
           </div>
            <div>
            <label className='text-xl font-medium text-black ml-1 mt-6 block'> Password</label>
            <input {...register("password", {required:true, minLength: 6, maxLength: 12,  pattern: /[@#][A-Za-z0-9]/} )} className='w-full py-4 outline-none px-5 rounded-md border-2 border-[#D0D0D0] bg-white mt-1' type="password" name="password" placeholder='Enter your password' />
            {errors.password?.type=='required' && <span className='text-base text-red-500 mt-1 block font-medium ml-2'> Please fill in the required field</span>}
            {errors.password?.type=='minLength' && <span className='text-base text-red-500 mt-1 block font-medium ml-2'> Password too short </span>}
            {errors.password?.type=='maxLength' && <span className='text-base text-red-500 mt-1 block font-medium ml-2'> Password exceeds limit</span>}
            {errors.password?.type=='pattern' && <span className='text-base text-red-500 mt-1 block font-medium ml-2'> make the password very strong</span>}

            </div>
            <div className='mt-5 '>
            <input className='w-full py-4 outline-none px-5 rounded-md bg-[#DBB984] text-lg font-medium text-white mt-1' type="submit" value='Sign In'/>
            </div>
          </form>
            <div className='mt-5 '>
          <Link to='/Login' className='text-xl block font-medium text-[#D1A054] text-center'><span className='text-lg text-[#D1A054] font-normal'>Already registered? </span>Go to log in</Link>
          <h1 className='text-lg font-medium text-black1 my-3 text-center'>Or sign in with</h1>
            </div>
           <SocilLogin></SocilLogin>
         
        </div>
      </div>
    </div>
  )
}
export default Registation