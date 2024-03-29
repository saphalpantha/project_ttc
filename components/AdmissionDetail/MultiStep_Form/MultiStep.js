// import React from "react";
// import classes from "../../AdmissionDetail/AdmissionDetail.module.css";
// import { useFormik } from "formik";
// import { useState } from "react";
// import axios from "axios";
// import { Fragment } from "react";
// import Logo from '../../Logo/Logo'
// // import Container from "../Container/Container";

// const initialValues = {
//   faculty: "",
//   grade: "",
//   shift: "",
//   nameinblock: "",
//   nameindevanagari: "",
//   dob_bs: "",
//   dob_ad: "",
//   gender: "",
//   t_no: "",
//   p_no: "",
//   email: "",
//   ward_no: "",
//   vdc_mun: "",
//   district: "",
//   fathers_name: "",
//   fathers_occupation: "",
//   fathers_cellno: "",
//   mothers_name: "",
//   mothers_occupation: "",
//   mothers_cellno: "",
//   localgurdain_name: "",
//   localgurdain_occupation: "",
//   localgurdain_cellno: "",
//   bus_faculty: "",
//   bus_stop: "",
//   nameofprevschool: "",
//   sendUpGpa: "",
//   see_cgpa: "",
//   grade_div: "",
//   sendup_eng: "",
//   sendup_cmath: "",
//   sendup_optmath: "",
//   sendup_science: "",
//   sendup_account: "",
//   see_eng: "",
//   see_cmath: "",
//   see_optmath: "",
//   see_science: "",
//   see_account: "",
//   others: "",
//   formisChecked: "",
//   hobby: [],
// }

// export const Shift_Year = ({handleChange,values}) => {
//   return(
//     <div className="flex justify-center py-2 md:py-[4rem] flex-col  md:flex-row gap-2 md:gap-32 items-center">
//     <div className="flex flex-col space-y-2">
//       <label className={`text-xl pl-3  text-[#201F54a] ${classes.req}`}>
//         Choose Shift
//       </label>
//       <select
//         onChange={handleChange}
//         name="faculty"
//         required
//         className=" w-[14rem] h-[2.6rem]  bg-white border-2 border-[#201F54] text-black px-[1rem] rounded-[0.3rem]"
//         value={values.shift}
//       >
//         <option>Select Shift</option>
//         <option>Morning</option>
//         <option>Day</option>
//       </select>
//     </div>
//   </div>
//   )
// }

// export const ChooseFac = ({ handleSubmit, handleChange, values }) => {

//   return (
//     <div>
//       {console.log(values,'faculty')}
//       <h1 className="w-[71%]  mx-auto my-4  py-3  text-center font-bold bg-[#FF9900] text-white">
//         Admission Form
//       </h1>
//       {/* <form encType="multipart/form-data" onSubmit={handleSubmit}> */}
//       <div id="first">
//         <div className="flex justify-center py-2 md:py-[4rem] flex-col  md:flex-row gap-2 md:gap-32 items-center">
//           <div className="flex flex-col space-y-2">
//             <label className={`text-xl pl-3  text-[#201F54a] ${classes.req}`}>
//               Faculty
//             </label>
//             <select
//               onChange={handleChange}
//               name="faculty"
//               required
//               className=" w-[14rem] h-[2.6rem]  bg-white border-2 border-[#201F54] text-black px-[1rem] rounded-[0.3rem]"
//               value={values.faculty}
//             >
//               <option>Select Faculty</option>
//               <option>Science</option>
//               <option>Management</option>
//               <option>BBA</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       {/* </form> */}
//     </div>
//   );
// };

// const B1 = ({formik, handleChange, values}) => {
//   {console.log(values,'b1')}
//   return(
//     <div className="my-[1rem]">
//       <h1 className="w-[71%]  mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
//         Basic Information ({values.faculty})
//       </h1>

//       <div className="w-[71%] py-2 mx-auto ">
//         <label
//           className={`text-xl pl-3 pt- text-[#201F54] ${classes.req}`}
//         >
//           Name in Block Letter
//         </label>
//       </div>
//       <div className="flex flex-col justify-center items-center gap-5 pb-2 place-items-center">
//         <input
//         onChange={handleChange}
//         name="nameinblock"
//           required
//           className="rounded-[0.3rem] pl-3 py-2 w-[71%] border-2 border-[#201F54]"
//         ></input>
//       </div>

