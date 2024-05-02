// import { useFormik } from "formik";
// import { useState } from "react";
// import axios from "axios";
// import Container from "../Container/Container";
// const UpdatedForm = () => {



//   const [loading, setLoading] = useState(false);

//   const initialValues = {
//     faculty: "",
//     grade: "",
//     shift: "",
//     nameinblock: "",
//     nameindevanagari: "",
//     dob_bs: "",
//     dob_ad: "",
//     gender: "",
//     t_no: "",
//     p_no: "",
//     email: "",
//     ward_no: "",
//     vdc_mun: "",
//     district: "",
//     fathers_name: "",
//     fathers_occupation: "",
//     fathers_cellno: "",
//     mothers_name: "",
//     mothers_occupation: "",
//     mothers_cellno: "",
//     localgurdain_name: "",
//     localgurdain_occupation: "",
//     localgurdain_cellno: "",
//     bus_faculty: "",
//     bus_stop: "",
//     nameofprevschool: "",
//     sendUpGpa: "0",
//     see_cgpa: "0",
//     grade_div: "0",
//     sendup_eng: "0",
//     sendup_cmath: "0",
//     sendup_optmath: "0",
//     sendup_science: "0",
//     sendup_account: "0",
//     see_eng: "0",
//     see_cmath: "0",
//     see_optmath: "0",
//     see_science: "0",
//     see_account: "0",
//     others: "",
//     formisChecked: "",
//     hobby: [],
//   };




//   const submitHandler = async (formD) => {


//       setLoading(true);
//     formD.hobby.push(formD.others);
//     const hobbies_string = formD.hobby.join(" ");
//     const formData = new FormData();
//     for (const key in formD) {
//       if (formD.hasOwnProperty(key)) {
//         formData.append(key, formD[key]);
//       }
//     }
//     formData.append("marksheet", 'marksheet');
//     formData.append("photo", 'photo');
//     try {
//       const response = await axios.post("/api/admission-forms", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setLoading(false);
//       alert("Form Submission SucessFully");
//     } catch (err) {
//       console.log(err)
//       setLoading(false);
//       alert(
//         `${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`
//       );
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: (values, resetForm) => {
//       submitHandler(values, resetForm);
//     },
//   });

//   const { values, handleBlur, handleChange, handleReset, handleSubmit } =
//     formik;





//   return (
//     <Container>

//     <div className="min-h-screen flex md:px-12 px-2 flex-col justify-center items-center bg-[#F4F8FA]">
//       <form    onSubmit={handleSubmit} className=" px-4  md:px-[9rem] relative md:gap-x-5  gap-y-5 md:gap-y-5   py-4 md:pt-12 md:pb-24  grid    w-[90%] grid-cols-1     md:grid-cols-2 md:grid-rows-3">
        
//         <div className=" w-full   mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
//           <div className="flex w-[100%] px-4 md:px-0 md:w-[90%] mx-auto flex-col gap-4 ">
//             <div className="grid gap-4 pt-4  justify-center items-center  grid-cols-1">
//               <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
//                 Admission Form
//               </h1>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949] ">Faculty</label>
//                 <input
//                                   onChange={handleChange}
//                                   onBlur={handleBlur}
//                                   onReset={handleReset}
//                                   name="faculty"
//                                   required
//                                   value={values.faculty}
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">Grade</label>
//                 <input
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   onReset={handleReset}
//                   name="grade"
//                   value={values.grade}
//                   required
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">Choose Shift</label>
//                 <input
//                  onChange={handleChange}
//                  onBlur={handleBlur}
//                  onReset={handleReset}
//                  name="shift"
//                  required
//                  value={values.shift}
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" w-full   mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
//           <div className="flex w-[90%] mx-auto  flex-col gap-4 ">
//             <div className="grid gap-4 pt-4 justify-center items-center  grid-cols-1">
//               <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
//                 Personal Details
//               </h1>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949] ">Name</label>
//                 <input
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             name="nameinblock"
//                             required
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">Gender</label>
//                 <input
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                               onReset={handleReset}
//                               name="gender"
//                               required
//                               value={values.gender}
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">Phone number</label>
//                 <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 onReset={handleReset}
//                 name="p_no"
//                 required
//                               type="number"
//                               className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                 ></input>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" w-full   mx-auto md:col-span-2 py-6    border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
//           <div className="flex w-[95%]  py-4 px-4 md:px-14 flex-col gap-4 ">
//               <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
//                 Address
//               </h1>
//             <div className="grid gap-4 justify-center items-center grid-cols-1  md:grid-cols-3">
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949] ">Ward Number</label>
//                 <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 onReset={handleReset}
//                 name="ward_no"
//                 required
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="number"
//                   ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">VDC/Municipality</label>
//                 <input
//                    onChange={handleChange}
//                    onBlur={handleBlur}
//                    onReset={handleReset}
//                    name="vdc_mun"
//                    required
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">District</label>
//                 <input
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 onReset={handleReset}
//                 name="district"
//                 required
//                 className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                   ></input>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" w-full   mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
//           <div className="flex w-[100%] px-4 md:px-0 md:w-[90%] mx-auto flex-col gap-4 ">
//             <div className="grid gap-4 pt-4 justify-center items-center  grid-cols-1">
//               <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
//                 Family Information
//               </h1>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949] ">Father's Name</label>
//                 <input
//                  onChange={handleChange}
//                  onBlur={handleBlur}
//                  onReset={handleReset}
//                  name="fathers_name"
//                  required
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">Mother's Name</label>
//                 <input
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                               onReset={handleReset}
//                               name="mothers_name"
//                               required
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//               {/* <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">Faculty</label>
//                 <input
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div> */}
//             </div>
//           </div>
//         </div>

