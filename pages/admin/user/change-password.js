import React from 'react'
import ChangePassword from '../../../components/Admin/User/ChangePassword'
import { requireAuth } from '../../../lib/requireAuth'
const changeuser = () => {
  return (
    <div className=''>
        <ChangePassword/>
    </div>
  )
}

export default changeuser


export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })

}