// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import Logo from "../../assets/";
// import Button from "./Button";
// import CustomLinks from "./CustomLinks";
// import Link from "next/link";
// const NavLinks = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className=" z-[100]">
//       <div className="flex items-center font-medium justify-center">
//         <div className="z-50 p-3 md:w-auto w-full flex justify-between">
//           {/* <img src={"."} alt="logo" className="md:cursor-pointer h-9" /> */}
//                     <div className='flex flex-col space-y-2 justify-start  md:p-0 items-start md:justify-center md:items-center' >
//              <h1 className='text-2xl md:text-4xl   tracking-widest  border-red-700 border-b-2 text-center text-[#201F54] font-bold '>TILOTTAMA</h1>
//             <h1 className='text-2xl md:text-4xl  tracking-widest max-w-fit ml-4 text-[#201F54] font-bold'>CAMPUS</h1>
//            </div>
//           <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
//             <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//           <span className="text-4xl font-bold">{open ? '$' : '#'}</span>
//           </div>
//         </div>
//         <ul className="md:flex hidden uppercase   gap-10  justify-center flex items-center">
//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Admission
//             </Link>
//           </li>
//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Notice
//             </Link>
//           </li>
//           <CustomLinks />
//         </ul>
//         <div className="md:block hidden">
//           <Button />
//         </div>
//         {/* Mobile nav */}

//         <ul
//           className={`
//         md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-32 pl-4
//         duration-500 ${open ? "left-0" : "left-[-100%]"}
//         `}
//         >
//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Admission
//             </Link>
//           </li>
//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Notice
//             </Link>
//           </li>
//           <CustomLinks />
// {/*
//           <div className="py-5">
//             <Button />
//           </div> */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavLinks;

// import Link from "next/link";
// import { useState } from "react";
// import classes from './NavLinks.module.css'
// import DropdownMenu from "./DropDownMenu";
// const NavLinks = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const sideBarOpenHandler = () => {
//     setIsOpen(prev => !prev);
//   };
//   return (
//     <section className="relative">
//       <div className=" md:flex  gap-10  md:px-20 items-center relative items-center">
//         <div className="flex flex-col space-y-2 justify-start  md:p-0 items-start md:justify-center md:items-center">
//           {" "}
//           <h1 className="text-2xl md:text-4xl   tracking-widest  border-red-700 border-b-2 text-center text-[#201F54] font-bold ">
//             TILOTTAMA
//           </h1>
//           <h1 className="text-2xl md:text-4xl  tracking-widest max-w-fit ml-4 text-[#201F54] font-bold">
//             CAMPUS
//           </h1>
//         </div>
//         <ul className=" hidden md:flex gap-10">
//           <Link href={"/"}>Home</Link>
//           <Link href={"/"}>About</Link>
//           <Link href={"/"}>Courses</Link>
//           <Link href={"/"}>Admission</Link>
//           <Link href={"/"}>Notice</Link>
//           <Link href={"/"}>Others</Link>
//         </ul>

//         <div
//           className="absolute  md:hidden text-4xl top-2 right-5"
//           onClick={sideBarOpenHandler}
//         >
//           ☰
//         </div>
//         {isOpen && (
//           <div className={`absolute z-[100] w-[100%] bg-white text-black min-h-screen justify-center items-center  text-2xl  translate-x-[-100%] md:translate-x-0 ${isOpen && 'translate-x-0'} transition-transform duration-200 `}>
//             <ul className="flex flex-col pt-20 w-2/3 top-0 left-0 h-[90vh] bg-yellow-500 min-h-min md:hidden gap-10">
//               <Link href={"/"}>Home</Link>
//               <Link href={"/"}>About</Link>
//               <Link href={"/"}>Courses</Link>
//               <Link href={"/"}>Admission</Link>
//               <Link href={"/"}>Notice</Link>
//               <Link href={"/"}>Others</Link>
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="absolute top-[110%] left-[27%] bg-white text-black z-[100]">
//         <ul className="flex flex-col gap-5">
//           <li className="px-10 py-3">1</li>
//           <li className="px-10 py-3">1</li>
//           <li className="px-10 py-3">1</li>
//           <li className="px-10 py-3">1</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default NavLinks;

