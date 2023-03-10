import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export const useAuth=()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [user,setUser] = useState({});
    const [token,setToken] = useState("");

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

  //get current user
  useEffect(() => {
    const unsubscribe = ()=>{
        setCurrentUser(getUser());
        setToken(getToken());
        setLoading(false);
    }
    unsubscribe();

  },[token]);

function saveToken(user,token){
    // Perform localStorage action
    const storeToken = localStorage.setItem('token',JSON.stringify(token));
    const storeUser = localStorage.setItem('user',JSON.stringify(user));

    setToken(storeToken);
    setUser(storeUser);

    router('/');
}

function logout(){
  localStorage.clear();
  setUser({});
  setToken("");
  
}

  const http = axios.create({
      baseURL: process.env.REACT_APP_API,
      headers:{
          "Content-Type":"application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Authorization": `Bearer ${token}`
      }
  });

    const value = {
        http,
        saveToken,
        logout,
        token,
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
