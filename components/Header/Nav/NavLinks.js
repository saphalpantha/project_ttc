import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import Portal from '../../UI/Portal'
import classes from './NavLinks.module.css'
import HoverOn from './HoverOn'
import HoverCourse from './HoverCourse'
import HoverAbout from './HoverAbout'
import HoverOthers from './HoverOthers'
import { useMediaQuery } from 'react-responsive';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const links_name = [
    {id:'l1', name:'Home', redirect_to:'/'},
    {id:'l2', name:'About', redirect_to:'/', isClicked:true},
    {id:'l3', name:'Courses', redirect_to:''},
    {id:'l4', name:'Admission', redirect_to:'/'},
    {id:'l5', name:'News', redirect_to:'/'},
    {id:'l6', name:'Others', redirect_to:'/'},
    {id:'l7', name:'', redirect_to:'/'},
]

import Dropdown from 'react-bootstrap/Dropdown';

export const CustomDropdown = ({children}) => {
  return(
    <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      {children}
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
  )
}

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
  const isPhone = useMediaQuery({maxWidth:'769px'})
  const [isOpen, setIsOpen] = useState(true);
  // const [hover, setHover ] = useState('')
    const [activeItem, setActiveItem ] =  useState('l1')

    const linkClickHandler = (item) => {
        setActiveItem(item.id)
    }


    const navBarClickHandler = () => {
      setIsOpen(prev => !prev) 
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

const navBarHelper =    <nav className={`${classes.nav} ${isOpen ? classes.open : classes.close }}`}><ul  className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 py-2 md:py-0'>

{links_name.map(item => (
  <li key={item.id}  onClick={() => linkClickHandler(item)} className={` transition-all relative duration-100 text-[20px] ${activeItem === item.id ? 'font-semibold text-black' : 'text-[#201F54]  font-normal'}`}>
            {(activeItem === "l3") && courseNavHandler}
            {(activeItem === "l2") && aboutNavHandler}
            {(activeItem === "l6") && othersNavHandler}
            
            <Link href={item.redirect_to} >{item.name}</Link>
            
            </li>
))}


</ul>
</nav>

// const navHandler = <Portal className={classes.model} > <div><h1 className='text-5xl' >HELLO </h1></div></Portal>
  return (
    <Fragment>

    {!isPhone && navBarHelper}
{(isPhone ) && <span onClick={navBarClickHandler} className={classes.nav_bar}><ArrowDropDownCircleIcon className={classes.dropdown} /></span>}
    </Fragment>
  )
}

export default NavLinks







// // ===================================================================================



// // import React, { useState } from 'react';
// // import { Navbar, Nav, Container } from 'react-bootstrap';
// // import { FaBars } from 'react-icons/fa';
// // import styles from './NavLinks.module.css';

// // const NavLinks = () => {
// //   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

// //   const toggleMobileNav = () => {
// //     setIsMobileNavOpen(!isMobileNavOpen);
// //   };

// //   return (
// //     <Navbar expand="lg" className={styles.navbar}>
// //       <Container fluid="md">
// //         <Navbar.Brand href="#">
// //           <img src="logo.png" alt="Logo" className={styles.logo} />
// //         </Navbar.Brand>
// //         <Navbar.Toggle
// //           aria-controls="navbarNav"
// //           onClick={toggleMobileNav}
// //           className={styles['mobile-toggle']}
// //         >
// //           <FaBars />
// //         </Navbar.Toggle>
// //         <Navbar.Collapse id="navbarNav">
// //           <Nav className={`ml-auto ${isMobileNavOpen ? styles['mobile-menu'] : ''}`}>
// //             <Nav.Link href="#home">Home</Nav.Link>
// //             <Nav.Link href="#about">About</Nav.Link>
// //             <Nav.Link href="#services">Services</Nav.Link>
// //             <Nav.Link href="#contact">Contact</Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // };

// // export default NavLinks;















// ================================================================================================================================================
// =====================================================================================

// import Link from 'next/link';
// // import { useState } from 'react';
// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

// const links = [
//   { id: 'l1', name: 'Home', redirect_to: '/' },
//   { id: 'l2', name: 'About', redirect_to: '/' },
//   { id: 'l3', name: 'Courses', redirect_to: '/' },
//   { id: 'l4', name: 'Admission', redirect_to: '/' },
//   { id: 'l5', name: 'News', redirect_to: '/' },
//   { id: 'l6', name: 'Others', redirect_to: '/' },
// ];

// const NavLinks = () => {
//   const [activeItem, setActiveItem] = useState(null);

//   const linkClickHandler = (item) => {
//     setActiveItem(item.id);
//   };

//   return (
//     <ul className='max-w-screen  h-[20rem] z-[10000] border-3 border-green-700 flex justify-between p-3 gap-10 text-xl'>
//       {links.map((item) => (
//         <li key={item.id}>
//           {item.name === 'Courses' ? (
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-autoclose-true">
//                 {item.name}
//               </Dropdown.Toggle>

//               <Dropdown.Menu style={{display:'flex', flexDirection:'column', gap:'20px', marginTop:'3%', background:'white' , padding:'1rem' }}>
//                 <Dropdown.Item href="#">Menu Item 1</Dropdown.Item>
//                 <Dropdown.Item href="#">Menu Item 2</Dropdown.Item>
//                 <Dropdown.Item href="#">Menu Item 3</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           ) : (
//             <Link href={item.redirect_to} onClick={() => linkClickHandler(item)} className={activeItem === item.id ? 'active' : ''} >

//                 {item.name}
//             </Link>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavLinks;
