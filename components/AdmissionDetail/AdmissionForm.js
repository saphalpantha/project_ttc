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
              Choose Stream
            </label>
            <select
              required
              className=" w-[14rem] h-[2.6rem]  border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
              value="Science"
            >
              <option>Science</option>
              <option>Mgmt</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Choose Stream
            </label>
            <select
              required
              className="w-[14rem] h-[2.6rem]  border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
              value="Science"
            >
              <option>Science</option>
              <option>Mgmt</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
              Choose Stream
            </label>
            <select
              required
              className="  w-[14rem] h-[2.6rem]  border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
              value="Science"
            >
              <option>Science</option>
              <option>Mgmt</option>
            </select>
          </div>
        </div>
      </div>

      <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
        Basic Information
      </h1>
      <div className="flex flex-col  justify-center items-center">
                  <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                    Name in Block Letter
                  </label>
                  <input
                    required
                    className="rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"
                  ></input>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <label className="text-[#201F54] pl-3 tracking-wide">
                    Name in Devanagari:
                  </label>
                  <input className="rounded-xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"></input>
                </div>

                <div className="grid justify-center place-items-center px-32  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
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
                      className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] text-black px-[1rem] rounded-xl"
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
              <div className="grid justify-center place-items-center px-32  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
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
              <div className="grid justify-center place-items-center px-32  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
                <div className="flex flex-col space-y-1">
                  <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                    Fathers Name
                  </label>{" "}
                  <input
                    required
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Occupation Name
                  </label>{" "}
                  <input
                    className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
                  <input
                  
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
                    Mothers Name
                  </label>{" "}
                  <input
                    required
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Occupation
                  </label>{" "}
                  <input
                  
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
                  <input
                    required
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Local Gurdain's Name
                  </label>{" "}
                  <input
                  
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">
                    Occupation
                  </label>{" "}
                  <input
                    
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xl pl-3 text-[#201F54]">Cell No</label>{" "}
                  <input
                    required
                    className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>
              </div>
              <h1 className="w-[80%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
              Bus Faculty
              </h1>

              <div className="grid justify-center place-items-center px-32  grid-cols-1 mx-auto  md:grid-cols-3 gap-2 md:gap-y-3  md:grid-row-2">
                <div className="flex flex-col space-y-2">
                  <label className="text-xl pl-3  text-[#201F54]">
                    Bus faculty
                  </label>
                  <select
                    className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] text-black px-[1rem] rounded-full"
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
                    className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-3xl"
                    type="number"
                  ></input>
                </div>
              </div>
              <h1 className=" w-[100%] text-center  py-3 bg-[#201F54] text-white font-bold">
                Academic Information
              </h1>
              <div className="flex flex-col justify-center items-center" >

              <div className="flex flex-col">
                    <label className={`text-xl pl-3   text-[#201F54] ${classes.req}`}>
                      Name of Previous School
                    </label>
                    <input
                      required
                      className=" rounded-3xl pl-3 py-2 w-[70%] border-2 border-[#201F54]"
                      ></input>
                </div>
                      </div>

    </Fragment>
  );
};

export default AdmissionForm;
