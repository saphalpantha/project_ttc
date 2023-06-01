import React from 'react'
import NewsCard from './NewsCard'

const NewsCardList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {[1,2,3].map(i => (<NewsCard/>))}
    </div>
  )
}

export default NewsCardList