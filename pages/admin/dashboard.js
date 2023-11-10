import React from 'react';
import { useSession } from 'next-auth/react';
import { requireAuth } from '../../lib/requireAuth';
import Dashboard from '../../components/Admin/Dashboard/Dashboard';


const dashboard = () => {
  const {data:session} = useSession();
  console.log(session, 'from dashboard');
  return (
    <div className='w-[100vw] bg-[#F0F0F0] pl-[22%]  py-10'>
      <Dashboard/>
      {/* <h1>dashboard</h1> */}
    </div>
  )
}

export default dashboard



export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })
  
}