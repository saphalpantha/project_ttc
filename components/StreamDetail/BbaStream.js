import React, { Fragment } from "react";
import StreamCardList from "./StreamCardList";
import SubjectListCardForBba from "./SubjectListCardForBba";
import Container from '../Container/Container'
import StyleCover from "../StyleCover/StyleCover";

import Link from "next/link";



// const streamSubjectBBA = [
//     {sem:'I', subjects:["English", "Nepali", "Account", "Economics"]},
//     {sem:'II', subjects:["English", "Nepali", "Account", "Economics"]},
//     {sem:'II', subjects:["English", "Nepali", "Account", "Economics"]},
//     {sem:'IV', subjects:["English", "Nepali", "Account", "Economics"]},
//     {sem:'V', subjects:["English", "Nepali", "Account", "Economics"]},
//     {sem:'VI', subjects:["English", "Nepali", "Account", "Economics"]},
//     {sem:'VII', subjects:["English", "Nepali", "Account", "Economics"]},
//     {sem:'VIII', subjects:["English", "Nepali", "Account", "Economics"]},
// ]


const BbaStream = ({streamData}) => {
  return (
    <Container>
      <section>
      <StyleCover isLeft={true} src={streamData.img} title={`${streamData.faculty_name} Faculty`}/>
      </section>

      <section className="flex flex-col pb-[5rem] w-[100%] md:w-[1278px] justify-center  mx-auto">
        <div className="max-w-6xl mx-auto bg-white flex flex-col md:flex-row space-y-5 md:space-y-10 justify-around  pb-[5rem] pt-[5rem] justify-center items-center">
          <div className="flex flex-col justify-center space-y-5 px-[2rem]">
            <h1 className="text-4xl text-[#FF9900] font-bold">
              {`Department of ${streamData.faculty_name}`}
            </h1>
            {streamData.para.map(i => (
            <p className="max-w-[50rem] text-justify leading-9 text-2xs pb-[0.2rem]">
                {i.content}
            </p>

            ))}
           
          </div>
          <div className="px-[2rem]">
            <img
              className="w-[100%] h-[100%]"
              src={streamData.section_img}
              alt="."
              ></img>
          </div>
        </div>
        <div className="flex flex-col  pb-[1rem] px-[2.3rem] md:px-[5.5rem]   justify-center space-y-5">
          <h1 className="text-4xl text-[#FF9900] font-bold">
            Objective of Tilottama Campus
          </h1>
          <ol
            className="max-w-4xl text-justify flex flex-col space-y-3 pl-[1rem] "
            style={{ listStyle: "disc" }}
            >
            {streamData.objective.map(i => (
              <li>{i.content}</li>
            ))}
          </ol>
        </div>
        <StreamCardList />
      </section>
      <section className="max-w-6xl md:max-w-full pb-[5rem] px-[4ren] md:px-0">
        <div className="mx-auto max-w-6xl space-y-[5rem]">
          <h1 className="text-5xl text-[#FF9900] py-3 font-bold text-center">
            Course Strucutre
          </h1>
          <div className="grid mx-auto gap-32 px-[2rem] justify-center items-center grid-flow-col-1 pb-[5rem] md:grid-cols-2 ">

          {streamData.streamSubjectBBA?.map((sub) => {
            return (
              <SubjectListCardForBba sem={sub.sem} subjectLists={sub.subjects}/>
              );
            })}
        </div>

          <Link href={`/${streamData.link}`}><div className=" transition-all duration-300 ease hover:bg-[#201F54] hover:text-white  text-center mx-auto font-semibold text-[#201F54] text-2xl w-[85%] border-4 border-[#201F54] py-2 ">
            Faculty Members Detail
          </div>
          </Link>
        </div>
      </section>
  </Container>
  );
};

export default BbaStream;
