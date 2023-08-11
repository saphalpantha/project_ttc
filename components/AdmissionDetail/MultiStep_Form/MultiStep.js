import React from "react";
import { Fragment } from "react";
import classes from "../../AdmissionDetail/AdmissionDetail.module.css";
import { Form, useFormik } from "formik";
import { JoinFull } from "@mui/icons-material";
import { headers } from "next/dist/client/components/headers";
import { useState } from "react";
import axios from "axios";
// import Container from "../Container/Container";

let compo;

const initialValues = {
  faculty: "",
  grade: "",
  shift: "",
  nameinblock: "",
  nameindevanagari: "",
  dob_bs: "",
  dob_ad: "",
  gender: "",
  t_no: "",
  p_no: "",
  email: "",
  ward_no: "",
  vdc_mun: "",
  district: "",
  fathers_name: "",
  fathers_occupation: "",
  fathers_cellno: "",
  mothers_name: "",
  mothers_occupation: "",
  mothers_cellno: "",
  localgurdain_name: "",
  localgurdain_occupation: "",
  localgurdain_cellno: "",
  bus_faculty: "",
  bus_stop: "",
  nameofprevschool: "",
  sendUpGpa: "",
  see_cgpa: "",
  grade_div: "",
  sendup_eng: "",
  sendup_cmath: "",
  sendup_optmath: "",
  sendup_science: "",
  sendup_account: "",
  see_eng: "",
  see_cmath: "",
  see_optmath: "",
  see_science: "",
  see_account: "",
  others: "",
  formisChecked: "",
  hobby: [],
};



export const BasicInfo = ({handleChange,handleSubmit,values})=> {
<div>
<h1 className="w-[50%]  mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
          Basic Information
        </h1>

        <div className="w-[70%] py-2 mx-auto ">
          <label
            className={`text-xl pl-3 pt-2     text-[#201F54] ${classes.req}`}
          >
            Name in Block Letter
          </label>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 pb-2 place-items-center">
          <input
            onChange={handleChange}
                      required
            className="rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"
          ></input>
        </div>

        <div className="w-[70%] py-2 mx-auto ">
          <label className={`text-xl pl-3 pt-2 text-[#201F54]`}>
            Name in Devanagari
          </label>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 pb-2">
          <input
            onChange={handleChange}
            
            name="nameindevanagari"
            className="rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"
          ></input>
        </div>

        <div className="grid justify-center place-items-center px-2 px-2 md:px-32 py-5  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
          <div className="flex flex-col space-y-1">
            <label className={`text-xl pl-3 text-[#201F54] `}>
              Date of Birth (B.S)
            </label>{" "}
            <input
              onChange={handleChange}
              
              name="dob_bs"
              className={`  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl `}
              type="text"
            ></input>
          </div>
          <div className={`flex flex-col space-y-1`}>
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Date of Birth (A.D)
            </label>{" "}
            <input
              onChange={handleChange}
              
              name="dob_ad"
              required
              className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="date"
            ></input>
          </div>
          <div className="flex flex-col space-y-1">
            {" "}
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Gender
            </label>
            <select
              onChange={handleChange}
              
              name="gender"
              required
              className="  w-[14rem] h-[2.6rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-xl"
              value={values.gender}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-xl pl-3 text-[#201F54]">Telephone No</label>{" "}
            <input
              onChange={handleChange}
              
              name="t_no"
              className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="number"
            ></input>
          </div>
          <div className="flex flex-col space-y-1">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Phone No
            </label>{" "}
            <input
              onChange={handleChange}
              
              name="p_no"
              required
              className={`w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl ${classes.req}`}
              type="number"
            ></input>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-xl pl-3 text-[#201F54]">Email</label>{" "}
            <input
              onChange={handleChange}
              
              name="email"
              className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="text"
            ></input>
          </div>
        </div>
</div>
}


export const ChooseFac = ({handleSubmit, handleChange, values}) => {

    return(
        <div>
          <h1 className="w-[95%]  mx-auto my-4 py-3 rounded-full text-center font-bold bg-[#FF9900] text-white">
            Admission Form
          </h1>
          {/* <form encType="multipart/form-data" onSubmit={handleSubmit}> */}
            <div id="first">
              <div className="flex justify-center py-5 flex-col  md:flex-row gap-2 md:gap-32 items-center">
                <div className="flex flex-col space-y-2">
                  <label
                    className={`text-xl pl-3  text-[#201F54] ${classes.req}`}
                  >
                    Faculty
                  </label>
                  <select
                    onChange={handleChange}
                    name="faculty"
                    required
                    className=" w-[14rem] h-[2.6rem]  bg-white border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
                    value={values.faculty}
                  >
                    <option>Select Faculty</option>
                    <option>Science</option>
                    <option>Management</option>
                    <option>BBA</option>
                  </select>
                </div>
              </div>
            </div>
          {/* </form> */}
        </div>
    )
}

const CompoHelper = ({page, handleChange, handleSubmit,values}) => {
  if(page == 0){
    return <BasicInfo handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>
  }
  if(page === 1){
    return <ChooseFac handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>
  }
  else if(page === 1){
    return <BasicInfo handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>
  }
  else if(page === 2){
    <h1>hello</h1>
  }
}


const MultiStep = () => {

  const [page,setPage] = useState(0);

  const formik = useFormik({
      initialValues,
      onSubmit: (values, resetForm) => {
        submitHandler(values, resetForm);
      },
    });
    const { values, handleBlur, handleChange, handleReset, handleSubmit } =
    formik;

    const nxtHandler = () => {
        setPage(prev => prev + 1);
    }

    const prevHandler = () => {
      setPage(prev => prev-1);
    }
    const submitHandler = async (formD) => {
        formD.hobby.push(formD.others);
    const hobbies_string = formD.hobby.join(" ");
    const formData = new FormData();
    for (const key in formD) {
      if (formD.hasOwnProperty(key)) {
        formData.append(key, formD[key]);
      }
    }
    formData.append("marksheet", marksheet);
    formData.append("photo", photo);
    try {
      const response = await axios.post("/api/admission-forms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Form Submission SucessFully");
    } catch (err) {
      alert(
        `${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`
      );
    }
  };



  

  return (
    <div className="min-h-[100vh] bg-gray-300 w-full">
      <div className=" h-fit md:h-[40vh] bg-[#201F54] flex flex-col justify-center items-center">
            {/*  */}
            <div className="w-[90%]  px-[2rem] mx-auto md:px-0  md:w-[45%] h-[70%] shadow-md bg-white absolute top-[50%] left-[40%]  translate-x-0 translate-x-[-40%] ">
              {[<BasicInfo handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>,<ChooseFac handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>, ].map(item => item)}
            {/* {<CompoHelper page={page} handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>} */}
            <div className="w-[100%]  flex  align-bottom justify-evenly bottom-[20px]  mx-auto items-center gap-10">
                <button onClick={prevHandler} className="border-[2px] rounded-md px-9 py-2">Prev</button>
                <button  onClick={nxtHandler} className="border-[2px] rounded-md px-9 py-2">Next</button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default MultiStep;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import { useState } from 'react';

// const steps = [
//   'Choose Faculty',
//   'Basic Information',
//   'Address Information',
//   'Academics Information'
// ];

// export  function HorizontalLinearAlternativeLabelStepper({page}) {

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={page} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }

// const MultiStep = () => {
//   const [page,setPage] = useState(2);
//   return (
//     <div>
//         <HorizontalLinearAlternativeLabelStepper page={page}/>
//     </div>
//   )
// }

// export default MultiStep