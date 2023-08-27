import React from 'react'

import OurFaculty from '../../../components/Admin/OurFaculty/OurFaculty'
import { requireAuth } from '../../../lib/requireAuth'
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