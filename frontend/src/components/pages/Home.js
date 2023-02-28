import React, { useEffect, useState } from 'react'
import { useAuth } from '../../utilities/AuthContext'

function Home() {
  const {currentUser} = useAuth();
  console.log(currentUser);

  return (
    <div>Home</div>
  )
}

export default Home