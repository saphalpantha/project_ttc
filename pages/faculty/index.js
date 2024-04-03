import React from 'react'
import dynamic from 'next/dynamic'

const FacultyDetail  = dynamic(() => import ('../../components/FacultyDetail/FacultyDetail'))
const Faculty = () => {
  return (
    <div>
        <FacultyDetail/>
    </div>
  )
}

export default Faculty