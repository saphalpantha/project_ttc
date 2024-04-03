import React from 'react'

import { requireAuth } from '../../lib/requireAuth'
import dynamic from 'next/dynamic'
const NewsNotice = dynamic(() => import ('../../components/Admin/NewsNotice/NewsNotice'))
const newsnotice = () => {
  return (
   <NewsNotice/>
  )
}

export default newsnotice

export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })

}