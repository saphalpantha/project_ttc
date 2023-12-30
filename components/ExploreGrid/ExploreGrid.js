import React, { useEffect } from 'react';
import Container from '../Container/Container';
import Link from 'next/link';
// let db = [];
import { useState } from 'react';
import useGetData from '../Helper/Helper';



const images = [
  {
     src: "/images/stream/bba/bba_1.jpg",
     width: 442,
     height: 505,
     isSelected: false,
     alb_name:"BBA Convocation",
  },
  {
    src: "/images/stream/college_pics/ci_3.JPG",
     width: 440,
     height: 291,
     alt: "Boats (Jeshu John - designerspics.com)",
     alb_name:'College Infrastructure',

  },

  {
    src: "/images/stream/college_pics/ci_5.JPG",
     width: 282,
     height: 291,
     alb_name:'College Infrastructure',
  },

  {
    src: "/images/stream/lab/l_1.jpeg",
     width: 312,
     height: 533,
     alb_name:'Lab',

  },
  {
    src: "/images/stream/lab/l_2.jpeg",
     width: 312,
     height: 533,
     alb_name:'Lab'
  },
  {
    src: "/images/stream/college_pics/ci_1.jpg",
     width: 312,
     height: 533,
     alb_name:'College Infrastructure',

  },
  {
    src: "/images/stream/bba/bba_1.jpg",
     width: 312,
     height: 333,
     alb_name:'BBA Convocation',
  },

];
// const images1 = [
//   {
//      src: grid[0]?.cover_image,
//      width: 442,
//      height: 505,
//      isSelected: false,
//      alb_name:grid[0].album_name,
//   },
//   {
//     src: "/images/stream/college_pics/ci_3.JPG",
//      width: 440,
//      height: 291,
//      alt: "Boats (Jeshu John - designerspics.com)",
//      alb_name:'College Infrastructure',

//   },
//   {
//     src: grid[1]?.cover_image,
//     width: 442,
//     height: 505,
//     isSelected: false,
//     alb_name:grid[1].album_name,
//  },
//   {
//     src: "/images/stream/lab/l_1.jpeg",
//      width: 312,
//      height: 533,
//      alb_name:'Lab',

