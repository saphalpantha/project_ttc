import React from 'react'
import StreamDetailLayout from '../../../components/StreamDetail/StreamDetailLayout'
import { useRouter } from 'next/router'
import BbaStream from '../../../components/StreamDetail/BbaStream';




const scienceData = {
  img:'/images/stream/science/sci_stream_cover.png',
  faculty_name:"Science",
  section_img:'/images/stream/science/sci_stream_small.svg',
  para:[{id:'p1', content:"At Tilottama, we pride ourselves on offering a comprehensive and cutting-edge science faculty that prepares students for a future filled with endless possibilities. Our dedicated team of experienced and passionate educators strives to cultivate a deep understanding and appreciation for the wonders of science among our students. ",},{id:'p2', content:"Our science faculty comprises a diverse group of experts who specialize in various fields, ranging from physics and chemistry to biology and environmental science. With their extensive knowledge and practical experience, our faculty members bring real-world applications into the classroom, ensuring that our students receive a well-rounded education that is both academically rigorous and relevant to the ever-evolving world of science.",}],
  objective:[{id:'o1', content:"To provide practical and value based quality education for promising young talents to carve their careers."},{id:'o2', content:"To generate decent human value and ethical human behavour in the students."},{id:'o3', content:"To provide highly disciplined and friendly atmosphere."},],
  streamSubject : [
    {
      grade: "GRADE XI",
      optionalSubjectLists: ["Social", "Maths", "Computer", "Biology"],
      compSubjectLists: ["Physics", "Chemistry", "English", "Nepali"],
    },
  
    {
      grade: "GRADE XII",
      optionalSubjectLists: ["Social", "Maths", "Computer", "Biology"],
      compSubjectLists: ["Physics", "Chemistry", "English", "Nepali"],
    },
  ],
  link:'/faculty#faculty_science/',
}

const managementeData = {
  section_img:'/images/bba_section_img.png',
  faculty_name:"Management",
  img:"/images/stream/science/sci_stream_cover.png",
  para:[{id:'p1', content:"At Tilottama, we pride ourselves on offering a comprehensive and cutting-edge science faculty that prepares students for a future filled with endless possibilities. Our dedicated team of experienced and passionate educators strives to cultivate a deep understanding and appreciation for the wonders of science among our students.",},{id:'p2', content:"Our science faculty comprises a diverse group of experts who specialize in various fields, ranging from physics and chemistry to biology and environmental science. With their extensive knowledge and practical experience, our faculty members bring real-world applications into the classroom, ensuring that our students receive a well-rounded education that is both academically rigorous and relevant to the ever-evolving world of science.",}],
  objective:[{id:'o1', content:"To provide practical and value based quality education for promising young talents to carve their careers."},{id:'o2', content:"To generate decent human value and ethical human behavour in the students."},{id:'o3', content:"To provide highly disciplined and friendly atmosphere."},],
  streamSubject : [
    {
      grade: "GRADE XI",
      optionalSubjectLists: ["Finance", "Computer", "Social", "Math"],
      compSubjectLists: ["English", "Nepali", "Account", "Economics"],
    },
  
    {
      grade: "GRADE XII",
      optionalSubjectLists: ["Finance", "Computer", "Social", "Math"],
      compSubjectLists: ["English", "Nepali", "Account", "Economics"],
    },
  ],
  link:'//faculty#faculty_management/',
}


const bbaData = {
  section_img:"/images/bba_section_img.png",
  faculty_name:'BBA',
  img:'/images/bba_cover_img.png',
  streamSubjectBBA : [
    {sem:'I', subjects:["English I", "Business Mathematics I", "Financial Accounting I", "Computer and IT Application"]},
    {sem:'II', subjects:["English II", "Business Mathematics II", "Financial Accounting II", " General Psychology" ,"Introductory Microeconomics" ]},
    {sem:'III', subjects:["Business Communication I", "Business Statistics", "Essentials of Finance", "Fundamental of sociology", "Introductory Macroeconomics"]},
    {sem:'IV', subjects:["Business Communication II", "Data Analysis and Modeling", "Fundamental of Organizational Behaviour", "Principles of Marketing", "Financial Management"]},
    {sem:'V', subjects:["Basics of Managerial Accounting", "Business Research Method", "Management of Human Resource", "Fundamentals of Operations Management", "Concentration I"]},
    {sem:'VI', subjects:["Introduction to Management Information System", "Legal Aspects of Business and Technology", "Business and Society", "Project Work Concentration II"]},
    {sem:'VII', subjects:["Business Environment in Nepal", "Fundamental of Entrepreneurship", "Internship", "Elective I", "Concentration III"]},
    {sem:'VIII', subjects:["Strategic Management", "Introduction to International Business", "Essential of e-business", " Elective II","Concentration IV" ]},
],
para:[{id:'p1', content:"The Bachelor of Business Administration (BBA) degree offered by this college is awarded by Pokhara University, One of the recognized university in national and international level. BBA is a four year semesster based program offered to the students who want to develop their career in the field of management. The aim to develop the intellectual, decision making and problem solving ability through the blend of quality education with practiccal exposure to corporate world.",},{id:'p2', content:"The Four year BBA program is divided into 8 semesters and it comprises of 42 subjects each carrying 3 credit hour. The students also need to do the project. Students are also allowed to take the specialization in two subjects in their 7th and 8th semester. This COurse will help to enchance their skill, critial thinking ability, analyzing the problems, making suggestions and recommendations, building up your confidence to communicate effectively.",}],
objective:[{id:'o1', content:"To provide practical and value based quality education for promising young talents to carve their careers."},{id:'o2', content:"To generate decent human value and ethical human behavour in the students."},{id:'o3', content:"To provide highly disciplined and friendly atmosphere."},],
  section_img:'/images/bba_section_img.png',
}


const StreamDetail = () => {

  const router = useRouter();
  const id = router.query.streamType;
  
  console.log(id);
  
  return (
    <div>
      {/* <StreamDetailLayout/> */}
        {/* {id === "science" || id === "management" ?  <StreamDetailLayout />  : '' }, */}
        { id === "science" && <StreamDetailLayout streamData={scienceData} />  },
        { id === "management" && <StreamDetailLayout streamData={managementeData} />  },
        {id === 'bba'  && <BbaStream streamData={bbaData}/>  }
    </div>
  )
}



export default StreamDetail
// export const getStaticProps = async (context) => {
//  console.log(context.params.streamType)
//   return{
//   props:{
//     msg:'hello'
//   },
//   fallback:true,
//  }
// }

