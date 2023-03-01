import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({Component}) {
    const {currentUser}=useAuth();

  return currentUser ? <Component/> : <Navigate to='/login'/>;
}

export default ProtectedRoute