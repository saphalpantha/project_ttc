import React from "react";
import Container from "../Container/Container";
import classes from "./About.module.css";
import Image from "next/image";
const About = () => {
  return (
    <Container>
      <div className={`min-h-screen  bg-fixed ${classes.clip} `}></div>
      <section className="flex flex-col space-y-5 px-5 py-7 md:space-y-10 md:px-32 md:py-10 justify-center">
        <h1 className="text-[#FF9900] text-5xl font-semibold">About Tilottama</h1>
        <p className="text-xl max-w-5xl tracking-wide">
          Tilottama Campus was established in 1996 as the first private college
          in Rupandehi by a team of dedicated, experienced and enterprising
          academicians to cater for the growing demands of parents and students
          in the higher education by providing quality education and
          guaranteeing top class graduates.{" "}
        </p>
        <p className="max-w-5xl text-xl tracking-tight">
          Since its establishment, the college has been running +2 programme in
          science and management stream in affiliation with National Education
          Board Nepal (NEB, Nepal). Similarly, it is also running Bachelor in
          Business Administration (BBA) programme in affiliation with Pokhara
          University. It is also planning to launch Master in Business
          Administration (MBA) in the near future.{" "}
        </p>
      </section>
      <section className={` relative min-h-screen  flex flex-col space-y-5 md:space-y-0 md:flex-row justify-center pt-[17rem] md:pt-[12rem] items-center bg-fixed ${classes.clip2} `}>
      <div className="flex p-10 pb-[4rem]  rounded-l-[4rem]  bg-[#FF9900]">
        <p className="leading-5 md:leading-7  max-w-sm md:max-w-lg  text-white font-bold text-2xs md:text-3xs ">
        The college has been imparting quality and practical education. The final results published by NEB Nepal in the past 27 years have proved that Tilottama Secondary School (TSS) has become a home for quality education. It has already been awarded time and again by NEB for its academic excellence. 
In 2078 and 2079 the school stood in the first position throughout Nepal . We are proud to look at our students getting opportunities to study abroad under various full and partial scholarships as well as for their appropriate placement throughout the nation and abroad after their academic goal.
        </p>

      </div>
      <div className="pb-[4rem]"><img className="w-[100%] h-[100%]" src={"/images/certificate.png"}></img></div>
      </section>

      <section className="flex flex-col md:flex-row space-y-5 md:space-y-0 px-5 py-4 justify-evenly   md:px-32 md:py-10 bg-scroll">
      
      <div className="flex flex-col space-y-5">

      <h1 className="text-[#FF9900] text-5xl font-semibold">Location</h1>
        <p className="text-xl max-w-md tracking-wide leading-[2rem] font-light">
          Tilottama Campus was established in 1996 as the first private college
          in Rupandehi by a team of dedicated, experienced and enterprising
          academicians to cater for the growing demands of parents and students
          in the higher education by providing quality education and
          guaranteeing top class graduates.{" "}
        </p> 

        
      </div>
        <div className="w-[50%]">
        <iframe src={"https://maps.app.goo.gl/r2ZgcwyJX7usCxrr5"} width={600} height={450}  allowfullscreen={false} loading={"lazy"}></iframe>
        </div>
      </section>
      <section className="flex flex-col space-y-5 md:space-y-10 px-5 py-4 justify-evenly   md:px-32 md:py-10 bg-scroll">
      <h1 className="text-[#FF9900] text-5xl font-semibold">College Infrastructure</h1>
        <p className="max-w-screen leading-9 font-bold text-xl font-light " >
        The school has luring physical infrastructures with spacious ground, garden and international standard basket ball and volley ball court. It has got Well equipped science laboratory, computer labs, hygenic cafteria library furnished with ample text books, research journal and reference materials, which provide the students with secured and effective setting for their learning. 
        </p>
        <div className="border-4 border-[#201F54] py-2 font-bold text-2xl text-center text-[#201F54]">
        See Photos and Videos of College</div>
      </section>
    </Container>
  );
};

export default About;
