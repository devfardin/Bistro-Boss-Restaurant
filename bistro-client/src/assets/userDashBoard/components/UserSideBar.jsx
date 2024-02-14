import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBook, FaEnvelope, FaHome, FaListUl, FaShoppingBag, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { LuCalendarRange } from "react-icons/lu";
import { IoWallet } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import useAdmin from '../../components/hoks/useAdmin';

const UserSideBar = () => {
  const [isAdmin] = useAdmin()
  return (
    <div className='bg-primery px-5 lg:pl-6 pt-6 pb-6 md:h-screen md:fixed'>
      <NavLink to='/Dashboard/home'>
        <img className='mt-3' src="https://i.ibb.co/MkfMfCZ/Group-1-3.png" alt="" />
      </NavLink>
      <div className='mt-7 space-y-3 '>
        {
          isAdmin ? <>
            <NavLink to="/Dashboard/home" className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
            <FaHome> </FaHome> Admin Home </NavLink>
          <NavLink to="/Dashboard/add-your-item" className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
            <FaUtensils> </FaUtensils> Add Items </NavLink>

          <NavLink to="/Dashboard/paymenthistory" className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
            <FaListUl> </FaListUl> Manage Items  </NavLink>

          <NavLink to="/Dashboard/mycart" className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
            <FaBook> </FaBook> Manage bookings  </NavLink>

          <NavLink to="/Dashboard/allUser" className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
            <FaUsers> </FaUsers> All Users </NavLink>
          </>
            :
            <>
              <NavLink to="/Dashboard/home" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <FaHome> </FaHome> User Home </NavLink>

              <NavLink to="/Dashboard/reservation" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <LuCalendarRange> </LuCalendarRange> Reservation </NavLink>

              <NavLink to="/Dashboard/paymenthistory" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <IoWallet> </IoWallet> Payment History </NavLink>

              <NavLink to="/Dashboard/mycart" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <BsCart2> </BsCart2> My Cart  </NavLink>

              <NavLink to="/Dashboard/addreview" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <MdOutlineReviews> </MdOutlineReviews>Add Review </NavLink>
                
              <NavLink to="/Dashboard/mybooking" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <IoBookmarkSharp> </IoBookmarkSharp>My Booking  </NavLink>
            </>
        }
      </div>
      <div className='divider'></div>
      <div className='space-y-3 block'>
      <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <FaHome> </FaHome>  Home </NavLink>

      <NavLink to="/out-menu" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <FaListUl> </FaListUl>  Menu </NavLink>

      <NavLink to="/out-shop/:category" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <FaShoppingBag> </FaShoppingBag>  Shop </NavLink>

      <NavLink to="/Contact-us" className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "flex gap-x-4 items-center text-base lg:text-xl text-white font-normal" : "flex gap-x-4 items-center text-base lg:text-xl text-black font-normal hover:text-gray-200 duration-300"}>
                <FaEnvelope> </FaEnvelope>  Contact </NavLink>
      </div>
    </div>
  )
}

export default UserSideBar