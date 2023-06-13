import React from 'react'
import GalleryCard from './GalleryCard'
import Container from '../Container/Container'

const Gallery = () => {
  return (
    <Container>

    <div className='max-w-6xl md:max-w-full  justify-center items-center pb-[3rem]  flex flex-col gap-10 pt-[2rem] mx-auto'>
        <h1 className='text-white text-center font-bold max-w-6xl bg-[#FF9900] py-3 mx-auto w-full'>Gallery</h1>
        <div className='grid grid-cols-1 gap-y-2 md:gap-x-32 items-center md:grid-cols-2 justify-center' >
            {[1,2,3,4,5,6].map(i => <GalleryCard img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />)}  
        </div>
    </div>
    </Container>
  )
}

export default Gallery