import React from 'react'
import Link from 'next/link'
const NewsNoticePageCard = ({img, para, heading, id}) => {
  return (

    <div className='flex flex-col  md:flex-row justify-evenly  px-0 md:px-36 gap-x-0 md:gap-x-10 justify-center  relative'>
        <div className='bg-[#D9D9D9] w-[30rem]' ><img className='w-[100%] h-[100%]' src={img}></img></div> 
        <div className='flex flex-col space-y-2 max-w-xl py-[2rem]'>
        <Link href={`/newsnotice/${id}`}>    <h1 className='text-[#201F54] max-w-md text-3xl'>{heading}</h1> </Link>
            <p className='text-xl'>{para.slice(0,150)}</p>
        </div>
      <Link href={`/newsnotice/${id}`}>  <h1 className='text-[#FF9900] font-light absolute bottom-3 right-20'>Read More</h1></Link>
    </div>
  )
}

export default NewsNoticePageCard