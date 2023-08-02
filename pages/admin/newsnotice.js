import React from 'react'
import {getCookie } from 'cookies-next'
import NewsNotice from '../../components/Admin/NewsNotice/NewsNotice'
const newsnotice = () => {
  return (
   <NewsNotice/>
  )
}

export default newsnotice


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