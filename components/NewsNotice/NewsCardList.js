import React from 'react'
import NewsCard from './NewsCard'
import { useEffect } from 'react'
import { useState } from 'react'



const NewsCardList = () => {
  const [notice, setNotice] = useState([]);
  let final_data = [];
  useEffect(() => {
     fetch('/api/news-notice/').then(result => result.json()).then(data => {
      let d = data.msg;
      d.map(async i=>{
        const res = await fetch(`/api/get-images/notice-uploads/${i.photo}`);
        if(!res.ok){
          return null;
        }
          const data = await res.json();
          if (data.msg && data.ext) {
            const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
            let  updatedItem  =  { ...i, img_code: imgFile };
            final_data.push(updatedItem)
          } else {
          }
      })
      final_data.length > 0 && setNotice(final_data)
        console.log(final_data, 'the final')
    }).catch(err => console.log(err))
  },[])



  // const getImagesById = async (id) => {
  //     const res = await fetch(`/api/get-images/notice-uploads/${id}`);
  //       const data = await res.json();
  //       let imgFile = `data:image/${data.ext};${data.msg}`
  //       return imgFile;
    
  // }
  return (
    <div className='flex justify-center items-center flex-col md:flex-row justify-between gap-5 md:gap-3'>
        {notice.slice(0,3).map(i => (<NewsCard  id={i.id} key={i.id} heading={i.heading} desc={i.para} photo={i.img_code} link={i.link} />))}
    </div>
  )
}

export default NewsCardList




// import React, { useEffect, useState } from 'react';
// import NewsCard from './NewsCard';

// const NewsCardList = () => {
//   const [notice, setNotice] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetch('/api/news-notice/');
//         const data = await result.json();

//         const updatedData = await Promise.all(data.msg.map(async i => {
//           try {
//             const res = await fetch(`/api/get-images/notice-uploads/${i.photo}`);
//             if (!res.ok) {
//               return null;
//             }
//             const imageData = await res.json();
            
//             if (imageData.msg && imageData.ext) {
//               const imgFile = `data:image/${imageData.ext};base64, ${imageData.msg}`;
//               return { ...i, img_code: imgFile };
//             } else {
//               return null;
//             }
//           } catch (error) {
//             console.error('Error fetching image data:', error);
//             return null;
//           }
//         }));

//         const filteredData = updatedData.filter(item => item !== null);
//         setNotice(filteredData);
//         console.log(filteredData, 'the final');
//       } catch (error) {
//         console.error('Error fetching news data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='flex justify-center items-center flex-col md:flex-row justify-between gap-5 md:gap-3'>
//       {notice.slice(0, 3).map(i => (
//         <NewsCard id={i.id} key={i.id} heading={i.heading} desc={i.para} photo={i.img_code} link={i.link} />
//       ))}
//     </div>
//   );
// };

// export default NewsCardList;
