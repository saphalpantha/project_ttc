import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/";
import Button from "./Button";
import CustomLinks from "./CustomLinks";
import Link from "next/link";
const NavLinks = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" z-[100]">
      <div className="flex items-center font-medium justify-center">
        <div className="z-50 p-3 md:w-auto w-full flex justify-between">
          {/* <img src={"."} alt="logo" className="md:cursor-pointer h-9" /> */}
                    <div className='flex flex-col space-y-2 justify-start  md:p-0 items-start md:justify-center md:items-center' >
             <h1 className='text-2xl md:text-4xl   tracking-widest  border-red-700 border-b-2 text-center text-[#201F54] font-bold '>TILOTTAMA</h1>
            <h1 className='text-2xl md:text-4xl  tracking-widest max-w-fit ml-4 text-[#201F54] font-bold'>CAMPUS</h1>
           </div> 
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          <span className="text-4xl font-bold">{open ? '$' : '#'}</span>
          </div>
        </div>
        <ul className="md:flex hidden uppercase   gap-10  justify-center flex items-center">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Admission
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Notice
            </Link>
          </li>
          <CustomLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}

        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-32 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Admission
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Notice
            </Link>
          </li>
          <CustomLinks />
{/*           
          <div className="py-5">
            <Button />
          </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
