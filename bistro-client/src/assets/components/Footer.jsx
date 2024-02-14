import React from 'react'
import { FaFacebookF, FaInstagram,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
<div>
<div className='flex flex-col md:flex-row justify-between items-center mt-10'>
      <div className='bg-[#1F2937] w-full md:w-1/2 text-center py-16'>
        <h1 className='text-3xl text-white font-medium'>Contact Us</h1>
        <p className='text-lg text-white font-normal text-center w-96 mx-auto mt-4'>
          123 ABS Street, Uni 21, Bangladesh
          +88 123456789
          Mon - Fri: 08:00 - 22:00
          Sat - Sun: 10:00 - 23:00
        </p>
      </div>


      <div className='bg-[#111827] w-full md:flex-1 text-center py-16'>
        <h1 className='text-3xl text-white font-medium'>Follow US</h1>
        <p className='text-lg text-white font-normal text-center w-96 mx-auto mt-6'>
          Join us on social media
        </p>
        <div className='text-center mt-[24px] flex justify-center items-center gap-4'>
          <FaFacebookF className='text-2xl text-white text-center'> </FaFacebookF>
          <FaInstagram className='text-2xl text-white text-center'> </FaInstagram>
          <FaTwitter className='text-2xl text-white text-center'> </FaTwitter>
        </div>
      </div>
    </div>
      <p className='text-lg text-white font-normal py-5 bg-black text-center'>Copyright © CulinaryCloud. All rights reserved.</p>
</div>
  )
}

export default Footer