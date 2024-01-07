import Container from "../Container/Container";
import React from "react";

const SubjectListCardForBba = ({ subjectLists, sem }) => {
  return (
    <Container>
      <div className="flex flex-col justify-between items-center  space-y-6">
        <h1 className="bg-[#201F54] text-white w-[30rem] py-1 px-5 font-bold text-xl tracking-wider pb-2 text-center">{`Semester-${sem}`}</h1>

        <div className=" mx-auto text-black flex flex-col md:flex-row space-y-5 py-2 md:py-0  px-2 mx-5 items-center md:items-baseline justify-center items-center md:gap-[50px]">
          <ul className="flex flex-col h-[12rem] space-y-4">
            {subjectLists?.map((sub) => (
              <li className="font-light  text-center">{sub}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default SubjectListCardForBba;
