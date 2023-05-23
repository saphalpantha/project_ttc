import React from 'react'
import Link from 'next/link'
const Course = () => {
  return (
    <div className='bg-white'>
        <ul>
            <li className='p-5 text-white bg-black font-bold text-2xl'><Link href={'/courses/science'} >SCIENCE</Link></li>
            <li className='p-5 text-white bg-black font-bold text-2xl'><Link href={'/courses/management'} >MGMT</Link></li>
            <li className='p-5 text-white bg-black font-bold text-2xl'><Link href={'/courses/bba'} >BBA</Link></li>
        </ul>
    </div>
  )
}

export default Course