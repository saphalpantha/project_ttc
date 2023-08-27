
import React from 'react'
import Result from '../../../components/Admin/Result/Result'
import { requireAuth } from '../../../lib/requireAuth'
const DashBoard = () => {
  return (
    <div className='pl-[22%] bg-[#F0F0F0]   w-[100vw] py-10'>
        <Result/>
    </div>
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