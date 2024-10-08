import React from "react";
import classes from "./AdmissionDetail.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import Container from "../Container/Container";
const AdmissionForm = () => {
  const [photo, setPhoto] = useState(null);
  const [marksheet, setMarksheet] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const submitHandler = async (formD) => {
    setLoading(true);
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
      setLoading(false);
      alert("Form Submission SucessFully");
    } catch (err) {
      setLoading(false);
      alert(
        `\n\n Error! \n Please Try Again with Correct`
      );
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
            {values.faculty != "BBA" && (
              <div className="flex flex-col space-y-2">
                <label
                  className={`text-xl pl-3  text-[#201F54] ${classes.req}`}
                >
                  Grade
                </label>
                <select
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onReset={handleReset}
                  name="grade"
                  required
                  className="w-[14rem] h-[2.6rem]  border-2 bg-white  border-[#201F54] text-black px-[1rem] rounded-xl"
                  value={values.grade}
                >
                  <option>Select Grade</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
            )}
            {values.faculty != "BBA" && (
              <div className="flex flex-col space-y-2">
                <label
                  className={`text-xl pl-3  text-[#201F54] ${classes.req}`}
                >
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
              </div>
            )}
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
        {values.faculty != "BBA" && (
          <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
            Family Information
          </h1>
        )}
        {values.faculty != "BBA" && (
          <div className="grid justify-center place-items-center px-2 md:px-32 py-5 grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
            <div className="flex flex-col space-y-1">
              <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                Fathers Name
              </label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="fathers_name"
                required
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">
                Occupation Name
              </label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="fathers_occupation"
                className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="fathers_cellno"
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="number"
              ></input>
            </div>

            <div className="flex flex-col space-y-1">
              <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                Mothers Name
              </label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="mothers_name"
                required
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Occupation</label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="mothers_occupation"
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Cell No</label>
              {""}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="mothers_cellno"
                required
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="number"
              ></input>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">
                Local Gurdain's Name
              </label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="localgurdain_name"
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Occupation</label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="localgurdain_occupation"
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="localgurdain_cellno"
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="number"
              ></input>
            </div>
          </div>
        )}
        {values.faculty != "BBA" && (
          <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
            Bus Faculty
          </h1>
        )}

        {values.faculty != "BBA" && (
          <div className="grid justify-center place-items-center px-2 md:px-32  py-5 grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
            <div className="flex flex-col space-y-2">
              <label className="text-xl pl-3  text-[#201F54]">
                Bus faculty
              </label>
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="bus_faculty"
                className="w-[14rem]  bg-white h-[2.6rem] border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
                value={values.bus_faculty}
              >
                <option>Select Bus Faculty</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Bus Stop</label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="bus_stop"
                className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
          </div>
        )}
        <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
          Academic Information
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[70%] py-2 mx-auto ">
            <label
              className={`text-xl pl-3 pt-2     text-[#201F54] ${classes.req}`}
            >
              Name of Previous School
            </label>
          </div>
          <div className="flex justify-center space-y-2  items-center w-full flex-col">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              onReset={handleReset}
              name="nameofprevschool"
              required
              className=" rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"
            ></input>
          </div>
        </div>
        <div className="grid  justify-center place-items-center px-2 md:px-32  py-5  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
          <div className="flex    flex-col space-y-1">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              {values.faculty != "BBA" ? "+2 Gpa" : "SendupGpa"}
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
          {values.faculty != "BBA" && (
            <div className="flex flex-col space-y-1">
              <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                SEE Board CGPA
              </label>{" "}
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="see_cgpa"
                required
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
          )}
          {values.faculty != "BBA" && (
            <div className="flex flex-col space-y-1">
              <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                Grade letter/Division:
              </label>{" "}
              <input
                
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="grade_div"
                required
                className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
          )}
        </div>
        {values.faculty != "BBA" && (
          <div className="grid justify-center place-items-center px-1 md:px-[15rem] py-5  gap-5  grid-cols-1 mx-auto  md:grid-cols-6 gap-2 md:gap-y-3  md:grid-row-2">
            <label className="text-xl pl-3 text-[#201F54]">Sendup</label>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">English</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="sendup_eng"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">C.Maths</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="sendup_cmath"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Opt.Maths</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="sendup_optmath"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Science</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="sendup_science"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Account</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="sendup_account"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>

            <label className="text-xl pl-3 text-[#201F54]">SEE</label>

            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">English</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="see_eng"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">C.Maths</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="see_cmath"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Opt.Maths</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="see_optmath"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Science</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="see_science"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xl pl-3 text-[#201F54]">Account</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="see_account"
                className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="text"
              ></input>
            </div>
          </div>
        )}
        {values.faculty != "BBA" && (
          <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
            Documents
          </h1>
        )}

        {values.faculty != "BBA" && (
          <div className="grid justify-center place-items-center px-[5rem] md:px-[15rem]  py-5 gap-5  grid-cols-1 mx-auto  md:grid-cols-2 gap-2 md:gap-y-3  md:grid-row-2">
            <div className="flex flex-col space-y-2 text-center">
              <label className={`font-bold ${classes.req}`}>Valid Photo</label>
              <input
                onChange={(e) => setPhoto(e.target.files[0])}
                onBlur={handleBlur}
                onReset={handleReset}
                required
                className="py-4 w-[250px]  md:w-[376px]  placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="file"
                name="photo"
              ></input>
            </div>
            <div className="flex  flex-col space-y-2 text-center">
              <label className={`text-[#201F54] font-bold ${classes.req}`}>
                SEE marksheet
              </label>
              <input
                onChange={(e) => setMarksheet(e.target.files[0])}
                onBlur={handleBlur}
                onReset={handleReset}
                required
                className="py-4 w-[250px] md:w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="file"
                name="see_marksheet"
              ></input>
            </div>
            {/* <div className="flex flex-col space-y-2 text-center">
            <label className={`text-[#201F54] font-bold ${classes.req}`}>
              See transfer Certificate
            </label>
            <input
              onChange={(e) => setTC(e.target.files[0])}
              onBlur={handleBlur}
              onReset={handleReset}
              required
              className="   py-4  w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="file"
              name="see_tc"
            ></input>
          </div> */}
            {/* <div className="flex flex-col space-y-2 text-center">
            <label className={`text-[#201F54] font-bold ${classes.req}`}>
              SEE Character Certificate
            </label>
            <input
              onChange={(e) => setCC(e.target.files[0])}
              onBlur={handleBlur}
              onReset={handleReset}
              required
              className="   py-4 w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
              type="file"
              name="see_cc"
            ></input>
          </div> */}
          </div>
        )}
        {values.faculty != "BBA" && (
          <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
            Interest on Extra Activities
          </h1>
        )}
        {values.faculty != "BBA" && (
          <div className="grid justify-center w-[55%] gap-5 py-5   grid-cols-1 mx-auto  md:grid-cols-4 gap-2 md:gap-y-5 ">
            <div className="flex space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="hobby"
                className="  w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                value={"BasketBall"}
              ></input>
              <label className={"font-bold"}>Basketball</label>
            </div>
            <div className="flex  space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                name="hobby"
                value={"VolleyBall"}
              ></input>
              <label className={"font-bold"}>Volley Ball</label>
            </div>
            <div className="flex  space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                name="hobby"
                value={"TableTennis"}
              ></input>
              <label className={"font-bold"}>Table Tennis</label>
            </div>
            <div className="flex  space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                name="hobby"
                value={"Football"}
              ></input>
              <label className={"font-bold"}>Football</label>
            </div>
            <div className="flex  space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="hobby"
                className="  w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                value={"Quiz"}
              ></input>
              <label className={"font-bold"}>Quiz</label>
            </div>
            <div className="flex  space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                name="hobby"
                value={"Speech"}
              ></input>
              <label className={"font-bold"}>Speech</label>
            </div>
            <div className="flex  space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                name="hobby"
                value={"Cricket"}
              ></input>
              <label className={"font-bold"}>Cricket</label>
            </div>
            <div className="flex  space-x-4 text-center">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                type="checkbox"
                name="hobby"
                value={"Chess"}
              ></input>
              <label className={"font-bold"}>Chess</label>
            </div>
          </div>
        )}
        {values.faculty != "BBA" && (
          <div className="flex space-x-3 gap-5 justify-center items-center">
            <label className="text-xl  text-[#201F54]">Others</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              onReset={handleReset}
              className=" w-[45%]  h-[3rem] border-2 border-[#000] px-[1rem] text-black rounded-xl"
              type="text"
              name="others"
              value={values.others}
            ></input>
          </div>
        )}
        <div className="flex items-center px-5 py-5 md:px-0  justify-center  space-x-3 text-center">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            onReset={handleReset}
            required
            className="  w-[24px] h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="checkbox"
            name="formisChecked"
          ></input>
          <label
            className={`text-[#201F54] tracking-tight md:tracking-widest font-bold ${classes.req}`}
          >
            I hereby declare that above provided data is correct. Form Cannot be
            edited after submission
          </label>
        </div>
        <div className="w-[100%] flex py-5 flex-col justify-center items-center">
          <button
            type="submit"
            disabled={loading}
            className="py-3  px-8 w-fit text-center bg-[#201F54] hover:bg-[#FF9900] text-white transition-all duration-200 ease-in rounded-full shadow-md  "
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </Container>
  );
};

export default AdmissionForm;
