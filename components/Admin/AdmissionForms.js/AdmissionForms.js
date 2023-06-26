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
    <div className="min-h-screen py-10 flex   w-[100vw] pl-[22%] flex-col  pr-[3rem]">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Admission Forms</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>
      <div className="flex gap-14 py-10 group-hover:text-[#FF9900]">
        <span className="text-2xs py-4 tracking-widest font-bold hover:border-b-2 hover:border-[#FF9900]  hover:text-[#FF9900] cursor-pointer">
          All Forms
        </span>
        <span className="text-2xs py-4 tracking-widest font-bold hover:border-b-2 hover:border-[#FF9900]  hover:text-[#FF9900] cursor-pointer">
          Science Faculty
        </span>
        <span className="text-2xs py-4 tracking-widest font-bold hover:border-b-2 hover:border-[#FF9900]  hover:text-[#FF9900] cursor-pointer">
          Management Faculty
        </span>
      </div>

      <div className="flex gap-4  py-5 justify-end">
        <div className="flex w-[20%] justify-center items-center gap-2 shadow-md bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
          <button>Download</button>
        </div>
        <div className="flex w-[20%] gap-2 shadow-md justify-center items-center bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
          <button>Print</button>
        </div>
      </div>
      <table className={`rounded-xl shadow-md h-auto w-[100%] ${classes.sh}`}>
        <thead>
          <tr className="flex justify-between justify-center px-[3rem] pt-[2rem]">
            {[1, 2, 3, 4, 5].map((i) => (
              <th key={i}>Form No</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="block w-[93%] h-[0.09rem] mx-auto bg-[#D2CCCC] mt-8"></tr>
          {admissionResult.map((i) => (
            <tr key={i.id} className="flex px-[3rem] py-5 justify-between pt-[1rem]">
              <td className="text-justify">{i.id}</td>
              <td className="text-justify">{i.nameinblock}</td>
              <td className="text-justify">{i.p_no}</td>
              <td className="text-justify">{i.faculty}</td>
              <td onClick={() => downloadDataHandler(i)} className="text-justify cursor-pointer text-[#FF9900]">Download</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdmissionForms;
