import React from 'react'
import classes from './Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const submitHandler = async (e) => {
        e.preventDefault();
       
        const enteredData = {
            username:username,
            password:password,
        }

        const results = await signIn('credentials', {
            redirect:false,
            email:enteredData.username,
            password:enteredData.password
          })

          if(!results.ok){
            alert(results.error)
          }
          
          if(results.ok){
            router.push('/admin/dashboard')
          }


        // try{

        //     const response =  await fetch('/api/authenticate', {
        //         method:'POST',
        //         body:JSON.stringify(enteredData),
        //         headers:{
        //         'Content-Type':'application/json'
        //     }
        // })
        // const data = await response.json();
        // console.log(data,'the login')
        
        // if(!data.isAuthenticate){
        //     alert(data.msg);
        // }
        // else{
        //     alert(data.msg);
        //     router.replace('/admin/dashboard');
        // }
        
        
    }
    // catch(err){
    //     // console.log(err);
    //     alert('Something Went Wrong. Please Try Again');
    // }

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
                <button  className='bg-[#201F54] hover:bg-[#FF9900] transition-all duration-150 w-[40%] text-center  text-white font-bold uppercase py-3 px-10 rounded-full'>Login</button>
            </form>
        </div>
        </div>
        </div>
  )
}

export default Login