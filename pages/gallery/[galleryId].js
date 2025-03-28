import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { useWindowSize } from "usehooks-ts";
import { useRouter } from "next/router";
import Container from "../../components/Container/Container";
import useGetData from "../../components/Helper/Helper";
import Image from "next/image";

export const ProductCard = ({ image }) => {
  return (
    <div className="overflow-hidden group shadow-md w-[45rem] mx-auto h-[25rem]">
      <img
        className="w-[100%] group-hover:scale-125 duration-150 ease-in h-[100%]"
        alt="img"
        src={`${[image]}`}
      ></img>
    </div>
  );
};
export const GalleryNav = ({ image }) => {
  return (
    <div className="overflow-hidden group shadow-md w-[8rem] mx-auto h-[8rem]">
      <Image
      width={400}
      height={400}
        className="w-[100%] group-hover:scale-125 duration-150 ease-in h-[100%]"
        alt="img"
        src={`${image}`}
      />
    </div>
  );
};

const Products = () => {
  const router = useRouter();

  const query = router.query.galleryId;

  const state_data = {
    _api_main: `/api/gallary/${query}`,
    _api_sec: "/api/get-images/gallary/",
  };
  const notices = useGetData(state_data);
  console.log(notices, "the notices");
  if (!notices) {
    return;
  }

  //   SwiperCore.use([Autoplay])
  const { width } = useWindowSize();
  return (
    <div className="">
      <Container>
        <h1 className="text-white  text-center font-bold max-w-6xl bg-[#FF9900] mt-[2rem] py-3 mx-auto w-full uppercase">{`${
          notices[0]?.album_name || "Gallery"
        } Album`}</h1>
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
              margin: "0 auto",
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
            {notices?.map((product) => {
              console.log(product, "the item");
              return (
                <SwiperSlide className="">
                  <ProductCard image={product?.img_code} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="px-[10rem] flex justify-center items-center mx-auto">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={width > 768 ? notices.length : 1}
            navigation
            style={{
              width: "100vw",
              display: "flex",
              margin: "0 auto",
              gap: "1rem",
              paddingBottom: "2rem",
              justifyItems: "center",
              justifyContent: "space-between",
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
            {notices.slice(1, -1).map((product) => {
              return (
                <SwiperSlide className="">
                  <GalleryNav image={product?.img_code} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Products;