//       <div className="w-[71%] py-2 mx-auto ">
//         <label className={`text-xl pl-3 pt- text-[#201F54]`}>
//           Name in Devanagari
//         </label>
//       </div>
//       <div className="flex flex-col justify-center items-center gap-4 pb-2">
//         <input
//           onChange={handleChange}
//           name="nameindevanagari"
//           className="rounded-[0.3rem] pl-3 py-2 w-[71%] border-2 border-[#201F54]"
//         ></input>
//       </div>

//       <div className="grid justify-center place-items-center px-[5.7rem]  py-1  grid-cols-1 mx-auto  md:grid-cols-2 gap-2 md:gap-y-3  md:grid-row-2 ">
//         <div className="flex flex-col space-y-1">
//           <label className={`text-xl pl-3 text-[#201F54] `}>
//             Date of Birth (B.S)
//           </label>{" "}
//           <input
//             onChange={handleChange}
//             name="dob_bs"
//             className={` w-[14.5rem]  md:w-[13.5rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem] `}
//             type="text"
//           ></input>
//         </div>
//         <div className={`flex flex-col space-y-1`}>
//           <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
//             Date of Birth (A.D)
//           </label>{" "}
//           <input
//             onChange={handleChange}
//             name="dob_ad"
//             required
//             className=" w-[14.5rem] md:w-[13.5rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem]"
//             type="date"
//           ></input>
//         </div>
//       </div>
//     </div>
//   )
// }
// const B2 = ({handleChange,values}) => {
//   return(
//     <div className="py-[1rem]">
//             {console.log(values,'b2')}
//       <h1 className="w-[71%]  mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
//         Basic Information
//       </h1>
//       <div className="grid justify-center place-items-center px-[5rem]  py-7  grid-cols-1 mx-auto  md:grid-cols-2 gap-2 md:gap-y-5  md:grid-row-2 ">

//       <div className="flex flex-col space-y-1">
//           {" "}
//           <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
//             Gender
//           </label>
//           <select
//             onChange={handleChange}
//             name="gender"
//             required
//             className="  w-[14rem] h-[2.6rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-[0.3rem]"
//             value={values.gender}
//             >
//             <option>Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>
//         </div>
//         <div className="flex flex-col space-y-1">
//           <label className="text-xl pl-3 text-[#201F54]">Telephone No</label>{" "}
//           <input
//             onChange={handleChange}
//             name="t_no"
//             className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem]"
//             type="number"
//             ></input>
//         </div>
//         <div className="flex flex-col space-y-1">
//           <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
//             Phone No
//           </label>{" "}
//           <input
//             onChange={handleChange}
//             name="p_no"
//             required
//             className={`w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem] ${classes.req}`}
//             type="number"
//             ></input>
//         </div>
//         <div className="flex flex-col space-y-1">
//           <label className="text-xl pl-3 text-[#201F54]">Email</label>{" "}
//           <input
//             onChange={handleChange}
//             name="email"
//             className="w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem]"
//             type="text"
//             ></input>
//         </div>
//             </div>
//     </div>
//   )
// }

// const A1 = ({handleChange, values, handleBlur, handleReset}) => {
// return(
//     <div className="py-[1rem]">
//       {console.log(values, 'a1')}
//     <h1 className="w-[71%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
//           Address
//         </h1>
//         <div className="grid justify-center place-items-center px-[5.5rem]  py-5  grid-cols-1 mx-auto  md:grid-cols-2 gap-2 md:gap-y-3  md:grid-row-2">
//           <div className="flex flex-col space-y-1">
//             <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
//               Ward Number:
//             </label>{" "}
//             <input
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="ward_no"
//               required
//               className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem]"
//               type="number"
//             ></input>
//           </div>
//           <div className="flex flex-col space-y-1">
//             <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
//               VDC/Municipality
//             </label>{" "}
//             <input
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="vdc_mun"
//               required
//               className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem]"
//               type="text"
//               ></input>
//           </div>
//           <div className="flex flex-col space-y-1">
//             <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
//               District
//             </label>{" "}
//             <input
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="district"
//               required
//               className="  w-[14rem] h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem]"
//               type="text"
//             ></input>
//           </div>
//         </div>
//               </div>
// )
// }

