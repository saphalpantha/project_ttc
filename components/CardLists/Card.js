import React from 'react'

const Card = ({img, title, admission_status}) => {
  return (
    <div className='w-[20rem] h-[10rem] md:w-[24rem] md:h-[13.5rem] shadow-md bg-[#FFFFFF] flex  items-center justify-center flex-col space-y-6'>
        <div className='w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] '>
             <img className='w-[100%] h-[100%] text-black' src={`/images/${img}.svg`} alt={title} />
        </div>
        <h1 className='text-gray-400 font-light text-xl' >{`${title}`} <span className='text-red-500 font-bold text-2xs'>{admission_status && `(${admission_status})`}</span></h1>
    </div>
  )
}

export default Card

