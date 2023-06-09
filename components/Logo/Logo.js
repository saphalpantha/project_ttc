import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
      <div className='p-2  pr-0  md:pr-10  w-[16rem] h-[7rem] md:w-[24rem] md:h-full' >
        <Image width={250} height={250} className='w-[100%] h-[100%]' src="/images/ttc_logo.svg" alt="TTC"></Image>
      </div>
  )
}

export default Logo