// const A2 = ({handleBlur, handleChange,handleReset,values, loading}) => {
//   return(
//     <div className="py-[1rem]">
//        <h1 className="w-[71%] mx-auto text-center  py-3 bg-[#201F54] text-white font-bold">
//           Academic Information
//         </h1>

//         <div className="grid justify-center place-items-center items-center px-5  py-5  grid-cols-1 mx-auto  md:grid-cols-1 gap-2 md:gap-y-5  md:grid-row-2">

//         <div className="flex flex-col justify-center">
//           <div className="w-[100%] py-2 mx-auto ">
//             <label
//               className={`text-xl pt-  whitespace-nowrap    text-[#201F54] ${classes.req}`}
//             >
//               Name of Previous School
//             </label>
//           </div>
//           <div className="flex justify-center items-center space-y-2  w-full flex-col">
//             <input
//               onChange={handleChange}
//               onBlur={handleBlur}
//               onReset={handleReset}
//               name="nameofprevschool"
//               required
//               className=" rounded-[0.3rem] pl-3 py-2  w-[75%]  md:w-[190%] border-2 border-[#201F54]"
//             ></input>
//           </div>
//         </div>

//           <div className="flex justify-center items-center space-y-2  w-[75%] flex-col">
//             <label className={`text-xl pl-3  text-[#201F54] ${classes.req}`}>
//               +2 GPA
//             </label>{" "}
//             <input
//               onChange={handleChange}
//               onBlur={handleBlur}
//               onReset={handleReset}
//               name="sendUpGpa"
//               required
//               className=" w-full h-[2.6rem] border-2 border-[#201F54] px-[1rem] text-black rounded-[0.3rem]"
//               type="text"
//             ></input>
//           </div>
//             </div>

//     </div>
//   )
// }

// const Wrapper = ({ children, prevHandler, nxtHandler, handleSubmit, loading, page }) => {
//   return (

//     <div className="w-[95vw] border-[1px]   shadow-sm rounded-[0.4rem] h-[100vh]  py-[2rem] items-center md:items-stretch  md:justify-start   px-[2rem] relative  md:absolute  pb-[7rem] md:pb-[3rem]  mt-[1rem] md:mt-0 md:top-[55%] translate-y-0 md:translate-y-[-30%]  px-[3rem] md:w-1/2 mx-auto md:px-0 bg-white max-h-[100vh]  md:h-[34.5rem]  flex flex-col">
//       <div className="flex justify-center items-center py-[0.3rem]">
//       <Logo/>
//       </div>
//       {children}
//       <div className="absolute bottom-1 md:bottom-[5%]     w-full justify-center items-center flex md:gap-32 gap-20">
//       <button
//       onClick={prevHandler}
//       type="button"
//             className="py-2  px-8 w-fit text-center bg-[#201F54] hover:bg-[#FF9900] text-white transition-all duration-200 ease-in  shadow-md  "
//           >
//               Prev
//           </button>
//         {
//           page == 5 ? <div className=" flex py-5 flex-col justify-center items-center">
//           <button
//             type="submit"
//             className="py-2 px-8 w-fit text-center bg-[#201F54] hover:bg-[#FF9900] text-white transition-all duration-200 ease-in  shadow-md  "
//           >
//             {!loading ? 'Submit' : 'Submitting'}
//           </button>
//         </div> :
//         <button
//         type="button"
//         onClick={nxtHandler}
//               className="py-2  px-8 w-fit text-center bg-[#201F54] hover:bg-[#FF9900] text-white transition-all duration-200 ease-in  shadow-md  "
//             >
//                 Next
//             </button>
//         }
//       </div>
//     </div>
//   );
// };

// const Helper = ({page, values,handleChange,handleBlur}) => {
//   if(page == 1){
//     return <ChooseFac  values={values} handleChange={handleChange}/>
//   }

//       if(page == 2){
//         return <B1  handleChange={handleChange} values={values} handleBlur={handleBlur}/>
//       }

//       if(page == 3){
//         return <Fragment> <B2 handleChange={handleChange} values={values}/> </Fragment>

