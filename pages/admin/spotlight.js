import React from 'react'
import OurStar from '../../components/Admin/OurStar/OurStar'

import {getCookie } from 'cookies-next'
import Spotlight from '../../components/Admin/Spotlight/Spotlight'
const spotlight = () => {
  return (
   <Spotlight/>
  )
}

export default spotlight


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