import React from "react";
import NavModel from "../NavModel";
import { Fragment } from "react";
import { useState } from "react";
import Backdrop from "../../../UI/Nav/Backdrop";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ScrollLayout from '../../../UI/ScrollLayout';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const MobileNav = ({isOpen,setIsOpen, linksData}) => {

  const aboutData = [
    { id: "i1", name: "About Tilottama", link: "/about" },
    { id: "i2", name: "Board Members", link: "/faculty/board" },
    { id: "i3", name: "Faculty & Staffs", link: "/faculty" },
  ];
  const resultData = [
    {
      id: "i1",
      name: "Internal Exam Result",
      link: "/results/internal-result",
    },
    { id: "i3", name: "Entrance Exam Result", link: "/results/entrance-result/" },
  ];

  const othersData = [
    { id: "i1", name: "Preparation Materials", link: "/preparation-material" },
    // { id: "i2", link_title: "Career Service Center", link: "https://tilottama.careerservicelab.com/" },
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
        {
          id: "b1",
          link: "/courses/bba/introduction",
          subtitle: "Introduction",
        },
        {
          id: "b2",
          link: "/courses/bba/admission",
          subtitle: "Admission Procedure",
        },
        {
          id: "b4",
          link: "",
          subtitle: "Faculty Members",
        },
      ],
    },
  ];

  const [about, setAbout] = useState([]);
  const [course, setCourse] = useState([]);
  const [result, setResult] = useState([]);
  const [others, setOthers] = useState([]);
  const [active, setActive] = useState({});
  const [activeCourse, setActiveCourse] = useState({});
  const aboutHandler = () => {
    setAbout(aboutData);
    setActive({ id: "about", data: aboutData });
    setCourse([]);
    setOthers([]);
    setResult([]);
  };
  const courseHandler = () => {
    setCourse(courseData);
    setActiveCourse({});
    setActive({ id: "course", data: courseData });
    setAbout([]);
    setOthers([]);
    setResult([]);
  };
  const resultHandler = () => {
    setResult(resultData);
    setActive({ id: "result", data: resultData });
    setCourse([]);
    setAbout([]);
    setOthers([]);
  };
  const othersHandler = () => {
    setOthers(updatedOthersData);
    setActive({ id: "others", data: updatedOthersData });
    setResult([]);
    setCourse([]);
    setAbout([]);
  }; 


  
