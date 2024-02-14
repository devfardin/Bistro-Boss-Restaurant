import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../images/slide1.jpg'
import slider2 from '../../images/slide2.jpg'
import slider3 from '../../images/slide3.jpg'
import slider4 from '../../images/slide4.jpg'
import slider5 from '../../images/slide5.jpg'
import SectionTitle from '../SectionTitle';

const Category = () => {
  return (
    <div className='container mx-auto px-4 my-12'>
      <div>
      <SectionTitle subTitle='---From 11:00am to 10:00pm---' title='ORDER ONLINE'></SectionTitle>
      </div>
         <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
            <img className='w-full' src={slider1} alt="" />
            <h1 className='text-4xl text-center pb-20 text-white font-normal uppercase -mt-16'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={slider2} alt="" />
            <h1 className='text-primery text-4xl text-center pb-20 font-normal uppercase -mt-16'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src={slider3} alt="" />
            <h1 className='text-4xl text-center pb-20 text-white font-normal uppercase -mt-16'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={slider4} alt="" />
            <h1 className='text-4xl text-center pb-20 text-white font-normal uppercase -mt-16'>desserts</h1></SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src={slider5} alt="" />
            <h1 className='text-4xl text-center pb-20 text-white font-normal uppercase -mt-16'>salads</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Category