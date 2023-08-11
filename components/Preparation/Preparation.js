import React, { useState } from "react";
import classes from "../AdmissionDetail/AdmissionDetail.module.css";
import { useScreen } from "usehooks-ts";
const Preparation = () => {
  const [activeTitle, setActiveTitle] = useState( {
    id: "m1",
    title: "class 11",
    subjects: [
      {
        subName: "Science",
        subLists: [
          "Physics",
          "Biology",
          "English",
          "Conmputer",
          "Chemestry",
          "Maths",
          "Nepali",
        ],
      },
      {
        subName: "Management",
        subLists: [
          "Physics",
          "Biology",
          "English",
          "Conmputer",
          "Chemestry",
          "Maths",
          "Nepali",
        ],
      },
    ],
  },);
  const [activeSubjectName, setActiveSubjectName] = useState();
  const titleSelectHandler = (item) => {
    setActiveTitle(item);
  };  


  const toggleSubjectsHandler = () => {

  }


  const materialData = [
    {
      id: "m1",
      title: "class 11",
      subjects: [
        {
          subName: "Science",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali1",
          ],
        },
        {
          subName: "Management",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali2",
          ],
        },
      ],
    },
    {
      id: "m2",
      title: "class 12",
      subjects: [
        {
          subName: "Science",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali3",
          ],
        },
        {
          subName: "Management",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali4",
          ],
        },
      ],
    },
    {
      id: "m3",
      title: "BBA",
      subjects: [
        {
          subName: "Science",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali5",
          ],
        },
        {
          subName: "Management",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali6",
          ],
        },
        {
          subName: "Management2",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali7",
          ],
        },
      ],
    },
    {
      id: "m4",
      title: "Entrance",
      subjects: [
        {
          subName: "Science",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali8",
          ],
        },
        {
          subName: "Management",
          subLists: [
            "Physics",
            "Biology",
            "English",
            "Conmputer",
            "Chemestry",
            "Maths",
            "Nepali9",
          ],
        },
      ],
    },
  ];
  return (
    <div className="max-w-6xl md:max-w-full">
      <section className={` relative ${classes.main}`}>
        <div className="">
          <img
            className="w-[100vw] h-[30vh] bg-cover opacity-80  "
            src="/images/stream/science/sci_stream_cover.png"
          ></img>
        </div>
        <div className="left-[50%] mx-auto w-[80%] bg-[#FF9900] py-2 font-bold text-2xl text-center text-white rounded-full">
          Preparation Material
        </div>

        <section className=" min-h-screen  items-center pt-[4rem]  flex flex-col ">
          <div className="flex border border-[0.2rem]  border-[#FF9900] flex-col justify-center items-center">
            <div className="flex gap-2 pb-[1px] bg-[#201F54]">
              {materialData.map((item) => (
                <div className="py-3">
                  <span
                    key={item.id}
                    className={`text-white text-xl px-2 md:px-5 cursor-pointer py-4 ${
                      activeTitle.id === item.id && "bg-[#FF9900]"
                    }`}
                    onClick={() => titleSelectHandler(item)}
                  >
                    {item.title}
                  </span>
                 
                </div>
              ))}
            </div>
            <div className="w-full px-2 py-2 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
              {
                activeTitle.subjects.map(item => (
                  <div className="gap-2 flex flex-col">
                  <h1  onClick={() => setActiveSubjectName(item.subName)} className={`border-[#201F54]  border-[0.2rem] pl-[1rem] py-1  ${activeSubjectName == item.subName && 'bg-[#201F54] text-white'}`}>
                  {item.subName}
                </h1> 
                {
                  activeSubjectName === item.subName && 
      <ul className=" grid grid-cols-2 justify-center items-center pl-10 border-2 p-4 border-[#201F54] ">
                     {item.subLists.map(i => <li>{i}</li>)}
                 </ul>
                 }
                    </div>
                ))
              }

                </div>  

            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Preparation;



{/* <div className="w-full">
{activeTitle === item.id && <div className="flex flex-col w-[100%] p-2 gap-2">
  {item.subjects.map(sub => (

  ))}
</div>}
  </div> */}