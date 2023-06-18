import React from "react";
import { Fragment } from "react";
import classes from "./AdmissionDetail.module.css";
const AdmissionForm = () => {
  return (
    <Fragment>
      <h1 className="w-[95%]   mx-auto my-4 py-3 rounded-full text-center font-bold bg-[#FF9900] text-white">
        Admission Form
      </h1>
      <div>
        <div className="flex justify-center py-5 flex-col  md:flex-row gap-2 md:gap-32 items-center">
          <div className="flex flex-col space-y-2">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Faculty
            </label>
            <select
              required
              className=" w-[14rem] h-[2.6rem]  bg-white border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
              value="Science"
            >
              <option>Science</option>
              <option>Management</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Grade
            </label>
            <select
              required
              className="w-[14rem] h-[2.6rem]  border-2 bg-white  border-[#201F54] text-black px-[1rem] rounded-xl"
              value="Science"
            >
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Choose Shift
            </label>
            <select
              required
              className="  w-[14rem] h-[2.6rem] bg-white  border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
              value="Science"
            >
              <option>Morning</option>
              <option>Day</option>
            </select>
          </div>
        </div>
      </div>

      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Basic Information
      </h1>
      <div className="flex flex-col justify-center items-center gap-4 pb-2 place-items-center">
        <label className={`text-xl pl-3 pt-2    text-[#201F54] ${classes.req}`}>
          Name in Block Letter
        </label>
        <input
          required
          className="rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"
        ></input>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 pb-2">
        <label className="text-[#201F54] text-xl pl-3 pt-2 tracking-wide">
          Name in Devanagari:
        </label>
        <input className="rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"></input>
      </div>

      <div className="grid justify-center place-items-center px-32 py-5  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">
            Date of Birth (B.S)
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="date"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            Date of Birth (A.D)
          </label>{" "}
          <input
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
            required
            className="  w-[14rem] h-[2.6rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-xl"
            value="Science"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Telephone No</label>{" "}
          <input
            className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="tel"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            Phone No
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="number"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Email</label>{" "}
          <input
            className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
      </div>
      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Address
      </h1>
      <div className="grid justify-center place-items-center px-32 py-5  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            Ward Number:
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            VDC/Municipality
          </label>{" "}
          <input
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
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
      </div>
      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Family Information
      </h1>
      <div className="grid justify-center place-items-center px-32 py-5 grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            Fathers Name
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Occupation Name</label>{" "}
          <input
            className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
          <input
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="number"
          ></input>
        </div>

        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            Mothers Name
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Occupation</label>{" "}
          <input
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
          <input
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
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Occupation</label>{" "}
          <input
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="number"
          ></input>
        </div>
      </div>
      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Bus Faculty
      </h1>

      <div className="grid justify-center place-items-center px-32  py-5 grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
        <div className="flex flex-col space-y-2">
          <label className="text-xl pl-3  text-[#201F54]">Bus faculty</label>
          <select
            className="w-[14rem]  bg-white h-[2.6rem] border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
            value="Science"
          >
            <option>Science</option>
            <option>Management</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Bus Stop</label>{" "}
          <input
            className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="number"
          ></input>
        </div>
      </div>
      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Academic Information
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center space-y-2  items-center w-full flex-col">
          <label className={`text-xl pl-3  pt-2  text-[#201F54] ${classes.req}`}>
            Name of Previous School
          </label>
          <input
            required
            className=" rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"
          ></input>
        </div>
      </div>
      <div className="grid justify-center place-items-center px-32  py-5  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
        <div className="flex   flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            Send-up CGPA
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            SEE Board CGPA
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
            Grade letter/Division:
          </label>{" "}
          <input
            required
            className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
      </div>
      <div className="grid justify-center place-items-center px-[15rem] py-5  gap-5  grid-cols-1 mx-auto  md:grid-cols-6 gap-2 md:gap-y-3  md:grid-row-2">
        <label className="text-xl pl-3 text-[#201F54]">Sendup</label>

        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">English</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">C.Maths</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Opt.Maths</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Science</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Account</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>

        <label className="text-xl pl-3 text-[#201F54]">SEE</label>

        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">English</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">C.MATHS</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Opt.Maths</label>
          <input
            className="  w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Science</label>
          <input
            className="w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xl pl-3 text-[#201F54]">Account</label>
          <input
            className="w-[119px] h-[2.7rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="text"
          ></input>
        </div>
      </div>
      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Documents
      </h1>

      <div className="grid justify-center place-items-center px-[15rem]  py-5 gap-5  grid-cols-1 mx-auto  md:grid-cols-2 gap-2 md:gap-y-3  md:grid-row-2">
        <div className="flex flex-col space-y-2 text-center">
          <lablel className={"font-bold"}>Valid Photo</lablel>
          <input
            required
            className="   py-4 w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="file"
          ></input>
        </div>
        <div className="flex  flex-col space-y-2 text-center">
          <label className={`text-[#201F54] font-bold ${classes.req}`}>
            SEE marksheet
          </label>
          <input
            required
            className="    py-4 w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="file"
          ></input>
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <label className={`text-[#201F54] font-bold ${classes.req}`}>
            See transfer Certificate
          </label>
          <input
            required
            className="   py-4  w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="file"
          ></input>
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <label className={`text-[#201F54] font-bold ${classes.req}`}>
            SEE Character Certificate
          </label>
          <input
            required
            className="   py-4 w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
            type="file"
          ></input>
        </div>
      </div>
      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Interest on Extra Activities
      </h1>
      <div className="grid justify-center w-[55%] gap-5 py-5   grid-cols-1 mx-auto  md:grid-cols-4 gap-2 md:gap-y-5 ">
      <div className="flex  space-x-4 text-center">
                    <input
                      required
                      className="  w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Basketball</label>
                  </div>
                  <div className="flex  space-x-4 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Volley Ball</label>
                  </div>
                  <div className="flex  space-x-4 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Table Tennis</label>
                  </div>
                  <div className="flex  space-x-4 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Football</label>
                  </div>
                  <div className="flex  space-x-4 text-center">
                    <input
                      required
                      className="  w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Quiz</label>
                  </div>
                  <div className="flex  space-x-4 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Speech</label>
                  </div>
                  <div className="flex  space-x-4 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Cricket</label>
                  </div>
                  <div className="flex  space-x-4 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Chess</label>
                  </div>
              </div>
                  <div className="flex space-x-3 gap-5 justify-center items-center">
                  <label className="text-xl  text-[#201F54]">Others</label>
                  <input
                    className=" w-[45%]  h-[3rem] border-2 border-[#000] px-[1rem] text-black rounded-xl"
                    type="text"
                  ></input>
                </div>
                <div className="flex items-center px-5 py-5 md:px-0  justify-center  space-x-3 text-center">
                <input
                  required
                  className="  w-[24px] h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-xl"
                  type="checkbox"
                ></input>
                <label className={`text-[#201F54] tracking-tight md:tracking-widest font-bold ${classes.req}`}>
                  I hereby declare that above provided data is correct. Form
                  Cannot be edited after submission*.
                </label>
              </div>
              

    </Fragment>
  );
};

export default AdmissionForm;
