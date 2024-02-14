import React from 'react'
import SectionTitle from '../SectionTitle'

const FoodItems = () => {
  return (
    <div className='container mx-auto px-4 my-12'>
      <SectionTitle subTitle='---Should Try---' title='CHEF RECOMMENDS'></SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div>
          <img className='w-full' src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg" alt="" />
          <div className='bg-[#F3F3F3] p-6 text-center space-y-3'>
            <h1 className='text-2xl font-medium text-black'>Caeser Salad</h1>
            <p className='text-base text-text font-normal'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className='text-primery font-normal text-base bg-[#E8E8E8] py-3 px-10 border-b-2 rounded-lg hover:bg-black hover:border-black border-primery'>Add to cart</button>
          </div>
        </div>
        <div>
          <img className='w-full' src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg" alt="" />
          <div className='bg-[#F3F3F3] p-6 text-center space-y-3'>
            <h1 className='text-2xl font-medium text-black'>Caeser Salad</h1>
            <p className='text-base text-text font-normal'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className='text-primery font-normal text-base bg-[#E8E8E8] py-3 px-10 border-b-2 rounded-lg hover:bg-black hover:border-black border-primery'>Add to cart</button>
          </div>
        </div>
        <div>
          <img className='w-full' src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg" alt="" />
          <div className='bg-[#F3F3F3] p-6 text-center space-y-3'>
            <h1 className='text-2xl font-medium text-black'>Caeser Salad</h1>
            <p className='text-base text-text font-normal'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className='text-primery font-normal text-base bg-[#E8E8E8] py-3 px-10 border-b-2 rounded-lg hover:bg-black hover:border-black border-primery'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FoodItems