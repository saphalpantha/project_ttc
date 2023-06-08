import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
      <div className='p-2 w-[15rem] h-[6rem] md:w-full md:h-full' >
        <Image width={300} height={300} className='w-[100%] h-[100%]' src="/images/ttc_logo.svg" alt="TTC"></Image>
      </div>
  )
}

export default Logo