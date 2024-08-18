'use client'


import React, { useEffect } from "react";
import { Fragment } from "react";
import Logo from "../../Logo/Logo";
import { useState } from "react";
import Backdrop from "../../UI/Nav/Backdrop";
import classes from "./NavBar.module.css";
import Link from "next/link";
import { DropdownMenu } from "./NavBar";
import {useRouter} from 'next/navigation'
const aboutData = [
  { id: "i1", name: "About Tilottama", link: "/about" },
  { id: "i2", name: "Board Members", link: "/faculty/board" },
  { id: "i3", name: "Faculty & Staffs", link: "/faculty" },
];
const resultData = [
  { id: "i1", name: "Internal Exam Result", link: "/results/internal-result" },
  { id: "i3", name: "Entrance Exam Result", link: "/results/entrance-result/" },
];


const admissionData = [
  {id:'sc', name:"+2 Admission", link:'/admissions'},
  {id:'bba', name:"BBA Admission", link:'/admissions'},
  {id:'mba', name:"MBA Admission", link:'/admissions'},
]



const courseData = [
  {
    id: "i1",
    title: "Science",
    items: [
      {
        id: "s1",
        link: "/courses/science/introduction",
        subtitle: "Introduction",
      },
      {
        id: "s2",
        link: "/courses/science/admission",
        subtitle: "Admission Procedure",
      },
      {
        id: "s4",
        link: "/courses/science/#faculty_science",
        subtitle: "Faculty Members",
      },
    ],
  },
  {
    id: "i2",
    title: "Management",
    items: [
      {
        id: "m1",
        link: "/courses/management/introduction",
        subtitle: "Introduction",
      },
      {
        id: "m2",
        link: "/courses/management/admission",
        subtitle: "Admission Procedure",
      },
      {
        id: "m4",
        link: "/courses/management/#faculty_management",
        subtitle: "Faculty Members",
      },
    ],
  },
  {
    id: "bba",
    title: "BBA",
    items: [
      { id: "bba1", link: "/courses/bba/introduction", subtitle: "Introduction" },
      {
        id: "bba2",
        link: "/courses/bba/admission",
        subtitle: "Admission Procedure",
      },
      { id: "bba3", link: "", subtitle: "Faculty Members" },
    ],
  },
  {
    id: "mba",
    title: "MBA",
    items: [
      { id: "mba1", link: "/courses/mba/introduction", subtitle: "Introduction" },
      {
        id: "mba2",
        link: "/courses/mba/admission",
        subtitle: "Admission Procedure",
      },
      { id: "b4", link: "", subtitle: "Faculty Members" },
    ],
  },
];

