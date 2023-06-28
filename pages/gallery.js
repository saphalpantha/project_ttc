import React from 'react'
import Gallery from '../components/Gallery/Gallery'


const images = [
  {
     src: "/images/stream/college_pics/ci_1.jpg",
     width: 442,
     height: 505,
     isSelected: false,
     caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/stream/college_pics/ci_2.jpg",
     width: 440,
     height: 291,
     alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "/images/stream/college_pics/ci_5.jpg",
     width: 282,
     height: 291,
  },

  {
    src: "/images/stream/lab/l_1.jpeg",
     width: 312,
     height: 533,
  },
  {
    src: "/images/stream/lab/l_2.jpeg",
     width: 312,
     height: 533,
  },
  {
    src: "/images/stream/college_pics/ci_1.jpg",
     width: 312,
     height: 533,
  },
  {
    src: "/images/stream/bba/bba_4.jpg",
     width: 312,
     height: 333,
  },

];


const gallery = () => {


  return (
    <div>
        <Gallery images={images}/>
    </div>
  )
}

export default gallery