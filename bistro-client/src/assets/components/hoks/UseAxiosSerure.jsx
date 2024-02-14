import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { providerContext } from '../AuthContext'

export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
})
const UseAxiosSerure = () => {
  const navigate = useNavigate()
  const { logOutHandle } = useContext(providerContext)
  axiosSecure.interceptors.request.use(function (confige) {
    const token = localStorage.getItem('access-token')
    // console.log('request stope by interceptors', token);
    confige.headers.authorization = `access token ${token}`
    return confige
  }, function (erro) {
    return Promise.reject(erro)
  })
  axiosSecure.interceptors.response.use(function (response) {
    return response
  },  async(error) => {
    const status=error.response.status
    // console.log('status error in the interceptors', status);
    if (status === 401 || status === 403) {
      await logOutHandle()
      navigate('/login')
      return
    }
    return Promise.reject(error)
  })
  return axiosSecure
}
export default UseAxiosSerure