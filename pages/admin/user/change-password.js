import React from 'react'
import {getCookie } from 'cookies-next'
import ChangePassword from '../../../components/Admin/User/ChangePassword'
const changeuser = () => {
  return (
    <div className=''>
        <ChangePassword/>
    </div>
  )
}

export default changeuser


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