import React,{useContext,useEffect,useState} from 'react'
import Axios from './Axios';

const AuthContext = React.createContext();

export const useAuth=()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const {user} = Axios();
    const [loading,setLoading]=useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        (()=>{
            setCurrentUser(user);
            setLoading(false);
        })();
    },[user]);

    const value={
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
