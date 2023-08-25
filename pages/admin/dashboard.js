import React from 'react'
import {getCookie } from 'cookies-next'
import { useSession } from 'next-auth/react'
const DashBoard = () => {
  const {data:session} = useSession();
  console.log(session, 'from dashboard');
  return (
    <div className='pl-[22%]  w-[100vw] py-10'>DashBoard</div>
  )
}

export default DashBoard


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