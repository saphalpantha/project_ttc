import React from 'react'
import Image from 'next/image'
import CardLists from '../CardLists/CardLists'
const Hero = () => {
  return (
    <div className=''>
    <div className='max-w-full  relative'>
      <Image  className='w-[100%] h-[100%] object-contain' src="/images/hero_pic.png" width={500} height={500} ></Image>
    </div>
    {/* <h1 className=' text-6xl max-w-lg font-[400] text-center font-serif absolute top-[110%] text-white font-semibold left-[35%]'>Welcome to 
Tilottama Campus</h1> */}
    <CardLists/>
    </div>

  )
}

export default Hero