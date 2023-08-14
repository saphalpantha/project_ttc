import React from "react";
import Portal from "../../UI/Nav/Portal";
import { Fragment } from "react";
import Logo from "../../Logo/Logo";
import { useState } from "react";
import Backdrop from "../../UI/Nav/Backdrop";
import Link from "next/link";
import Navbar from "./NavBar";
import MobileNav from "./MobileNav/MobileNav";
const aboutData = [
  { id: "i1", name: "About Tilottama", link: "/about" },
  { id: "i2", name: "Board Members", link: "/about" },
  { id: "i3", name: "Faculty & Staffs", link: "/about" },
];
const resultData = [
  { id: "i1", name: "Internal Exam Result", link: "/results/internal-result" },
  { id: "i2", name: "NEB Grade XI Result", link: "/results/grade11-result" },
  { id: "i2", name: "NEB Grade XII Result", link: "/results/" },
  { id: "i3", name: "Entrance Exam Result", link: "/entrance-results/" },
];



const othersData = [

  { id: "i1", name: "Preparation Materials", link: "/preparation-material" },
];

const courseData = [
    
  {
    id: "i1",
    title: "Science",
    items: [
      { id: "s1", link: "/courses/science/introduction", subtitle: "Introduction" },
      { id: "s2", link: "/courses/science/admission", subtitle: "Admission Procedure" },
      { id: "s3", link: "", subtitle: "Scholarship and Fee Structure" },
      { id: "s4", link: "/courses/science/#faculty_science", subtitle: "Faculty Members" },
    ],
  },
  {
    id: "i2",
    title: "Management",
    items: [
      { id: "m1", link: "/courses/management/introduction", subtitle: "Introduction" },
      { id: "m2", link: "/courses/management/admission", subtitle: "Admission Procedure" },
      { id: "m3", link: "", subtitle: "Scholarship and Fee Structure" },
      { id: "m4", link: "/courses/management/#faculty_science", subtitle: "Faculty Members" },
    ],
  },
  {
    id: "i3",
    title: "BBA",
    items: [
      { id: "b1", link: "/courses/bba/introduction", subtitle: "Introduction" },
      { id: "b2", link: "/courses/bba/admission", subtitle: "Admission Procedure" },
      { id: "b3", link: "", subtitle: "Scholarship and Fee Structure" },
      { id: "b4", link: "/courses/bba/#faculty_science", subtitle: "Faculty Members" },
    ],
  },
];

const NavDesktop = () => {
  const [about, setAbout] = useState([]);
  const [course, setCourse] = useState([]);
  const [result, setResult] = useState([]);
  const [others, setOthers] = useState([]);
  const [active, setActive] = useState(false)

  const aboutHanlder = () => {
    setAbout(aboutData);
    setActive(true)
    setCourse([]);
    setOthers([]);
    setResult([]);
};
const courseHandler = () => {
    setCourse(courseData);
    setActive(true)
    setAbout([]);
    setOthers([]);
    setResult([]);
};
const resultHandler = () => {
    setResult(resultData);
    setActive(true)
    setCourse([]);
    setAbout([]);
    setOthers([]);
};
const othersHandler = () => {
    setOthers(othersData);
    setActive(true)
    setResult([]);
    setCourse([]);
    setAbout([]);
};

return (
    <Fragment>
       { active &&  <Backdrop onClick={() => {setActive(false)}}/>}
      <nav className=" hidden md:flex py-[0.5rem] relative z-[1000] gap-10 items-center px-[1rem]">
        <Logo></Logo>
        <ul className="flex  gap-12">
          <li className="cursor-pointer hover:border-b-[3px] border-blue-900">Home</li>
          <li className="relative cursor-pointer" onClick={aboutHanlder}>
            <span className="cursor-pointer hover:border-b-[3px] border-blue-900">About</span>
            {(about.length > 0 && active ) && (
              <div className="absolute  border-t-4 border-blue-700 top-[3.8rem]  left-[-5rem] flex flex-col items-center w-[15rem]  bg-white h-[10rem]">
                <ul className="flex pt-[1rem] flex-col gap-4">
                  {about.map((i) => (
                    <Link href={i.link}><li className="hover:bg-gray-200 px-14 py-1">{i.name}</li></Link>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:border-b-[3px] border-blue-900">Admission</li>
          <li className="cursor-pointer" onClick={courseHandler}>
            <span className="cursor-pointer hover:border-b-[3px] border-blue-900">Course</span>

            {(course.length > 0 && active) && (
              <div className="absolute border-t-4 border-blue-700 top-[6.2rem] left-[50%] translate-x-[-50%] flex flex-col items-center   bg-white h-[20rem]">
                <div className="flex justify-around px-[2rem] pt-[3rem] w-[85vw]">



                  {
                      course.map(od => { 
                        return(

                            <div className='flex flex-col'>
                                        <h1 className="font-bold text-[1.1rem]">{od.title}</h1>
                                        <ul className='flex  gap-2 pt-[1rem] flex-col' >

                                            {od.items.map(id => <div className="hover:bg-gray-200 px-14 py-1"><Link  href={id.link}> <li>{id.subtitle}</li></Link> </div>)}
                                        </ul>
                                        </div>
                                            )
                                    })
                                    
                                }
                                </div>
                {/* <div className=''>
                                    {course.map(one => {
                                        <div>
                                        <ul className=''>
                                            <h1>{course[0].title}</h1>
                                            <span>{one.title}</span>
                                            {one?.items.map(item => {
                                                <li>{item.subtitle}</li>
                                            })}
                                        </ul>
                                            </div>
                                    })}
                                </div> */}
              </div>
            )}
          </li>
          <li className=" relative cursor-pointer" onClick={resultHandler}>
            <span>Result</span>
            {(result.length > 0 && active) && (
              <div className="absolute border-t-4 border-blue-700 top-[3.8rem] left-[-5rem]  flex flex-col items-center w-[15rem]  bg-white h-[13rem]">
                <ul className="flex  pt-[1rem] flex-col gap-4">
                  {result.map((i) => (
                  <Link href={i.link}>  <li className="hover:bg-gray-200 px-2 py-1">{i.name}</li></Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="cursor-pointer hover:border-b-[3px] border-blue-900">Notice</li>
          <li className="cursor-pointer hover:border-b-[3px] border-blue-900">Gallery</li>
          <li className=" relative cursor-pointer" onClick={othersHandler}>
            <span className="cursor-pointer hover:border-b-[3px] border-blue-900">Others</span>
            {(others.length > 0 && active) && (
              <div className="absolute border-t-4 border-blue-700 top-[3.8rem] right-[-4rem] flex flex-col items-center w-[15rem]  bg-white h-[5rem]">
                <ul className="flex pt-[1rem] flex-col gap-4">
                  {others.map((i) => (
                   <Link href={i.link}> <li className="hover:bg-gray-200 px-2 py-1">{i.name}</li> </Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {/* <Navbar/> */}
      <MobileNav/>
    </Fragment>
  );
};

// {
//     about.length > 0 &&
//                 <Portal >
//             <div className='flex border-t-4 border-blue-900 h-[14rem] absolute bg-gray-200'>
//                     <div className=' p-6 flex w-[10rem] flex-col gap-2'>

//                     {about.map(i => <li>{i.name}</li>)}
//                     </div>

//             </div>
//             </Portal>
//             }

export default NavDesktop;
