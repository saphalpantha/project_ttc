import React from 'react'
import Slider from '../../../components/Admin/Slider/Slider'
import { requireAuth } from '../../../lib/requireAuth';
const slider = () => {
  return (
    <div className='w-[100vw] min-h-screen bg-[#F0F0F0] pl-[22%]  py-10'>
        <Slider/>
    </div>
  )
}

export default slider


export const getServerSideProps = async (ctx) => {
    return requireAuth(ctx,({session}) => {
      return {
        props:{session}
      }
    })
    
  }