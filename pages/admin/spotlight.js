import React from 'react'

import Spotlight from '../../components/Admin/Spotlight/Spotlight'
import { requireAuth } from '../../lib/requireAuth'
const spotlight = () => {
  return (
   <Spotlight/>
  )
}

export default spotlight


export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })
}