import React from "react";
import StreamCardList from "./StreamCardList";
import SubjectListCardForplus2 from "./SubjectListCard";
import Container from "../Container/Container";
import StyleCover from "../StyleCover/StyleCover";
import Link from "next/link";
import Image from "next/image";

const StreamDetailLayout = ({ streamData }) => {
  return (
    <Container>
      <section className="">
        <StyleCover
          isLeft={true}
          src={streamData.img}
          title={`${streamData.faculty_name} Faculty`}
        />
      </section>
      <section className="flex flex-col pb-[5rem] w-[100%] md:w-[1278px] justify-center  mx-auto">
        <div className="max-w-6xl mx-auto bg-white flex flex-col md:flex-row space-y-5 md:space-y-10 justify-around  pb-[5rem] pt-[5rem] justify-center items-center">
          <div className="flex flex-col justify-center space-y-5 px-[2rem]">
            <h1 className="text-4xl text-[#FF9900] font-bold">
              {`Department of ${streamData.faculty_name}`}
            </h1>
            {streamData.para.map((i) => (
              <p className="max-w-[50rem] text-justify leading-9 text-2xs pb-[0.2rem]">
                {i.content}
              </p>
            ))}
          </div>
          <div className="p-[2rem]  w-fit md:w-[45rem] h-fit">
            {/* <img
              className="w-[100%] h-[100%] object-contain"
              src={streamData.section_img}
              alt="."
            ></img> */}
            <Image
              className="w-[100%] h-[100%] object-contain"
              src={streamData.section_img}
              alt="."
              width={400}
              height={400}
            />

          </div>
        </div>
        <div className="flex flex-col pb-[1rem] px-[2.1rem] md:px-[5.4rem] justify-center space-y-5">
          <h1 className="text-4xl  text-[#FF9900] font-bold">
            Objective of Tilottama Campus
          </h1>
          <ol
            className="max-w-4xl text-justify flex flex-col space-y-2 pl-[1rem] "
            style={{ listStyle: "disc" }}
          >
            {streamData.objective.map((i) => (
              <li>{i.content}</li>
            ))}
          </ol>
        </div>
        <StreamCardList />
      </section>
      <section className="max-w-6xl md:max-w-full pb-[5rem]">
        <div className="mx-auto max-w-4xl space-y-[5rem]">
          <h1 className="text-5xl text-[#FF9900] font-bold text-center">
            Course Strucutre
          </h1>
          {streamData.streamSubject?.map((sub) => {
            return (
              <div className="flex flex-col px-[2rem] space-y-5 mx-auto">
                <div className="bg-[#201F54] py-2 font-bold text-2xl text-center text-white">
                  {sub.grade}
                </div>
                <div className="flex flex-col gap-10 justify-between pb-[1rem] md:flex-row md:gap-20">
                  <SubjectListCardForplus2
                    isOptional={false}
                    subjectLists={sub?.compSubjectLists}
                  />
                  <SubjectListCardForplus2
                    isOptional={true}
                    subjectLists={sub?.optionalSubjectLists}
                  />
                </div>
              </div>
            );
          })}

          <Link href={`/${streamData.link}`}>
            <div className=" transition-all duration-300 ease hover:bg-[#201F54] hover:text-white  text-center font-semibold text-[#201F54] text-2xl w-[85%] mx-auto border-4 border-[#201F54] py-2">
              Faculty Members Detail
            </div>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default StreamDetailLayout;
