
import React from 'react'
import {getCookie } from 'cookies-next'
// import { getSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import NextAuth from 'next-auth/next'
import { useEffect } from 'react'
import Result from '../../../components/Admin/Result/Result'
import { withSessionSsr } from '../../../withSession'
// import  {authoptions}  from '../api/auth/[...nextauth]'
const DashBoard = () => {
  return (
    <div className='pl-[22%] bg-[#F0F0F0]   w-[100vw] py-10'>
        <Result/>
    </div>
  )
}

export default DashBoard


export const getServerSideProps = withSessionSsr(
    async ({req, res}) => {
        const user = req.session.user;
        if(!user) {
          return{
            redirect:{
              destination:'/admin/login',
              permanent:false,
            }
          }
        }
  
        return {
            props: { user }
        }
    }
  );