import React, { useEffect } from "react";
import FacultyCard from "./FacultyCard";
import Container from "../Container/Container";
// import {Container} from '../../components/Container/Container'
import StyleCover from "../StyleCover/StyleCover";
import { useState } from "react";
import { data } from "autoprefixer";
const users = [
  {
    id: "i1",
    name: "Ranjan  Panthi",
    phoneNo: "+977-9812367458",
    post: "Member Secratery",
  },
  {
    id: "i2",
    name: "Ranjan  Panthi",
    phoneNo: "+977-9812367458",
    post: "Member Secratery",
  },
  {
    id: "i3",
    name: "Ranjan  Panthi",
    phoneNo: "+977-9812367458",
    post: "Member Secratery",
  },
  {
    id: "i4",
    name: "Ananta  Panthi",
    phoneNo: "+977-9812367458",
    post: "Member Secratery",
  },
];



const FacultyDetail = () => {
  const [deptData, setDeptData] = useState({
    physicsDept: [],
    chemDept: [],
    biomDept: [],
    compmDept: [],
    ecoDept: [],
    accountDept: [],
    financeDept: [],
    engDept: [],
    nepDept: []
  });
  useEffect( () => {
    const fetchData = async () => {
      try{
        const response = await fetch('/api/faculty');
        const resData = await response.json();
        const data = resData.msg
        console.log(data)
        setDeptData({
          physicsDept: data.filter(i => i.dept === 'Physics'),
          chemDept: data.filter(i => i.dept === 'Chemistry'),
          biomDept: data.filter(i => i.dept === 'Biology'),
          compmDept: data.filter(i => i.dept === 'Computer'),
          ecoDept: data.filter(i => i.dept === 'Economics'),
          accountDept: data.filter(i => i.dept === 'Accounts'),
          financeDept: data.filter(i => i.dept === 'Finance'),
          engDept: data.filter(i => i.dept === 'English'),
          nepDept: data.filter(i => i.dept === 'Nepali')
        });
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
    
  },[])


  return (
    <Container>
      <section>
      <StyleCover isLeft={false} src={"/images/stream/science/sci_stream_cover.png"} title={"Team of Tilottama Campus"}/>
      </section>

      <section id="faculty_science" className="max-w-[60.313] mx-auto py-[1rem] justify-center items-center">
        <div className="flex flex-col justify-between space-y-[2rem]">
          {/* <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            Science Faculty
          </h1> */}
          <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
            Department of Physics
          </h1>
          <div className="grid grid-cols-1 px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
            {deptData.physicsDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
            ))}
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Chemistry
            </h1>
            <div className="grid grid-cols-1 px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {deptData.chemDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Biology
            </h1>
            <div className="grid grid-cols-1 px-4 md:p-0 md:grid-cols-4  justify-between items-center mx-auto gap-20">
              {deptData.biomDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Computer
            </h1>
            <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {deptData.compmDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faculty_management" className="max-w-[60.313] mx-auto py-[1rem] justify-center items-center pb-[4rem]">
        <div className="flex flex-col justify-between space-y-10">
          {/* <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            Management Faculty
          </h1> */}
          <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
            Department of Economics
          </h1>
          <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
            {deptData.ecoDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
            ))}
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Finance
            </h1>
            <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {deptData.financeDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Account
            </h1>
            <div className="grid grid-cols-1 px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {deptData.accountDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10 ">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Nepali
            </h1>
            <div className="grid grid-cols-1   px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {deptData.nepDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-10 ">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of English
            </h1>
            <div className="grid grid-cols-1 px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {deptData.engDept?.map((i) => (
              <FacultyCard id={i.id} name={i.name} phoneno={i.phoneno} photo={i.photo}   isBig={false}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FacultyDetail;

