import React from 'react'
import FacultyCard from './FacultyCard'

const users = [
    {
      id: "i1",
      name: "Ananta Panthi",
      phoneNo: "+977-9812367458",
      post: "Member Secratery",
    },
    {
      id: "i2",
      name: "Ananta  Panthi",
      phoneNo: "+977-9812367458",
      post: "Member Secratery",
    },
    {
      id: "i3",
      name: "Ananta  Panthi",
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


const BoardMember = () => {
  return (
            <div className='flex flex-col gap-10 pb-[10rem] justify-center items-center'>

           <section id="board_members" className="md:max-w-[60.313] mx-auto py-[3rem] md:py-[1rem] justify-center items-center max-w-6xl">
        <div className="flex flex-col justify-between space-y-10 ">
          <h1 className=" text-white bg-[#FF9900] font-semibold text-2xl md:text-3xl text-center  ">
            BOARD MEMBERS
          </h1>
          <div className="grid grid-cols-1 px-4  md:grid-cols-4 justify-between items-center mx-auto gap-10">
            {users.map((i) => (
                <FacultyCard isBig={true} />
                ))}
          </div>
        </div>
      </section> 

      <section className='md:max-w-[60.313] mx-auto py-[3rem] md:py-[1rem] justify-center items-center max-w-6xl'>
      <div className="flex flex-col justify-between space-y-10 ">
          <h1 className=" text-white bg-[#FF9900] font-semibold text-2xl md:text-3xl text-center  ">
          Message From Founder Principal
          </h1>
          <div className='flex flex-col md:flex-row gap-2 justify-center md:items-start  items-center md:gap-10 px-2 md:px-0 md:space-y-0 space-y-3'>
            <div className='bg-slate-300 flex flex-col space-y-2 w-[20rem] h-[20rem] py-2 pt-[3rem]' >
                <img className='w-[100%] h-[100%]' src="/images/dummy_user.png"></img>
                <span className='font-bold text-[#201F54] tracking-wide text-center'>Prof. Dr. R.C. Acharya</span>
                <span className='text-center'>Founder Principal</span>
            </div>

            <p className=' text-center md:text-start max-w-xl leading-8 tracking-wide'> Tilottama campus, established in 2053 has exemplified excellence in science and mangaement by providing quality and value based education. This year we are going to enroll 25th batch in +2 Science and Management.These days, Tilottama Campus is chosen not only by the toppers in SEE but also by the guardians because of its consistency in quality education, disciplinary and friendly environment. The incredible blending of excellent physical infrastructure and its proficient team of brilliant, experienced and committed faculty members are major attractions at Tilottama. The campus passionately nurtures the talent of students with the best feasible holistic and professional platform in order to make them competent to surpass the multiple needs and ethos of the scientific and corporate world.I am sure that all the students are looking for an outstanding, scholarly acade mic enviornment and quality campus facilities, that shall be found at Tilottama campus. Moreover, the ambitions of the newly enrolled students will be successfully fulfilled at Tilottama. I welcome you all to achieve your cherished goals and explore your potential by becoming a part as well as the member of this prestigious college.</p>

            
          </div>
         </div>
         
      </section>
      <section className='md:max-w-[60.313] mx-auto py-[3rem] md:py-[1rem] justify-center items-center max-w-6xl'>
      <div className="flex flex-col justify-between space-y-10 ">
          <h1 className=" text-white bg-[#FF9900] font-semibold text-2xl md:text-3xl text-center  ">
          Message From Vice-Principal
          </h1>
          <div className='flex flex-col md:flex-row gap-2 justify-center md:items-start  items-center md:gap-10 px-2 md:px-0 md:space-y-0 space-y-3'>
            <div className='bg-slate-300 flex flex-col space-y-2 w-[20rem] h-[20rem] py-2 pt-[3rem]' >
                <img src="/"></img>
                <span className='font-bold text-[#201F54] tracking-wide text-center'>Prof. Dr. R.C. Acharya</span>
                <span className='text-center'>Founder Principal</span>
            </div>

            <p className=' text-center md:text-start max-w-xl leading-8 tracking-wide'> Tilottama campus, established in 2053 has exemplified excellence in science and mangaement by providing quality and value based education. This year we are going to enroll 25th batch in +2 Science and Management.These days, Tilottama Campus is chosen not only by the toppers in SEE but also by the guardians because of its consistency in quality education, disciplinary and friendly environment. The incredible blending of excellent physical infrastructure and its proficient team of brilliant, experienced and committed faculty members are major attractions at Tilottama. The campus passionately nurtures the talent of students with the best feasible holistic and professional platform in order to make them competent to surpass the multiple needs and ethos of the scientific and corporate world.I am sure that all the students are looking for an outstanding, scholarly acade mic enviornment and quality campus facilities, that shall be found at Tilottama campus. Moreover, the ambitions of the newly enrolled students will be successfully fulfilled at Tilottama. I welcome you all to achieve your cherished goals and explore your potential by becoming a part as well as the member of this prestigious college.</p>

            
          </div>
         </div>
         
      </section>
      <section className='md:max-w-[60.313] mx-auto py-[3rem] md:py-[1rem] justify-center items-center max-w-6xl'>
      <div className="flex flex-col justify-between space-y-10 ">
          <h1 className=" text-white bg-[#FF9900] font-semibold text-2xl md:text-3xl text-center  ">
          Message From Vice-Principal
          </h1>
          <div className='flex flex-col md:flex-row gap-2 justify-center md:items-start  items-center md:gap-10 px-2 md:px-0 md:space-y-0 space-y-3'>
            <div className='bg-slate-300 flex flex-col space-y-2 w-[20rem] h-[20rem] py-2 pt-[3rem]' >
                <img src="/"></img>
                <span className='font-bold text-[#201F54] tracking-wide text-center'>Prof. Dr. R.C. Acharya</span>
                <span className='text-center'>Founder Principal</span>
            </div>

            <p className=' text-center md:text-start max-w-xl leading-8 tracking-wide'> Tilottama campus, established in 2053 has exemplified excellence in science and mangaement by providing quality and value based education. This year we are going to enroll 25th batch in +2 Science and Management.These days, Tilottama Campus is chosen not only by the toppers in SEE but also by the guardians because of its consistency in quality education, disciplinary and friendly environment. The incredible blending of excellent physical infrastructure and its proficient team of brilliant, experienced and committed faculty members are major attractions at Tilottama. The campus passionately nurtures the talent of students with the best feasible holistic and professional platform in order to make them competent to surpass the multiple needs and ethos of the scientific and corporate world.I am sure that all the students are looking for an outstanding, scholarly acade mic enviornment and quality campus facilities, that shall be found at Tilottama campus. Moreover, the ambitions of the newly enrolled students will be successfully fulfilled at Tilottama. I welcome you all to achieve your cherished goals and explore your potential by becoming a part as well as the member of this prestigious college.</p>

            
          </div>
         </div>
         
      </section>
                </div>
  )
}

export default BoardMember