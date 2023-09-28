import React from 'react'
import AddLinks from '../../components/Admin/AddLinks/AddLinks'
import { requireAuth } from '../../lib/requireAuth'
const addlink = () => {
  return (
    <div>
        <AddLinks/>
    </div>
  )
}

export default addlink



export const getServerSideProps = async (ctx) => {
    return requireAuth(ctx,({session}) => {
      return {
        props:{session}
      }
    })
    
  }