import React, { useState } from 'react'
import {  useFormik } from "formik";
import axios from 'axios';


const initialValues  = {
};
const Spotlight = () => {
  const [image,setImage] = useState()
  const [loading,setLoading] = useState(false);
  const submitHandler = async (formD) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("image", image);
    // console.log(formData);
    try {
      const response = await axios.post("/api/spotlight", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
      }); 


      setLoading(false)

      alert('Form Submission SucessFully');
    } catch (err) {
      setLoading(false)
      // alert('Form Submission SucessFully123');
      // console.log(err);
      alert(`${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`);
      
    }

  }

  const formik = useFormik({initialValues, onSubmit : (values, resetForm) => {submitHandler(values)}})
  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik

  return (
<div className='pl-[22%]  w-[100vw] py-14'>
    <form encType="multipart/form-data" className='flex flex-col justify-center gap-5 px-20' onSubmit={handleSubmit}>
    
        <label>Upload Image</label>
        <input  onChange={(e) => setImage(e.target.files[0])} className='border-2 py-2 pl-5' type='file'></input>
        <div className='flex flex-col justify-center items-center'>
        <button  disabled={loading} type='submit' className='border-2 border-[#201F54] px-6 py-2 w-fit'>{loading ? 'Submitting' : 'Submit'}</button>
        </div>
    </form>

    {/* <div  dangerouslySetInnerHTML={{__html: dummy.msg.desc}} /> */}
        
      {/* {console.log(dummy.msg.desc)} */}
</div>
  )
}

export default Spotlight