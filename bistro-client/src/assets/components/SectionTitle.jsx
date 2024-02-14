import React from 'react'

const SectionTitle = ({subTitle, title}) => {
  return (
    <div className='text-center container px-4 md:w-[50%] lg:w-[35%] mx-auto my-10'>
        <h1 className='text-xl text-primery font-normal my-2'>{subTitle}</h1>
        <h1 className='border-y-4 py-4 text-4xl font-normal text-black1'>{title}</h1>
    </div>
  )
}

export default SectionTitle