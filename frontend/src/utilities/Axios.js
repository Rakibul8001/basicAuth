import axios from 'axios';
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Axios() {
  const router = useNavigate();

      //get token string
      function getToken(){

          const tokenString = localStorage.getItem('token');
          const userToken = JSON.parse(tokenString);
          return userToken;


    }
    //get user string
    function getUser(){
        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;

    }

  const [user,setUser] = useState(getUser());
  const [token,setToken] = useState(getToken());

  function saveToken(user,token){
      // Perform localStorage action
      const storeToken = localStorage.setItem('token',JSON.stringify(token));
      const storeUser = localStorage.setItem('user',JSON.stringify(user));

      setToken(storeToken);
      setUser(storeUser);

      // router('/');
  }

  function logout(){
    localStorage.clear();
    router('/login');
  }

    const http = axios.create({
        baseURL: process.env.REACT_APP_API,
        headers:{
            "Content-Type":"application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${token}`
        }
    });

  return {
    http,
    saveToken,
    logout,
    token,
    user,
    getToken
  };
}