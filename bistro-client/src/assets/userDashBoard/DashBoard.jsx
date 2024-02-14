import React from 'react'
 import UserSideBar from '../userDashBoard/components/UserSideBar';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className='md:flex justify-between'>

      <div className='w-full md:w-[190px] lg:w-[230px]'>
      <UserSideBar></UserSideBar>
      </div>
      <div className='w-full md:flex-1 ml-5'>
        <Outlet> </Outlet>
      </div>


    </div>
  )
}

export default DashBoard