import useGetData from "../components/Helper/Helper";
import MainPage from "../components/MainPage/MainPage";
import getMyData from "../getData";

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}




// export async function getStaticProps(context) {

//   const Spotlight_state_data = {
//     _api_main: "/api/spotlight",
//     _api_sec: "/api/get-images/spotlight-uploads/",
//   };

//   const News_state_data = {
//     _api_main: `http://${process.env.BASE_URL}/api/news-notice?limit=3`,
//     _api_sec: `http://${process.env.BASE_URL}/api/get-images/notice-uploads/`,
//   };

//   const Star_state_data = {
//     _api_main:'/api/our-stars',
//     _api_sec:'/api/get-images/stars-uploads/',
//   }

//   const Grid_state_data = {
//     _api_main:'/api/getall-album?limit=7',
//     _api_sec:'/api/get-images/gallary/',
//   }



//   const [newNoticeData, spotlightData, starsData, gridData] = await Promise.all([
//     getMyData(News_state_data),
//     getMyData(Spotlight_state_data),
//     getMyData(Star_state_data),
//     getMyData(Grid_state_data),
//   ]);



//   return {
//     props:{
//       data:{
//         spotlightData:spotlightData,
//         newsData:newNoticeData,
//         spotlightData:spotlightData,
//         starsData,
//         gridData
//       }
//     }
//   }



  

// }




