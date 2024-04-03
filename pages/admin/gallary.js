import React from 'react'
import { requireAuth } from '../../lib/requireAuth'
import dynamic from 'next/dynamic'
const Gallary = dynamic(() => import ('../../components/Admin/Gallary/Gallary'))
const gallary = () => {
  return (
    <Gallary/>
  )
}

export default gallary


export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })

}