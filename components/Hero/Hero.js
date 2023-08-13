import React from 'react'
import Image from 'next/image'
import CardLists from '../CardLists/CardLists'
import Container from '../Container/Container'
import HeroSlider from '../Carousel/Carousel'
import StyleCover from '../StyleCover/StyleCover'
import { motion, useScroll } from 'framer-motion'
import Modal from '../UI/Portal'
import { useState } from 'react'
import { setCookie, getCookie } from "cookies-next";
import Carousel from '../Carousel/Carousel'
import { useEffect } from 'react'

const Hero = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [img,setImg] = useState([{id:100,photo:''}]);
  
  useEffect(() => {
      fetch('/api/spotlight').then(res => res.json()).then(data => {data && setImg(data?.msg)}).catch(err => console.log('eers', err));
  },[img])
  const spotlightCloseHandler = () => {
    setCookie('open', 'true')
    setIsOpen(false)
  }

  return (
    
    <Container>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.8}} className='max-w-full   relative'>
      {/* <Image  className=' z-20 w-[100%] h-[100%] object-contain' src="/images/main_photo.svg" width={500} height={500} ></Image> */}
      <Carousel/>
    </motion.div>
          {!getCookie('open')  && <Modal isOpen={isOpen} img={img}  onClose={spotlightCloseHandler} />  }

        <CardLists/>

        
    {/* <h1 className=' text-6xl max-w-lg font-[400] text-center font-serif absolute top-[110%] text-white font-semibold left-[35%]'>Welcome to 
Tilottama Campus</h1> */}
</Container>


  )
}

export default Hero