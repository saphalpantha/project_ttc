import React from 'react'
import Image from 'next/image'
const StyleCover = ({src, isLeft, title}) => {
  return (
    <div className='max-w-full relative  relative'>
      <Image  className='w-[100%] h-[100%] object-contain' src={src} width={500} height={500} ></Image>
      <div className={`bg-[#201F54D1] opacity-75 absolute bottom-0 py-3 px-10  ${isLeft ?  'text-left' : ' left-[50%] translate-x-[-50%] text-center mx-auto' }`}>
        <h1 className='text-white font-bold text:3xl md:text-5xl'>{title}</h1>
      </div>
    </div>
  )
}

export default StyleCover