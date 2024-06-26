import Container from "../Container/Container";
import React from "react";

const SubjectListCardForplus2 = ({ isOptional, subjectLists }) => {
  return (
    <Container>
      <div className="shadow-md  p-6 bg-[#F4F4F4F4]  flex  items-center  justify-center flex-col space-y-6">
        <h1 className="text-[#201F54] font-bold text-xl tracking-wider pb-2">
          {!isOptional ? "Compulsory Subjects" : "Optional Subjects"}
        </h1>
        <ul className="flex flex-col space-y-4 ">
          {subjectLists?.map((sub) => (
            <li className="font-light text-center">{sub}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SubjectListCardForplus2;

// w-[20rem] h-[10rem] md:w-[24rem] md:h-[13.5rem]