//         <div className=" w-full   mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
//           <div className="flex w-[100%] px-4 md:px-0 md:w-[90%] mx-auto flex-col gap-4 ">
//             <div className="grid gap-4 pt-4 justify-center items-center  grid-cols-1">
//               <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
//                 Academic Information
//               </h1>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949] ">Name of Previous School/ College*</label>
//                 <input
//                  onChange={handleChange}
//                  onBlur={handleBlur}
//                  onReset={handleReset}
//                  name="nameofprevschool"
//                  required
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">SEE Board GPA / +2 Board GPA*</label>
//                 <input
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 onReset={handleReset}
//                                 name="see_cgpa"
//                                 required
//                                 className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//                 <label className="text-[0.9rem] font-light italic text-[#807D7D]">Mention GPA of +2 if you’re admitting for Bachelors</label>
//               </div>
//               {/* <div className="flex flex-col gap-2">
//                 <label className="text-[1.2rem] text-[#494949]">Faculty</label>
//                 <input
//                   className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
//                   type="text"
//                 ></input>
//               </div> */}
//             </div>
//           </div>
//         </div>

//             <button  type="submit"

//             disabled={loading} className="text-center md:col-span-2 active:bg-[#3F3BCB]  justify-center transition-all duration-200 ease-in-out hover:bg-[#635eff] mt-8 rounded-xl text-white font-bold items-center w-full bottom-10   h-[2.5rem] bg-[#3F3BCB]">                        {loading ? "Submitting" : "Submit"}</button>
//       </form>
//       <div className="">
//         </div>
//     </div>
// </Container>
//   );
// };

// export default UpdatedForm;








// ============================










