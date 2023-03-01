import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';

function PublicRoute({Component}) {
    const {currentUser}=useAuth();

  return !currentUser ? <Component/> : <Navigate to='/'/>;
}

export default PublicRoute