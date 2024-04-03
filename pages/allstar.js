import React from 'react'
import dynamic from 'next/dynamic'

const AllStars = dynamic(() => import ('../components/OurStars/AllStars'))
const allstar = () => {
  return (
    <AllStars/>
  )
}

export default allstar