import React from 'react'
import AdmissionForms from '../../../components/Admin/AdmissionForms.js/AdmissionForms'
import { requireAuth } from '../../../lib/requireAuth'
const admissionforms = () => {


  return (
    <div>
        <AdmissionForms/>  
    </div>
  )
}



export default admissionforms

export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    return {
      props:{session}
    }
  })

}