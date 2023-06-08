import { Gallery } from "react-grid-gallery";
import React from "react";
import classes from "./gridlayout.module.css";
import Container from '../Container/Container'

const images = [
  {
     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
     width: 442,
     height: 305,
     isSelected: false,
     caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
     width: 342,
     height: 191,
     alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 582,
     height: 191,
  },

  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 282,
     height: 291,
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 382,
     height: 291,
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 382,
     height: 291,
  },

];

const ExploreGrid = () => {
  return (
    <Container>
      <section className="mx-auto items-center flex flex-col px-32 justify-between space-y-5 z-10"> 

      <h1 className=" text-3xl md:text-5xl font-bold text-start tracking-wider  px-1 md:px-[10rem] py-10 text-[#FF9900]">Explore Tilottama Campus</h1>
         
      <div className="w-[100%] mx-auto bg-[#D9D9D9] text-[#201F54] font-bold uppercase tracking-wide py-3 text-center">Explore More</div>
      </section>






    </Container>
  );
};

export default ExploreGrid;
