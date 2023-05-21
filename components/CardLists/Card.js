import React from 'react'

const Card = ({img, title, admission_status}) => {
  return (
    <div className='w-[382px] h-[216px] shadow-md bg-[#FFFFFF] flex  items-center justify-center flex-col '>
        <div className='w-1/9'>
             <img className='w-[100%] h-[100%] text-black' src={`/images/${img}.svg`} alt={title} />
        </div>
        <h1 className='text-gray-400 font-light text-xl' >{`${title}`} <span className='text-red-500 font-bold text-2xs'>{admission_status && `(${admission_status})`}</span></h1>
    </div>
  )
}

export default Card