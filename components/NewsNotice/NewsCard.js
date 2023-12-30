import React from "react"
import Link from "next/link";
import ScrollLayout from "../UI/ScrollLayout";
const NewsCard = ({heading, desc, photo, link, id}) => {
  return (
    <div className="flex flex-col pb-10 group justify-center bg-white  gap-4  items-baseline   w-[23.7rem] h-[495px] shadow-2xl relative ">
      <div className="bg-black relative  object-cover w-[23.7rem] overflow-hidden  h-[260px] ">
        <div className="w-full  flex justify-center items-center h-full top-0 left-0 bg-[#232264E5]  opacity-0 group-hover:opacity-100  absolute">
          <Link className="z-[100]" href={ `/newsnotice/${id}`}>
          <h1 className="text-white border-[1px] border-[#A5A5A5] py-2 px-4 w-fit">Read More</h1>
          </Link>
        </div>
        <img className=" w-full object-cover group-hover: h-full opacity-100  group-hover:opacity-0 group-hover:cursor-pointer " src={`${photo}`}/>
      </div>
      <ScrollLayout opacity={1} duration={2} x={0}>

      <h1 className=" pl-[1rem] text-2xl md:text-3xl">{heading}</h1>
      <p dangerouslySetInnerHTML={{__html:desc}} className="text-2xs pl-[1rem] font-light overflow-clip w-[359px] h-[149px]">
        {/* {desc} */}
      </p>
      {/* <Link className={' text-[#201F54] hover:text-[#FF9900] text-2xs absolute bottom-1 right-3'} href={`${link ? link : '/newsnotice/'}${id}`}>Read More</Link> */}
      </ScrollLayout>
    </div>
  );
};

export default NewsCard;
