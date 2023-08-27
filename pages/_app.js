import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Sidebar from "../components/Admin/Sidebar/Sidebar";
import Preloader from "../components/UI/Preloader";
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [isAdminComp, setIsAdminComp] = useState(false);
  const [loading, setLoading] = useState(true)
  const router  = useRouter()
  const path = router.asPath;
  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 2-second delay
        if(!session ){
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