//       }
//       if(page == 4){
//         return <A1 handleChange={handleChange}  handleBlur={handleBlur} values={values}/>
//       }
//       if(page == 5){
//         return <A2 handleChange={handleChange}   handleBlur={handleBlur} values={values}/>
//       }

// }

// const MultiStep = () => {
//   const [page,setPage] = useState(1)
//   const [marksheet,setMarkSheet] = useState('');
//   const [photo,setPhoto] = useState('');
//   const [loading,setLoading] = useState(false);
//   const [isFilled, setIsFilled] = useState(false);
//   const formik = useFormik({
//     initialValues,
//     onSubmit: (values) => {
//       submitHandler(values);
//     },
//   });
//   const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik;

//   const nxtHandler = () => {
//     setPage((prev) => prev + 1);
//   };

//   const prevHandler = () => {
//     if(page <= 1){
//       return;
//     }
//     setPage((prev) => prev - 1);
//   };
//   const submitHandler = async (formD) => {

//     setLoading(true)
//     formD.hobby.push(formD.others);
//     const hobbies_string = formD.hobby.join(" ");
//     const formData = new FormData();
//     for (const key in formD) {
//       if (formD.hasOwnProperty(key)) {
//         if(!formD[key]){
//           setIsFilled(true)
//         }
//         formData.append(key, formD[key]);
//       }
//     }

//     formData.append("marksheet", marksheet);
//     formData.append("photo", photo);

//     if(isFilled){
//       alert('Please Fill all the requied inputs !');
//       return;
//     }
//     try {
//       const response = await axios.post("/api/admission-forms", formData, {
//         headers: {
//           "Content-Type": "multipart/for  m-data",
//         },
//       });

//       setLoading(false)

//       alert("Form Submission SucessFully");
//     } catch (err) {
//       setLoading(false)
//       alert(
//         `${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`
//       );
//     }
//   };

//   return (
//     <div className="min-h-[120vh]  bg-white w-full">
//       <div className=" h-fit md:h-[40vh] bg-[#201F54] flex flex-col justify-center items-center">
//         <div>
//           <div className="w-full">
//             <div className="required: md:h-[45vh] bg-[#201F54] flex flex-col justify-center items-center">
//               <form className="required: md:h-[50vh]  bg-[#201F54] flex flex-col justify-center items-center"  encType="multipart/form-data" onSubmit={handleSubmit}>
//               <Wrapper prevHandler={prevHandler} loading={loading} page={page} nxtHandler={nxtHandler}>
//                   <Helper values={values}  handleSubmit={handleSubmit} handleChange={handleChange} page={page}/>
//               </Wrapper>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiStep;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import { useState } from 'react';

// const steps = [
//   'Choose Faculty',
//   'Basic Information',
//   'Address Information',
//   'Academics Information'
// ];

// export  function HorizontalLinearAlternativeLabelStepper({page}) {

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={page} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }

// const MultiStep = () => {
//   const [page,setPage] = useState(2);
//   return (
//     <div>
//         <HorizontalLinearAlternativeLabelStepper page={page}/>
//     </div>
//   )
// }

// export default MultiStep

// // ==========================================================================================================================================
// // ------------------------------------------------------------------------------------------------------------------------------------------

// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Stepper from '@mui/material/Stepper';
// // import Step from '@mui/material/Step';
// // import StepLabel from '@mui/material/StepLabel';
// // import { useState } from 'react';

// // const steps = [
// //   'Choose Faculty',
// //   'Basic Information',
// //   'Address Information',
// //   'Academics Information'
// // ];

// // export  function HorizontalLinearAlternativeLabelStepper({page}) {

// //   return (
// //     <Box sx={{ width: '100%' }}>
// //       <Stepper activeStep={page} alternativeLabel>
// //         {steps.map((label) => (
// //           <Step key={label}>
// //             <StepLabel>{label}</StepLabel>
// //           </Step>
// //         ))}
// //       </Stepper>
// //     </Box>
// //   );
// // }

// // const MultiStep = () => {
// //   const [page,setPage] = useState(2);
// //   return (
// //     <div>
// //         <HorizontalLinearAlternativeLabelStepper page={page}/>
// //     </div>
// //   )
// // }

// // export default MultiStep



import React from 'react'

const MultiStep = () => {
  return (
    <div>MultiStep</div>
  )
}

export default MultiStep