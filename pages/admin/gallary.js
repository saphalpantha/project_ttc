import React from 'react'
import {getCookie } from 'cookies-next'
import Gallary from '../../components/Admin/Gallary/Gallary'
const gallary = () => {
  return (
    <Gallary/>
  )
}

export default gallary


export const getServerSideProps = async ({req,res}) => {
  const user = getCookie('user', {req,res})

  if(!user){
    return{
      redirect:{
        destination:'/admin/login',
        permanent:false,
      }
    }
  }
  return{


    props:{
      isAuth:user
    }
  }
}