import React from "react";
import FacultyCard from "./FacultyCard";
import Container from "../Container/Container";
// import {Container} from '../../components/Container/Container'

const users = [
  {
    id: "i1",
    name: "Ananta  Panthi",
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

const FacultyDetail = () => {
  return (
    <Container>
      <section>
        <div className="">
          <img
            className="w-[100%] h-[100%]"
            src="/images/stream/science/sci_stream_cover.svg"
            alt="img"
          ></img>
        </div>
      </section>
      <section className="max-w-[60.313] mx-auto py-[1rem]">
        <div className="flex flex-col justify-between space-y-10 ">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            BOARD MEMBERS
          </h1>
          <div className="grid grid-cols-4 justify-between items-center mx-auto gap-10">
            {users.map((i) => (
              <FacultyCard isBig={true} />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-[60.313] mx-auto py-[1rem]">
        <div className="flex flex-col justify-between space-y-[2rem]">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            Science Faculty
          </h1>
          <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
            Department of Physics
          </h1>
          <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
            {users.map((i) => (
              <FacultyCard isBig={false} />
            ))}
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Chemistry
            </h1>
            <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
              {users.map((i) => (
                <FacultyCard isBig={false} />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Biology
            </h1>
            <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
              {users.map((i) => (
                <FacultyCard isBig={false} />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Computer
            </h1>
            <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
              {users.map((i) => (
                <FacultyCard isBig={false} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[77.313] mx-auto py-[1rem] pb-[4rem] pt-[2rem] flex flex-col space-y-4">
        <div className="flex flex-col justify-between space-y-10">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            Management Faculty
          </h1>
          <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
            Department of Economics
          </h1>
          <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
            {users.map((i) => (
              <FacultyCard isBig={false} />
            ))}
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Economics
            </h1>
            <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
              {users.map((i) => (
                <FacultyCard isBig={false} />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Economics
            </h1>
            <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
              {users.map((i) => (
                <FacultyCard isBig={false} />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10">
            <h1 className="text-[#201F54] font-semibold text-2xl pl-[7rem]">
              Department of Economics
            </h1>
            <div className="grid grid-cols-4 justify-between items-center mx-auto gap-20">
              {users.map((i) => (
                <FacultyCard isBig={false} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FacultyDetail;
