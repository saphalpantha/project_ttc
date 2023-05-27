import React from 'react'
import NavLinks from './Nav/NavLinks'
import Container from '../Container/Container'

const Header = () => {  
  return ( 
    <Container>

    <div className='relative max-w-6xl md:max-w-full text-center flex flex-col space-y-10 relative'>
        <section className=" w-full bg-[rgb(32,31,84)] h-[32px] absolute top-0 left-0">
            {/* logo */}
        </section>
        <div className=' absolute top-[-2.6rem] right-[2.4rem] bg-[#FF9900] w-[247px] h-[64px] rounded-b-[15px] hidden md:block'>
            <h1 className='font-bold tracking-wider text-2xl mx-auto mt-3 text-white  '>Admission Open</h1>
        </div>
        <section className="hiddenmax-w-6xl md:max-w-full  bg-white h-[133px] px-0 md:px-10 space-y-0 md:space-y-10  flex flex-col justify-between mr-0 md:mr-10 md:flex-row">
            <div>
            <h1 className='text-2xl md:text-4xl   tracking-widest  border-red-700 border-b-2 text-center text-[#201F54] font-bold '>TILOTTAMA</h1>
            <h1 className='text-2xl md:text-4xl  tracking-widest max-w-fit ml-4 text-[#201F54] font-bold'>CAMPUS</h1>
            </div>
            <NavLinks/>
        </section>
    </div>
    </Container>
  )
}

export default Header