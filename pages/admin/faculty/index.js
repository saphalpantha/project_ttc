import React from 'react'

import dynamic from 'next/dynamic'
import { requireAuth } from '../../../lib/requireAuth'

const OurFaculty = dynamic(() => import ( '../../../components/Admin/OurFaculty/OurFaculty'))
const faculty = () => {
  return (
   <OurFaculty/>
  )
}

export default faculty

export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })

}