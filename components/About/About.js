import {React} from "react";
import Container from "../Container/Container";
import classes from "./About.module.css";
import Carousel from '../Carousel/Carousel'
const About = () => {
  return (
    <Container>
      <Carousel/>
      {/* <div
        className={`max-w-6xl md:max-w-full bg-fixed items-center flex justify-center md:h-[110vh] ${classes.clip} h-[70vh] `}
      ></div> */}
      <section
        className={`flex flex-col items-center space-y-5 px-5 py-7 md:space-y-5 md:px-32 md:py-10 justify-center`}
      >
        <h1 className="text-[#FF9900] text-5xl font-semibold">
          About Tilottama
        </h1>
        <p className="text-xl max-w-5xl text-justify">
          Tilottama Campus was established in 1996 as the first private college
          in Rupandehi by a team of dedicated, experienced and enterprising
          academicians to cater for the growing demands of parents and students
          in the higher education by providing quality education and
          guaranteeing top class graduates.
        </p>
        <p className="max-w-5xl text-xl text-justify">
          Since its establishment, the college has been running +2 programme in
          science and management stream in affiliation with National Education
          Board Nepal (NEB, Nepal). Similarly, it is also running Bachelor in
          Business Administration (BBA) programme in affiliation with Pokhara
          University. It is also planning to launch Master in Business
          Administration (MBA) in the near future.{" "}
        </p>
        <p className="max-w-5xl text-xl text-justify">
          The college has been imparting a practical education. The college
          feels proud on the high success passing rate of students along with
          the university toppers for several years. The college gradutes being
          placed at reputed organizations in senior level positions justifies
          the quality education and make us feel at the top.
        </p>
        <p className="max-w-5xl text-xl text-justify">
        The faculty of management of this college soley aims to inculcate a quality education with an excelleent state art of facilities to the students who have choosen the pathway of management as their career or profession. This college places a high value on providing its students with fulfilling educational experience in management disciplines. We are confident that you will find this college as the best platform to develop yourself.
        </p>
      </section>
      <section
        className={`relative min-h-screen  flex flex-col space-y-5 md:space-y-0 md:flex-row justify-center pt-[17rem] md:pt-[12rem] items-center bg-fixed ${classes.clip2} `}
      >
        <div className="flex p-10 pb-[4rem]  rounded-l-[4rem]  bg-[#FF9900]">
          <p className="leading-5 md:leading-7  max-w-sm md:max-w-xl text-justify  text-white font-bold text-2xs md:text-3xs ">
            The college has been imparting quality and practical education. The
            final results published by NEB Nepal in the past 27 years have
            proved that Tilottama Secondary School (TSS) has become a home for
            quality education. It has already been awarded time and again by NEB
            for its academic excellence. In 2078 and 2079 the school stood in
            the first position throughout Nepal . We are proud to look at our
            students getting opportunities to study abroad under various full
            and partial scholarships as well as for their appropriate placement
            throughout the nation and abroad after their academic goal.
          </p>
        </div>
        <div className="pb-[4rem]">
          <img
            className="w-[100%] h-[100%]"
            src={"/images/certificate.png"}
          ></img>
        </div>
      </section>

      <section className="flex flex-col md:flex-row space-y-5 md:space-y-0  py-4  justify-between gap-20 max-w-5xl mx-auto  items-center  md:py-10 bg-scroll">
        <div className="flex flex-col max-w-md w-[100%] md:px-0 px-[1.2rem] space-y-5">
          <h1 className="text-[#FF9900] text-4xl font-semibold">Location</h1>
          <p className="text-xl   leading-9 font-light text-justify">
            Tilottama Campus was established in 1996 as the first private
            college in Rupandehi by a team of dedicated, experienced and
            enterprising academicians to cater for the growing demands of
            parents and students in the higher education by providing quality
            education and guaranteeing top class graduates.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <iframe
            className="w-[26rem] md:w-[35rem] h-[25rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6408565137244!2d83.46777767389456!3d27.66658122729113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0xa2f9cb36d45e590b!2sTilottama%20Campus!5e0!3m2!1sen!2sin!4v1685969417463!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section className="flex flex-col px-[1.2rem] md:px-0 space-y-5 md:space-y-10  py-4 justify-evenly max-w-5xl mx-auto md:py-10 bg-scroll">
        <h1 className="text-[#FF9900] text-4xl font-semibold">
          College Infrastructure
        </h1>
        <p className="max-w-screen leading-9 text-justify font-bold text-xl font-light ">
          The school has luring physical infrastructures with spacious ground,
          garden and international standard basket ball and volley ball court.
          It has got Well equipped science laboratory, computer labs, hygenic
          cafteria library furnished with ample text books, research journal and
          reference materials, which provide the students with secured and
          effective setting for their learning.
        </p>

        <div className="border-4 transition-all duration-300 ease hover:bg-[#201F54] hover:text-white  border-[#201F54] py-2 font-bold text-2xl text-center text-[#201F54]">
          <a
            className=""
            href="http://tour.virtualedufairnepal.com/tilottamacampus/"
          >
            See Photos and Videos of College
          </a>
        </div>
      </section>
    </Container>
  );
};

export default About;

