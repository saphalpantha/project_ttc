import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Navbar from './Nav/NavBar'
import NavDesktop from "./Nav/NavDesktop";
import MobileNav from "./Nav/MobileNav/MobileNav";
import Logo from "../Logo/Logo";
import MenuIcon from "@mui/icons-material/Menu";
// import NavLinks from './Nav/NavLinks'

// const Header = () => {
//   return (
//     <Container>
//     <div className='relative max-w-6xl md:max-w-full text-center flex flex-col space-y-10  '>
//         <section className=" w-full bg-[rgb(32,31,84)] h-[32px] absolute top-0 left-0">
//             {/* logo */}
//         </section>
//         <div className=' absolute top-[-2.6rem] right-[2.4rem] bg-[#FF9900] w-[247px] h-[64px] rounded-b-[15px] hidden md:block'>
//             <h1 className='font-bold tracking-wider text-2xl mx-auto mt-3 text-white  '>Admission Open</h1>
//         </div>
//         <section className="max-w-6xl md:max-w-full  bg-white h-[133px] px-0 md:px-10 space-y-0 md:space-y-10  flex flex-col justify-between mr-0 md:mr-10 md:flex-row">
//             {/* <div className='flex flex-col space-y-2 justify-start p-4 md:p-0 items-start md:justify-center md:items-center' >
//             <h1 className='text-2xl md:text-4xl   tracking-widest  border-red-700 border-b-2 text-center text-[#201F54] font-bold '>TILOTTAMA</h1>
//             <h1 className='text-2xl md:text-4xl  tracking-widest max-w-fit ml-4 text-[#201F54] font-bold'>CAMPUS</h1>
//             </div> */}

//             <NavLinks/>
//         </section>
//     </div>
//     </Container>
//   )
// }

// export default Header

// ============================================================================================================\\

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [linksData, setLinksData] = useState([]);
  useEffect(() => {
    fetch("/api/admission-status/")
      .then((res) => res.json())
      .then((data) => {
        const admission_status = data.msg[0]?.admission_open;

        setIsAdmissionOpen(+admission_status);
      })
      .catch((err) => {});
  }, [isAdmissionOpen]);

  useEffect(() => {
    fetch("/api/custom-link")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.msg);
        setLinksData(data.msg);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    // <Container>
    <div className="relative max-w-6xl z-[1000] md:max-w-full text-center flex flex-col space-y-3  ">
      <div className="w-full bg-[#201F54] h-5"></div>
      {isAdmissionOpen ? (
        <div className="  absolute top-[-10%] z-[1] right-[50%]  translate-x-[50%] md:translate-x-0  md:right-[2.4rem] bg-[#FF9900] w-[200px] h-[64px] rounded-b-[15px]  md:block">
          <Link href="/admissions">
            {" "}
            <h1 className="font-bold tracking-wider text-xl mx-auto mt-3 text-white  ">
              Admission Open
            </h1>
          </Link>
        </div>
      ) : (
        ""
      )}
      {/* <Navbar/> */}
      {/* <NavLinks/> */}

      {/* <MobileNav/> */}
      <div className="bg-white relative flex  iportrait:flex md:hidden items-center  px-[1rem] h-[7rem] ">
        <div
          className={`${
            !isAdmissionOpen ? "mt-[0rem]" : "mt-[1.3rem]"
          } ml-[0.5rem]`}
        >
          <Link prefetch={false} href="/">
            <Logo />
          </Link>
          <h1
            onClick={() => setIsOpen(true)}
            className={`absolute  ${
              !isAdmissionOpen ? "top-[2.5rem]" : "top-[3.2rem]"
            } right-[2.2rem] w-[3rem] h-[3rem]`}
          >
            <MenuIcon fontSize="large" />
          </h1>
        </div>
      </div>
      <MobileNav linksData={linksData} isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavDesktop linksData={linksData} />
    </div>
    // </Container>
  );
};

export default Header;
