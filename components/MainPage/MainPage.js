import React, { Fragment } from 'react'
import Hero from '../Hero/Hero'
import WhyTtc from '../WhyTtc/WhyTtc'
import Stream from '../StreamCard/Stream'
import OurStars from '../OurStars/OurStars'
import NewsNotice from '../NewsNotice/NewsNotice'
import ExploreGrid from '../ExploreGrid/ExploreGrid'

const MainPage = () => {
  return (
    <Fragment>
        
        <Hero/>
          <WhyTtc/>
          <Stream/>
          <NewsNotice/>
          <OurStars/>
          <ExploreGrid/>
    </Fragment>
  )
}

export default MainPage