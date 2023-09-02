import React, { useState } from 'react'
import {  useFormik } from "formik";
import axios from 'axios';
import StarList from './StarList';


const initialValues  = {
};
const OurStar = () => {
  const [image,setImage] = useState()
  const [name,setName] = useState();
  const [scholarship, setScholarShip] = useState();
  const [loading,setLoading] = useState(false);
  const [openPostForm, setOpenPostForm] = useState(false);
  const submitHandler = async (formD) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('name', name)
    formData.append("scholarship", scholarship);
    formData.append("image", image);
 
    try {
      const response = await axios.post("/api/our-stars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
      }); 

      setLoading(false)


      alert('Form Submission SucessFully');
    } catch (err) {
      setLoading(false)
      alert('Form Submission SucessFully123');
 
      // alert(`${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`);
      
    }

  }

  const formik = useFormik({initialValues, onSubmit : (values, resetForm) => {submitHandler(values)}})
  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik

  return (
<div className='pl-[22%]  w-[100vw] py-10'>
<button className='px-4 absolute right-[1rem] hover:bg-[#201F54] hover:text-white  w-fit py-2 border-[1px] rounded-full border-[#201F54] transition-all duration-300 ease-in-out' onClick={() => setOpenPostForm(prev => !prev)}>{openPostForm ? 'Close' : 'Add New'}</button>
   { openPostForm && <form encType="multipart/form-data" className='flex flex-col justify-center gap-5 px-20 pt-[3rem]' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center'>
        <label>Name of Student</label>
        <input  onChange={(e) => setName(e.target.value)} className='border-2 ' type='text'></input>
        </div>
        <div className='flex flex-col justify-center'>
        <label>Add achievement</label>
        <input  onChange={(e) => setScholarShip(e.target.value)} className='border-2 ' type='text'></input>
        </div>

        <label>Upload Image</label>
        <input  onChange={(e) => setImage(e.target.files[0])} className='border-2 py-2 pl-5' type='file'></input>
        <div className='flex flex-col justify-center items-center'>
        <button  type='submit' className='border-2 px-6 py-2 w-fit'>{loading ? 'Submitting' : 'Submit'}</button>
        </div>
    </form>
}
    {/* <div  dangerouslySetInnerHTML={{__html: dummy.msg.desc}} /> */}
        <section className='min-h-screen pt-[2rem]'>
          <StarList/>
        </section>
 
</div>
  )
}

export default OurStar