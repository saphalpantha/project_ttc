import React, { useState } from 'react'



const ChangePassword = () => {
  const [old,setOld] = useState('');
  const [newpass,setNewPass] = useState('');
const [email, setEmail] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/user", {
          method:'PUT',
        body:JSON.stringify({old,newpass,email}),
        headers:{
            'Content-Type':'application/json',
        },
        
      })
      const res_data = await response.json()
    if(response.ok){
        alert(`${res_data.msg}`)
    }
    } catch (err) {
        alert('Failed to add user');
      console.log(err);
      
    }
  }




  return (
<div className='pl-[22%]  w-[100vw] py-14'>
    <form  className='flex flex-col justify-center gap-5 px-20' onSubmit={submitHandler}>
        <div className='flex flex-col justify-center'>
        <label>Email</label>
        <input  onChange={(e) => setEmail(e.target.value)} className='border-2 ' type='text'></input>
        </div>
        <div className='flex flex-col justify-center'>
        <label>Old Password</label>
        <input  onChange={(e) => setOld(e.target.value)} className='border-2 ' type='password'></input>
        </div>
        <div className='flex flex-col justify-center'>
        <label>New Password</label>
        <input  onChange={(e) => setNewPass(e.target.value)} className='border-2 ' type='password'></input>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <button  className='border-2 px-6 py-2 w-fit'>Submit</button>
        </div>
    </form>
</div>
  )
}

export default ChangePassword