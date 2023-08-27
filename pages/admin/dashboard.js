import React from 'react';
import { useSession } from 'next-auth/react';
import { requireAuth } from '../../lib/requireAuth';

const DashBoard = () => {
  const {data:session} = useSession();
  console.log(session, 'from dashboard');
  return (
    <div className='pl-[22%]  w-[100vw] py-10'>DashBoard</div>
  )
}

export default DashBoard



export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })
  
}