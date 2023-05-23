import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='max-w-6xl md:max-w-full bg-[#201F54] flex flex-col md:flex-row justify-between px-0 md:px-[5rem] py-[4rem] md:py-4 justify-center items-center space-y-6 md:space-y-0 '>
           <div className='flex flex-col justify-between items-center space-y-2'>
                <h1 className='text-[#FF9900] font-bold text-3xl pl-0 md:pl-[0.5rem]'>Contact Us</h1>
                <div className='flex md:flex-row space-x-5 p-2'>
                    <div>
                        <ul className='flex flex-col py-5 space-y-6 justify-between  items-center'>
                            <li><img src="/images/map_logo.svg"/></li>
                            <li><img src="/images/phone_logo.svg"/></li>
                            <li><img src="/images/mail_logo.svg"/></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col justify-between py-5 space-y-6 text-white items-center'>
                            <li className='max-w-sm'>Tilottama-2,Yogikuti Rupendehi Nepal</li>
                            <li className='max-w-sm'>+977-00071-437659, +977-071-438559</li>
                            <li className='max-w-sm'>info@tilottama.edu.np</li>
                        </ul>
                    </div>
                </div>
        </div>

        <div className='flex flex-col space-y-6 md:space-y-2  text-white justify-center items-center'>
            <h1 className='font-bold text-2xl'>Join our mailing list</h1>
            <span className='font-extralightlight mx-auto max-w-sm md:max-w-lg text-center'>Subscribe to get our weekly newsletter delivered directly to your inbox</span>
            <div className='flex space-x-2 justify-center '>
                <input className=' w-1/2 md:w-[30rem]  pl-[1rem] rounded-md text-black'  placeholder='Enter your email'></input>
                <button className='w-[8rem] text-xl tracking-wide transition-all duration-150 h-[3rem] border-2 border-[#FF9900] p-2 px-5 rounded-xl  hover:bg-[#FF9901] active:border-none' >Subscribe</button>
            </div>
        </div>
        <div className='flex flex-col justify-between items-center space-y-3 md:space-y-2 '>
                <h1 className='text-[#FF9900] font-bold text-3xl'>Quick Links</h1>
                    <div>
                        <ul className='flex flex-col justify-between items-center py-5 space-y-6 font-light text-white justify-center items-start text-xl'>
                            <li className='max-w-sm'><Link href={"/"}>Contact</Link></li>
                            <li className='max-w-sm'><Link href={"/"}>Downloads</Link></li>
                            <li className='max-w-sm'><Link href={"/"}>Logins</Link></li>
                        </ul>
                </div>
        </div>
    </div>

  )



}


export default Footer