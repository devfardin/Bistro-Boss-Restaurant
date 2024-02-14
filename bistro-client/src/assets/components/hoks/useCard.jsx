import { useQuery } from '@tanstack/react-query'
import UseAxiosSerure from './UseAxiosSerure'
import { useContext } from 'react'
import { providerContext } from '../AuthContext'

const useCart = () => {
    
    const axiosSecure = UseAxiosSerure()
    const { user } = useContext(providerContext)
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data

        }
    })
    return [cart, refetch]
}

export default useCart