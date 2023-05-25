import React from 'react'
import Link from 'next/link'
const Course = () => {
  return (
    <div className='bg-white'>
        <ul>
            <li className='p-5 text-white bg-black font-bold text-2xl'><Link href={'/courses/science/introduction'} >SCIENCE</Link></li>
            <li className='p-5 text-white bg-black font-bold text-2xl'><Link href={'/courses/management/introduction'} >MGMT</Link></li>
            <li className='p-5 text-white bg-black font-bold text-2xl'><Link href={'/courses/bba/introduction'} >BBA</Link></li>
        </ul>
    </div>
  )
}

export default Course