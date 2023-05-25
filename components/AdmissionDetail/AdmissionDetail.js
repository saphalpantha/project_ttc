import React from "react";

const AdmissionDetail = () => {
  return (
    <div>
      <section>
        <div className="">
          <img
            className="w-[100%] h-[100%]"
            src={`/images/stream/science/sci_stream_cover.svg`}
          ></img>
        </div>
      </section>
      <section className="max-w-6xl md:max-w-full container">
        <div className="max-w-6xl mx-auto px-0 flex flex-col justify-between space-y-5 py-[3rem]">
          <div className="pb-[1rem]">
            <h1 className="text-4xl text-[#FF9900] font-bold">
              Eligibility Criteria
            </h1>
            <p className="w-[100%] py-[1rem]">
              Students must have passed SEE examination or equivalent, at least
              B Grade for science (B+ in Comp. Maths, Opt. Maths, Science and
              English). Students have to pass the entrance examination conducted
              by Tilottama Secondary School.
            </p>
          </div>

          <div className="pb-[3rem]">
            <h1 className="text-4xl text-[#FF9900] font-bold">Entrance Exam</h1>
            <p className="w-[100%] py-[1rem]">
              Tilottama Secondary School conducts a comprehensive evaluation
              system including written examination to select highly motivated
              group of students. The details of the entrance examination are
              given below:
            </p>
          </div>
        </div>

        <div className="mx-auto flex flex-col justify-center max-w-[73rem] space-y-5 pb-[5rem]">
        <div className="bg-[#201F54] py-2 font-bold text-2xl text-center text-white">
        Entrance Exam Syallbus</div>

                <div className="w-[100%] h-[15rem] bg-[#F4F4F4] flex flex-col justify-center items-center">
                    <ul className="flex flex-col justify-between space-y-3 text-center">
                        <li>English</li>
                        <li>Science</li>
                        <li>Compulsory & Opt.Mathematics</li>
                        <li>General knowledge</li>
                    </ul>
                </div>
                

        <div className="bg-[#201F54] py-2 font-bold text-2xl text-center text-white">
        Duration of Exam : 2 hours</div>
        <div className="border-[4px] border-[#201F54] py-2 font-bold text-2xl text-center text-[#201F54]">
        Download Entrance Preparation material</div>
        <p className="text-2xs tracking-widest leading-8  ">The question format for the entrance examination will include multiple choice questions and some structured based questions. Entrance questions will be based on the secondary level curriculum with minor changes.</p>
        <div className="py-[1rem] flex flex-col space-y-10">
        <h1 className="text-4xl text-[#FF9900] font-bold">
        Pedagogy
            </h1>
            <p className="text-2xs leading-8 tracking-wide">Students must have passed SEE examination or equivalent, as the faculty members of Tilottama use modern teaching methodology to deliver their lectures by using multimedia and audio visual aids in addition to white boards in the classrooms. Teaching methodology will be balanced between the oratory method as well as the participatory method.</p>
            <div className="bg-[#FF9900] py-2 font-bold text-2xl text-center text-white">
        Apply Now</div>
        </div>
        </div>

      </section>
    </div>
  );
};

export default AdmissionDetail;
