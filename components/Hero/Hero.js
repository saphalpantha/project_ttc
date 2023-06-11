import React from 'react'
import Image from 'next/image'
import CardLists from '../CardLists/CardLists'
import Container from '../Container/Container'
import HeroSlider from '../Carousel/Carousel'
import StyleCover from '../StyleCover/StyleCover'
const Hero = () => {
  return (
    
    <Container>
          <div className='max-w-full   relative'>
      <Image  className='w-[100%] h-[100%] object-contain' src="/images/hero_pic.png" width={500} height={500} ></Image>
    </div>


      <div className='flex px-[20rem] justify-center items-center flex-col'>
        <CardLists/>
        
      {/* <HeroSlider/> */}
      </div>
    {/* <h1 className=' text-6xl max-w-lg font-[400] text-center font-serif absolute top-[110%] text-white font-semibold left-[35%]'>Welcome to 
Tilottama Campus</h1> */}
</Container>


  )
}

export default Hero