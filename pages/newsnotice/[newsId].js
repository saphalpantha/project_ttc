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
import useGetData from '../../components/Helper/Helper'
const NewsDetail = () => {
  const [newsData, setNewsData] = useState({});
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const newsId = +router.query.newsId;
  const state_data = {
    _api_main: '/api/news-notice/',
    _api_sec: '/api/get-images/notice-uploads/',
  };
  const notice = useGetData(state_data);

  const fetchSingleNotice = (id) => {
    if (notice) {
      const singleNotice = notice.find(item => item.id === id);
      setNewsData(singleNotice);
    }
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
      {notice  && (
        <div className="flex flex-col justify-center mx-2 mx:px-32 gap-5 items-center py-[2rem] pb-[5rem]">
          <div className="h-[50vh] md:h-[100vh]">
            <img src={`${newsData?.img_code}`} className="w-[100%] h-[100%]" alt="Loading" />
          </div>
          <div className="flex flex-col space-y-2 px-2 md:px-0 max-w-7xl justify-center items-center gap-10">
            <h1 className="text-3xl text-[#201F54] text-center font-bold">{newsData?.heading}</h1>
            <p dangerouslySetInnerHTML={{ __html: newsData?.para }} className="tracking-wide text-2xs md:text-xl w-[100%] mx-auto leading-9 tracking-wider" />
          </div>
        </div>
      )}
    </Container>
  );
};

export default NewsDetail;
