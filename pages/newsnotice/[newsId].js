// import Container from "../../components/Container/Container";
// import React from "react";
// import { getAllNotice } from "../../util";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useState } from "react";
// import useGetData from "../../components/Helper/Helper";

// const NewsDetail = () => {
//   const [newsData, setNewsData] = useState({});
//   const [load,setLoad] = useState(false);
//   const router = useRouter();
//   const newsId = +router.query.newsId;
//   const state_data = {
//     _api_main:'/api/news-notice/',
//     _api_sec:'/api/get-images/notice-uploads/',
//   }
//   const notice = useGetData(state_data);

//   useEffect(() => {
//     if(!notice){
//       setLoad(true)
//       return;
//     }
//     setLoad(false)
//     console.log(notice[0]?.id , newsId);
//     const singleNotice = notice.find(item => item.id === newsId);
//     console.log(singleNotice)
//     setNewsData(singleNotice)
//   },[])

//   return (
//     <Container>

//        { notice && ( <div className="flex flex-col justify-center mx-2 mx:px-32 gap-5 items-center py-[2rem] pb-[5rem]">
//         <div className=" h-[50vh] md:h-[100vh]">

//           <img src={`${notice[0]?.img_code}`} className="w-[100%] h-[100%]"></img>
//         </div>
//         <div className="flex flex-col space-y-2 px-2 md:px-0 max-w-7xl justify-center items-center gap-10">
//           <h1 className="text-3xl text-[#201F54] text-center font-bold">{notice[0]?.heading}</h1>
//           <p dangerouslySetInnerHTML={{__html:notice[0]?.para}} className="tracking-wide  text-2xs  md:text-xl  w-[100%] mx-auto  leading-9 tracking-wider">
//            {/* {newsData?.para} */}
//           </p>
//         </div>
//       </div>)}

//     </Container>
//   );
// };

// // export const getStaticProps = async (context) => {
// //   const id = parseInt(context.params.newsId);
// //   console.log(id)
// //   const singleNews = await getSingleNotice(id);
// //   console.log(singleNews)
// //     return{
// //     props:{
// //       singleNews:singleNews,
// //     },
// //     revalidate:3600,
// //   }
// // }

// // export const getStaticPaths = async () => {
// //   // const allNotice = await getAllNotice()
// //   // console.log(allNotice)
// //   const allNotice = []
// //   const paths = allNotice.map(item => ({params:{newsId:item.id}}));
// //   return{
// //     paths:paths,
// //     fallback:false,
// //   }
// // }

// export default NewsDetail;

import Container from "../../components/Container/Container";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useGetData from "../../components/Helper/Helper";
import Loader from "../../components/UI/Loader/Loader";
const NewsDetail = () => {
  const [newsData, setNewsData] = useState({});
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const newsId = router.query.newsId;
  const state_data = {
    _api_main: "/api/news-notice/" + newsId,
    _api_sec: "/api/get-images/notice-uploads/",
  };
  const notice = useGetData(state_data);

  const fetchSingleNotice = (id) => {
    if (!notice || notice.length === 0) {
      return;
    }
    // get data type  of  notice
    notice.forEach((element) => {
      if (element.id == id) {
        console.log(element);
        setNewsData(element);
      }
    });
    // const singleNotice = notice.find((item) => {
    //   console.log("item.id:", item.id);
    //   console.log("id:", id);
    //   return item.id === id;
    // });
    // console.log(singleNotice);
    // setNewsData(singleNotice);
  };

  useEffect(() => {
    if (!notice) {
      setLoad(true);
      return;
    }
    setLoad(false);
    fetchSingleNotice(newsId);
  }, [notice, newsId]);

  return (
    <Container>
      {Object.keys(notice).length > 0 ? (
        <section className="mx-auto py-[1rem] md:py-[1rem] justify-center items-center max-w-6xl">
        <div className="">
          <div className="flex  flex-col md:flex-row gap-2 justify-center  md:items-start items-center md:gap-16 px-2 md:px-0 space-y-[3%]  space-y-3">
            <div className=" flex flex-col space-y-2 w-[20rem] h-[25rem] py-2 pt-[3rem]">
              <img
                className="w-[100%] h-[100%]"
                src={newsData?.img_code}
              ></img>
              <span className="font-bold text-[#201F54] tracking-wide text-center">
                {newsData?.heading}
              </span>
            </div>
            <p  style={{ wordWrap: 'break-word' }} className="leading-8 w-full px-[2rem] md:px-[0rem] md:w-[40%] tracking-wide"  dangerouslySetInnerHTML={{ __html: newsData?.para }}/>
          </div>
        </div>
      </section>
      ) : (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
          <Loader />
        </div>
      )}
    </Container>
  );
};

export default NewsDetail;













