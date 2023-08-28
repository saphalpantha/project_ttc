import React, { useState } from 'react'
import {  useFormik } from "formik";
import axios from 'axios';
import FacList from './FacList';


const initialValues  = {
};
const OurFaculty = () => {
  const [image,setImage] = useState()
  const [name,setName] = useState();
  const [phone, setPhone] = useState();
  const [department, setDepartment] = useState();
  const [loading,setLoading] = useState(false);


  const submitHandler = async (formD) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('name', name)
    formData.append("phoneno", phone);
    formData.append("image", image);
    formData.append("dept", department);
    console.log(formData,'log form data');
    try {
      const response = await axios.post("/api/faculty/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
      }); 

      setLoading(false)


      alert('Form Submission SucessFully');
    } catch (err) {
      setLoading(false)
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
        <label>Name of Faculty</label>
        <input  onChange={(e) => setName(e.target.value)} className='border-2 ' type='text'></input>
        </div>
        <div className='flex flex-col justify-center'>
        <label>Phone No</label>
        <input  onChange={(e) => setPhone(e.target.value)} className='border-2 ' type='number'></input>
        </div>
        <div className='flex flex-col gap-4 justify-center'>
        <label>Factulty Department</label>
        <select className='border-2 py-2 bg-white ' onChange={(e) => setDepartment(e.target.value)}>
            <option>Select Department</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Computer</option>
            <option>Economics</option>
            <option>Finance</option>
            <option>Account</option>
            <option>Nepali</option>
            <option>English</option>
            <option>Maths</option>
        </select>
        </div>

        <label>Upload Image</label>
        <input  onChange={(e) => setImage(e.target.files[0])} className='border-2 py-2 pl-5' type='file'></input>
        <div className='flex flex-col justify-center items-center'>
        <button  type='submit' className='border-2 px-6 py-2 w-fit'>{loading ? 'Submitting' : 'Submit'}</button>
        </div>
    </form>

    {/* <div  dangerouslySetInnerHTML={{__html: dummy.msg.desc}} /> */}
        
      {/* {console.log(dummy.msg.desc)} */}
      <section className='min-h-screen'>
        <div>
          <FacList/>
          {

            // <image src={`/images/faculty-uploads/${}`} className='w-[3rem] h-[3rem]' />
          }
        </div>
      </section>
</div>
  )
}

export default OurFaculty