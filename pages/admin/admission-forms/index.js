import React, { useEffect } from 'react'
import AdmissionForms from '../../../components/Admin/AdmissionForms.js/AdmissionForms'
import { useRouter } from 'next/router'
import { useScreen } from 'usehooks-ts'
import { useState } from 'react'

const admissionforms = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    setIsLoggedIn(isAuth)
  })
  return (
    <div>
      {isLoggedIn ? 
        <AdmissionForms/> : <div className='w-full h-full min-h-screen flex flex-col justify-center items-center font-bold text-2xl'> <h1>Failed to load Page</h1> </div> } 
    </div>
  )
}

export default admissionforms