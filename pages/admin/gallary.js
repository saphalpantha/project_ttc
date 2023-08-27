import React from 'react'
import Gallary from '../../components/Admin/Gallary/Gallary'
import { requireAuth } from '../../lib/requireAuth'
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