import React from 'react'
import NewsCard from './NewsCard'
import { useEffect } from 'react'
import { useState } from 'react'
const NewsCardList = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    fetch('/api/news-notice').then(result => result.json()).then(data => {
      let updatedResult;
      const newData = data.msg.sort((a,b) => b.id - a.id);
      updatedResult = [...newData]
      setNotice(data.msg)
    }).catch(err => console.log(err))
  },[])
  return (
    <div className='flex justify-center items-center flex-col md:flex-row justify-between gap-5 md:gap-10'>
        {notice.slice(0,3).map(i => (<NewsCard  key={i.id} heading={i.heading} desc={i.para} photo={i.photo} link={i.link} />))}
    </div>
  )
}

export default NewsCardList