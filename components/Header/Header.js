import React from 'react'
import NavLinks from './Nav/NavLinks'

const Header = () => {  
  return (
    <div className='relative max-w-6xl md:max-w-full text-center flex flex-col space-y-10'>
        <section className=" w-full bg-[#201F54] h-[32px] absolute top-0 left-0">
            .
        </section>
        <div className=' absolute top-[-2.6rem] right-[2.4rem] bg-[#FF9900] w-[247px] h-[64px] rounded-b-[15px]'>
            <h1 className='font-bold tracking-wider text-2xl mx-auto mt-3 text-white '>Admission Open</h1>
        </div>
        <section className="max-w-6xl md:max-w-full bg-white h-[183px] px-10 py-2 flex justify-between mr-10">
            <div>
            <h1 className='text-2xl md:text-4xl   tracking-widest  border-red-700 border-b-2 text-center text-[#201F54] font-bold '>TILOTTAMA</h1>
            <h1 className='text-2xl md:text-4xl  tracking-widest max-w-fit ml-4 text-[#201F54] font-bold'>CAMPUS</h1>
            </div>
            <NavLinks/>
        </section>
    </div>
  )
}

export default Header