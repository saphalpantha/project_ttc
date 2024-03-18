import { Fragment, useState } from "react";
import classes from "./UpdatedResultInternal.module.css";
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import InternalResultPortal from "../UI/InternalResultPortal";

const UpdatedResultInternal = () => {
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
      console.log(data)
      if (response.ok) {
        setIsOpen(true);
        setResult(data.msg);
      } else {
        // console.log(data)
        alert('Incorrect Input. Please try again');
      }
    } catch (err) {
      // console.log(err)
      alert("Something Went Wrong!!");
    } finally {
      setisLoading(false);
    }
  };
  

  const scienceSecList_11 = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K"];
  const scienceSecList_12 = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K"];
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
    <div className="bg-white overflow-clip relative min-h-screen">
       {isOpen && (
        <InternalResultPortal
          result={result}
          isOpen={isOpen}
          img={"/images/banner.png"}
          onClose={() => setIsOpen(false)}
        />
      )}
      <div className="w-[120vw] h-[110vh] absolute top-[-60%] left-[-20%] bg-[#F4F8FA] rotate-[160deg]">
        <div className="h-[3rem] w-full relative bg-[#17155BA8]">
          <div className="bg-[#FF99008F]  h-[3rem] w-[365px] top-[50%]  translate-x-[35%]  absolute    right-[35%]"></div>
        </div>
      </div>
      <div className={` flex flex-col-reverse md:flex-row relative`}>
        <div className="flex m-8 md:m-20  text-[#404040] flex-col gap-1 max-w-md">
          <h1 className="font-bold text-[1.2rem]">Read this carefully</h1>
          <ol className="flex  list-disc ml-4 flex-col">
            <li className="text-justify">
              Enter your correct roll number in the roll number section.{" "}
            </li>
            <li className="text-justify">
              Enter your full name in Full Name section{" "}
            </li>
          </ol>
          <p className="italic">
            If you are having problem to view you result feel free to contact at
            info@tilottama.edu.np or admin@tilottama.edu.np.
          </p>
        </div>
        <form className="  flex flex-col justify-center items-center w-full max-w-xl  md:absolute  md:top-[20%] md:right-[5%]  mx-auto  shadow-[5px 9px 15px -1px]  shadow-[#00000040]  h-[35rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl " onSubmit={submitHandler}>
          <div className="flex w-[95%] px-4 md:px-14 flex-col gap-4 ">
            <div className="grid gap-4 pt-3 justify-center items-center  grid-cols-1">
              <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
                Check your Internal Exam Result
              </h1>

              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949] ">
                  Choose Faculty
                </label>
                <select
                  required
                  onChange={(e) => setStream(e.target.value)}
                  className="w-full border-2 pl-4  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  value={stream}
                >
                  <option>Select Faculty</option>
                  <option>Science</option>
                  <option>Management</option>
                </select>
              </div>

              {/* <div className="flex flex-col gap-2">
              <label className="text-[1.2rem] text-[#494949] ">
              Choose Faculty
              </label>
              <input
                name="faculty"
                required
                className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                type="text"
              ></input>
            </div> */}

              <div className="flex flex-col">
                <label className="text-[1.2rem] text-[#494949]">
                  Choose Class
                </label>
                <select
                  required
                  onChange={(e) => setEnteredClass(e.target.value)}
                  className="w-full border-2 pl-4  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent"
                  value={enteredclass}
                >
                  <option>Select Class</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">
                  Choose Section
                </label>
                <select
                  required
                  onChange={(e) => setSection(e.target.value)}
                  className="w-full border-2 pl-4  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent"
                  value={section}
                >
                  <option>Select Section</option>
                  {renderSections().length > 0 &&
                    renderSections().map((i) => <option>{i}</option>)}
                </select>
              </div>






                <div className="flex  flex-col md:flex-row md:justify-between md:items-center">



              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">
                  Date of Birth
                </label>
                <Calendar
                  language="en"
                  placeholder="Select Date"
                  hideDefaultValue={true}
                  className="w-full border-2 pl-4  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent"
                  onChange={({ bsDate }) => setDob(bsDate)}
                  theme="deepdark"
                  />

              </div>





              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">
                  Roll No
                </label>
                <input
                  required
                  onChange={(e) => setRegNo(e.target.value)}
                  type="number"
                  className="w-full border-2 pl-4  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent"
                  ></input>
              </div>

                  </div>





            </div>

            <button
              type="submit"
              className="text-center md:col-span-2 active:bg-[#3F3BCB]  justify-center transition-all duration-200 ease-in-out hover:bg-[#635eff]  rounded-xl text-white font-bold items-center w-full bottom-10   h-[2.5rem] bg-[#3F3BCB]"
            >
              {" "}
              {isLoading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedResultInternal;
