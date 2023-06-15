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

const starsData = [
  {id:'st1', nameofstar:'Sulav Bhandari', typeofscholarship:'SII', img:'dummy_user'},
  {id:'st2', nameofstar:'Annup Chhetri', typeofscholarship:'Compex', img:'dummy_user'},
  {id:'st3', nameofstar:'Akash Thapa', typeofscholarship:'Compex', img:'dummy_user'},
  {id:'st4', nameofstar:'Akash Thapa', typeofscholarship:'Compex', img:'dummy_user'},
  {id:'st5', nameofstar:'Asim Bhandari', typeofscholarship:'MBBS', img:'dummy_user'},
  {id:'st6', nameofstar:'Asim Bhandari', typeofscholarship:'MBBS', img:'dummy_user'},
  {id:'st7', nameofstar:'Asim Bhandari', typeofscholarship:'MBBS', img:'dummy_user'},
  {id:'st8', nameofstar:'Asim Bhandari', typeofscholarship:'MBBS', img:'dummy_user'},
]







export const Star = ({nameofstar, typeofscholarship, img}) => {
  return(
      <div className='w-[200px]  h-[220px] flex flex-col justify-center items-center'>
          <div className='w-[10rem] h-[10rem] border-2 border-[#FF9900] rounded-full flex justify-center items-center p-[2rem]'>
              <img className='w-[1/6]' alt="img" src={`/images/${img}.svg`}></img>
          </div>
          <span className='text-2xs text-#201F54 tracking-tight'>{nameofstar}</span>
          <span className='font-bold text-2xs text-[#FF9900]'>{`${typeofscholarship} Scholarship`}</span>
      </div>
  )
}
  

const OurStars = () => {
  const {width} = useWindowSize()
  return (
    <Container>

    <div className={`max-w-6xl md:max-w-full h-[30rem]  gap-10 bg-white `}>
            <div className={` ${classes.star} flex flex-col h-[27rem] bg-white drop-shadow-xl shadow-xl justify-center mx-auto `}><h1 className='text-5xl text-[#FF9900] font-bold  text-left px-20'>Our Stars</h1>
            <div className='flex flex-row justify-around px-[1rem]'>

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={100}
      slidesPerView={width > 768 ? 4 : 1}
      navigation
      style={{display:'flex' , justifyContent:'space-between', padding:'2rem 5rem', justifyItems:'center', alignItems:'center'}}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log('')}
      // onSlideChange={() => console.log('slide change')}
      >
          {starsData.map(star => {
            return(
              <SwiperSlide className=''>
                <Star key={star.id} typeofscholarship={star.typeofscholarship} nameofstar={star.nameofstar} img={star.img}/>
              </SwiperSlide>
            )
          })}
    </Swiper>
      </div>
            </div>
    </div>
            </Container>
  )
}

export default OurStars;