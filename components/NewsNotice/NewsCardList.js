import React from 'react'
import NewsCard from './NewsCard'

const NewsCardList = () => {
  return (
    <div className='flex justify-center items-center flex-col md:flex-row justify-between gap-5 md:gap-10'>
        {[1,2,3].map(i => (<NewsCard/>))}
    </div>
  )
}

export default NewsCardList