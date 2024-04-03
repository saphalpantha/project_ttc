import React from 'react'

import { requireAuth } from '../../lib/requireAuth'
import dynamic from 'next/dynamic'
const OurStar = dynamic(() => import ('../../components/Admin/OurStar/OurStar') )
const ourStar = () => {
  return (
   <OurStar/>
  )
}

export default ourStar


export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })

}