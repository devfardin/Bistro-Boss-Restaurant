import React, { useState } from 'react'
import useCart from '../../components/hoks/useCard'
import SectionTitle from '../components/SectionTitle'
import UseAxiosSerure from '../../components/hoks/UseAxiosSerure'
import { BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'

const MyCart = () => {
  const [cart, refetch] = useCart()
  const axiosSecure= UseAxiosSerure()
  const totalPrice= cart.reduce((accumulator, price)=>{
    return accumulator + price.price
  },0)

const handleDelete=(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    axiosSecure.delete(`/cart/${id}`)
    .then(res=>{
     if(res.data.deletedCount > 0){
      refetch()
      toast.success('Items has deleted')
     }
    })
    }
  });
}


  return (
    <div className='bg-sectionbg px-5 md:px-4 Lg:px-16 pb-10'>
      <ToastContainer> </ToastContainer>
      <SectionTitle title='WANNA ADD MORE?' subTitle='---My Cart---'></SectionTitle>
      <div className='bg-white p-4 md:p-7 lg:p-7 mt-4'>
        <div className='flex justify-between gap-4 items-center mb-3'>
          <h1 className='text-base md:text-xl lg:text-3xl uppercase font-medium text-black1'>Total orders: {cart.length}</h1>
          <h1 className='text-base md:text-xl lg:text-3xl uppercase font-medium text-black1'>total price: {totalPrice}</h1>
          <button className='text-base font-medium uppercase px-3 py-1 md:px-6 md:py-3 rounded-lg bg-primery text-white'>Pay</button>
        </div>

        <div className='flex justify-between gap-3 md:gap-4 lg:gap-5 bg-primery rounded-t-md p-3 my-5'>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[10%]'>No</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[20%]'>ITEM IMAGE</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[40%]'>ITEM NAME</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[15%]'>PRICE</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[15%] text-center'>ACTION</div>
        </div>


        {
          cart.map((item, index) => <div className='flex justify-between gap-3 md:gap-4 lg:gap-5 px-4 border-b py-5'>
            <div className='text-xs md:text-base lg:text-lg w-[10%]'>{index+1}</div>
            <div className='text-xs md:text-base lg:text-lg w-[20%]'>
              <img className='w-20' src={item.image} alt="" /> </div>
            <div className='text-xs md:text-base lg:text-lg w-[40%]'>{item.name}</div>
            <div className='text-xs md:text-base lg:text-lg w-[15%]'>{item.price}</div>
            <div className='text-xs md:text-base lg:text-lg w-[15%] block text-center'>
              <button onClick={()=>handleDelete(item._id)} className='text-center inline-block'>
              <BsTrash></BsTrash>

              </button>
            </div>

          </div>
          )
        }

      </div>
    </div>

  )
}

export default MyCart