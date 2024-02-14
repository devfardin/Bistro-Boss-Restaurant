import React from 'react'

const MenuCard = ({ item }) => {
    const { name, recipe, price, image } = item
    return (
        <div className='flex  md:flex-row gap-3'>
            <img className='w-28 h-20 rounded-r-[130px] rounded-b-[200px]' src={image} alt={name} />
            <div className='flex justify-between gap-4'>
           <div>
           <h1 className='text-xl font-normal text-black1'>{name}  ------------------</h1>
            <p className='text-base text-text'>{recipe}</p>
           </div>
           <h2 className='text-xl font-normal text-primery'>${price}</h2>
            </div>

        </div>
    )
}

export default MenuCard