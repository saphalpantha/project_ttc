import React, { useEffect } from 'react'
import AdmissionForms from '../../../components/Admin/AdmissionForms.js/AdmissionForms'
import { useState } from 'react'
import {getCookie } from 'cookies-next'
const admissionforms = ({isAuth}) => {


  return (
    <div>
      {isAuth ? 
        <AdmissionForms/> : <div className='w-full h-full min-h-screen flex flex-col justify-center items-center font-bold text-2xl'> <h1>Failed to load Page</h1> </div> } 
    </div>
  )
}



export default admissionforms

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
