import React from "react";
import classes from "./AdmissionDetail.module.css";

import Container from "../Container/Container";

const AdmissionForm = () => {
  return (
    <Container>
      <div className="max-w-6xl   md:max-w-full">
        <section className={` relative ${classes.main}`}>
          <div className="">
            <img
              className="w-[100vw] h-[30vh] bg-cover opacity-80  "
              src="/images/stream/science/sci_stream_cover.png"
            ></img>
          </div>
          <div className="  left-[50%] mx-auto w-[80%] bg-[#FF9900] py-2 font-bold text-2xl text-center text-white rounded-full">
            Admission Form
          </div>

          <div className="  top-[100%] left-[50%]  flex  flex-col">
            <form className="flex max-w-[100%] mx-auto w-[80vw] flex-col justify-center items-center space-y-10 pb-[5rem]" >
              <div className="py-[5rem] grid grid-cols-1 gap-x-32 gap-y-3 md:grid-cols-3">
                <div className="flex flex-col space-y-2">
                  <label className="text-xl pl-3  text-[#201F54]">
                    Choose Stream
                  </label>
                  <select
                    className="w-[18rem] h-[3.5rem] border-2 border-[#201F54] text-black px-[1rem] rounded-full"
                    value="Science"
                  >
                    <option>Science</option>
                    <option>Mgmt</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xl pl-3  text-[#201F54]">
                    Choose Stream
                  </label>
                  <select
                    className="w-[18rem] h-[3.5rem] border-2 border-[#201F54] text-black px-[1rem] rounded-full"
                    value="Science"
                  >
                    <option>Science</option>
                    <option>Mgmt</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xl pl-3  text-[#201F54]">
                    Choose Stream
                  </label>
                  <select
                    className="w-[18rem] h-[3.5rem] border-2 border-[#201F54] text-black px-[1rem] rounded-full"
                    value="Science"
                  >
                    <option>Science</option>
                    <option>Mgmt</option>
                  </select>
                </div>
              </div>

              <div className="w-full flex  space-y-5  justify-center  md:item-center flex-col space-y-3">
                <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                  Basic Information
                </h1>
                <div>
                  <label className="text-[#201F54] pl-3 tracking-wide">
                    Name in Block Letter:*
                  </label>
                  <input className="rounded-3xl pl-3 py-3 w-full border-2 border-[#201F54]"></input>
                </div>

                <div>
                  <label className="text-[#201F54] pl-3 tracking-wide">
                    Name in Devanagari:
                  </label>
                  <input className="rounded-3xl pl-3 py-3 w-full border-2 border-[#201F54]"></input>
                </div>

                <div className="grid   grid-cols-1 md:mx-0 mx-auto md:grid-cols-3 gap-2  md:gap-10 md:grid-row-2">
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Date of Birth (B.S)
                    </label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="date"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Date of Birth (A.D)
                    </label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="date"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    {" "}
                    <label className="text-xl pl-3  text-[#201F54]">
                      Choose Stream
                    </label>
                    <select
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] text-black px-[1rem] rounded-full"
                      value="Science"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Telephone No
                    </label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="tel"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Phone No
                    </label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="number"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">Email</label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>

              <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                Address
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-32  mx-auto md:mx-0">
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Ward Number:
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    VDC/Municipality
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    District
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>
              </div>

              <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                Family Information
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 grid-row-3  gap-3 md:gap-x-32 gap-y-3 mx-auto md:mx-0">
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Fathers Name
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Occupation Name
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Mothers Name
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Occupation
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Local Gurdain's Name
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Occupation
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>
              </div>

              <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                Bus Faculty
              </h1>

              <div className="flex flex-col md:flex-row gap-3 md:gap-x-32 gap-y-3">
                <div className="flex flex-col space-y-2">
                  <label className="text-xl pl-3  text-[#201F54]">
                    Bus faculty
                  </label>
                  <select
                    className="w-[18rem] h-[3.5rem] border-2 border-[#201F54] text-black px-[1rem] rounded-full"
                    value="Science"
                  >
                    <option>Science</option>
                    <option>Mgmt</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Bus Stop
                  </label>{" "}
                  <input
                    className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>
              </div>

              <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                Academic Information
              </h1>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                  <div>
                    <label className="text-[#201F54] pl-3 tracking-wide">
                      Name of Previous School
                    </label>
                    <input className="rounded-3xl pl-3 py-3 w-full border-2 border-[#201F54]"></input>
                  </div>
                </div>

                {/* \\\\\ */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-32  mx-auto md:mx-0">
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Send-up CGPA
                    </label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      SEE Board CGPA
                    </label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Grade letter/Division:
                    </label>{" "}
                    <input
                      className="w-[243px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-x-10 gap-y-5  justify-center  items-center pt-[1rem] mx-auto md:mx-0">
                  <label className="text-xl pl-3 text-[#201F54]">Sendup</label>

                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      English
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      C.Maths
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Opt.Maths
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Science
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Account
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>

                  <label className="text-xl pl-3 text-[#201F54]">SEE</label>

                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      English
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      C.MATHS
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Opt.Maths
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Science
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Account
                    </label>
                    <input
                      className="w-[119px] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                </div>

                {/* \\\\\\\\ */}
              </div>
              <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                Documents
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-32">
                <div className="flex flex-col space-y-2 text-center">
                  <lablel className={"font-bold"}>Valid Photo</lablel>
                  <input
                    className="  w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="file"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2 text-center">
                  <lablel className={"font-bold"}>SEE marksheet</lablel>
                  <input
                    className="  w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="file"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2 text-center">
                  <lablel className={"font-bold"}>
                    See transfer Certificate
                  </lablel>
                  <input
                    className="  w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="file"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2 text-center">
                  <lablel className={"font-bold"}>
                    SEE Character Certificate
                  </lablel>
                  <input
                    className="  w-[376px] placeholder:choose file h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="file"
                  ></input>
                </div>
              </div>

              <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                Interest on Extra Activities
              </h1>

              <div className="flex flex-col  space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-x-20 gap-y-5">
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Basketball</label>
                  </div>
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Volley Ball</label>
                  </div>
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Table Tennis</label>
                  </div>
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Football</label>
                  </div>
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Quiz</label>
                  </div>
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Speech</label>
                  </div>
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Cricket</label>
                  </div>
                  <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>Chess</label>
                  </div>
                </div>


                <div className="flex space-x-3 justify-center items-center">
                    <label className="text-xl pl-3 text-[#201F54]">
                      Others  
                    </label>
                    <input
                      className=" w-[100%] h-[3rem] border-2 border-[#000] px-[1rem] text-black rounded-3xl"
                      type="text"
                    ></input>
                  </div>
                
              </div>

              <div className="flex  space-x-3 text-center">
                    <input
                      className="w-[24px]  h-[24px] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                      type="checkbox"
                    ></input>
                    <label className={"font-bold"}>I hereby declare that above provided data is correct. Form Cannot be edited after submission*.</label>
                  </div>
            </form>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default AdmissionForm;
