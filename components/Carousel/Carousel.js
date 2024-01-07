import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useGetData from "../Helper/Helper";

const DisplayImage = ({ subtitle, heading, img }) => {
  return (
    <div className="w-[100vw] object-cover  z-1 h-[100vh]  bg-black  relative min-h-screen">
      <img
        className="w-[100%] object-cover max-h-[100vh] h-[100%]    bg-top"
        src={img}
        alt={subtitle}
      ></img>
      {/* <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='text-2xl   md:text-5xl text-center text-white'>{subtitle}</h1>
              <ul className="py-[2rem] px-[2rem]">
                {heading?.map(i => <li className='text-5xl  font-bold  text-justify text-white'>{i}</li>)}
              </ul>
      </div> */}
    </div>
  );
};

export default () => {
  const state_data = {
    _api_main: "/api/slider/get",
    _api_sec: "/api/get-images/slider-uploads/",
  };
  const sliderData = useGetData(state_data);
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
    >
      {sliderData
        .filter((i) => i.active == 1)
        .map((i) => {
          return (
            <SwiperSlide>
              <DisplayImage
                img={i.img_code}
                subtitle={"img"}
                heading={i.heading}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
