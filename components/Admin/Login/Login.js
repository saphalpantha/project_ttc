import React from 'react'
import classes from './Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();




    const submitHandler = async (e) => {
        e.preventDefault();
        if(!username && !password){
            alert("Invalid Username & Password")
            router.push('/admin/login');
        }
        router.replace('/admin/dashboard')
        try{
         const response = await fetch('/api/login', {
                method:'POST',
                headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(username,password),
        });
        const data = await response.json();
        if(response.ok){
            console.log('LOGIN SUCCESSFULL');
            if(data.isAuthenticated === false){
                alert('Not Authenticated');
            }
            localStorage.setItem('isAuthenticated', data.isAuthenticated);
            router.replace('/api/dashboard')
        }      
    }
    catch(err){
        alert('Something Went wrong. Please Try Again');
    }
    }
  return (
    <div className={`${classes.login} min-h-screen gap-10  w-[100vw]  flex flex-col  justify-center items-center relative z-10` }>
        <div className='absolute flex flex-col gap-10 justify-center items-center'>

        <h1 className='text-3xl text-[#FF9900]'>TILOTTAMA PORTAL</h1>
        <div className='max-w-[30rem] w-[100%] gap-10 py-3  bg-white height-[30rem] flex flex-col justify-center items-center rounded-3xl border-4 border-[#FF9900]' >
            <h1 className='font-light italic'>Sign in to start your session</h1>
            <form className='flex flex-col gap-5  h-[20rem] w-[30rem]  items-center' onSubmit={submitHandler}>
                <div className='flex gap-2 flex-col justify-center'>
                    <label className='text-xl text-[#201F54]'>Username</label>
                    <input onChange={(e) => setUsername(e.target.value)}  type='text' className='w-[20rem] pl-[1rem] h-[2.7rem] border-2 rounded-xl border-[#201F54]'></input>
                </div>
                <div className='flex gap-2 flex-col justify-center'>
                    <label className='text-xl text-[#201F54]'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' className='w-[20rem] pl-[1rem] h-[2.7rem] border-2 rounded-xl border-[#201F54]'></input>
                </div>
                <button className='bg-[#201F54] w-[40%] text-center  text-white font-bold uppercase py-3 px-10 rounded-full'>Login</button>
            </form>
        </div>
        </div>
        </div>
  )
}

export default Login