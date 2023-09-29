import React from 'react'
import CardLists from '../CardLists/CardLists'
import Container from '../Container/Container'
import { motion } from 'framer-motion'
import Modal from '../UI/Portal'
import { useState } from 'react'
import { setCookie, getCookie } from "cookies-next"
import Carousel from '../Carousel/Carousel'
import { useEffect } from 'react'
import useGetData from '../Helper/Helper'

const Hero = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [img,setImg] = useState([{id:100,photo:''}]);
  
  const state_data = {
    _api_main:'/api/spotlight',
    _api_sec:'/api/get-images/spotlight-uploads/',
  }
  const spotlightData = useGetData(state_data);
  
  console.log(spotlightData)

  
  const spotlightCloseHandler = () => {
    setCookie('open', 'true')
    setIsOpen(false)
  }

  

  return (
    
    <Container>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.8}} className='max-w-full   relative'>
      {/* <Image  className=' z-20 w-[100%] h-[100%] object-contain' src="/images/main_photo.svg" width={500} height={500} ></Image> */}
      <div className='w-full h-[100vh]'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/W2GAo7EWkSs?si=DF60aqQbcSuNBoCf" title="YouTube video player" frameborder="0" controls="0" autoplay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      {/* <Carousel/> */}
    </motion.div>
          {!getCookie('open')  && <Modal isOpen={isOpen} img={spotlightData}  onClose={spotlightCloseHandler} />  }

        <CardLists/>

        
    {/* <h1 className=' text-6xl max-w-lg font-[400] text-center font-serif absolute top-[110%] text-white font-semibold left-[35%]'>Welcome to 
Tilottama Campus</h1> */}
</Container>


  )
}

export default Hero