//   },
//   {
//     src: grid[2]?.cover_image,
//     width: 442,
//     height: 505,
//     isSelected: false,
//     alb_name:grid[2].album_name,
//  },
//  {
//    src: grid[3]?.cover_image,
//    width: 442,
//    height: 505,
//    isSelected: false,
//    alb_name:grid[3].album_name,
// },
// {
//   src: grid[4]?.cover_image,
//   width: 442,
//   height: 505,
//   isSelected: false,
//   alb_name:grid[4].album_name,
// }
// ];
const ExploreGrid = () => {

  const state_data = {
    _api_main:'/api/getall-album',
    _api_sec:'/api/get-images/gallary/',
  }
  const grid = useGetData(state_data);
  if(!grid){
    return;
  }

const images1 = [
  {
     src: grid[0]?.img_code,
     width: 442,
     height: 505,
     isSelected: false,
     alb_name:grid[0]?.album_name,
  },
  {
    src: "/images/stream/college_pics/ci_3.JPG",
     width: 440,
     height: 291,
     alt: "Boats (Jeshu John - designerspics.com)",
     alb_name:'College Infrastructure',

  },
  {
    src: grid[1]?.img_code,
    width: 442,
    height: 505,
    isSelected: false,
    alb_name:grid[1]?.album_name,
 },
  {
    src: "/images/stream/lab/l_1.jpeg",
     width: 312,
     height: 533,
     alb_name:'Lab',

  },
  {
    src: grid[2]?.img_code,
    width: 442,
    height: 505,
    isSelected: false,
    alb_name:grid[2]?.album_name,
 },
 {
   src: grid[3]?.img_code,
   width: 442,
   height: 505,
   isSelected: false,
   alb_name:grid[3]?.album_name,
},
{
  src: grid[4]?.img_code,
  width: 442,
  height: 505,
  isSelected: false,
  alb_name:grid[4]?.album_name,
}
];
//   return (
//     <Container>
//       {console.log(grid)}
    
//       <section className="mx-auto flex flex-col justify-between  z-10 "> 

//       <ScrollLayout x={-200} duration={0.5}>
//       <h1 className=" text-3xl md:text-5xl font-bold  tracking-wider px-16 py-9  text-[#FF9900]">Explore Tilottama Campus</h1>
//       </ScrollLayout>
         
//       </section>
//       <ScrollLayout x={200} duration={0.7}>
//       <section className=' flex flex-col justify-center gap-5 px-2 md:px-16 pb-[1.5rem]'>

//       <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-5">
//       {grid?.slice(0,7).map((image, index) => (

//         <div key={index} className={` relative  bg-slate-500 w-[${index+100}]     ${index === 1 ? ' col-span-3 md:col-span-2 row-span-3 md:row-span-1' : ''} ${index === 2 ? 'col-span-2' : ''}`}>
//           <div className=' transition-all  group duration-200 ease flex hover:bg-[#201F54]  hover:opacity-95  absolute  flex-col w-full justify-center  items-center h-full'>
//           <Link href={`/gallery`}>
//             <h1 className='text-3xl  opacity-0 group-hover:opacity-100 text-center text-white'>{image.album_name}</h1>
//             </Link>
//           </div>
//           <div className={` object-cover w-[${index+200}] max-h-[400px] h-[70vh] `}>
//           <img 
//             src={`/images/gallary/${image.cover_image}`}
//             alt={`fasd`}
//             className=" object-cover hover:border-2  border-red-500 cursor-pointer w-[100%] h-[100%]  hover:border-black hover:text-white hover:font-bold hover:text-center hover:transition-all duration-150"
//             />
//             </div>
//         </div>
//       ))}
//     </div>
//      <a href='http://tour.virtualedufairnepal.com/tilottamacampus/'> <div className=" transition-all duration-300 ease hover:bg-[#201F54] hover:text-white  w-[100%] mx-auto bg-[#D9D9D9] text-[#201F54] font-bold uppercase tracking-wide py-3  text-center">Explore More</div></a>
//       </section>

//       </ScrollLayout>

//     </Container>
//   );
// };

// export default ExploreGrid;
return (
  <Container>
    <section className="mx-auto flex flex-col justify-between  z-10 "> 

    <h1 className=" text-3xl md:text-5xl  text-left font-bold  tracking-wider px-[1rem] md:px-[3.5rem] py-9   text-[#FF9900]">Explore Tilottama Campus</h1>
       
    </section>
    <section className=' flex flex-col justify-center gap-5 px-2 md:px-14 pb-[1.5rem]'>

    <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-5">
    {images1.map((image, index) => (
     
      <div key={index} className={` relative  bg-slate-500 w-[${image.width}]    ${index === 1 ? ' col-span-3 md:col-span-2 row-span-3 md:row-span-1' : ''} ${index === 2 ? 'col-span-2' : ''}`}>
        <div className=' transition-all  group duration-200 ease flex hover:bg-[#201F54]  hover:opacity-95  absolute  flex-col w-full justify-center  items-center h-full'>
        <Link href={`/gallery/`}>
          <h1 className='text-3xl  opacity-0 group-hover:opacity-100 text-center text-white'>{image.alb_name}</h1>
          </Link>
        </div>
        <div className={`w-[${image.width}] h-full`}>
        <img 
            
          src={`${(index === 1 || index == 3 ) ? image.src : `${image.src}`}`}
          alt={`Image ${index + 1}`}
          className=" object-center  object-cover hover:border-2  border-red-500 cursor-pointer w-[100%] h-[100%]  hover:border-black hover:text-white hover:font-bold hover:text-center hover:transition-all duration-150"
          />
          </div>
      </div>
    ))}
  </div>
   <a href='http://tour.virtualedufairnepal.com/tilottamacampus/'> <div className=" transition-all duration-300 ease hover:bg-[#201F54] hover:text-white  w-[100%] mx-auto bg-[#D9D9D9] text-[#201F54] font-bold uppercase tracking-wide py-3  text-center">Explore More</div></a>
    </section>


  </Container>
);
};

export default ExploreGrid;