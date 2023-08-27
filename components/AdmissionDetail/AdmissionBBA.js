import React from "react";
import classes from "./AdmissionDetail.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import Container from "../Container/Container";
const AdmissionBBA = () => {
  const [photo, setPhoto] = useState(null);
  const [marksheet, setMarksheet] = useState(null);
  const [tc, setTC] = useState(null);
  const [cc, setCC] = useState(null);
  const [loading,setLoading] = useState(false)
  


  const initialValues = {
    faculty: null,
    grade: null,
    shift: null,
    nameinblock: null,
    nameindevanagari: null,
    dob_bs: null,
    dob_ad: null,
    gender: null,
    t_no: null,
    p_no: null,
    email: null,
    ward_no: null,
    vdc_mun: null,
    district: null,
    fathers_name: null,
    fathers_occupation: null,
    fathers_cellno: null,
    mothers_name: null,
    mothers_occupation: null,
    mothers_cellno: null,
    localgurdain_name: null,
    localgurdain_occupation: null,
    localgurdain_cellno: null,
    bus_faculty: null,
    bus_stop: null,
    nameofprevschool: null,
    sendUpGpa: null,
    see_cgpa: null,
    grade_div: null,
    sendup_eng: null,
    sendup_cmath: null,
    sendup_optmath: null,
    sendup_science: null,
    sendup_account: null,
    see_eng: null,
    see_cmath: null,
    see_optmath: null,
    see_science: null,
    see_account: null,
    others: null,
    formisChecked: null,
    hobby: [],
  };


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
      setLoading(true)
      const response = await axios.post("/api/admission-forms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }); 

      
      alert('Form Submission SucessFully');
      setLoading(false)

    } catch (err) {
      setLoading(false)
      alert('Failed to submit form. Please Try again.')
      alert(`${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`);
      
    }
  };

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const formik = useFormik({
    initialValues,
    onSubmit: (values, resetForm) => {
      submitHandler(values, resetForm);
    },
  });

  const { values, handleBlur, handleChange, handleReset, handleSubmit } =
    formik;
  return (
    <Container>
      <h1 className="w-[95%]  mx-auto my-4 py-3 rounded-full text-center font-bold bg-[#FF9900] text-white">
        Admission Form
      </h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
          <div className="flex justify-center py-5 flex-col  md:flex-row gap-2 md:gap-32 items-center">
            <div className="flex flex-col space-y-2">
              <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                Faculty
              </label>
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
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
            {/* <div className="flex flex-col space-y-2">
              <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                Choose Shift
              </label>
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="shift"
                required
                className="  w-[14rem] h-[2.6rem] bg-white  border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
                value={values.shift}
              >
                <option>Select Shift</option>
                <option>Morning</option>
                <option>Day</option>
                <option>Mid Day</option>
              </select>
            </div> */}
          </div>
        </div>
        <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
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
            onBlur={handleBlur}
            name="nameinblock"
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
            onBlur={handleBlur}
            onReset={handleReset}
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
              onBlur={handleBlur}
              onReset={handleReset}
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
              onBlur={handleBlur}
              onReset={handleReset}
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
              onBlur={handleBlur}
              onReset={handleReset}
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
              onBlur={handleBlur}
              onReset={handleReset}
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
              onBlur={handleBlur}
              onReset={handleReset}
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
              onBlur={handleBlur}
              onReset={handleReset}
              name="email"
              className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="text"
            ></input>
          </div>
        </div>
        <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
          Address
        </h1>
        <div className="grid justify-center place-items-center px-2 md:px-32 py-5  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
          <div className="flex flex-col space-y-1">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Ward Number:
            </label>{" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              onReset={handleReset}
              name="ward_no"
              required
              className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="number"
            ></input>
          </div>
          <div className="flex flex-col space-y-1">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              VDC/Municipality
            </label>{" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              onReset={handleReset}
              name="vdc_mun"
              required
              className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col space-y-1">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              District
            </label>{" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              onReset={handleReset}
              name="district"
              required
              className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="text"
            ></input>
          </div>
        </div>
        <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
          Academic Information
        </h1>
        
        <div className="grid justify-center place-items-center items-center px-2 md:px-32  py-5  grid-cols-1 mx-auto  md:grid-cols-2 gap-2 md:gap-y-3  md:grid-row-2">
          
        <div className="flex flex-col justify-center">
          <div className="w-[100%] py-2 mx-auto ">
            <label
              className={`text-xl pt-2  whitespace-nowrap    text-[#201F54] ${classes.req}`}
            >
              Name of Previous School
            </label>
          </div>
          <div className="flex justify-center items-center space-y-2  w-full flex-col">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              onReset={handleReset}
              name="nameofprevschool"
              required
              className=" rounded-xl pl-3 py-2 w-[150%] border-2 border-[#201F54]"
            ></input>
          </div>
        </div>
          
          <div className="flex  flex-col justify-center">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              +2 GPA
            </label>{" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              onReset={handleReset}
              name="sendUpGpa"
              required
              className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="text"
            ></input>
          </div>
        
            </div>
        <div className="w-[90%] flex py-5 flex-col justify-center items-center">
          <button
          disabled={loading}
            type="submit"
            className="py-3  px-8 w-fit text-center bg-[#201F54] hover:bg-[#FF9900] text-white transition-all duration-200 ease-in rounded-full shadow-md  "
          >
            {!loading ? 'Submit' : 'Submitting'}
          </button>
        </div>
      </form>
    </Container>
  );
};

export default AdmissionBBA;
