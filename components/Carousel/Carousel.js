import SwiperCore , { Navigation, Pagination, Scrollbar,  A11y, Autoplay } from 'swiper';

import  { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const sliderData = [
  {id:'s1', img:'/images/stream/college_pics/ci_1.jpg', subtitle:'Welcome to Mega Imperial Consultancy Services.We Provide : ', heading:["Bank Job Certification Course", "Management Consulting", "Study Abroad-Australia,Canada,UK and USA"] },
  {id:'s2', img:'/images/stream/college_pics/ci_5.jpg', subtitle:'Your Journey to study Abroad in Australia , UK , Canada and US. Begins with', heading:["Mega Imperial Consultancy Services"] },
  {id:'s3', img:'/images/stream/college_pics/ci_6.jpg', subtitle:'We are all about helping you reach your next working goals at best companies. Experience in -', heading:["Job Certification course in Administration and Management Field."], },

]

const DisplayImage = ({subtitle, heading, img}) => {

  return(

    <div className='w-[100vw] object-cover  z-1 h-[100vh]  bg-black  relative min-h-screen'>
      <img className='w-[100%] object-cover max-h-[100vh] h-[100%]    bg-top' src={img} alt={subtitle}></img>
      {/* <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='text-2xl   md:text-5xl text-center text-white'>{subtitle}</h1>
              <ul className="py-[2rem] px-[2rem]">
                {heading?.map(i => <li className='text-5xl  font-bold  text-justify text-white'>{i}</li>)}
              </ul>
      </div> */}
  </div>
    )
}

export default   () => {
  SwiperCore.use([Autoplay])
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
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      {sliderData.map(i => {
        return(
          <SwiperSlide>
            <DisplayImage img={i.img} subtitle={i.subtitle} heading={i.heading}/>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};