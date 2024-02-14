import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/Category'
import Menus from '../components/Menus'
import FoodItems from '../components/Home/FoodItems'
import FeatureFood from '../components/Home/FeatureFood'
import Testimonial from '../components/Home/Testimonial'
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle'

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>Bestro | Home</title>
      </Helmet>
      <Banner> </Banner>
      <Category></Category>
      <div className='container mx-auto px-4 my-14'>
        <div className='bg-homeabout bg-no-repeat bg-center bg-fixed bg-cover  p-10 md:p-20'>
          <div className='bg-white p-10 md:p-24 lg:p-28 mx-auto'>
            <h1 className='text-4xl font-medium text-black1 text-center mb-3'>Bistro Boss</h1>
            <p className='text-base text-black1 text-center font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
      </div>
      <div>
      <SectionTitle subTitle='---Check it out---' title='FROM OUR MENU'></SectionTitle>
      <Menus item={'popular'}> </Menus>
      </div>
      <div className='container mx-auto px-4 bg-black p-20 mt-24'>
        <h1 className='text-3xl md:text-5xl font-medium text-white text-center'>Call Us: +88 0192345678910</h1>
      </div>
      <FoodItems> </FoodItems>
      <FeatureFood></FeatureFood>
      <Testimonial></Testimonial>
     
    </div>
  )
}

export default Home