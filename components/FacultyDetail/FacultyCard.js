import { Card } from '@mui/material'
import React from 'react'

const FacultyCard = ({isBig, phoneno ,name,id,photo}) => {
  

  return (
    
    
    <div className={` bg-transparent 0 ${!isBig ? 'w-[13rem] h-[13rem]' : 'w-[17rem] h-[17rem]'} flex flex-col space-y-1 justify-center items-center shadow-none border-none`} >
        
        <div className={`rounded-3xl bg-[#D9D9D9] ${!isBig ? 'w-[199px] h-[199px] p-3' : 'w-[277px] h-[277px] p-7'} `}>
          <img className='w-[100%] rounded-3xl h-[100%] ' src={`/images/faculty-uploads/${photo}`} alt={name}></img>
        </div>
        <span className="font-bold text-2xs">{name}</span>
        {/* <span className="font-light text-2xs">{phoneno}</span> */}
    </div>

  )
}

export default FacultyCard