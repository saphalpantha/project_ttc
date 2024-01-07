import React from "react";
// import StarCard from "./StarCard";
import Container from "../Container/Container";
// import {Container} from '../../components/Container/Container'
import { useState, useEffect } from "react";
import StarCard from "./StarCard";
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

const AllStars = () => {
  const [achievement, setAchievement] = useState({
    ioe: [],
    mbbs: [],
    compex: [],
    sii: [],
    indianEmbassy: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/our-stars");
        const resData = await response.json();
        const data = resData.msg;

        setAchievement({
          ioe: data.filter((i) => i.scholarship_name.toLowerCase() === "ioe"),
          mbbs: data.filter((i) => i.scholarship_name.toLowerCase() === "mbbs"),
          compex: data.filter(
            (i) => i.scholarship_name.toLowerCase() === "compex"
          ),
          sii: data.filter((i) => i.scholarship_name.toLowerCase() === "sii"),
          indianEmbassy: data.filter(
            (i) => i.scholarship_name.toLowerCase() === "indian embassy"
          ),
        });
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <Container>
      {/* <section>
      <StyleCover isLeft={false} src={"/images/stream/science/sci_stream_cover.png"} title={"Team of Tilottama Campus"}/>
      </section> */}

      <section
        id="scholarship_ioe"
        className="max-w-[60.313] mx-auto py-[1rem] justify-center items-center"
      >
        <div className="flex flex-col justify-between space-y-[2rem]">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            IOE Scholarship
          </h1>
          <div className="flex flex-col justify-between space-y-10">
            <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {achievement.ioe.map((i) => (
                <StarCard name={i.name} photo={i.photo} isBig={false} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="scholarship_mbbs"
        className="max-w-[60.313] mx-auto py-[1rem] justify-center items-center"
      >
        <div className="flex flex-col justify-between space-y-[2rem]">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            MBBS Scholarship
          </h1>
          <div className="flex flex-col justify-between space-y-10">
            <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {achievement.mbbs.map((i) => (
                <StarCard name={i.name} photo={i.photo} isBig={false} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="scholarship_compex"
        className="max-w-[60.313] mx-auto py-[1rem] justify-center items-center"
      >
        <div className="flex flex-col justify-between space-y-[2rem]">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            COMPEX Scholarship
          </h1>
          <div className="flex flex-col justify-between space-y-10">
            <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {achievement.compex.map((i) => (
                <StarCard name={i.name} photo={i.photo} isBig={false} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="add_one"
        className="max-w-[60.313] mx-auto py-[1rem] justify-center items-center"
      >
        <div className="flex flex-col justify-between space-y-[2rem]">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            SII Scholarship
          </h1>
          <div className="flex flex-col justify-between space-y-10">
            <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {achievement.sii.map((i) => (
                <StarCard name={i.name} photo={i.photo} isBig={false} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-[2rem]">
          <h1 className="text-[#FF9900] font-semibold text-3xl text-center ">
            Indian Embassy Scholarship
          </h1>
          <div className="flex flex-col justify-between space-y-10">
            <div className="grid grid-cols-1  px-4 md:grid-cols-4 justify-between items-center mx-auto gap-20">
              {achievement.indianEmbassy.map((i) => (
                <StarCard name={i.name} photo={i.photo} isBig={false} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AllStars;
