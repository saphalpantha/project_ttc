import React from 'react'
import { useState } from 'react'
const streamData = [
    {id:'s1', title:'Science Stream at Tilottama', desc:'The Faculty of Science at Tilottama has been instigated since its establishment. Its primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high-caliber science scholars. It aims to create a foundation for future doctors, engineers, agriculturists, forest officials, and scientists. To meet its goal Tilottama provides the best quality education which assists to visualize the true potential of students in various fields of science. It was established by reputed and professional academicians in the field of Science who are committed to imparting need-based quality education so as to ensure academic par excellence and attain outstanding results in board exams. Our proficient and professional teachers deliver theory lectures along with practical demonstrations in our sophisticated and well-equipped modern laboratory to retain practical know-how to the students and strengthen their understanding.', link:'Science'},
    {id:'s2', title:'Management Stream at Tilottama', desc:'The Faculty of Science at Tilottama has been instigated since its establishment. Its primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high-caliber science scholars. It aims to create a foundation for future doctors, engineers, agriculturists, forest officials, and scientists. To meet its goal Tilottama provides the best quality education which assists to visualize the true potential of students in various fields of science. It was established by reputed and professional academicians in the field of Science who are committed to imparting need-based quality education so as to ensure academic par excellence and attain outstanding results in board exams. Our proficient and professional teachers deliver theory lectures along with practical demonstrations in our sophisticated and well-equipped modern laboratory to retain practical know-how to the students and strengthen their understanding.', link:'Management'},
    {id:'s3', title:'BBA Stream at Tilottama', desc:'The Faculty of Science at Tilottama has been instigated since its establishment. Its primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high-caliber science scholars. It aims to create a foundation for future doctors, engineers, agriculturists, forest officials, and scientists. To meet its goal Tilottama provides the best quality education which assists to visualize the true potential of students in various fields of science. It was established by reputed and professional academicians in the field of Science who are committed to imparting need-based quality education so as to ensure academic par excellence and attain outstanding results in board exams. Our proficient and professional teachers deliver theory lectures along with practical demonstrations in our sophisticated and well-equipped modern laboratory to retain practical know-how to the students and strengthen their understanding.', link:'BBA'},
]

const Stream = () => {
    const [updatedItem, setUpdatedItem] = useState({id:'s1', title:'Science Stream at Tilottama', desc:'The Faculty of Science at Tilottama has been instigated since its establishment. Its primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high-caliber science scholars. It aims to create a foundation for future doctors, engineers, agriculturists, forest officials, and scientists. To meet its goal Tilottama provides the best quality education which assists to visualize the true potential of students in various fields of science. It was established by reputed and professional academicians in the field of Science who are committed to imparting need-based quality education so as to ensure academic par excellence and attain outstanding results in board exams. Our proficient and professional teachers deliver theory lectures along with practical demonstrations in our sophisticated and well-equipped modern laboratory to retain practical know-how to the students and strengthen their understanding.', link:'Science'});
    const [activeItem, setActiveItem ] =  useState('s1')
    const linkClickHandler = (item) => {
        setActiveItem(item.id)
        setUpdatedItem(item)
        
    }
  return (
    <div className='max-w-6xl md:max-w-full  bg-[#EEEEEE] pb-[4rem]  pt-[5rem] pr-[4rem]'>
        <div className='max-w-6xl bg-[#D9D9D9] mx-auto h-[35rem] flex'>
            <div className='items-start w-[30rem]'>
                .
            </div>
                <div className='w-[60%] flex flex-col' >
                 <div className='w-[25rem]'>
                    <ul className='flex justify-between font-bold text-xl'>
                     {streamData.map(i => (<li className={ `cursor-pointer  w-full p-7 ${activeItem === i.id ? 'bg-[#201F54] text-white' : 'bg-white '}`} onClick={() => linkClickHandler(i)} >{i.link}</li>))}
                    </ul>
                 </div>
                 <div className=' relative bg-[#201F54] p-[2rem] flex flex-col text-white h-full gap-5'>
                    <h1 className='text-2xl font-bold'>{updatedItem.title}</h1>
                    <p className='max-w-[692px]' >{updatedItem.desc}</p>
                 <button className="absolute right-[2rem] text-xl font-bold active:opacity-90 active:bg-yellow-600 transition-all  shadow-md bg-[#FF9900] py-3 px-5 rounded-lg  bottom-10">See more</button>
                 </div>
 
                </div>
        </div>
    </div>
  )
}

export default Stream