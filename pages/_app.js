import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Sidebar from "../components/Admin/Sidebar/Sidebar";

export default function App({ Component, pageProps }) {
  const [isAdminComp, setIsAdminComp] = useState(false);
  const router  = useRouter()
  const path = router.asPath;
  useEffect(() => {
    if(path === '/'){
      setIsAdminComp(false);
    }
    if(path === '/admin/dashboard' || path === '/admin/results' || path === '/admin/admission-forms'){
      setIsAdminComp(true)

    }
    const user = localStorage.getItem('isAuth');
    if(user === null || user === false){
      if(path.startsWith('/admin') || path.startsWith('/api')){
        if(!path.startsWith('/admin/login')){
          router.push('/');
          setIsAdminComp(false);
        }
        else{
          setIsAdminComp(true)
        }
      }
    }
    else{
      if(path.startsWith('/admin/login')){
        router.replace('/admin');
      }
    }

  },[])



  


  return (
    <Fragment>
      {" "}
      {!isAdminComp  &&  <Header />} { isAdminComp ? <div className="flex justify-between w-[100vw]"> <Sidebar/>  <Component {...pageProps} /> </div> : <div>  <Component {...pageProps} /> </div> }
     {!isAdminComp &&  <Footer />}
    </Fragment>
  );
}
