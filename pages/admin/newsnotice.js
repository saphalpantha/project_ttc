import React from 'react'
import NewsNotice from '../../components/Admin/NewsNotice/NewsNotice'
import { requireAuth } from '../../lib/requireAuth'
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