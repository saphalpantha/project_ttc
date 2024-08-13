import React from 'react'
import { requireAuth } from '../../../lib/requireAuth'
import PaymentForms from '../../../components/Admin/Payments/Payments'
const payments = () => {


  return (
    <div>
        <PaymentForms/>  
    </div>
  )
}



export default payments

export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })

}