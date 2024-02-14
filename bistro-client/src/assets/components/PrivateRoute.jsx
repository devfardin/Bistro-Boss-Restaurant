import React, { useContext } from 'react'
import { providerContext } from './AuthContext'
import {  Navigate, useLocation } from 'react-router-dom'
const PrivateRoute = ({children}) => {
 const {user, loading}=useContext(providerContext)
 const location= useLocation()

 if(loading){
    return <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-ring loading-lg"></span>
    </div>
 }

 if(user){
    return children
 }
 return (
    <Navigate state={location.pathname} to='/login'> </Navigate>
 )
}
export default PrivateRoute