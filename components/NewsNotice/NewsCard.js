import React from "react"
import Link from "next/link";
import ScrollLayout from "../UI/ScrollLayout";
const NewsCard = ({heading, desc, photo, link, id}) => {
  return (
    <div className="flex flex-col pb-10  justify-center  gap-4 p-3 items-baseline border-5 bg-white  w-[23.7rem] h-[495px] shadow-2xl relative ">
      <div className="bg-black  w-[359px] overflow-hidden  h-[230px] ">
        <img className=" w-full h-full " src={`/images/notice-uploads${photo}`}/>
      </div>
      <ScrollLayout opacity={1} duration={2} x={0}>

      <h1 className="  text-2xl md:text-3xl">{heading}</h1>
      <p dangerouslySetInnerHTML={{__html:desc}} className="text-2xs font-light overflow-clip w-[359px] h-[149px]">
        {/* {desc} */}
      </p>
      <Link className={' text-[#201F54] hover:text-[#FF9900] text-2xs absolute bottom-1 right-3'} href={`${link ? link : '/newsnotice/'}${id}`}>Read More</Link>
      </ScrollLayout>
    </div>
  );
};

export default NewsCard;
