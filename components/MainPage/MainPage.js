import React, { Fragment } from 'react'
import Hero from '../Hero/Hero'
import CardLists from '../CardLists/CardLists'
import WhyTtc from '../WhyTtc/WhyTtc'
import Stream from '../StreamCard/Stream'
import OurStars from '../OurStars/OurStars'

const MainPage = () => {
  return (
    <Fragment>
        
        <Hero/>
          <WhyTtc/>
          <Stream/>

          <OurStars/>
    </Fragment>
  )
}

export default MainPage