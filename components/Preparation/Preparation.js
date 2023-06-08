import React, { useState } from "react";
import classes from "../AdmissionDetail/AdmissionDetail.module.css";
import { useScreen } from "usehooks-ts";
const Preparation = () => {
    const [activeTitle, setActiveTitle] = useState('')
    const [activeSubjectName, setActiveSubjectName] = useState('');
    const titleClickHandler = (title) => {
        setActiveTitle(title.id)
    }

    const subjectNameClickHandler = (name) => {
        setActiveSubjectName(name.subName)
    }
  const materialData = [
    {
      id: "m1",
      title: "class 11",
      subjects: [{ subName: "Science", subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }, { subName: "Management" , subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }],
    },
    {
      id: "m2",
      title: "class 12",
      subjects: [{ subName: "Science", subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }, { subName: "Management" , subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }],
    },
    {
      id: "m3",
      title: "BBA",
      subjects: [{ subName: "Science", subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }, { subName: "Management" , subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }],
    },
    {
      id: "m4",
      title: "Entrance",
      subjects: [{ subName: "Science", subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }, { subName: "Management" , subLists:['Physics', 'Biology', 'English', 'Conmputer', 'Chemestry','Maths', 'Nepali'] }],
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

        <div className="flex  max-w-6xl md:max-w-full w-[100%] mx-auto justify-center py-[5rem]">
            {materialData.map(mt => {
                return(
                    <div className="">
                        <ul className={`flex border-2 gap-5 w-[100%] border-[#201F54] py-4 ${activeTitle === mt.id  && 'bg-[#201F54] text-white '}`} ><li className="pl-4" onClick={() => titleClickHandler(mt)}>{mt.title}</li></ul>
                    <div className="flex gap-5 flex-col">

                    <ul className="flex  flex-col gap-5">
                        {
                            mt.subjects?.map(sb => (
                                <div className="flex  flex-col">
                                <li className="py-4 text-[#201F54] border-2 border-[#201F54] w-full"  onClick={() => subjectNameClickHandler(sb)}>{sb.subName}</li>
                                <ul className={` ${activeSubjectName !== sb.subName ?  'hidden ' : 'h-32'} flex border-2 border-[#201F54] flex-col bg-slate-700`} >
                                    {sb.subLists.map(item => {
                                    <li className=" py-1 text-[#201F54] text-[#201F54]"> {item} </li>
                                    })}
                                        
                                </ul>
                                </div>
                            ))
                        }
                    </ul>
                    </div>
                        </div>
                    
                )
            })}
        </div>
      </section>
    </div>
  );
};

export default Preparation;
