import React from 'react'
import {getCookie } from 'cookies-next'
import AddUser from '../../../components/Admin/User/AddUser'
const useradd = () => {
  return (
    <div className=''>
        <AddUser/>
    </div>
  )
}

export default useradd


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