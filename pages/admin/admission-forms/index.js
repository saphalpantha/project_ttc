import React from 'react'
import AdmissionForms from '../../../components/Admin/AdmissionForms.js/AdmissionForms'
import { requireAuth } from '../../../lib/requireAuth'
const admissionforms = ({isAuth}) => {


  return (
    <div>
      {isAuth ? 
        <AdmissionForms/> : <div className='w-full h-full min-h-screen flex flex-col justify-center items-center font-bold text-2xl'> <h1>Failed to load Page</h1> </div> } 
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