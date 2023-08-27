import Login from '../../components/Admin/Login/Login'
import { getSession } from 'next-auth/react'
import React from 'react'
const login = () => {

  return (
    <div className='min-h-screen fixed z-[100]'>
      <Login/> 
        
    </div>
  )
}




export const getServerSideProps = async (ctx) => {

  const session = await getSession({req:ctx.req});
  if(session){
      return{
          redirect:{
              destination:'/admin/dashboard',
              permanent:false,
          },
      }
  }

  return {
    props:{}
  }

}



export default login