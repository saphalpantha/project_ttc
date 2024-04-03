import React, { Fragment } from "react";


import dynamic from "next/dynamic";
import NewsNotice from "../NewsNotice/NewsNotice";
import useGetData from "../Helper/Helper";
import Hero from "../Hero/Hero";


const DWhyTtc = dynamic(() => import ("../WhyTtc/WhyTtc"), {ssr:false} )
const DOurStars = dynamic(() => import ("../OurStars/OurStars"), {ssr:false} )
const DNewsNotice = dynamic(() => import ("../NewsNotice/NewsNotice"), {ssr:false})
const DStream = dynamic(() => import("../StreamCard/Stream"), {ssr:false})
const DExploreGrid = dynamic(() => import("../ExploreGrid/ExploreGrid"), {ssr:false})

const MainPage = (data) => {
  console.log(data)
  return (
    <Fragment>
      <Hero/>      
      <DWhyTtc />
      <DStream />
      <DNewsNotice   />
      <DOurStars   />
      <DExploreGrid    />
    </Fragment>
  );
};

export default MainPage;



