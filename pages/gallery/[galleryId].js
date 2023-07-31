import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { Fragment, useEffect, useState } from "react"; 
import  { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Navigation, Pagination, A11y,Autoplay } from "swiper";
import { useWindowSize } from "usehooks-ts";
import { useRouter } from "next/router";
import Container from "../../components/Container/Container";

export const ProductCard = ({ product }) => {
  return (  
    <div className="overflow-hidden group shadow-md w-[45rem] mx-auto h-[25rem]">
      <img
        className="w-[100%] group-hover:scale-125 duration-150 ease-in h-[100%]"
        alt="img"
        src={product}
      ></img>
    </div>
  );
};
export const GalleryNav = ({ product }) => {
  return (
    <div className="overflow-hidden group shadow-md w-[8rem] mx-auto h-[8rem]">
      <img
        className="w-[100%] group-hover:scale-125 duration-150 ease-in h-[100%]"
        alt="img"
        src={product}
      ></img>
    </div>
  );
};



const Products = () => {
    const [images,setImages] = useState([]);
    const router = useRouter();
    const query = router.query.galleryId;
    useEffect(() => {
        if(query === 'BBA Convocation'){
            const imgs = ['/images/stream/bba/bba_1.jpg','/images/stream/bba/bba_2.jpg','/images/stream/bba/bba_3.jpg','/images/stream/bba/bba_4.jpg',]
            setImages(imgs)
        }
        if(query === 'Lab'){
            const imgs = ['/images/stream/lab/l_1.jpeg','/images/stream/lab/l_2.jpeg','/images/stream/lab/l_3.jpeg']
            setImages(imgs)
        }
        if(query === 'College Infrastructure'){
            const imgs = ['/images/stream/college_pics/ci_1.jpg','/images/stream/college_pics/ci_2.jpg','/images/stream/college_pics/ci_3.jpg','/images/stream/college_pics/ci_4.jpg','/images/stream/college_pics/ci_5.jpg','/images/stream/college_pics/ci_6.jpg']
            setImages(imgs)
        }
    },[query])
//   SwiperCore.use([Autoplay])
  const { width } = useWindowSize();
  return (
    <Container>
       <h1 className='text-white  text-center font-bold max-w-6xl bg-[#FF9900] mt-[2rem] py-3 mx-auto w-full uppercase'>{`${query} Album`}</h1>
        {/* <h1 className="text-3xl md:text-4xl font-semibold text-center py-4 uppercase "></h1> */}
      <div
        className={`max-w-6xl mx-auto px-2 md:px-32  md:max-w-full min-h-screen  pt-[2rem]  bg-[#f8f9fa] `}
      >


          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={width > 768 ? 1 : 1}
            navigation
            style={{
              display: "flex",
              margin:'0 auto',
              justifyContent: "space-between",
              justifyItems: "center",
              alignItems: "center",
            }}
            // autoplay={{
                //   delay:2500,
            //   disableOnInteraction:false,
            // }}
            // pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log('')}
            // onSlideChange={() => console.log('slide change')}
          >

            {images.map((product) => {
                return (
                  <SwiperSlide className="">
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="px-[10rem]">

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={width > 768 ? images.length : 1}
            navigation
            style={{
              display: "flex",
              margin:'0 auto',
              gap:'1rem',
              paddingBottom: "2rem",
              justifyItems: "center",
              justifyContent:'flex-start',
              alignItems: "center",
            }}
            // autoplay={{
                //   delay:2500,
                //   disableOnInteraction:false,
                // }}
                // pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log('')}
            // onSlideChange={() => console.log('slide change')}
            >

            {images.map((product) => {
                return (
                    <SwiperSlide className="">
                  <GalleryNav product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
            </div>

    </Container>
  );
};

export default Products;
