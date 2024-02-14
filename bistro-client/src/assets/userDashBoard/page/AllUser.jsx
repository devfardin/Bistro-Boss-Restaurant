import React from 'react'
import SectionTitle from '../components/SectionTitle'
import UseAxiosSerure from '../../components/hoks/UseAxiosSerure'
import { BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import { FaUsers } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'

const AllUser = () => {
  const axiosSecure = UseAxiosSerure()
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data
    }
  })
  const handleMakeAdmin=(id, item)=>{
    axiosSecure.patch(`/user/admin/${id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch()
          toast.success(`${item.name} is admin Now!`)
        }
      })
  }


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch()
              toast.success('Items has deleted')
            }
          })
      }
    });
  }


  return (
    <div className='bg-sectionbg px-5 md:px-4 Lg:px-16 pb-10'>
      <ToastContainer> </ToastContainer>
      <SectionTitle title='MANAGE ALL USERS' subTitle='---How many??---'></SectionTitle>
      <div className='bg-white p-4 md:p-7 lg:p-7 mt-4'>
        <div className='mb-3'>
          <h1 className='text-base md:text-xl lg:text-2xl uppercase font-medium text-black1'>Total users: {users.length} </h1>

        </div>

        <div className='flex justify-between gap-3 md:gap-4 lg:gap-5 bg-primery rounded-t-md p-3 my-5'>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[10%]'>No</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[20%]'>NAME</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[40%]'> EMAIL</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[15%]'>ROLE</div>
          <div className='text-xs md:text-base lg:text-lg font-medium text-white w-[15%] text-center'>ACTION</div>
        </div>


        {
          users.map((item, index) => <div key={item._id} className='flex justify-between items-center gap-3 md:gap-4 lg:gap-5 px-4 border-b py-5'> 
             
            <div className='text-xs md:text-base lg:text-lg w-[10%]'> {index +1} </div>
            <div className='text-xs md:text-base lg:text-lg w-[20%]'>
              {item.name}
               </div>
            <div className='text-xs md:text-base lg:text-lg w-[40%]'>
              {item.email}
            </div>
            <div className='text-xs md:text-base lg:text-lg w-[15%]'>
            {
              item?.role == 'admin' ? <h1 className='text-xl font-medium text-gray-500'>Admin</h1> : 
              <button onClick={()=> handleMakeAdmin(item._id, item)} className='text-center inline-block'>
            <FaUsers className='text-5xl p-2 bg-primery text-white rounded-lg'></FaUsers>
            </button>
            }
            </div>
            <div className='text-xs md:text-base lg:text-lg w-[15%] block text-center'>
              <button onClick={() => handleDelete(item._id)} className='text-center inline-block'>
                <BsTrash className='text-5xl p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg'></BsTrash>

              </button>
            </div>

          </div>
       )
      }
      </div>  
    </div>

    )
  }
      export default AllUser