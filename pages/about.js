import React from 'react'
import dynamic from 'next/dynamic'
const About =  dynamic(() => import ('../components/About/About'))

const about = () => {
  return (
    <About/>
  )
}

export default about