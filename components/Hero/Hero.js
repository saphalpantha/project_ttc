import React, { Fragment } from 'react'
import CardLists from '../CardLists/CardLists'
import Container from '../Container/Container'
import { motion } from 'framer-motion'
import Modal from '../UI/Portal'
import { useState } from 'react'
import { setCookie, getCookie } from "cookies-next"
import Carousel from '../Carousel/Carousel'
import { useEffect } from 'react'
import useGetData from '../Helper/Helper'


const src = "https://streamable.com/ml5gys";

export const Video = () => {
  return (
    <div className='w-[100%] h-[100%]'>
      <video width={"100%" } height={"60vh"}  id="video-player-tag" class="video-player-tag" loop="1" autoplay="1"  poster="//cdn-cf-east.streamable.com/image/ml5gys_first.jpg?Expires=1696325460&amp;Signature=mvPh8VUoUOCtaNstNE5hi6UyJ7fULXrOu49uYinwzeirYrOxLEPGR77Ec6Gu0Z0UBkhYqFW5eegAVJVZfsAQkd8SrbcadyQQ7a2rRLvwT~EnzD-dU-tEStGHASg1tbtvc-yQmSELQYuQ5geFSQjxUjlAmkwR9aKkk0hOq4MuvbvOtI2V-lFOTvcaF0QelJGlp0cJMIenHwJHWPGKQNf0H3~UdHTTC7fGXlaoLlIHgE-6AcyjDWmM0xaDCaf3wmb1~3xusYlQ473OZXfbIZAkBUZGGGhCCmgOs4Apvpdve99-p~Qbwue03PTvWWqhrHKXqcw35i4yaY54GoStXI7ZSw__&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" src="//cdn-cf-east.streamable.com/video/mp4/ml5gys.mp4?Expires=1696325460&amp;Signature=ZA7OXsrW2NqjDTLFCo2JCya4OY9BBVdTH5m5eVRSCt3XscCy5QkXMHlZEUUi4IVUrIw9LqVjuZHTWuaA9O9G1iAouVXVWmwefEgyeylUZrhMMiSCZyRLKpFf1IylSz3G6IzxlySqSvCQst~vmuWm~gv6II2dzLTiWm4pAAJyYDQPtmzowKaBHMLVmE~MGKHMY14Isv~QJtIfMN8G7LFR4cY7KTqPRdNF4SRjec0wmlQyCjqrl0b~A7Pri81OcDS2ZqRCC5Wmdd5xhEaJekr744yMPFcdD5fLPVGpfKmie9pcym-JBJx8~JQDAx3RMJesZpB6tltwCV9YrPDV~N7pgw__&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" controlslist="nodownload">
  </video>
    </div>
  );
};




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
    
    // <Container>
    <Fragment>

          <motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.8}} className='max-w-full   relative'>
      {/* <Image  className=' z-20 w-[100%] h-[100%] object-contain' src="/images/main_photo.svg" width={500} height={500} ></Image> */}
        
        <Video/>
      {/* <Carousel/> */}
    </motion.div>
          {!getCookie('open')  && <Modal isOpen={isOpen} img={spotlightData}  onClose={spotlightCloseHandler} />  }

        <CardLists/>

        
    {/* <h1 className=' text-6xl max-w-lg font-[400] text-center font-serif absolute top-[110%] text-white font-semibold left-[35%]'>Welcome to 
Tilottama Campus</h1> */}
</Fragment>
// </Container>


  )
}

export default Hero


