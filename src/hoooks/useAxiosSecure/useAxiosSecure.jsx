import axios from "axios"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/'
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useContext(AuthContext);

  // Request 
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `Bearer ${token}`
    return config;
  },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  )

  // Response
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, function (err) {
    const state = err.response.status;
    // console.log(state);
    if(state===403 || state===401){
      logOut();
      navigate('/login');
    }
    return Promise.reject(err);
  })

  return axiosSecure;
}

export default useAxiosSecure