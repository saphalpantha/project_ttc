import React from "react";
import Link from "next/link";
const NewsCard = ({heading, desc, photo}) => {
  return (
    <div className="flex flex-col pb-10  justify-center  gap-4 p-3 items-baseline border-5 bg-white  w-[24rem] h-[495px] shadow-2xl relative ">
      <div className="bg-black  w-[359px] overflow-hidden  h-[210px] ">
        <img className=" w-full h-full " src={`/images/${photo}.jpg`}/>
      </div>
      <h1 className="  text-2xl md:text-3xl">{heading}</h1>
      <p className="text-2xs font-light overflow-clip w-[359px] h-[149px]">
        {desc}
      </p>

      <Link className={' text-[#201F54] hover:text-[#FF9900] text-2xs absolute bottom-1 right-3'} href="">Read More</Link>
    </div>
  );
};

export default NewsCard;
