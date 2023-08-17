import React from "react";
// import ''
import Container from "../Container/Container";
import NewsCardList from "./NewsCardList";
import Link from "next/link";


const NewsNotice = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row  mx-auto md:pb-[15rem] pb-[1rem] justify-center items-center">
        <section className={` py-2 md:py-0 md:pb-[10rem]`}>
          <div className="relative">
            <div className="flex justify-center items-center">
            <h1 className="text-3xl md:text-5xl relative md:absolute text-[#FF9900] md:text-[#FFF]  md:top-[10%] font-bold  z-[100] w-fit left-[5%] ]">NEWS AND NOTICE</h1>
            <Link href={"/newsnotice"}>  <img className=" z-[100] w-[3rem] h-[3rem] text-3xl md:text-5xl relative md:absolute text-[#FFF] md:top-[10%] font-bold z-[100] w-fit right-[5%]" src="/images/news_arrow.svg" ></img></Link>
            </div>
            <img
              className="object-contain w-[100vw] bg-contain opacity-80 "
              src="/images/cover_newsnotice.png"
            ></img>
            <div className="relative md:absolute top-[50%] md:left-[50%] left-0 translate-x-0 md:translate-x-[-50%]">
          <NewsCardList/>
            </div>
          
          </div>
        </section>
      </div>
    </Container>
  );
};

export default NewsNotice;
