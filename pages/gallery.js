import React from 'react'
import Gallery from '../components/Gallery/Gallery'


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
const gallery = () => {


  return (
    <div>w
        <Gallery images={images}/>
    </div>
  )
}

export default gallery