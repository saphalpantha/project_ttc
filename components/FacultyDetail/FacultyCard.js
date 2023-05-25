import React from 'react'

const FacultyCard = ({isBig}) => {
  return (
    <div className={`${!isBig ? 'w-[200px] h-[220px]' : 'w-[277px] h-[250px]'} flex flex-col space-y-3 justify-center items-center`} >
        <div className={`rounded-3xl bg-[#D9D9D9] ${!isBig ? 'w-[199px] h-[199px] p-3' : 'w-[277px] h-[277px] p-5'} `}>
            <img className='w-[100%] h-[100%] ' src="/images/dummy_user.svg" alt="user"></img>
        </div>
        <span className="font-bold text-2xs">Ananta Panthi</span>
        <span className="font-light text-2xs">+977-9812367458</span>
    </div>
  )
}

export default FacultyCard