// import React from "react";
// import Container from "../Container/Container";
// import Carousel from "../Carousel/Carousel";
// import classes from "./About.module.css";
// import Image from 'next/image'

// const About = () => {
//   return (
//     <Container>
//       <Carousel />
//       <section
//         className={`flex flex-col items-center space-y-5 px-5 py-7 md:space-y-5 md:px-32 md:py-10 ${classes.stylee}`}
//       >
//         <h1 className="text-[#FF9900] text-5xl font-semibold">
//           About Tilottama
//         </h1>
//         <p className="max-w-5xl text-xl text-justify">
//           Tilottama Campus was established in 1996 as the first private college
//           in Rupandehi by a team of dedicated, experienced and enterprising
//           academicians to cater for the growing demands of parents and students
//           in the higher education by providing quality education and
//           guaranteeing top class graduates.
//         </p>
//         <p className="max-w-5xl text-xl text-justify">
//           Since its establishment, the college has been running +2 programme in
//           science and management stream in affiliation with National Education
//           Board Nepal (NEB, Nepal). Similarly, it is also running Bachelor in
//           Business Administration (BBA) programme in affiliation with Pokhara
//           University. It is also planning to launch Master in Business
//           Administration (MBA) in the near future.
//         </p>
//         <p className="max-w-5xl text-xl text-justify">
//           The college has been imparting a practical education. The college
//           feels proud on the high success passing rate of students along with
//           the university toppers for several years. The college gradutes being
//           placed at reputed organizations in senior level positions justifies
//           the quality education and make us feel at the top.
//         </p>
//         <p className="max-w-5xl text-xl text-justify">
//           The faculty of management of this college soley aims to inculcate a
//           quality education with an excelleent state art of facilities to the
//           students who have choosen the pathway of management as their career or
//           profession. This college places a high value on providing its students
//           with fulfilling educational experience in management disciplines. We
//           are confident that you will find this college as the best platform to
//           develop yourself.
//         </p>
//       </section>
//       <section className="relative min-h-screen flex flex-col space-y-5 md:space-y-0 md:flex-row justify-center pt-[17rem] md:pt-[12rem] items-center">
//         <div className="flex p-10 pb-[4rem] rounded-l-[4rem] bg-[#FF9900]">
//           <p className="leading-5 md:leading-7 max-w-sm md:max-w-xl text-justify text-white font-bold text-2xs md:text-3xs">
//             The college has been imparting quality and practical education. The
//             final results published by NEB Nepal in the past 27 years have
//             proved that Tilottama Secondary School (TSS) has become a home for
//             quality education. It has already been awarded time and again by NEB
//             for its academic excellence. In 2078 and 2079 the school stood in
//             the first position throughout Nepal. We are proud to look at our
//             students getting opportunities to study abroad under various full
//             and partial scholarships as well as for their appropriate placement
//             throughout the nation and abroad after their academic goal.
//           </p>
//         </div>
//         <div className="pb-[4rem]">
//         <Image src="/images/certificate.png" alt="certificate" width={300} height={300} layout="fixed" />
//         </div>
//       </section>

//       <section className="flex flex-col md:flex-row space-y-5 md:space-y-0 py-4 justify-between gap-20 max-w-5xl mx-auto items-center">
//         <div className="flex flex-col max-w-md w-[100%] md:px-0 px-[1.2rem] space-y-5">
//           <h1 className="text-[#FF9900] text-4xl font-semibold">Location</h1>
//           <p className="text-xl leading-9 font-light text-justify">
//             Tilottama Campus was established in 1996 as the first private
//             college in Rupandehi by a team of dedicated, experienced and
//             enterprising academicians to cater for the growing demands of
//             parents and students in the higher education by providing quality
//             education and guaranteeing top class graduates.
//           </p>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <iframe
//             className="w-[26rem] md:w-[35rem] h-[25rem]"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6408565137244!2d83.46777767389456!3d27.66658122729113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0xa2f9cb36d45e590b!2sTilottama%20Campus!5e0!3m2!1sen!2sin!4v1685969417463!5m2!1sen!2sin"
//             allowfullscreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//       <section className="flex flex-col px-[1.2rem] md:px-0 space-y-5 md:space-y-10 py-4 justify-evenly max-w-5xl mx-auto">
//         <h1 className="text-[#FF9900] text-4xl font-semibold">
//           College Infrastructure
//         </h1>
//         <p className="max-w-screen leading-9 text-justify font-bold text-xl font-light ">
//           The school has luring physical infrastructures with spacious ground,
//           garden and international standard basket ball and volley ball court.
//           It has got Well equipped science laboratory, computer labs, hygenic
//           cafteria library furnished with ample text books, research journal and
//           reference materials, which provide the students with secured and
//           effective setting for their learning.
//         </p>

//         <div className="border-4 transition-all duration-300 ease hover:bg-[#201F54] hover:text-white border-[#201F54] py-2 font-bold text-2xl text-center text-[#201F54]">
//           <a
//             className=""
//             href="http://tour.virtualedufairnepal.com/tilottamacampus/"
//           >
//             See Photos and Videos of College
//           </a>
//         </div>
//       </section>
//     </Container>
//   );
// };

// export default About;
