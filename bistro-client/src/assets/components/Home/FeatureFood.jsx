import React from 'react'
import feature from '../../../assets/images/featured.jpg'

const FeatureFood = () => {
    return (
        <div className=' mt-20 bg-homeabout bg-no-repeat bg-center bg-fixed bg-cover'>
            <div className='bg-black opacity-80'>
            <div className='p-6 md:p-10 container mx-auto px-4'>
                <div className='text-center w-full md:w-[50%] lg:w-[30%] mx-auto my-10'>
                    <h1 className='text-xl text-primery font-normal my-2'>---Check it out---</h1>
                    <h1 className='border-y-4 py-4 text-4xl font-normal text-white'>FROM OUR MENU</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-7 md:gap-x-10 justify-between  items-center'>
                    <div className='flex-1'>
                    <img className='flex-1 w-[100%]' src={feature} alt="" />
                    </div>
                    <div className='flex-1'>
                         <h1 className='text-2xl font-medium text-white'>March 20, 2023 </h1>
                         <h1 className='text-2xl font-medium text-white'>   WHERE CAN I GET SOME?</h1>
                         <p className='text-base md:text-xl font-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit quis maiores vero. Neque eius tenetur vero magnam, soluta nemo molestiae reiciendis ex ea id suscipit, in possimus sapiente velit deleniti laborum fugiat pariatur porro odio placeat ullam odit. Maiores sed illo voluptas molestias quidem repudiandae veniam cumque nam qui?</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FeatureFood