import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import React from "react";


const aboutDropdownLinks = [
  { id: "a1", link: "/about", name: "About Tilottama" },
  { id: "a2", link: "/faculty/board", name: "Board Members" },
  { id: "a3", link: "/faculty", name: "Faculty & Staffs" },
];
const resultsDropdownLinks = [
  { id: "a1", link: "/results/grade11-result", name: "Internal Exam Result" },
  { id: "a2", link: "/results/internal-result", name: "NEB Grade XI Result" },
  { id: "a3", link: "/results/", name: "NEB Grade XII Result" },
  { id: "a4", link: "/results/entrance-result", name: "Entrance Exam Result" },
];
const othersDropdownLinks = [
  { id: "a1", link: "/preparation-material", name: "Prepation Materials" },
  { id: "a2", link: "/", name: "Item-3" },
];

const coursesDropdownLinks = [
  {
    id: "a1",
    name: "Science",
    sublinks: [
      { id: "s1", link: "/courses/science/introduction/", name: "Introduction" },
      { id: "s2", link: "/courses/science/admission/", name: "Admission Procedure" },
      { id: "s3", link: "/", name: "Scholarship and Fee Structure" },
      { id: "s4", link: "/faculty/#faculty_science/", name: "Faculty Members" },
    ],
  },
  {
    id: "a2",
    name: "Management",
    sublinks: [
      { id: "s1", link: "/courses/management/introduction", name: "Introduction" },
      { id: "s2", link: "/courses/management/admission", name: "Admission Procedure" },
      { id: "s3", link: "/", name: "Scholarship and Fee Structure" },
      { id: "s4", link: "faculty/#faculty_management", name: "Faculty Members" },
    ],
  },
  {
    id: "a3",
    name: "BBA",
    sublinks: [
      { id: "s1", link: "/courses/bba/introduction", name: "Introduction" },
      { id: "s2", link: "/courses/bba/admission", name: "Admission Procedure" },
      { id: "s3", link: "/", name: "Scholarship and Fee Structure" },
      { id: "s4", link: "/faculty/#faculty_bba", name: "Faculty Members" },
    ],
  },
];



function NavLink({ to, children }) {
  return (
    <Link className={` hover:border-b-4 px-4 hover:border-[#201F54] block py-2   transition-all duration-200  ${styles.navLink}`} href={to}>
      {children}
    </Link>
  );
}

// // function DropdownMenu({ title, links }) {
// //   const [openMenus, setOpenMenus] = useState([]);

// //   const toggleDropdown = (itemId) => {
// //     if (openMenus.includes(itemId)) {
// //       setOpenMenus(openMenus.filter((menuId) => menuId !== itemId));
// //     } else {
// //       setOpenMenus([...openMenus, itemId]);
// //     }
// //   };

// //   const isDropdownOpen = (itemId) => {
// //     return openMenus.includes(itemId);
// //   };

// //   return (
// //     <div className={`relative ${styles.dropdownMenu}`}>
// //       <button
// //         className={`block py-2 px-6 ${styles.navLink} ${styles.dropdownButton}`}
// //         onClick={() => toggleDropdown(title)}
// //       >
// //         {title}
// //       </button>
// //       {isDropdownOpen(title) && (
// //         <div className={`dropdown border-t-2 border-blue-800 ${styles.dropdown}`}>
// //           {links.map((link) => (
// //             <div key={link.id} className={`dropdownLink ${styles.dropdownLink}`}>
// //               {link.sublinks ? (
// //                 <>
// //                   <button
// //                     className={` py-2 px-4 ${styles.dropdownButton} ${isDropdownOpen(link.id) ? styles.active : ''}`}
// //                     onClick={() => toggleDropdown(link.id)}
// //                   >
// //                     {link.name}
// //                   </button>
// //                   {isDropdownOpen(link.id) && (
// //                     <div className={`dropdown-menu  ${styles.subDropdownMenu}`}>
// //                       {link.sublinks.map((sublink) => (
// //                         <Link className={`dropdown-item  px-10 tracking-widest text-2xs ${styles.dropdownLink}`} key={sublink.id} href={sublink.link}>
// //                           {sublink.name}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </>
// //               ) : (
// //                 <Link className={`dropdown-item ${styles.dropdownLink}`} key={link.id} href={link.link}>
// //                   {link.name}
// //                 </Link>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



import { useEffect, useRef } from "react";
import Sidebar from "./SideBar";
import Logo from "../../Logo/Logo";


