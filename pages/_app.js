import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Sidebar from "../components/Admin/Sidebar/Sidebar";

export default function App({ Component, pageProps }) {
  const [isAdminComp, setIsAdminComp] = useState(false);
  useEffect(() => {
    const path = router.asPath;
    if(path.startsWith('/admin')){
      setIsAdminComp(true)
    }
  },[])
  const router = useRouter();


  return (
    <Fragment>
      {" "}
      {!isAdminComp  &&  <Header />} { isAdminComp ? <div className="flex justify-between w-[100vw]"> <Sidebar/>  <Component {...pageProps} /> </div> : <div>  <Component {...pageProps} /> </div> }
     {!isAdminComp &&  <Footer />}
    </Fragment>
  );
}
