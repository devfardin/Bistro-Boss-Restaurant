import React, { useEffect, useState } from 'react'

const Shop = () => {

    const [shopItmes, setShopItems]=useState([])
    useEffect(()=>{
          fetch('')
          .then(res=> res.json())
          .then(data=> setShopItems(data))
    },[])
  return (
    <div>Shop</div>
  )
}

export default Shop