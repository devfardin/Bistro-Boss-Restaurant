import React, { useContext } from 'react'
import UseMenu from '../hoks/UseMenu'
import Swal from 'sweetalert2'
import { providerContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { axiosSecure } from '../hoks/UseAxiosSerure';
import { ToastContainer, toast } from 'react-toastify';
import useCart from '../hoks/useCard';
const ShopCard = ({ item }) => {
  const {user}=useContext(providerContext)
  const [menus] = UseMenu()
  const filter = menus.filter(items => items.category == item)
  const navigate=useNavigate()
  const {refetch}=useCart()
  
  const handleAddToCard=(item)=>{
    if(user || user?.email){
      const cardItems={
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price
      }
      axiosSecure.post('/cart', cardItems)
      .then(()=>{
        toast.success("Product add Success")
      })
      refetch()
    } else{
      Swal.fire({
        title: "Access Denied",
        text: "Please sign in or create an account to add products to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login')
        }
      })
      
    }
   
  }
  return (
<div>
  <ToastContainer> </ToastContainer>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
      {
        filter.map(item => <div key={item._id}>
          <div className='relative'>
          <img className='w-full' src={item.image} alt="" />
          <h2 className='text base font-semibold text-white bg-black py-2 px-5 rounded absolute top-0 right-0 mr-3 mt-3'>${item.price}</h2>
          </div>
          <div className='bg-[#F3F3F3] p-6 text-center space-y-3'>
            <h1 className='text-2xl font-medium text-black'>{item.name}</h1>
            <p className='text-base text-text font-normal'>{item.recipe}</p>
            <button onClick={()=> handleAddToCard(item)} className='text-primery font-normal text-base bg-[#E8E8E8] py-3 px-10 border-b-2 rounded-lg hover:bg-black hover:border-black border-primery duration-300'>Add to cart</button>
          </div>
        </div>)
      }
      <div>
      </div>
    </div>
</div>
  )
}

export default ShopCard