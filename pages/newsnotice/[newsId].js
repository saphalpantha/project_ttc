import newsNotice from ".";
import Container from "../../components/Container/Container";
import React from "react";
import { getAllNotice, getSingleNotice } from "../../util";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";




const NewsDetail = () => {
  const [newsData, setNewsData] = useState({});
  const router = useRouter();
  const newsId = +router.query.newsId;
  useEffect(() => {
    findNewsById(newsId)
  },[newsId])

  const findNewsById = async (id) => {
    const AllNotice = await getAllNotice();
    const singleNotice = AllNotice.find(item => item.id ===  id)
    setNewsData(singleNotice)
    console.log(singleNotice)
  }

  return (
    <Container>
      <div className="flex flex-col justify-center mx-2 mx:px-32 gap-5 items-center py-[2rem] pb-[5rem]">
        <div className=" h-[50vh] md:h-[100vh]">
          
          <img src={`/images/notice-uploads/${newsData?.photo}`} className="w-[100%] h-[100%]"></img>
        </div>
        <div className="flex flex-col space-y-2 px-2 md:px-0 max-w-7xl justify-center items-center gap-10">
          <h1 className="text-3xl text-[#201F54] text-center font-bold">{newsData?.heading}</h1>
          <p dangerouslySetInnerHTML={{__html:newsData.para}} className="tracking-wide  text-2xs  md:text-xl  w-[100%] mx-auto  leading-9 tracking-wider">
           {/* {newsData?.para} */}
          </p>
        </div>
      </div>
    </Container>
  );
};





// export const getStaticProps = async (context) => {
//   const id = parseInt(context.params.newsId);
//   console.log(id)
//   const singleNews = await getSingleNotice(id);
//   console.log(singleNews)
//     return{ 
//     props:{
//       singleNews:singleNews,
//     },
//     revalidate:3600,
//   }
// }

// export const getStaticPaths = async () => {
//   // const allNotice = await getAllNotice()
//   // console.log(allNotice)
//   const allNotice = []
//   const paths = allNotice.map(item => ({params:{newsId:item.id}}));
//   return{
//     paths:paths,
//     fallback:false,
//   }
// }


export default NewsDetail;
