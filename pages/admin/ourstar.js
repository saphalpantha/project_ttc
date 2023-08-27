import React from 'react'
import OurStar from '../../components/Admin/OurStar/OurStar'

import { requireAuth } from '../../lib/requireAuth'
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