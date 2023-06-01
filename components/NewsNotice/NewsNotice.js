import React from 'react'
import NewsCardList from './NewsCardList'
import Container from '../Container/Container'
import classes from './NewsNotice.module.css'
const NewsNotice = () => {
  return (



    <div className='md:h-[100vh] flex-col  justify-center  relative  z-30 '>
            <h1 className=' top-[10%] z-[100] text-[#FF9900] left-[5%] md:absolute text-5xl font-bold '>NEWS AND NOTICE</h1>
        <div className={`${classes.main} `}>
            <div className=' h-[10vh] md:h-[100vh]   flex flex-col gap-132 justify-center items-center pt-[5rem] '>

            <NewsCardList/>
        </div>


        </div>


    </div>

  )
}

export default NewsNotice