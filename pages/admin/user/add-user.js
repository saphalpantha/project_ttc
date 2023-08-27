import React from 'react'
import AddUser from '../../../components/Admin/User/AddUser'
import { requireAuth } from '../../../lib/requireAuth'
const useradd = () => {
  return (
    <div className=''>
        <AddUser/>
    </div>
  )
}

export default useradd


export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    
    return {
      props:{session}
    }
  })

}