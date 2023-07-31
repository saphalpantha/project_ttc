import React, { useRef, useEffect } from 'react';
import Container from '../Container/Container'
import Image from "next/image";
import Link from 'next/link';
const images = [
  {
     src: "/images/stream/bba/bba_2.JPG",
     width: 442,
     height: 505,
     isSelected: false,
     alb_name:'BBA Convocation',
     caption: "After Rain (Jeshu John - designerspics.com)",
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

const ExploreGrid = () => {


  return (
    <Container>
      <section className="mx-auto flex flex-col justify-between  z-10 "> 

      <h1 className=" text-3xl md:text-5xl font-bold  tracking-wider px-16 py-9  text-[#FF9900]">Explore Tilottama Campus</h1>
         
      </section>
      <section className=' flex flex-col justify-center gap-5 px-2 md:px-16 pb-[1.5rem]'>

      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-5">
      {images.map((image, index) => (
       
        <div key={index} className={` relative  bg-slate-500 w-[${image.width}]    ${index === 1 ? ' col-span-3 md:col-span-2 row-span-3 md:row-span-1' : ''} ${index === 2 ? 'col-span-2' : ''}`}>
          <div className=' transition-all  group duration-200 ease flex hover:bg-[#201F54]  hover:opacity-95  absolute  flex-col w-full justify-center  items-center h-full'>
          <Link href={`/gallery`}>
            <h1 className='text-3xl  opacity-0 group-hover:opacity-100 text-center text-white'>{image.alb_name}</h1>
            </Link>
          </div>
          <div className={`w-[${image.width}] h-full`}>
          <img 
              
            src={image.src}
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
