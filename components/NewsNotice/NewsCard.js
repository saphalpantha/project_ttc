import React from "react";
import Link from "next/link";
const NewsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-5 border-5 bg-white  w-[24rem] h-[492px] shadow-2xl relative ">
      <div className="bg-black w-[359px] h-[210px]"></div>
      <h1 className="text-2xl">Heading</h1>
      <h1 className="text-3xl font-light">Description</h1>
      <p className="text-2xs font-light overflow-clip w-[359px] h-[149px]">
        Amet voluptate cupidatat ea magna. Fugiat non est aliquip consectetur.
        Ea nulla incididunt cillum non cupidatat aliquip velit ut officia.
        Tempor excepteur proident ea ex. Magna consectetur in do adipisicing
        exercitation consectetur enim id laboris proident in. Cillum cupidatat
        consectetur dolore nulla adipisicing est sunt. Laboris laboris est et
        sit nisi. Quis velit cillum minim minim tempor velit nostrud quis
        cupidatat. Incididunt ea incididunt incididunt laboris occaecat eiusmod
        pariatur.
      </p>

      <Link className={'text-[#FF9900] text-2xs absolute bottom-1 right-3'} href="">Read More</Link>
    </div>
  );
};

export default NewsCard;