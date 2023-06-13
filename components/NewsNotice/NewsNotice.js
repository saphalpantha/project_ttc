import React from "react";
// import ''
import Container from "../Container/Container";
import NewsCardList from "./NewsCardList";

const NewsNotice = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row  mx-auto  md:pb-[5rem] pb-[1rem] justify-center items-center">
        <section className={` py-2 md:pb-[10rem]`}>
          <div className="relative">
            <h1 className="text-3xl md:text-5xl relative md:absolute text-[#FF9900] md:top-[10%] font-bold z-[100] w-fit left-[5%] ]">NEWS AND NOTICE</h1>
            <img
              className="object-contain bg-contain opacity-80 "
              src="/images/cover_newsnotice.png"
            ></img>
            <div className=" relative md:absolute top-[50%] md:left-[50%] left-0 translate-x-0 md:translate-x-[-50%] ">
          <NewsCardList/>
            </div>
          
          </div>
        </section>
      </div>
    </Container>
  );
};

export default NewsNotice;
