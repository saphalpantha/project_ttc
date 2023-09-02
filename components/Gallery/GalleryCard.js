import Link from 'next/link'
import React from 'react'

const GalleryCard = ({img, alb_name,id}) => {
  return (
    <div className='flex flex-col justify-center items-center w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]'>
      <Link href={`/gallery/${id}`}>
        <div className=' w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] bg-[#D9D9D9]'> 
                <img className='w-[100%] h-[100%] bg-cover' src={`${img}`} alt="img"></img>
        </div>
        <h1 className='font-bold bg-[#201F54] py-4 text-center w-full text-white' >{alb_name}</h1>
      </Link>
    </div>
  )
}

export default GalleryCard