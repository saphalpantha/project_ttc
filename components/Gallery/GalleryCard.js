import React from 'react'

const GalleryCard = ({img}) => {
  return (
    <div className='fle flex-col   justify-center items-center w-[30rem] h-[30rem]'>
        <div className='w-[30rem] h-[25rem] bg-[#D9D9D9]'> 
                <img className='w-[100%] h-[100%] bg-cover' src={img} alt="img"></img>
        </div>
        <h1 className='py-4 font-bold bg-[#201F54] text-center w-full text-white' >Album Name</h1>
    </div>
  )
}

export default GalleryCard