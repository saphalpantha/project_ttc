import React from 'react'
import GalleryCard from './GalleryCard'
import Container from '../Container/Container'
import Loader from '../UI/Loader/Loader'

const Gallery = ({images}) => {
  return (
    <Container>

    <div className='max-w-6xl md:max-w-full  justify-center items-center pb-[3rem]  flex flex-col gap-10 pt-[2rem] mx-auto'>
        <h1 className='text-white text-center font-bold max-w-6xl bg-[#FF9900] py-3 mx-auto w-full'>Gallery</h1>
        <div className='grid grid-cols-1 gap-y-2 md:gap-x-32 items-center md:grid-cols-2 justify-center relative'>
            {images?.length > 0 ?images.map(i => <GalleryCard id={i.id} alb_name={i.album_name} img={i.img_code}  />) : <div className='flex w-full flex-col justify-center items-center mx-auto h-[100vh]  translate-x-0 md:translate-x-[6.5rem]'> <Loader/> </div>}  
        </div>
    </div>
    </Container>
  )
}

export default Gallery