function DropdownMenu({ title, links }) {
  const [openMenus, setOpenMenus] = useState([]);
  const dropdownRef = useRef(null);
  const toggleDropdown = (itemId) => {
    if (openMenus.includes(itemId)) {
      setOpenMenus(openMenus.filter((menuId) => menuId !== itemId));
    } else {
      setOpenMenus([...openMenus, itemId]);
    }
  };

  const isDropdownOpen = (itemId) => {
    return openMenus.includes(itemId);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenMenus([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${styles.dropdownMenu}`} ref={dropdownRef}>


      <button
        className={`block  py-2 px-4 hover:border-b-4 hover:border-[#201F54] ${styles.navLink} ${styles.dropdownButton}`}
         onClick={() => toggleDropdown(title)}
      >
        {title}
      </button>
      {isDropdownOpen(title) && (
        <div className={`relative  min-h-screen  md:min-h-0 shadow-none  md:shadow-md md:absolute dropdown md:flex border-t-4 border-blue-800 ${styles.dropdown}`}>
        {/* <div className="min-h-screenabsolute left-0 top-0" >
        <li>Helo</li>
        <li>Helo</li>
        <li>Helo</li>
        <li>Helo</li>
      </div> */}
          {links.map((link) => (
            <div key={link.id} className={`dropdownLink ${styles.dropdownLink}`}>
              {link.sublinks ? (
                <>
                  <button
                    className={` py-2 text-left ${styles.dropdownButton} ${
                      isDropdownOpen(link.id) ? styles.active : ""
                    }`}
                    onMouseOver={() => toggleDropdown(link.id)}
                  >
                    {link.name}
                  </button>
                  {isDropdownOpen(link.id) && (
                    <div className={`dropdown-menu  ${styles.subDropdownMenu}`}>
                      {link.sublinks.map((sublink) => (
                        <Link
                          className={`dropdown-item text-left  tracking-widest text-2xs ${styles.dropdownLink}`}
                          key={sublink.id}
                          href={sublink.link}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  className={`dropdown-item text-left ${styles.dropdownLink}`}
                  key={link.id}
                  href={link.link}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}





export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [isSciOpen, setIsSciOpen] = useState(false);
  const [isMgmtOpen, setIsMgmtOpen] = useState(false);
  const [isBBAOpen, setIsBBAOpen] = useState(false);


  return (
    <nav
      className={`flex ${ open && 'z-[200]'}  justify-center items-center filter   drop-shadow-md bg-white px-4 py-2 h-13  items-center z-50 ${styles.navbar}`}
    >
      <div
        className={`fixed top-0 md:hidden  left-0 h-screen  bg-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md ${
          styles.mobileNav
        }`}
      >
        <div
          className={`flex md:hidden items-center justify-center filter drop-shadow-md bg-white h-20 ${styles.mobileNavHeader}`}
        >
          <a className="text-xl  font-semibold" href="/">
              <Logo/>
          </a>
        </div>
        <div className={`flex  md:hidden  justify-center items-center flex-col mt-8 ${styles.mobileNavLinks}`}>
          <NavLink
            to="/about"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Home
          </NavLink>
          {/* <NavLink to="/contact" onClick={() => setTimeout(() => setOpen(!open), 100)}>
            About
          </NavLink> */}
          <DropdownMenu title="About" links={aboutDropdownLinks} />
          <DropdownMenu title="Courses" links={coursesDropdownLinks} />
          <NavLink
            to="/contact"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Admission
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Result
          </NavLink>
          <NavLink
            to="/newsnotice"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Notice
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Others
          </NavLink>
        </div>
      </div>
      <div className={` ${open && 'hidden'} w-3/12  flex items-center ${styles.logo}`}>
        <a className="text-2xl  font-semibold" href="/">
        <Logo/>
        </a>
      </div>
      <div className={`w-9/12 flex md:justify-start justify-end items-center ${styles.menu}`}>
        <div
          className={`z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden ${styles.hamburger}`}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
        <div className={`hidden md:flex  pl-[6rem]  gap-2 ${styles.desktopMenu}`}>
          <NavLink  to="/">Home</NavLink>
          {/* <NavLink to="/about" >About</NavLink> */}
          <DropdownMenu title="About" links={aboutDropdownLinks} />
          <DropdownMenu title="Courses" links={coursesDropdownLinks} />
          <NavLink to="/admissions" >Admission</NavLink>
          <DropdownMenu title="Results" links={resultsDropdownLinks} />
          <NavLink to="/newsnotice">Notice</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <DropdownMenu title="Others" links={othersDropdownLinks} />
        </div>
      </div>
      {/* <Sidebar links={aboutDropdownLinks} isSidebarActive={isSidebar}/> */}
    </nav>
  );
}

// ===================================================================================================================================







// import { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "next/link";
// import Logo from "../../Logo/Logo";


// const aboutDropdownLinks = [
//   { id: "a1", link: "/about", name: "About Tilottama" },
//   { id: "a2", link: "/faculty/board", name: "Board Members" },
//   { id: "a3", link: "/faculty", name: "Faculty & Staffs" },
//   { id: "a4", link: "/gallary", name: "Photo Gallery" },
// ];

// const academicDropdownLinks = [
//   { id: "a5", link: "/programs", name: "Programs" },
//   { id: "a6", link: "/academic-calendar", name: "Academic Calendar" },
//   {
//     id: "a7",
//     link: "/scholarship-and-awards",
//     name: "Scholarship & Awards",
//   },
// ];

// const admissionsDropdownLinks = [
//   { id: "a8", link: "/admission-process", name: "Admission Process" },
//   { id: "a9", link: "/fee-structure", name: "Fee Structure" },
//   { id: "a10", link: "/apply-online", name: "Apply Online" },
//   { id: "a11", link: "/merit-list", name: "Merit List" },
//   { id: "a12", link: "/admission-form", name: "Admission Form" },
// ];

// const contactDropdownLinks = [
//   { id: "a13", link: "/contact-us", name: "Contact Us" },
//   { id: "a14", link: "/feedback", name: "Feedback" },
//   { id: "a15", link: "/reach-us", name: "How to Reach Us" },
// ];



// function NavLink({ to, children, onClick }) {
//   return (
//     <Link
//       href={to}
//       onClick={onClick}
//       className="py-2 px-4 hover:border-b-4 hover:border-[#201F54] transition-all duration-200 block"
//     >
//       {children}
//     </Link>
//   );
// }

// export function DropdownMenu({ title, links }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef();

//   const toggleDropdown = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={dropdownRef} className="relative">
//       <button
//         className="block py-2 px-4 hover:border-b-4 hover:border-[#201F54] transition-all duration-200"
//         onClick={toggleDropdown}
//       >
//         {title}
//       </button>
//       {isOpen && (
//         <div className="dropdown border-t-4 border-blue-800">
//           {links.map((link) => (
//             <div key={link.id} className="dropdownLink">
//               {link.sublinks ? (
//                 <div>

//                   <button
//                     className={`py-2 text-left ${
//                       isOpen ? "active" : ""
//                     }`}
//                     onClick={toggleDropdown}
//                     >
//                     {link.name}
//                   </button>
//                   {isOpen && (
//                     <div className="dropdown-menu">
//                       {link.sublinks.map((sublink) => (
//                         <Link
//                         className="dropdown-item text-left tracking-widest text-2xs"
//                         key={sublink.id}
//                         href={sublink.link}
//                         >
//                           {sublink.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   className="dropdown-item text-left"
//                   key={link.id}
//                   href={link.link}
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// const  Navbar = () =>  {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const mobileMenuRef = useRef(null);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   };

//   const handleClickOutside = (event) => {
//     if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//       setIsMobileMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);



//   const mobileMenuIcon = isMobileMenuOpen ? <FaTimes /> : <FaBars />;

//   return (
//     <>
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto">
//           <div className="md:flex justify-between items-center py-2">
//             <div className="flex justify-between items-center">
//               <div className="flex-shrink-0">
//                 <Logo />
//               </div>
//               <div className="hidden md:block">
//                 <div className="flex space-x-4">
//                   <NavLink to="/">Home</NavLink>
//                   <DropdownMenu title="About" links={aboutDropdownLinks} />
//                   <DropdownMenu title="Academic" links={academicDropdownLinks} />
//                   <DropdownMenu title="Admissions" links={admissionsDropdownLinks} />
//                   <NavLink to="/blog">Blog</NavLink>
//                   <DropdownMenu title="Contact" links={contactDropdownLinks} />
//                 </div>
//               </div>
//             </div>
//             <div className="md:hidden" onClick={toggleMobileMenu}>
//               {mobileMenuIcon}
//             </div>
//           </div>
//         </div>
//       </nav>
//       {isMobileMenuOpen && (
//         <div
//           ref={mobileMenuRef}
//           className="fixed top-0 left-0 h-screen bg-white transform translate-x-0 transition-transform duration-300 ease-in-out"
//         >
//           <div className="flex justify-center items-center bg-white h-20">
//             <Logo />
//           </div>
//           <div className="flex flex-col mt-8">
//             <NavLink to="/" onClick={toggleMobileMenu}>
//               Home
//             </NavLink>
//             <div className="mt-4">
//               <DropdownMenu
//                 title="About"
//                 links={aboutDropdownLinks}
//                 onClick={toggleMobileMenu}
//               />
//             </div>
//             <div className="mt-4">
//               <DropdownMenu
//                 title="Academic"
//                 links={academicDropdownLinks}
//                 onClick={toggleMobileMenu}
//               />
//             </div>
//             <div className="mt-4">
//               <DropdownMenu
//                 title="Admissions"
//                 links={admissionsDropdownLinks}
//                 onClick={toggleMobileMenu}
//               />
//             </div>
//             <NavLink to="/blog" onClick={toggleMobileMenu}>
//               Blog
//             </NavLink>
//             <div className="mt-4">
//               <DropdownMenu
//                 title="Contact"
//                 links={contactDropdownLinks}
//                 onClick={toggleMobileMenu}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// export default Navbar