// [=============================================================================================================]

const aboutLinks = {
  name: "About",
  subLinks: [
    { name: "About Tilottama", link: "/about" },
    { name: "Board Members", link: "/faculty/#board_members" },
    { name: "Faculty & staff", link: "/" },
    { name: "Gallary", link: "/" },
  ],
};

const coursesLinks = [
  {
    subLinks: [
      { name: "Science", link: "" },
      { name: "Introduction", link: "/courses/science/introduction" },
      { name: "Admission Procedure", link: "/courses/science/admission" },
      { name: "Scholarship and Fee Structure", link: "/" },
      { name: "Faculty Members", link: "/faculty/#science_Faculty" },
    ],
  },
  {
    subLinks: [
      { name: "Management", link: "" },
      { name: "Introduction", link: "/courses/management/introduction" },
      { name: "Admission Procedure", link: "/courses/management/admission" },
      { name: "Scholarship and Fee Structure", link: "/" },
      { name: "Faculty Members", link: "/faculty/#management_faculty" },
    ],
  },
  {
    subLinks: [
      { name: "BBA", link: "" },
      { name: "Introduction", link: "/courses/bba/introduction" },
      { name: "Admission Procedure", link: "/courses/bba/admission" },
      { name: "Scholarship and Fee Structure", link: "/" },
      { name: "Faculty Members", link: "/faculty/#science_Faculty" },
    ],
  },
];

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isCourse, setIsCourse] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleAbout = () => {
    setIsAbout(!isAbout)
  }


  const toggleCourse = () => {
    setIsCourse(!isCourse)
  }

  return (
    <nav className="bg-white transition-all duration-200 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-black">
                {" "}
                <div className="flex flex-col space-y-2 justify-start  md:p-0 items-start md:justify-center md:items-center">
                  <h1 className="text-2xl md:text-4xl   tracking-widest  border-red-700 border-b-2 text-center text-[#201F54] font-bold ">
                    TILOTTAMA
                  </h1>
                  <h1 className="text-2xl md:text-4xl  tracking-widest max-w-fit ml-4 text-[#201F54] font-bold">
                    CAMPUS
                  </h1>
                </div>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-[#201F54] hover:text-black hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
                >
                  {" "}
                  Home
                </Link>
                



                <div className="relative group z-[100]">
                  <button
                    onClick={toggleAbout}
                    className="text-[#201F54] hover:text-black hover:font-bold px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    About
                  </button>
                  {isAbout && (
                    <div className="absolute  left-0 mt-2 w-48 bg-white py-2 rounded-md shadow-lg">
                      {aboutLinks.subLinks.map((item) => (
                        <Link
                          href={item.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>



                <div className="relative group z-[100]">
                  <button
                    onClick={toggleCourse}
                    className="text-[#201F54] hover:text-black hover:font-bold px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Courses
                  </button>
                  {isCourse && (
                    <div className="flex  gap-10 ">
                      <div className="absolute   left-0 mt-2 w-48 bg-white py-2 rounded-md shadow-lg">
                        <div className="flex flex-col">
                        {coursesLinks.map((item) =>
                          item.subLinks.map((i) => (
                            <div className="flex flex-col gap-10">

                            <Link
                              href={i.link}
                              className={`block px-4 py-2  text-sm  text-gray-700 hover:bg-gray-100 ${i.link === '' && 'font-bold text-3xl'}`}
                            >
                              {i.name}
                            </Link>
                              </div>
                          ))
                          )}
                          </div>
                      </div>
                    </div>
                  )}
                </div>






                










              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:font-bold hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isAbout ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden translate-x-[-100%] transition-all duration-200 ease-in-out ${ isMenuOpen &&  'translate-x-32'  } bg-slate-400 min-h-screen`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-[#201F54] hover:text-black hover:font-bold block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/page1"
              className="text-[#201F54] hover:text-black hover:font-bold block px-3 py-2 rounded-md text-base font-medium"
            >
              Page 1
            </Link>
            <Link
              href="/page2"
              className="text-[#201F54] hover:text-black hover:font-bold block px-3 py-2 rounded-md text-base font-medium"
            >
              Page 2
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
