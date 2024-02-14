
import { useContext } from "react";
import UseAxiosSerure from "./UseAxiosSerure"
import { useQuery } from "@tanstack/react-query"
import { providerContext } from "../AuthContext";
const useAdmin = () => {
    const { user } = useContext(providerContext)
    //  console.log(user.email);
    const axiosSecure = UseAxiosSerure()
    const { data: isAdmin, isPanding, isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            // console.log(res.data);
            return res.data
        }
    })
    return [isAdmin, isPanding, isAdminLoading]
}

export default useAdmin