const NavDesktop = ({ linksData }) => {
  const [about, setAbout] = useState([]);
  const [course, setCourse] = useState([]);
  const [result, setResult] = useState([]);
  const [others, setOthers] = useState([]);
  const [admission,setAdmission] = useState([]);
  const [active, setActive] = useState(false);


  const router = useRouter()
  
  const aboutHanlder = () => {
    setAbout(aboutData);
    setActive(true);
    setCourse([]);
    setOthers([]);
    setAdmission([]);
    setResult([]);
  };
  const courseHandler = () => {
    setCourse(courseData);
    setActive(true);
    setAbout([]);
    setOthers([]);
    setResult([]);
    setAdmission([]);
  };
  const resultHandler = () => {
    setResult(resultData);
    setActive(true);
    setCourse([]);
    setAbout([]);
    setOthers([]);
    setAdmission([]);
  };
  const othersHandler = () => {
    setOthers(updatedOthersData);
    setActive(true);
    setResult([]);
    setCourse([]);
    setAbout([]);
    setAdmission([]);
  };


  const admissionHandler = () =>{
        setOthers([]);
    setActive(true);
    setResult([]);
    setCourse([]);
    setAbout([]);
    setAdmission(admissionData);
    
  };

  const othersData = [
    {
      id: "i1",
      link_title: "Preparation Materials",
      link: "/preparation-material",
    },
  ];

  const updatedOthersData = [...linksData, ...othersData];




  const dropdownLinkClickHandler = (e) => {
    e.stopPropagation()
    setActive(false); 
  };


//   const getValidSubdomain = () => {
//   if (typeof window !== 'undefined') {
//     const host = window.location.host;

//     // Detect subdomain when not on localhost
//     if (host !== 'localhost:3000' && host.includes('.')) {
//       return host.split('.')[0];
//     }
    
//     // Simulate subdomain on localhost using a URL pattern
//     const path = window.location.pathname;
//     const match = path.match(/^\/(bba|mba|otherSubdomain)\//);
    
//     if (host === 'localhost:3000' && match) {
//       return match[1];
//     }
//   }
//   return null;
// };

const host =
        typeof window !== 'undefined' && window.location.host
            ? window.location.host
            : '';

const handleCourseRoute = (e, data) => {
  dropdownLinkClickHandler(e);

  const { id, link } = data;

  if (id.startsWith('bba') || id.startsWith('mba')) {
    // Remove the subdomain prefix from the link if it exists
    const updatedLink = link.replace('/bba', '').replace('/mba', '');

    const subdomain = id.startsWith('bba') ? 'bba' : 'mba' ;

    router.push(`https://${subdomain}.${host}${updatedLink}`);
  } else {
    router.push(link);
  }
};

  return (
    <Fragment>
      {active && (
        <Backdrop
          onClick={() => {
            setOthers([]);
            setActive(false);
            setResult([]);
            setCourse([]);
            setAbout([]);
          }}
        />
      )}
      <nav
        className={`hidden iportrait:hidden md:flex py-[1.1rem]  relative z-[1000] gap-4 items-center px-[1rem]`}
      >
        <div className="w-[20rem]">
          <Logo  />
        </div>
        <ul className="flex justify-center items-center  gap-7">
          <Link className="w-fit" href={"/"}>
            {" "}
            <li
              className={`cursor-pointer  hover:border-b-[3px] border-[#201F54] ${classes.main} `}
            >
              Home
            </li>
          </Link>
          <li className={`relative cursor-pointer`} onClick={aboutHanlder}>
            <span
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54] ${classes.main} `}
            >
              About
            </span>
            {about.length > 0 && active && (
              <div className="absolute  border-t-4 border-[#201F54] top-[3.8rem]  left-[-5rem] flex flex-col items-center w-[15rem]  bg-white h-[10rem]">
                {active && (
                  <ul className="flex pt-[1rem] flex-col gap-4">
                    {about.map((i) => (
                      <Link  href={i.link } key={i.id} onClick={dropdownLinkClickHandler} >
                        <li  className="hover:bg-gray-200 px-14                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ;]  text-[#4f4f4f] py-1">
                          {i.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>

                      <li className={`relative cursor-pointer`} onClick={admissionHandler}>
            <span
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54] ${classes.main} `}
            >
              Admission
            </span>
            {admission.length > 0 && active && (
              <div className="absolute  border-t-4 border-[#201F54] top-[3.8rem]  left-[-5rem] flex flex-col items-center w-[15rem]  bg-white h-[10rem]">
                {active && (
                  <ul className="flex pt-[1rem] flex-col gap-4">
                    {admission.map((i) => (
                      
                      <Link  href={(i.id === "bba" || i.id == "mba" ) ? `https://${i.id}.${host}/admissions` : i.link } prefetch={i.id === "bba" || i.id === "mba" ? false : true} key={i.id} onClick={dropdownLinkClickHandler} >
                        <li  className="hover:bg-gray-200 px-14                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ;]  text-[#4f4f4f] py-1">
                          {i.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
          <li className={`cursor-pointer `} onClick={courseHandler}>
            <span
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54] ${classes.main}  `}
            >
              Course
            </span>

            {course.length > 0 && active && (
              <div className="absolute border-t-4 border-[#201F54] top-[6.2rem] left-[50%] translate-x-[-50%] flex flex-col items-center   bg-white h-[20rem]">
                <div className="flex justify-around px-[2rem] pt-[3rem] w-[85vw]">
                  {course.map((od) => {
                    return (
                      <div className="flex flex-col">
                        <h1 className="font-bold text-[1.1rem]">{od.title}</h1>
                        <ul className="flex  gap-2 pt-[1rem] flex-col">
                          {od.items.map((id) => (
                            <div className="hover:bg-gray-200 px-14">
                              <a onClick={(e) => handleCourseRoute(e, id)}>{id.subtitle}</a>
                               {/* <Link onClick={dropdownLinkClickHandler} href={id.link}>
                                 {" "}
                                 <li>{id.subtitle}</li>
                               </Link>{" "} */}
                            </div>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
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
          <li
            className={` relative cursor-pointer ${classes.main}`}
            onClick={resultHandler}
          >
            <span
              className={`${classes.main}   hover:border-b-[3px] border-[#201F54]`}
            >
              Result
            </span>
            {result.length > 0 && active && (
              <div className="absolute border-t-4 border-[#201F54] top-[3.8rem] left-[-5rem]  flex flex-col items-center w-[15rem]  bg-white h-fit pb-[2rem]">
                <ul className="flex  pt-[1rem] flex-col gap-4">
                  {result.map((i) => (
                    <Link onClick={dropdownLinkClickHandler} href={i.link}>
                      {" "}
                      <li className="hover:bg-gray-200 px-2 py-1">{i.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <Link onClick={dropdownLinkClickHandler} href={"/newsnotice"}>
            {" "}
            <li
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54] ${classes.main}  `}
            >
              Notice
            </li>{" "}
          </Link>
          <Link onClick={dropdownLinkClickHandler} href={"/gallery"}>
            {" "}
            <li
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54] ${classes.main} `}
            >
              Gallery
            </li>
          </Link>
          <Link onClick={dropdownLinkClickHandler} target="_blank" href={"https://tilottama.careerservicelab.com"}>
            {" "}
            <li
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54] ${classes.main} `}
            >
              Career Service Center
            </li>
          </Link>
          <Link onClick={dropdownLinkClickHandler} target="_self" href={`https://mba.${host}/pay`}>
            {" "}
            <li
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54] ${classes.main} `}
            >
             Fee Payment
            </li>
          </Link>

          <li className=" relative cursor-pointer" onClick={othersHandler}>
            <span
              className={`cursor-pointer hover:border-b-[3px]  border-[#201F54] ${classes.main} `}
            >
              Others
            </span>
            {others.length > 0 && active && (
              <div
                className={`absolute border-t-4   border-[#201F54] top-[3.8rem] right-[-4rem] flex flex-col items-center  w-[15rem]  bg-white h-auto`}
              >
                <ul className="flex py-[0.5rem] flex-col gap-2">
                  {others.map((i) => (
                    <Link onClick={dropdownLinkClickHandler} href={`${i.link}`} target="_self">
                      {" "}
                      <li className="hover:bg-gray-200 px-2 py-1">
                        {i.link_title}
                      </li>{" "}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {/* <MobileNav/> */}
    </Fragment>
  );
};

// {
//     about.length > 0 &&
//                 <Portal >
//             <div className='flex border-t-4 border-[#201F54]  h-[14rem] absolute bg-gray-200'>
//                     <div className=' p-6 flex w-[10rem] flex-col gap-2'>

//                     {about.map(i => <li>{i.name}</li>)}
//                     </div>

//             </div>
//             </Portal>
//             }

export default NavDesktop;
