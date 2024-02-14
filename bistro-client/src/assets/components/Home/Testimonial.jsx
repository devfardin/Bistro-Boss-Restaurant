import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import ReactStars from "react-rating-stars-component";
import SectionTitle from '../SectionTitle'


// import required modules
import { Navigation } from 'swiper/modules';
const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <div className='container mx-auto px-4 mt-16'>
            <SectionTitle subTitle='---What Our Clients Say---' title='TESTIMONIALS'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonial.map(item => <SwiperSlide key={item._id}>
                        <div className='container text-center md:w-4/5 mx-auto'>
                            <div className='inline-block text-center mb-3'>
                            <ReactStars 
                                count={5}
                                // onChange=(value:5)
                                value={item.rating}
                                size={35}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            </div>
                            <h1 className='text-xl text-black  font-normal'>{item.details}</h1>
                            <h1 className='text-2xl text-primery font-medium my-4'>{item.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}
export default Testimonial