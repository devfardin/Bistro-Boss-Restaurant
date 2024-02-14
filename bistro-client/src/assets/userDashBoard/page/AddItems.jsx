import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useForm } from "react-hook-form"
import { FaUtensils } from 'react-icons/fa'

const AddItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data.itemImage.File);
    }
    return (
        <div className=' px-5 md:px-4 Lg:px-16 py-10'>
            <SectionTitle subTitle="---What's new?---" title="ADD AN ITEM"></SectionTitle>


            <div className='bg-sectionbg w-10/12 mx-auto p-14'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className='text-xl font-medium text-black ml-1'> Recipe name*</label>
                    <input {...register("firstName")} className='w-full py-4 outline-none px-5 rounded-md border border-[#D0D0D0] bg-white mt-1' placeholder='Recipe name'/>
                    <div className=' md:flex gap-6 mt-5 w-full'>

                        <div className='flex-1'>

                            <label className='text-xl font-medium text-black ml-1'> Category*</label>
                            <select defaultValue={"selsect Category"} {...register("cagetory")} className=' w-full h-[60px] outline-none px-5 rounded-md border border-[#D0D0D0] bg-white mt-1'>
                                <option disabled value='selsect Category'>Select category</option>
                                <option>English</option>
                                <option>Japanese</option>
                                <option>Italian</option>
                            </select>
                        </div>

                        <div className='flex-1'>
                            <label className='text-xl font-medium text-black ml-1'> Price*</label>
                            <input {...register("price")} className='w-full py-4 outline-none px-5 rounded-md border border-[#D0D0D0] bg-white mt-1' placeholder='Price' />
                        </div>
                    </div>
                        <div className='mt-5'>
                            <label className='text-xl font-medium text-black ml-1'> Recipe Details*</label>
                            <textarea {...register("details")} className='w-full p-3 h-40 outline-none px-5 rounded-md border border-[#D0D0D0] bg-white mt-1' placeholder='Recipe Details' />
                        </div>

                        <div className='mt-5'>
                        <input type="file" {...register("itemImage")} className="file-input w-full rounded-none" />
                        </div>



                    <button  type='submit' className='py-2 bg-gradient-to-r from-[#835D23] to-[#B58130] outline-none px-5  text-lg font-medium text-white mt-6 flex gap-x-1 items-center'>
                        Add Item <FaUtensils></FaUtensils>
                    </button>

                </form>
            </div>


        </div>
    )
}

export default AddItems