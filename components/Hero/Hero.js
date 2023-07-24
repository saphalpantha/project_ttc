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

const Hero = () => {

  const [isOpen, setIsOpen] = useState(true);
  
  setCookie('open', 'true')
  const spotlightCloseHandler = () => {
    setIsOpen(false)
  }
  return (
    
    <Container>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.8}} className='max-w-full   relative'>
      <Image  className='w-[100%] h-[100%] object-contain' src="/images/main_photo.svg" width={500} height={500} ></Image>

    </motion.div>
          {!getCookie('open')  && <Modal isOpen={isOpen} img={"/images/banner.png"} onClose={spotlightCloseHandler} />  }

        <CardLists/>

        
      {/* <HeroSlider/> */}
    {/* <h1 className=' text-6xl max-w-lg font-[400] text-center font-serif absolute top-[110%] text-white font-semibold left-[35%]'>Welcome to 
Tilottama Campus</h1> */}
</Container>


  )
}

export default Hero