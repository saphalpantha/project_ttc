// import React from "react";
// import Container from "../Container/Container";
// import ScrollLayout from "../UI/ScrollLayout";
// const WhyTtc = () => {
//   const whyTTCList = [
//     {
//       id: "w1",
//       desc: "Highly qualified, experienced and dedicated team of academic staffs",
//     },
//     {
//       id: "w2",
//       desc: "Hi-tech science laboratory, computer labs & library with sample texts & reference books, journals, and high speed internet facility.",
//     },
//     {
//       id: "w3",
//       desc: "Timely evaluation of students performance and interaction with guardians about their progress & activities.",
//     },
//     {
//       id: "w4",
//       desc: "Extra-curricular activities for recreation, personal development and team building among students.",
//     },
//     {
//       id: "w5",
//       desc: "Career counseling and support services to students for their personal and career advancement.",
//     },
//   ];

//   return (
//     <Container>

//       <div className="max-w-6xl md:gap-2 py-4 gap-y-10 md:gap-y-0  gap-x-0 bg-white flex flex-col md:flex-row  mx-auto md:pb-[3rem] justify-center  items-center md:items-start ">
//         <div className="flex flex-col  justify-center md:space-y-5  max-w-6xl   ">
//           <h1 className=" text-3xl py-5  px-1   md:py-0 md:text-5xl   text-[#FF9900] font-bold text-center md:text-start">
//             Why Tilottama?
//           </h1>
//           <ul className="flex flex-col gap-1 px-10 list-disc">
//             {whyTTCList.map((i) => (
//               <ScrollLayout duration={0.3} x={-200}>

//               <li className="w-fit px-3 text-start md:w-[100%] w-[100%]   px-2   leading-7 text-2xs">
//                 {i.desc}
//               </li>
//               </ScrollLayout>
//             ))}
//           </ul>
//         </div>
//         <div className="my-auto flex justify-center items-center h-full">
//           <img
//             className="w-[100%] h-[100%]" 
//             src={`/images/trophie_svg.svg`}
//             alt=""
//           ></img>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default WhyTtc;





import React from "react";
import Container from "../Container/Container";
import ScrollLayout from "../UI/ScrollLayout";
import classes from './WhyTtc.module.css'
const WhyTtc = () => {
  const whyTTCList = [
    {
      id: "w1",
      desc: "Highly qualified, experienced and dedicated team of academic staffs",
    },
    {
      id: "w2",
      desc: "Hi-tech science laboratory, computer labs & library with sample texts & reference books, journals, and high speed internet facility.",
    },
    {
      id: "w3",
      desc: "Timely evaluation of students performance and interaction with guardians about their progress & activities.",
    },
    {
      id: "w4",
      desc: "Extra-curricular activities for recreation, personal development and team building among students.",
    },
    {
      id: "w5",
      desc: "Career counseling and support services to students for their personal and career advancement.",
    },
  ];

  return (
    <Container>

        <div className={`w-full min-h-screen md:h-[33rem] flex flex-col  pt-[1rem] md:pt-[5rem] object-cover ${classes.main}`}>
        <div className="flex flex-col  justify-center md:space-y-5  max-w-6xl   ">
        <h1 className=" text-3xl py-5  px-[2rem]  md:px-[5rem]  md:py-0 md:text-4xl  text-white  font-bold text-center md:text-start">
             Why Tilottama?
                        </h1>
           <ul className="flex flex-col gap-1 px-[2rem] md:px-[6rem] list-disc">
             {whyTTCList.map((i) => (
              <ScrollLayout duration={0.3} x={-200}>

               <li className="w-fit px-3 text-start md:w-[65%] w-[100%] text-white   px-2    text-2xs">
                 {i.desc}
               </li>
               </ScrollLayout>
             ))}
           </ul>
           <div className=" py-2  px-[2rem] md:px-[5rem]">

           <h1 className="border-[1px] w-fit text-white uppercase py-1 border-[#A5A5A5] px-[10px] hover:bg-[#A5A5A5] hover:text-black transition-all duration-100 ease-in cursor-pointer">Know More About Us</h1>
           </div>
         </div>
        </div>
    </Container>
  );
};

export default WhyTtc;
