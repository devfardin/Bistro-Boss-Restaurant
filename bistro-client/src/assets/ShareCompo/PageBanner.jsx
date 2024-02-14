import React from 'react'
import { Parallax, Background } from 'react-parallax';

const PageBanner = ({ title, subTitle, image }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}>
        <div className='container mx-auto px-4 my-14  p-10 md:px-24 md:pt-36'>
          <div className='bg-[#15151599] p-10 md:p-24 lg:p-28 mx-auto'>
            <h1 className='text-5xl font-bold text-white text-center mb-3'>{title}</h1>
            <p className='text-xl text-white text-center font-medium'>{subTitle}</p>
          </div>
        </div>
      </Parallax>
    </div>
  )
}
export default PageBanner