import React from "react";
import Container from "../Container/Container";
import StyleCover from "../StyleCover/StyleCover";
const AdmissionDetail = () => {
  return (
    <Container>
      <section>
        <StyleCover
          isLeft={true}
          src={"/images/stream/science/science_admission_proc.jpg"}
          title={"Admission procedure (Science)"}
        />
      </section>
      <section className="max-w-6xl flex  md:max-w-full  mx-5 pb-10">
        <div className="max-w-6xl mx-auto px-0 flex flex-col justify-between space-y-5 py-[3rem]">
          <div className="pb-[1rem]">
            <h1 className="text-4xl text-[#FF9900] font-bold">
              Eligibility Criteria
            </h1>
            <p className="w-[90%]  text-justify py-[1rem]">
              Students must have passed SEE examination or equivalent, at least
              B Grade for science (B+ in Comp. Maths, Opt. Maths, Science and
              English). Students have to pass the entrance examination conducted
              by Tilottama Secondary School.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-1 justify-center items-center">
            <div className="pb-[3rem] w-[100%]  md:w-[50%]">
              <h1 className="text-4xl text-[#FF9900] font-bold">
                Entrance Exam
              </h1>
              <p className="max-w-6xl w-[90%] text-justify md:w-[100%] leading-9 py-[1rem]">
                Tilottama Secondary School conducts a comprehensive evaluation
                system including written examination to select highly motivated
                group of students. The question format for the entrance
                examination will include multiple choice questions and some
                structured based questions. Entrance questions will be based on
                the secondary level curriculum with minor changes. The details
                of the entrance examination are given below:
              </p>
            </div>
{/* ///heheheh */}
<div className="mx-auto px-2 md:px-32 mx-2 md:mx-10  flex flex-col md:flex-row justify-evenly gap-2 md:gap-32 p-10  justify-center  pb-[5rem]">
          <div className=" w-[100%] md:w-[100%] flex flex-col spac-y-4 gap-2">

          <div className="bg-[#201F54] py-2 whitespace-nowrap  px-10 md:px-20 flex-col font-bold text-2xl text-center text-white">
            Entrance Exam Syallbus
          </div>

          <div className=" h-[15rem]  bg-[#F4F4F4] flex flex-col justify-center items-center">
            <ul className="flex  flex-col justify-between space-y-3 text-center">
              <li>English</li>
              <li>Science</li>
              <li>Compulsory & Opt.Mathematics</li>
              <li>General knowledge</li>
            </ul>
          </div>

          <div className="bg-[#201F54] py-2 font-bold text-2xl text-center text-white">
            Duration of Exam : 2 hours
          </div>

          
      </div>
      </div>
{/* heheheh */}
          </div>
        </div>
      </section>

      <div className="flex  flex-col space-y-5 pb-10">
        <div className=" transition-all duration-300 ease hover:bg-[#201F54] hover:text-white  border-4  border-[#201F54] py-2 font-bold text-2xl text-center text-[#201F54] w-[80%] mx-auto ">
          Download Entrance Preparation material
        </div>
        <div className=" hover:bg-[#BB7000] duration-200 ease-in cursor-pointer bg-[#FF9900] py-2 font-bold text-2xl text-center text-white w-[80%] mx-auto ">
          Apply Now
        </div>
      </div>
    </Container>
  );
};

export default AdmissionDetail;
