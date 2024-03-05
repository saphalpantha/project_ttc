import React, { Fragment } from "react";


import dynamic from "next/dynamic";


const DHero = dynamic(() => import ( "../Hero/Hero"),{ssr:false} )
const DWhyTtc = dynamic(() => import ("../WhyTtc/WhyTtc"), {ssr:false} )
const DOurStars = dynamic(() => import ("../OurStars/OurStars"), {ssr:false} )
const DNewsNotice = dynamic(() => import ("../NewsNotice/NewsNotice"), {ssr:false})
const DStream = dynamic(() => import("../StreamCard/Stream"), {ssr:false})
const DExploreGrid = dynamic(() => import("../ExploreGrid/ExploreGrid"), {ssr:false})

const MainPage = () => {
  return (
    <Fragment>
      <DHero/>
      <DWhyTtc />
      <DStream />
      <DNewsNotice />
      <DOurStars />
      <DExploreGrid />
    </Fragment>
  );
};

export default MainPage;
