import React, { useRef, useEffect } from 'react';
import Container from '../Container/Container'
import Image from "next/image";
import Link from 'next/link';
const images = [
  {
     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
     width: 442,
     height: 505,
     isSelected: false,
     caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
     width: 440,
     height: 291,
     alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 282,
     height: 291,
  },

  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 312,
     height: 533,
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 312,
     height: 533,
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 312,
     height: 533,
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 312,
     height: 333,
  },

];

const ExploreGrid = () => {


  return (
    <Container>
      <section className="mx-auto  flex flex-col py-1 md:py-[5rem]   justify-between space-y-5 z-10 "> 

      <h1 className=" text-3xl md:text-5xl font-bold  tracking-wider pt-2 px-36  text-[#FF9900]">Explore Tilottama Campus</h1>
         
      </section>
      <section className=' px-2 md:px-32 pb-[2rem]'>

      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-1">
      {images.map((image, index) => (
        <div key={index} className={` relative   ${index === 1 ? ' col-span-3 md:col-span-2 row-span-3 md:row-span-1' : ''} ${index === 2 ? 'col-span-2' : ''}`}>
          <img
          
            src={"/images/the_img.jpg"}
            alt={`Image ${index + 1}`}
            // width={image.width}
            // height={image.height}
            className=" object-center cursor-pointer w-full h-full w-[100%] h-[100%]  hover:border-black hover:text-white hover:font-bold hover:text-center hover:transition-all duration-150"
          />
        </div>
      ))}
    </div>
      </section>
     <a href='http://tour.virtualedufairnepal.com/tilottamacampus/'> <div className="w-[90%] mx-auto bg-[#D9D9D9] text-[#201F54] font-bold uppercase tracking-wide py-3 text-center">Explore More</div></a>


    </Container>
  );
};

export default ExploreGrid;
