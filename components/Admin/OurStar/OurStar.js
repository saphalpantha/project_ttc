import React, { useState } from 'react'
import {  useFormik } from "formik";
import axios from 'axios';


const initialValues  = {
};
const OurStar = () => {
  const [image,setImage] = useState()
  const [name,setName] = useState();
  const [scholarship, setScholarShip] = useState();
  const submitHandler = async (formD) => {
    const formData = new FormData();
    formData.append('name', name)
    formData.append("scholarship", scholarship);
    formData.append("image", image);
    console.log(formData);
    try {
      const response = await axios.post("/api/our-stars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
      }); 


      alert('Form Submission SucessFully');
    } catch (err) {
      alert('Form Submission SucessFully123');
      console.log(err);
      // alert(`${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`);
      
    }

  }

  const formik = useFormik({initialValues, onSubmit : (values, resetForm) => {submitHandler(values)}})
  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik

  return (
<div className='pl-[22%]  w-[100vw] py-14'>
    <form encType="multipart/form-data" className='flex flex-col justify-center gap-5 px-20' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center'>
        <label>Name of Student</label>
        <input  value={values.student_name} onChange={(e) => setName(e.target.value)} className='border-2 ' type='text'></input>
        </div>
        <div className="flex flex-col space-y-2">
              <label className={``}>
                Scholarship Name
              </label>
              <select
              value={scholarship}
                onChange={(e) => setScholarShip(e.target.value)}
                onBlur={handleBlur}
                onReset={handleReset}
                name="faculty"
                required
                className=" py-1 bg-white border-2 border-2 text-black"
              >
                <option>Select Scholarship</option>
                <option>IOE</option>
                <option>MBBS</option>
                <option>COMPEX</option>
              </select>
              <label>Add Scholarship</label>
              <input onChange={(e) => setScholarShip(e.target.value)} type='text' className='border-2'></input>
            </div>
        <label>Upload Image</label>
        <input  onChange={(e) => setImage(e.target.files[0])} className='border-2 py-2 pl-5' type='file'></input>
        <div className='flex flex-col justify-center items-center'>
        <button  type='submit' className='border-2 px-6 py-2 w-fit'>Submit</button>
        </div>
    </form>

    {/* <div  dangerouslySetInnerHTML={{__html: dummy.msg.desc}} /> */}
        
      {/* {console.log(dummy.msg.desc)} */}
</div>
  )
}

export default OurStar