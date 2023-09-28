import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import { useWindowSize } from 'usehooks-ts';
import Container from '../Container/Container';
import classes from './OurStar.module.css'
import useGetData from '../Helper/Helper';





export const Star = ({nameofstar, typeofscholarship, img}) => {
  return(
      <div className='w-[200px]  h-[220px] flex flex-col justify-center items-center'>
          <div className='w-[10rem]  h-[10rem] overflow-clip border-2 border-[#FF9900] rounded-full flex justify-center items-center'>
              <img className='w-[100%] object-cover rounded-full h-[100%]' alt="img" src={img}></img>
          </div>
          <span className='text-2xs text-#201F54 tracking-tight'>{nameofstar}</span>
          <span className='font-bold text-2xs text-[#FF9900]'>{`${typeofscholarship}`}</span>
      </div>
  )
}
  


// const initalState = {
//   starD:[],
// }
const OurStars = () => {

  const state_data = {
    _api_main:'/api/our-stars',
    _api_sec:'/api/get-images/stars-uploads/',
  }

  const starD = useGetData(state_data);
  if(!starD){
    return <h1>hello</h1>
  }
  
  // const [starD, setStarD] = useState(initalState)
  // let final_data = [];
  // useEffect(() => {
  //   stateHandler()
  // },[])

  



  // const stateHandler =  async () => {
  //   try{
  //     const res = await fetch('/api/our-stars/');
  //     const starData = await res.json();
  //     const d = starData.msg
  //     d.map(async i=>{
  //       try{

  //         const res = await fetch(`/api/get-images/stars-uploads/${i.photo}`);
  //         if(!res.ok){
  //           return null;
  //         }
  //         const data = await res.json();
  //         if (data.msg && data.ext) {
  //           const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
  //           let  updatedItem  =  { ...i, img_code: imgFile };
  //           final_data.push(updatedItem)
  //         }
  //       }
  //       catch(err){
  //         console.log(err);
  //       }
  //       finally{
  //         setStarD(prev => {
  //           return {
  //             starD:final_data,
  //           }
  //         })
  //       }
  //     })
       
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //    fetch('/api/our-stars/').then(result => result.json()).then(data => {
  //     let d = data.msg;
  //     d.map(async i=>{
  //       const res = await fetch(`/api/get-images/stars-uploads/${i.photo}`);
  //       if(!res.ok){
  //         return null;
  //       }
  //         const data = await res.json();
  //         if (data.msg && data.ext) {
  //           const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
  //           let  updatedItem  =  { ...i, img_code: imgFile };
  //           final_data.push(updatedItem)
  //         } else {
  //         }
  //     })
  //     updated_data.push(...final_data);
  //     console.log(updated_data, 'the final')
  //     // setStarD(prev => {
  //     //   return [...prev, ...final_data]
  //     // })
  //   }).catch(err => console.log(err))
  // },[])
  const {width} = useWindowSize()
  return (
    <Container>
    <div className={`max-w-6xl md:max-w-full  h-[30rem]  gap-10  bg-white `}>
            <div className={` ${classes.star} flex flex-col h-[27rem] bg-white drop-shadow-xl shadow-xl justify-center mx-auto `}><h1 className='text-3xl md:text-5xl text-[#FF9900] font-bold  text-left px-[1rem] md:px-[4rem]'>Our Stars</h1>
            <div className='flex flex-row justify-around px-[3rem]'>

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={100}
      loop={true}
      slidesPerView={width > 768 && width <= 1280 && 4 || width < 768 && 1 || width > 1280 && 6}
      navigation
      style={{display:'flex' , justifyContent:'space-between', padding:'3rem', justifyItems:'center', alignItems:'center'}}
      pagination={{ clickable: true }}
      >
          {starD.map(star => {
            return(
              <SwiperSlide className=''>
                <Star key={star?.id} typeofscholarship={star?.scholarship_name} nameofstar={star?.name} img={star?.img_code}/>
              </SwiperSlide>
            )
          })}
    </Swiper>
      </div>
      {/* <h1 className='text-3xl text-blue-600'>{width}</h1> */}
            </div>
    </div>
            </Container>
  )
}

export default OurStars;




