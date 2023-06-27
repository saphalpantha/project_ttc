import React from "react";
import classes from './AdmissionForms.module.css'
import { useEffect } from "react";
import { useState } from "react";




const data = [
    {id:'i1', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i2', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i3', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i4', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i5', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i6', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i7', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i8', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i9', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
    {id:'i10', formNo:'222',studentname:'sita',mblno:'22929292', faculty:'gta',status:'Download' },
]
const AdmissionForms = () => {
  const [admissionResult, setAdmissionResult] = useState([]);
  
  useEffect(() => {
    fetch('/api/admission-forms').then(result => result.json()).then(data => {
      setAdmissionResult(data.msg)
      console.log(data.msg);
      
    }).catch(err => console.log(err));
  },[])


  const downloadDataHandler = (item) => {

  }
  
  return (
    <div className="min-h-screen py-10 flex  bg-[#F0F0F0]  w-[100vw] pl-[22%] flex-col  pr-[3rem]">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Admission Forms</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>
      <div className="flex gap-14 py-10 group-hover:text-[#B65E0C]">
        <span className="text-2xs py-4 tracking-widest font-bold border-b-2 border-[#B65E0C] text-[#B65E0C] cursor-pointer">
          All Forms
        </span>
        <span className="text-2xs py-4 tracking-widest font-bold hover:border-b-2 hover:border-[#B65E0C]  hover:text-[#B65E0C] cursor-pointer">
          Science Faculty
        </span>
        <span className="text-2xs py-4 tracking-widest font-bold hover:border-b-2 hover:border-[#B65E0C]  hover:text-[#B65E0C] cursor-pointer">
          Management Faculty
        </span>
      </div>

      <div className="flex gap-4  py-5 justify-end">
        <div className="flex w-[20%] justify-center items-center gap-2 shadow-md bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/download.svg"></img>
          <button>Download</button>
        </div>
        <div className="flex w-[20%] gap-2 shadow-md justify-center items-center bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/print.svg"></img>
          <button>Print</button>
        </div>
      </div>
      <div className={`rounded-xl bg-white h-auto w-[100%] ${classes.sh}`}>
        <div className="font-semibold">
          <div className="flex justify-between justify-center px-[3rem] pt-[2rem]">
                <div className="flex gap-2">
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/formno.svg"></img>
                  <h1>Form No</h1>
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/table_icon.svg"></img>
                </div>
                <div className="flex gap-2">
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/student_name.svg"></img>
                  <h1>Student Name</h1>
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/table_icon.svg"></img>
                </div>
                <div className="flex gap-2">
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/mbl_no.svg"></img>
                  <h1>Mobile Number</h1>
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/table_icon.svg"></img>
                </div>
                <div className="flex gap-2">
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/faculty.svg"></img>
                  <h1>Faculty</h1>
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/table_icon.svg"></img>
                </div>
                <div className="flex gap-2">
                  <img className="w-[1.3rem] h-[1.3rem]" src="/images/status.svg"></img>
                  <h1>Status</h1>
                </div>
          </div>
        </div>
        <div className="px-[3rem]">
          <span className="block w-[93%] h-[0.09rem] mx-auto bg-[#D2CCCC] mt-8"></span>
          {admissionResult.map((i) => (
            <div key={i.id} className="flex justify-center justify-between py-5 pt-[1rem]">
              <span className="">{i.id}</span>
              <span className="">{i.nameinblock}</span>
              <span className="">{i.p_no}</span>
              <span className="">{i.faculty}</span>
              <span onClick={() => downloadDataHandler(i)} className="text-justify cursor-pointer text-[#B65E0C]">Download</span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionForms;
