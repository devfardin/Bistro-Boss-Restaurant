import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from '../../components/hoks/useAdmin'
import { providerContext } from '../../components/AuthContext'
const AdminPrivateRoute = ({children}) => {
    const {user, loading}=useContext(providerContext)
    const location= useLocation()
   const [isAdmin, isAdminLoading]=useAdmin()
    if(loading || isAdminLoading){
       return <div className='flex justify-center items-center h-screen'>
           <span className="loading loading-ring loading-lg"></span>
       </div>
    }
    if(user && isAdmin){
       return children
    }
    return (
       <Navigate state={location.pathname} to='/'> </Navigate>
    )
   }
export default AdminPrivateRoute