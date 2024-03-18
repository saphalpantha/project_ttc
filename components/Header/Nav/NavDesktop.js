import React, { useEffect } from "react";
import { Fragment } from "react";
import Logo from "../../Logo/Logo";
import { useState } from "react";
import Backdrop from "../../UI/Nav/Backdrop";
import classes from "./NavBar.module.css";
import Link from "next/link";
const aboutData = [
  { id: "i1", name: "About Tilottama", link: "/about" },
  { id: "i2", name: "Board Members", link: "/faculty/board" },
  { id: "i3", name: "Faculty & Staffs", link: "/faculty" },
];
const resultData = [
  { id: "i1", name: "Internal Exam Result", link: "/results/internal-result" },
  { id: "i3", name: "Entrance Exam Result", link: "/results/entrance-result/" },
];




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
    id: "i3",
    title: "BBA",
    items: [
      { id: "b1", link: "/courses/bba/introduction", subtitle: "Introduction" },
      {
        id: "b2",
        link: "/courses/bba/admission",
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
  const [active, setActive] = useState(false);


  
  const aboutHanlder = () => {
    setAbout(aboutData);
    setActive(true);
    setCourse([]);
    setOthers([]);
    setResult([]);
  };
  const courseHandler = () => {
    setCourse(courseData);
    setActive(true);
    setAbout([]);
    setOthers([]);
    setResult([]);
  };
  const resultHandler = () => {
    setResult(resultData);
    setActive(true);
    setCourse([]);
    setAbout([]);
    setOthers([]);
  };
  const othersHandler = () => {
    setOthers(updatedOthersData);
    setActive(true);
    setResult([]);
    setCourse([]);
    setAbout([]);
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
                      <Link  href={ i.link } key={i.id} onClick={dropdownLinkClickHandler} >
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

          <Link href={"/admissions"}  onClick={dropdownLinkClickHandler}>
            {" "}
            <li
              className={`cursor-pointer hover:border-b-[3px] border-[#201F54]  ${classes.main} `}
            >
              Admission
            </li>{" "}
          </Link>
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
                            <div className="hover:bg-gray-200 px-14 text-[%=                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ;] py-1">
                              <Link onClick={dropdownLinkClickHandler} href={id.link}>
                                {" "}
                                <li>{id.subtitle}</li>
                              </Link>{" "}
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
