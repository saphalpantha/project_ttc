import Link from 'next/link'
import React, { useState } from 'react'

const links_name = [
    {id:'l1', name:'Home', redirect_to:'/'},
    {id:'l2', name:'About', redirect_to:'/'},
    {id:'l3', name:'Courses', redirect_to:'courses'},
    {id:'l4', name:'Admission', redirect_to:'/'},
    {id:'l5', name:'News', redirect_to:'/'},
    {id:'l6', name:'Others', redirect_to:'/'},
]

const NavLinks = () => {
    const [activeItem, setActiveItem ] =  useState('l1')

    const linkClickHandler = (item) => {
        setActiveItem(item.id)
    }
  return (
    <ul  className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 py-5 md:py-0'>
        {links_name.map(item => (
                    <li key={item.id} onClick={() => linkClickHandler(item)} className={` transition-all duration-100 text-[20px] ${activeItem === item.id ? 'font-semibold text-black' : 'text-[#201F54]  font-normal'}`}>
                    <Link href={item.redirect_to} >{item.name}</Link>
                    </li>
        ))}
    </ul>
  )
}

export default NavLinks