import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import Container from "../Container/Container";
const UpdatedForm = () => {



  const [loading, setLoading] = useState(false);

  const initialValues = {
    faculty: "",
    grade: "",
    shift: "",
    nameinblock: "",
    nameindevanagari: "",
    dob_bs: "",
    dob_ad: "",
    gender: "",
    t_no: "",
    p_no: "",
    email: "",
    ward_no: "",
    vdc_mun: "",
    district: "",
    fathers_name: "",
    fathers_occupation: "",
    fathers_cellno: "",
    mothers_name: "",
    mothers_occupation: "",
    mothers_cellno: "",
    localgurdain_name: "",
    localgurdain_occupation: "",
    localgurdain_cellno: "",
    bus_faculty: "",
    bus_stop: "",
    nameofprevschool: "",
    sendUpGpa: "0",
    see_cgpa: "0",
    grade_div: "0",
    sendup_eng: "0",
    sendup_cmath: "0",
    sendup_optmath: "0",
    sendup_science: "0",
    sendup_account: "0",
    see_eng: "0",
    see_cmath: "0",
    see_optmath: "0",
    see_science: "0",
    see_account: "0",
    others: "",
    formisChecked: "",
    hobby: [],
  };


  const required = <span className="text-red-500 text-2xl">*</span>


  const submitHandler = async (formD) => {


      setLoading(true);
    formD.hobby.push(formD.others);
    const hobbies_string = formD.hobby.join(" ");
    const formData = new FormData();
    for (const key in formD) {
      if (formD.hasOwnProperty(key)) {
        formData.append(key, formD[key]);
      }
    }
    formData.append("marksheet", 'marksheet');
    formData.append("photo", 'photo');
    try {
      const response = await axios.post("/api/admission-forms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      alert("Form Submission SucessFully");
    } catch (err) {
      console.log(err)
      setLoading(false);
      alert(
        `${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`
      );
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, resetForm) => {
      submitHandler(values, resetForm);
    },
  });

  const { values, handleBlur, handleChange, handleReset, handleSubmit } =
    formik;





  return (
    <Container>

    <div className="min-h-screen flex  px-2 flex-col justify-center items-center bg-[#F4F8FA]">
      <form    onSubmit={handleSubmit} className=" grid  py-4 md:pt-12 md:pb-24 grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        
        <div className=" max-w-full   w-[32rem]    mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
          <div className="flex w-[100%] px-4 md:px-0 md:w-[90%] mx-auto flex-col gap-4 ">
            <div className="grid gap-4 pt-4  justify-center items-center  grid-cols-1">
              <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
                Admission Form
              </h1>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949] ">Faculty {required} </label>
                <input
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  onReset={handleReset}
                                  name="faculty"
                                  required
                                  value={values.faculty}
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">Grade {required}</label>
                <input
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onReset={handleReset}
                  name="grade"
                  value={values.grade}
                  required
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">Choose Shift {required}</label>
                <input
                 onChange={handleChange}
                 onBlur={handleBlur}
                 onReset={handleReset}
                 name="shift"
                 required
                 value={values.shift}
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-full   w-[32rem]    mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl">
          <div className="flex w-[90%] mx-auto  flex-col gap-4 ">
            <div className="grid gap-4 pt-4 justify-center items-center  grid-cols-1">
              <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
                Personal Details
              </h1>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949] ">Name {required}</label>
                <input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="nameinblock"
                            required
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">Gender {required}</label>
                <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              onReset={handleReset}
                              name="gender"
                              required
                              value={values.gender}
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">Phone number {required}</label>
                <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="p_no"
                required
                              type="number"
                              className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full   mx-auto md:col-span-2 py-6    border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
          <div className="flex w-[95%]  py-4 px-4 md:px-14 flex-col gap-4 ">
              <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
                Address
              </h1>
            <div className="grid gap-4 justify-center items-center grid-cols-1  md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949] ">Ward Number {required}</label>
                <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="ward_no"
                required
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="number"
                  ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">VDC/Municipality {required}</label>
                <input
                   onChange={handleChange}
                   onBlur={handleBlur}
                   onReset={handleReset}
                   name="vdc_mun"
                   required
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">District {required}</label>
                <input
                onChange={handleChange}
                onBlur={handleBlur}
                onReset={handleReset}
                name="district"
                required
                className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                  ></input>
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-full   w-[32rem]    mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl">
          <div className="flex w-[100%] px-4 md:px-0 md:w-[90%] mx-auto flex-col gap-4 ">
            <div className="grid gap-4 pt-4 justify-center items-center  grid-cols-1">
              <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
                Family Information
              </h1>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949] ">Father's Name {required}</label>
                <input
                 onChange={handleChange}
                 onBlur={handleBlur}
                 onReset={handleReset}
                 name="fathers_name"
                 required
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">Mother's Name {required}</label>
                <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              onReset={handleReset}
                              name="mothers_name"
                              required
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
              {/* <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">Faculty</label>
                <input
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div> */}
            </div>
          </div>
        </div>

        <div className=" max-w-full   w-[32rem]    mx-auto   h-[21rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl ">
          <div className="flex w-[100%] px-4 md:px-0 md:w-[90%] mx-auto flex-col gap-4 ">
            <div className="grid gap-4 pt-4 justify-center items-center  grid-cols-1">
              <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
                Academic Information
              </h1>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949] ">Name of Previous School/ College {required}</label>
                <input
                 onChange={handleChange}
                 onBlur={handleBlur}
                 onReset={handleReset}
                 name="nameofprevschool"
                 required
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">SEE Board GPA / +2 Board GPA {required}</label>
                <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onReset={handleReset}
                                name="see_cgpa"
                                required
                                className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
                <label className="text-[0.9rem] font-light italic text-[#807D7D]">Mention GPA of +2 if you’re admitting for Bachelors</label>
              </div>
              {/* <div className="flex flex-col gap-2">
                <label className="text-[1.2rem] text-[#494949]">Faculty</label>
                <input
                  className="w-full border-2  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent  "
                  type="text"
                ></input>
              </div> */}
            </div>
          </div>
        </div>

            <button  type="submit"

            disabled={loading} className="text-center md:col-span-2 active:bg-[#3F3BCB]  justify-center transition-all duration-200 ease-in-out hover:bg-[#635eff] mt-8 rounded-xl text-white font-bold items-center w-full bottom-10   h-[2.5rem] bg-[#3F3BCB]">                        {loading ? "Submitting" : "Submit"}</button>
      </form>
      <div className="">
        </div>
    </div>
</Container>
  );
};

export default UpdatedForm;




// px-4  justify-between relative md:gap-x-0 gap-y-5 md:gap-y-5   py-4 md:pt-12 md:pb-24  grid w-[100%] md:w-[80%] grid-cols-1     md:grid-cols-2 md:grid-rows-3