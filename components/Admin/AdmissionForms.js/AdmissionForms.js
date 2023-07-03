import React from "react";
import classes from "./AdmissionForms.module.css";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { CSVDownload, CSVLink } from "react-csv";
import ReactToPrint from "react-to-print";
import UserFormat, { PrintButton } from "./UserFormat";
import ReactDOMServer from "react-dom/server";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";

const data = [
  {
    id: "i1",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i2",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i3",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i4",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i5",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i6",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i7",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i8",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i9",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
  {
    id: "i10",
    formNo: "222",
    studentname: "sita",
    mblno: "22929292",
    faculty: "gta",
    status: "Download",
  },
];

const AdmissionForms = () => {
  const [admissionResult, setAdmissionResult] = useState([]);
  const [originalResult, setOriginalResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [filterOrder, setFilterOrder] = useState("Management");
  const componentRef = useRef();

  const printComponentRef = useRef();

  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    fetch("/api/admission-forms")
      .then((result) => result.json())
      .then((data) => {
        setAdmissionResult(data.msg);
        setOriginalResult(data.msg);
      })
      .catch((err) => console.log(err));
  }, []);

  // const downloadDataHandler = () => {
  //   setIsDownloadable(true)
  // }

  const allFormDisplayHandler = () => {
    // Reset admissionResult to the originalResult
    setAdmissionResult(originalResult);
  };

  const scienceFacultyFormHandler = () => {
    const updatedResult = originalResult.filter(
      (item) => item.faculty === "Science"
    );
    setAdmissionResult(updatedResult);
  };

  const managementFacultyFormHandler = () => {
    const updatedResult = originalResult.filter(
      (item) => item.faculty === "Management"
    );
    setAdmissionResult(updatedResult);
  };

  const sortFormNumber = () => {
    let updatedResult;
    if (sortOrder === "asc") {
      updatedResult = admissionResult.sort((a, b) => a.id - b.id);
      setSortOrder("desc");
    } else {
      updatedResult = admissionResult.sort((a, b) => b.id - a.id);
      setSortOrder("asc");
    }
    setAdmissionResult([...updatedResult]);
  };

  const studentNameSort = () => {
    let updatedResult;
    if (sortOrder === "desc") {
      updatedResult = [...admissionResult].sort((a, b) =>
        a.nameinblock.localeCompare(b.nameinblock)
      );
      setSortOrder("asc");
    } else {
      updatedResult = admissionResult;
      setSortOrder("desc");
    }
    setAdmissionResult(updatedResult);
  };

  const sortPhoneNumber = () => {
    let updatedResult;
    if (sortOrder === "asc") {
      updatedResult = admissionResult.sort((a, b) => a.id - b.id);
      setSortOrder("desc");
    } else {
      updatedResult = admissionResult.sort((a, b) => b.id - a.id);
      setSortOrder("asc");
    }
    setAdmissionResult([...updatedResult]);
  };

  const sortFacultyHandler = () => {
    let updatedResult;
    const onlyScience = admissionResult.filter((a) => a.faculty === "Science");
    const onlyManagement = admissionResult.filter(
      (a) => a.faculty === "Management"
    );
    const exceptthese = admissionResult.filter(
      (a) => a.faculty != "Management" && a.faculty != "Science"
    );
    if (filterOrder === "Science") {
      updatedResult = [...onlyScience, ...onlyManagement, ...exceptthese];

      setAdmissionResult(updatedResult);
      setFilterOrder("Management");
    } else if (filterOrder === "Management") {
      updatedResult = [...onlyManagement, ...onlyScience, ...exceptthese];
      setAdmissionResult(updatedResult);
      setFilterOrder("Science");
    }



  };

  const selectedItemHandler = (item) => {
    setSelectedItem(item);
  } 


  return (
    <div className="min-h-screen py-10 flex  bg-[#F0F0F0]  w-[100vw] pl-[22%] flex-col  pr-[3rem]">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Admission Forms</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>
      <div className="flex gap-14 py-10 group-hover:text-[#B65E0C]">
        <span
          onClick={allFormDisplayHandler}
          className="text-2xs py-4 tracking-widest font-bold border-b-2 border-[#B65E0C] text-[#B65E0C] cursor-pointer"
        >
          All Forms
        </span>
        <span
          onClick={scienceFacultyFormHandler}
          className="text-2xs py-4 tracking-widest font-bold hover:border-b-2 hover:border-[#B65E0C]  hover:text-[#B65E0C] cursor-pointer"
        >
          Science Faculty
        </span>
        <span
          onClick={managementFacultyFormHandler}
          className="text-2xs py-4 tracking-widest font-bold hover:border-b-2 hover:border-[#B65E0C]  hover:text-[#B65E0C] cursor-pointer"
        >
          Management Faculty
        </span>
      </div>

      <div className="flex gap-4  py-5 justify-end">
        <div className="flex w-[20%] justify-center items-center gap-2 shadow-md bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/download.svg"></img>
          <CSVLink data={admissionResult} filename="admissionForms">
            Download
          </CSVLink>
        </div>
        <div className="flex w-[20%] gap-2 shadow-md justify-center items-center bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/print.svg"></img>
          <ReactToPrint
            trigger={() => {
              return <button className="">Print</button>;
            }}
            content={() => printComponentRef.current}
          />
        </div>
      </div>

      <div
        ref={printComponentRef}
        className={`rounded-xl bg-white h-auto w-[100%] ${classes.sh}`}
      >
        <div className="font-semibold">
          <div className="flex justify-between justify-center px-[3rem] pt-[2rem]">
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/formno.svg"
              ></img>
              <h1>Form No</h1>
              <img
                onClick={sortFormNumber}
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/student_name.svg"
              ></img>
              <h1>Student Name</h1>
              <img
                onClick={studentNameSort}
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/mbl_no.svg"
              ></img>
              <h1>Mobile Number</h1>
              <img
                onClick={sortPhoneNumber}
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/faculty.svg"
              ></img>
              <h1>Faculty</h1>
              <img
                onClick={sortFacultyHandler}
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/status.svg"
              ></img>
              <h1>Status</h1>
            </div>
          </div>
        </div>
        <div className="px-[3rem]">
          <span className="block w-[93%] h-[0.09rem] mx-auto bg-[#D2CCCC] mt-8"></span>
          {admissionResult.map((i) => (
            <div
              key={i.id}
              className="flex justify-center justify-between py-5 pt-[1rem]"
            >
              <span className="">{i.id}</span>
              <span className="">{i.nameinblock}</span>
              <span className="">{i.p_no}</span>
              <span className="">{i.faculty}</span>
              <div>
                {/* <PrintButton title={"Download"} className={"text-justify cursor-pointer text-[#B65E0C]"}/> */}

                 {/* <button
                  onClick={() => selectedItemHandler(i)}
                  key={i.id}
                  className="text-justify cursor-pointer text-[#B65E0C]"
                >
                  Download
                </button>  */}

                {
                  <div className="" key={i.id} onMouseEnter={() => selectedItemHandler(i)}>
                  <ReactToPrint
                    key={i.id}
                    trigger={(i) => {
                      return (
                        <button className="text-justify cursor-pointer text-[#B65E0C]">
                          Download
                        </button>
                      );
                    }}
                    content={() => componentRef.current}
                    />
               </div>
                }
              </div>
              {
                <div className="hidden">
                  <UserFormat ref={componentRef} data={selectedItem} />
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionForms;
