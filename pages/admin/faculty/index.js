import React from 'react'

import {getCookie } from 'cookies-next'
import OurFaculty from '../../../components/Admin/OurFaculty/OurFaculty'
const faculty = () => {
  return (
   <OurFaculty/>
  )
}

export default faculty


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