import React from 'react'

const SectionTitle = ({subTitle, title}) => {
  return (
    <div className='text-center w-full md:w-[80%] lg:w-[40%] mx-auto py-5'>
        <h1 className='text-xl text-primery font-normal my-2'>{subTitle}</h1>
        <h1 className='border-y-4 py-4 text-4xl font-normal text-black1'>{title}</h1>
    </div>
  )
}

export default SectionTitle