import React from 'react'
import Image from 'next/image'
import CardLists from '../CardLists/CardLists'
import Container from '../Container/Container'
import HeroSlider from '../Carousel/Carousel'
import StyleCover from '../StyleCover/StyleCover'
import { motion, useScroll } from 'framer-motion'


const Hero = () => {

  const textVar  = {
    offscreen: {
      y: 2500
    },
    onscreen: {
      y: 450,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const {scrollYProgress} = useScroll()
  return (
    
    <Container>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.8}} className='max-w-full   relative'>
      <Image  className='w-[100%] h-[100%] object-contain' src="/images/hero_pic.png" width={500} height={500} ></Image>
      <motion.article   variants={textVar} className='text-white max-w-md md:text-6xl absolute translate-x-[-40%] left-[40%] z-[100] top-[0%]'    >
          Welcome to Tilottama Campus
      </motion.article>
    </motion.div>
        <CardLists/>

        
      {/* <HeroSlider/> */}
    {/* <h1 className=' text-6xl max-w-lg font-[400] text-center font-serif absolute top-[110%] text-white font-semibold left-[35%]'>Welcome to 
Tilottama Campus</h1> */}
</Container>


  )
}

export default Hero