import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Sidebar from "../components/Admin/Sidebar/Sidebar";
import {getCookie } from 'cookies-next'
import Preloader from "../components/UI/Preloader";
import {SessionProvider, useSession} from 'next-auth/react'
import jwt from 'jsonwebtoken'
import { headers } from "next/dist/client/components/headers";
import { useJwt } from "react-jwt";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [isAdminComp, setIsAdminComp] = useState(false);
  const [myToken, setMyToken] = useState('');
  const {decodedToken, isExpried}  = useJwt(myToken);
  const [loading, setLoading] = useState(true)
  const router  = useRouter()
  const path = router.asPath;
  useEffect(() => {
    setMyToken(localStorage.getItem('isAuth'))

    // try{
    //   fetch('/api/session',{
    //     method:'POST',
    //     body:JSON.stringify({token:token}),
    //     headers:{
    //       'Content-Type':'applicaion/json',
    //     },
    //   }).then(res => res.json()).then(data => {
    //     console.log(data, 'the token')
    //   })
    //   // const decoded_token =   jwt.decode(token,'DqbXbAxbtPkSM5YgiiJtIr58B0QlkaEh');
    //   // console.log(decoded_token,'decoded')
    // }
    // catch(err){
    //   console.log(err)
    // }
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 2-second delay
    const user = getCookie('user')
    if(!decodedToken || decodedToken.success == null){
      if(path.startsWith('/admin')){
        router.push('/admin/login');
        setIsAdminComp(false)
      }
      if(path === '/admin/admisssion-forms' || path === '/admin/dashboard' || path === '/admin/login'){
        setIsAdminComp(true)
      }
    }
    else{
      if(!path.startsWith('/admin/')){
        setIsAdminComp(false)
      }
      else{
        setIsAdminComp(true)
      }
    }


  },[path])



  return (

    <SessionProvider session={session}>
    <Fragment>
        {loading ? <Preloader/> :  <div>

    <div>
  {!isAdminComp  &&  <Header />} { isAdminComp ? <div className="flex justify-between w-[100vw]"> <Sidebar/>  <Component {...pageProps} /> </div> : <div>  <Component {...pageProps} /> </div> }
 {!isAdminComp &&  <Footer />}
  </div>

  {/* <div className="text-4xl text-purple-700">Loading</div> */}
</div> }
   
    </Fragment>
    </SessionProvider>
  );
}
