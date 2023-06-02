import React from "react";
// import ''
import Container from "../Container/Container";
import NewsCardList from "./NewsCardList";

const NewsNotice = () => {
  return (
    <Container>
      <div className="max-w-6xl pb-[32rem] md:pb-[2rem]  md:max-w-full">
        <section className={`relative min-h-min md:min-h-screen`}>
          <div className="">
            <h1 className="text-5xl relative md:absolute text-[#FF9900] md:top-[10%] z-[100] left-[5%] ]">NEWS AND NOTICE</h1>
            <img
              className="w-[100vw] object-contain opacity-80  "
              src="/images/cover_newsnotice.png"
            ></img>
            <div className="relative md:absolute top-[30vh] mx-auto w-[100%] px-2 md:px-20 ">
          <NewsCardList/>
            </div>
          
          </div>
        </section>
      </div>
    </Container>
  );
};

export default NewsNotice;
