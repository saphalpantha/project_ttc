import Link from 'next/link'
import React, { useState } from 'react'
import Portal from '../../UI/Portal'
import classes from './NavLinks.module.css'
import HoverOn from './HoverOn'
import HoverCourse from './HoverCourse'
import HoverAbout from './HoverAbout'
import HoverOthers from './HoverOthers'
const links_name = [
    {id:'l1', name:'Home', redirect_to:'/'},
    {id:'l2', name:'About', redirect_to:'/', isClicked:true},
    {id:'l3', name:'Courses', redirect_to:''},
    {id:'l4', name:'Admission', redirect_to:'/'},
    {id:'l5', name:'News', redirect_to:'/'},
    {id:'l6', name:'Others', redirect_to:'/'},
    {id:'l7', name:'', redirect_to:'/'},
]


export const MyModel = () => {
  <div className=''>

  <ul className='max-w-sm h-[20rem]  z-[10000] border-3 border-green-700 flex flex-col justify-between p-3 text-white' >
    <li>About Tilottama</li>
    <li>Board Members</li>
    <li>Faculty & Staffs</li>
    <li>Gallery</li>
  </ul>
  </div>
}

const NavLinks = () => {
  // const [hover, setHover ] = useState('')
    const [activeItem, setActiveItem ] =  useState('l1')

    const linkClickHandler = (item) => {
        setActiveItem(item.id)
    }

    //    setHover(item.id)
  //   const liHoverHandler = (item) => {
  // }

const courseNavHandler = <Portal className={classes.coursemodel}>
    <div> <HoverCourse/></div>
</Portal>


const aboutNavHandler = <Portal className={classes.aboutmodel}>

  <div> <HoverAbout/> </div>
</Portal>
const othersNavHandler = <Portal className={classes.othermodel}>

  <div> <HoverOthers/> </div>
</Portal>

// const navHandler = <Portal className={classes.model} > <div><h1 className='text-5xl' >HELLO </h1></div></Portal>
  return (
    <ul  className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 py-5 md:py-0'>
        {links_name.map(item => (
          <li key={item.id}  onClick={() => linkClickHandler(item)} className={` transition-all duration-100 text-[20px] ${activeItem === item.id ? 'font-semibold text-black' : 'text-[#201F54]  font-normal'}`}>
                    {(activeItem === "l3") && courseNavHandler}
                    {(activeItem === "l2") && aboutNavHandler}
                    {(activeItem === "l6") && othersNavHandler}

                    <Link href={item.redirect_to} >{item.name}</Link>
                    </li>
        ))}
        
    </ul>
  )
}

export default NavLinks