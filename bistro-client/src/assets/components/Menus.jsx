import React from 'react'
import MenuCard from './MenuCard'
import UseMenu from './hoks/UseMenu'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'

const Menus = ({ item, subTitle, title, image, link }) => {
    const [menus] = UseMenu()
    const popular = menus.filter(items => items.category === item)
    return (
        <div className='mt-16'>
            {
                title ? <div>
                    <Parallax
                        blur={{ min: -15, max: 15 }}
                        bgImage={image}
                        bgImageAlt="the dog"
                        strength={-200}>
                        <div className='container mx-auto px-4 my-4 md:my-7  p-10 md:px-20 md:pt-24'>
                            <div className='bg-[#15151599] p-8 md:p-24 lg:p-28 mx-auto'>
                                <h1 className='text-4xl md:text-5xl font-semibold text-white text-center mb-3'>{title}</h1>
                                <p className='text-base md:text-xl text-white text-center font-normal'>{subTitle}</p>
                            </div>
                        </div>
                    </Parallax> 
                    </div> :''
            }
                    <div className='container mx-auto px-4 mt-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {
                                popular.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                            }
                        </div>
                        <div className=' text-center mt-10'>
                            <Link to={`/out-shop/${item}`} className='text-[#1F2937] border-b-[3px] text-xl font-medium hover:bg-primery duration-300 hover:border-primery py-4 rounded-lg px-4 hover:text-white border-[#1F2937]'> ORDER YOUR FAVOURITE FOOD </Link> 
                            
                        </div>
                    </div>
                </div>
    )
}
export default Menus