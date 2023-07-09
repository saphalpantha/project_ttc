import React from 'react'
import Login from '../../components/Admin/Login/Login'
import { useEffect } from 'react'
import { useState } from 'react'
import {getCookie } from 'cookies-next'
const login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <div>
      {!isLoggedIn && <Login/> }
        
    </div>
  )
}



export const getServerSideProps = async ({req,res}) => {
  const user = getCookie('user', {req,res})

  if(user){
    return{
      redirect:{
        destination:'/admin/dashboard',
        permanent:true,
      }
    }
  }
  return{
    props:{
      isAuth:''
    }
  }
}



export default login