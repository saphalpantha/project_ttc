import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import InternalResultPortal from "../UI/InternalResultPortal";

import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';

const ResultForInt = () => {
  const [result, setResult] = useState({});
  const [stream, setStream] = useState("");
  const [enteredclass, setEnteredClass] = useState("");
  const [dob, setDob] = useState("");
  const [regNo, setRegNo] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [section, setSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const enteredData = {
    stream,
    enteredclass,
    dob,
    section,
    regNo,
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const response = await fetch("/api/internal-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(enteredData),
      });

      const data = await response.json();
      if (data.success === true) {
        setIsOpen(true);
        setResult(data.msg);
      } else {
        alert('Incorrect Input.Please try again')
      }
    } catch (err) {
      alert("Something Went Wrong !");
      return;
    } finally {
      setisLoading(false);
    }
  };

  const scienceSecList_11 = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
  const scienceSecList_12 = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
  const managementSecList_11 = ["A", "B", "Morning"];
  const managementSecList_12 = ["A", "B", "Morning"];

  const renderSections = () => {
    if (stream == "Science" && enteredclass == 11) {
      return scienceSecList_11;
    } else if (stream == "Science" && enteredclass == 12) {
      return scienceSecList_12;
    } else if (stream == "Management" && enteredclass == 11) {
      return managementSecList_11;
    } else if (stream == "Management" && enteredclass == 12) {
      return managementSecList_12;
    } else {
      return [];
    }
  };

  return (
    <Fragment>
      {isOpen && (
        <InternalResultPortal
          result={result}
          isOpen={isOpen}
          img={"/images/banner.png"}
          onClose={() => setIsOpen(false)}
        />
      )}
      <div className="flex flex-col justify-center items-center">
        <section className=" h-[15rem]">
          <div className="w-[100%]">
            <img
              className="w-[100vw] h-[50vh] bg-contain opacity-80  "
              src="/images/result_cover.svg"
            ></img>
          </div>
        </section>

        <section className="max-w-6xl md:max-w-full container max-h-fit sticky fixed mx-auto justify-center">
          <div className="mx-auto px-0 flex flex-col justify-between space-y-5 py-[3rem]  items-center ">
            <div className="pb-[1rem]">
              <div className="bg-[#FF9900] px-10 py-2 font-bold text-2xl text-center text-white rounded-full">
                Internal Result
              </div>
              <form
                onSubmit={submitHandler}
                className="flex flex-col  justify-center items-center gap-10"
              >
                <div className=" py-[4rem] w-[100%] flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center   text-[#201F54]">
                      Choose Faculty
                    </label>
                    <select
                      required
                      onChange={(e) => setStream(e.target.value)}
                      className="w-[15rem] h-[2.5rem] bg-white border-2 border-[#201F54] text-black px-[1rem] rounded-full"
                      value={stream}
                    >
                      <option>Select Faculty</option>
                      <option>Science</option>
                      <option>Management</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center  text-[#201F54]">
                      Choose Class
                    </label>
                    <select
                      required
                      onClick={(e) => setEnteredClass(e.target.value)}
                      className="w-[15rem] h-[2.5rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-full"
                      value={enteredData.enteredClass}
                    >
                      <option>Select Class</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center  text-[#201F54]">
                      Choose Section
                    </label>
                    <select
                      required
                      onClick={(e) => setSection(e.target.value)}
                      className="w-[15rem] h-[2.5rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-full"
                      value={section}
                    >
                      {renderSections().length > 0 ? (
                        renderSections().map((i) => <option>{i}</option>)
                      ) : (
                        <option>Select Section</option>
                      )}
                    </select>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center text-[#201F54]">
                      Date of Birth
                    </label>
                    <Calendar language="en" placeholder="Select Date" hideDefaultValue={true} className="w-[15rem] h-[2.5rem] border-2 border-[#201F54] text-xl text-black px-[1rem] rounded-full placeholder:text-black" onChange={({bsDate}) => setDob(bsDate) } theme='deepdark' />
                    {/* <input
                      required
                      onChange={(e) => setDob(e.target.value)}
                      type="date"
                      className="w-[15rem] h-[2.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-full"
                    ></input> */}
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center text-[#201F54]">
                      Roll No
                    </label>
                    <input
                      required
                      onChange={(e) => setRegNo(e.target.value)}
                      type="number"
                      className="w-[15rem] h-[2.5rem] border-2 border-[#201F54] text-xl text-black px-[1rem] rounded-full"
                    ></input>
                  </div>
                </div>
                <button className="py-3  bg-[#201F54] rounded-full hover:bg-[#FF9900] transition-all duration-200 cursor-pointer ease-in  text-center  px-8 text-white text-xl font-semibold">
                  {isLoading ? "Submitting" : "Check Result"}
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-[80%] mx-auto pt-5 pb-[10rem]">
          <div className="bg-[#E4E3E3] flex justify-center items-center  py-10 md:py-14  px-5 md:px-2 font-bold text-2xs  md:text-xl text-center text-black rounded-full">
            <p className="max-w-6xl md:max-w-5xl text-center text-2xs">
              If you are having problem to view you result feel free to contact
              at info@tilottama.edu.np or admin@tilottama.edu.np.
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ResultForInt;
