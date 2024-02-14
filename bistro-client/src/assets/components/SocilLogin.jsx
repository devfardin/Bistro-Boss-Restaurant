import React, { useContext } from 'react'
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { providerContext } from './AuthContext';
import UseAxiospublic from './hoks/UseAxiospublic';
const SocilLogin = () => {
    const {googleLogin}=useContext(providerContext)
    const axiosPublic= UseAxiospublic()
    const googleLoginHandle=()=>{
        googleLogin()
        .then(res=>{
            const userInfo={
                name: res.user.displayName,
                email: res.user.email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
            })

        })
        .catch(erro=>{
            console.log(erro);
        })
    }
  return (
    <div className='flex justify-center items-center gap-5'>
    <FaFacebookF className='text-5xl border-2 rounded-full border-black1 cursor-pointer p-3'></FaFacebookF>
    <FaGoogle onClick={googleLoginHandle}  className='text-5xl border-2 rounded-full border-black1 cursor-pointer p-3'></FaGoogle>
    <FaGithub className='text-5xl border-2 rounded-full border-black1 cursor-pointer p-3'> </FaGithub>
</div>
  )
}
export default SocilLogin