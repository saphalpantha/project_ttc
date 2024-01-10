// import React from 'react'
// import Link from 'next/link'
// const NewsNoticePageCard = ({img, para, heading, id}) => {
//   return (

//     <div className='relative flex flex-col md:flex-row justify-between'>
//         <div className='bg-[#D9D9D9] w-[20rem] h-[15rem] object-contain' ><img className='w-[100%] h-[100%] ' src={`${img}`}></img></div> 
//         <div className='flex flex-col   space-y-2 max-w-md '>
//         <Link href={`/newsnotice/${id}`}>    <h1 className='text-[#201F54] max-w-md text-3xl'>{heading}</h1> </Link>
//         <p  style={{ wordWrap: 'break-word', maxWidth:'50%' }} className="leading-8 px-[2rem] md:px-[0rem]   tracking-wide"  dangerouslySetInnerHTML={{ __html: para.slice(0,250) }}/>
//         </div>
//       <Link href={`/newsnotice/${id}`}>  <h1 className='text-[#FF9900] font-light absolute bottom-3 right-[15%]'>Read More</h1></Link>
//     </div>
//   )
// }

// export default NewsNoticePageCard



import React from 'react';
import Link from 'next/link';

const NewsNoticePageCard = ({ img, para, heading, id }) => {
  return (
    <div className='relative flex flex-col md:flex-row  gap-[5%] md:justify-normal'>
      <div className='bg-[#D9D9D9] w-[20rem] h-[15rem] object-contain'>
        <img className='w-[100%] h-[100%]' src={`${img}`} alt={heading} />
      </div>
      <div className='flex flex-col space-y-5 max-w-md'>
        <Link href={`/newsnotice/${id}`}>
          <h1 className='text-[#201F54] max-w-md text-2xl'>{heading}</h1>
        </Link>
        <p
          style={{ wordWrap: 'break-word'}}
          className='leading-8  h-fit pb-[2rem] tracking-wide'
          dangerouslySetInnerHTML={{ __html: para.slice(0, 250) }}
        />
      </div>
      <Link href={`/newsnotice/${id}`}>
        <h1 className='text-[#FF9900] font-light absolute bottom-2 right-3'>
          Read More
        </h1>
      </Link>
    </div>
  );
};

export default NewsNoticePageCard;