const updatedOthersData = [
  ...linksData, ...othersData
]


  return (
    <Fragment>

        {isOpen && <Backdrop/>}
        {
            isOpen && 
            <NavModel onClick={() => setIsOpen(false)}>
        <div className="flex  iportrait:flex  md:hidden w-[60vw] right-0  fixed  min-h-screen  text-white bg-[#292828] z-[1000] flex-col gap-4">
            <h1 onClick={() => setIsOpen(false)} className="cursor-pointer absolute right-[2rem] top-[2rem]"><ClearIcon/></h1>
          <div className="pt-[7rem]">
            {Object.keys(active).length <= 0 ? (
              <ScrollLayout duration={0.4} x={150} y={-10} >

              <ul className="flex   font-bold justify-center pl-[2rem]  gap-3 flex-col">
                {<Link onClick={() => setIsOpen(false)} href="/"><li className="cursor-pointer pl-[1rem] text-left">Home</li></Link>}
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
                <li
                  onClick={aboutHandler}
                  className=" flex justify-between px-[3rem] w-full cursor-pointer pl-[1rem] text-left"
                  >
                  <span>About</span>
                  <ArrowRightAltIcon/>
                </li>
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
               {<Link onClick={() => setIsOpen(false)} href={"/admissions"}> <li className="cursor-pointer pl-[1rem] text-left">
                  Admission
                </li> </Link>}
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
                <li
                  onClick={courseHandler}
                  className="  w-full justify-between flex px-[3rem] cursor-pointer pl-[1rem] text-left"
                  >
                                   <span>Course</span>
                  <ArrowRightAltIcon/>
                </li>
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
                <li
                  onClick={resultHandler}
                  className=" w-full justify-between  flex px-[3rem] cursor-pointer pl-[1rem] text-left"
                  >
                                    <span>Result</span>
                  <ArrowRightAltIcon/>
                </li>
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
                {<Link onClick={() => setIsOpen(false)} href={"/newsnotice"}><li className="cursor-pointer pl-[1rem] text-left">Notice</li> </Link>}
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
               { <Link onClick={() => setIsOpen(false)} href={"/gallery"}> <li className="cursor-pointer pl-[1rem] text-left">Gallery</li> </Link>}
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
               { <a onClick={() => setIsOpen(false)} href={"https://tilottama.careerservicelab.com"}> <li className="cursor-pointer pl-[1rem] text-left">Carrier Service Center</li> </a>}
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
                <li
                  onClick={othersHandler}
                  className=" flex justify-between  w-full px-[3rem] cursor-pointer pl-[1rem] text-left"
                  >
                                    <span>Others</span>
                  <ArrowRightAltIcon/>
                </li>
                <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.1rem] bg-gray-300"></div>
              </ul>
                  </ScrollLayout>
            ): (
                <ul className="flex  font-bold justify-center pl-[2rem] pt-[0rem]  gap-14 flex-col">
                <h1 onClick={() => {
                    Object.keys(activeCourse).length > 0 ? setActiveCourse({}) : setActive({})
                }} className="cursor-pointer">
                  <KeyboardBackspaceIcon/>
                </h1>
                <div className="flex flex-col gap-10">
                  {console.log(active,'active')}
                  {active.id != "course" &&
                    active?.data?.map((i) => {
                        
                      {console.log(i,'iiii')}
                      return (
                          <div>
                            <Link onClick={() => setIsOpen(false)} href={`${i.link}`}>
                              <ScrollLayout duration={0.4} x={150} y={0} >
                          <li className="cursor-pointer pl-[1rem] text-[0.9rem] font-light text-left">
                            {console.log(i,'iiii')}
                            {i.name}
                          </li>
                    </ScrollLayout>
                            </Link>
                          <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.7rem] bg-gray-300"></div>
                        </div>
                      );
                    })}

                  {Object.keys(activeCourse).length <= 0 &&
                    active.id === "course" &&
                    active.data.map((i) => {
                      return (
                          <div className="flex justify-between w-full" key={i.id}>
                             <ScrollLayout duration={0.4} x={150} y={0} >

                          <li
                            onClick={() => setActiveCourse(i)}
                            className=" flex w-full justify-between cursor-pointer pl-[1rem]  text-[0.9rem] font-light text-left"
                            >
                           <span> {`${i.title }`
                           }
                           
                            <div className="w-[10rem]   translate-x-[1%]  h-[1px] mt-[0.7rem] bg-gray-300"></div>
                           </span> 
                  <ArrowRightAltIcon/>
                          </li>
                              </ScrollLayout>
                        </div>
                      );
                    })}
                  {Object.keys(activeCourse).length > 0 &&
                    active.id === "course" &&
                    activeCourse.items.map((i) => {
                      return (
                          <div key={i.id}>
                             <ScrollLayout duration={0.4} x={150} y={0} >

  {               <Link onClick={() => setIsOpen(false)} href={`${i.link}`}>      <li className="cursor-pointer pl-[1rem] text-[0.9rem] font-light text-left">
                            {i.subtitle}
                          </li> </Link> }
                             </ScrollLayout>
                          <div className="w-[75%] translate-x-[10%]  h-[1px] mt-[0.7rem] bg-gray-300"></div>
                        </div>
                      );
                    })}
                </div>
              </ul>
            )}
          </div>
        </div>
      </NavModel>
}
    </Fragment>
  );
};

export default MobileNav;




