import React from 'react'
import Login from '../../components/Admin/Login/Login'
import { useEffect } from 'react'
import { useState } from 'react'

const login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth')
    setIsLoggedIn(isAuth);
  })
  return (
    <div>
      {!isLoggedIn && <Login/> }
        
    </div>
  )
}

export default login