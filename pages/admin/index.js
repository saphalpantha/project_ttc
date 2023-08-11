
import React from 'react'
import Login from '../../components/Admin/Login/Login'
import { useEffect } from 'react'
import { useState } from 'react'
import {getCookie } from 'cookies-next'
const admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

}

export default admin


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
  