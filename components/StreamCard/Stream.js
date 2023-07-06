import Container from '../Container/Container'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const streamData = [
    {id:'s1', title:'Science Stream at Tilottama', desc:'The Faculty of Science at Tilottama has been instigated since its establishment. Its primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high-caliber science scholars. It aims to create a foundation for future doctors, engineers, agriculturists, forest officials, and scientists. To meet its goal Tilottama provides the best quality education which assists to visualize the true potential of students in various fields of science. It was established by reputed and professional academicians in the field of Science who are committed to imparting need-based quality education so as to ensure academic par excellence and attain outstanding results in board exams. Our proficient and professional teachers deliver theory lectures along with practical demonstrations in our sophisticated and well-equipped modern laboratory to retain practical know-how to the students and strengthen their understanding.', link:'Science', src:'/images/stream/science/sci_stream_cover.png'},
    {id:'s2', title:'Management Stream at Tilottama', desc:'The Faculty of Management at Tilottama has been instigated since its establishment. Its primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high-caliber science scholars. It aims to create a foundation for future managers,CA and aspiring positions. To meet its goal Tilottama provides the best quality education which assists to visualize the true potential of students in various fields of management. It was established by reputed and professional academicians in the field of Management who are committed to imparting need-based quality education so as to ensure academic par excellence and attain outstanding results in board exams.', link:'Management', src:'/images/stream/bba/bba_1.jpg'},
    {id:'s3', title:'BBA Stream at Tilottama', desc:"The bachelor of business administration (BBA) degree offered by this campus is awarded by Pokhara University, one of the recognized university in national and international level. BBA is a four year semester based program offered to the students who want to develop their career in the field of management. The program aims to the intellectual, decision making & problem solving ability through the blend of quality education with practical exposure to corporate world. The four year BBA program is divided into 8 semesters and it comprises of 42 subjects each carrying 3 credit hours. The stuedents also need to do the project internship. Introducing the concentration pappers from fifth semester the course has been made more practicable. This course will help to enhance their skill, critial thinking ability, analyzing the programs, making suggestions and recommendations, building up your confidence to communicate effectively", link:'BBA', src:'/images/stream/bba/bba_4.jpg'},
]

const Stream = () => {
    const [updatedItem, setUpdatedItem] = useState({id:'s1', title:'Science Stream at Tilottama', desc:'The Faculty of Science at Tilottama has been instigated since its establishment. Its primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high-caliber science scholars. It aims to create a foundation for future doctors, engineers, agriculturists, forest officials, and scientists. To meet its goal Tilottama provides the best quality education which assists to visualize the true potential of students in various fields of science. It was established by reputed and professional academicians in the field of Science who are committed to imparting need-based quality education so as to ensure academic par excellence and attain outstanding results in board exams. Our proficient and professional teachers deliver theory lectures along with practical demonstrations in our sophisticated and well-equipped modern laboratory to retain practical know-how to the students and strengthen their understanding.', link:'Science', src:'/images/stream/science/sci_stream_cover.png'});
    const [activeItem, setActiveItem ] =  useState('s1')
    const linkClickHandler = (item) => {
        setActiveItem(item.id)
        setUpdatedItem(item)
        
        
    }
  return (
    <Container>
        <div className=' bg-[#EEEEEE] flex flex-col md:flex-row  mx-auto pt-0 md:pt-[2rem] justify-center items-center'>

    <div className='max-w-6xl w-[100%] px-2 md:px-0  pb-[2rem] py-[2rem]  space-y-5 pr-0 md:mx-auto'>
        <h1 className='font-bold text-[#FF9900] text-3xl md:text-5xl uppercase'>COURSE OFFERRED</h1>
        <div className='w-[100%] bg-[#D9D9D9] mx-auto md:h-[35rem]  flex flex-col md:flex-row overflow-scroll'>
            <div className='items-start w-[30rem] hidden md:block'>
            <img  className='w-[100%] h-[100%]' src={updatedItem.src} alt='img'></img>
            </div>
                <div className='w-[100%] md:w-[60%] flex flex-col' >
                 <div className='w-[8rem] md:w-[30rem]'>
                    <ul className='flex justify-between font-bold '>
                     {streamData?.map(i => (<li className={ ` text-center cursor-pointer   w-full p-5 md:p-7 md:text-xl  text-2xs  ${activeItem === i.id ? 'bg-[#201F54] text-white' : 'bg-white '}`} onClick={() => linkClickHandler(i)} >{i.link}</li>))}
                    </ul>
                 </div>
                 <div className=' relative bg-[#201F54]  p-[2rem] py-[4rem] md:p-[2rem] h-full  flex flex-col text-white h-full gap-y-5'>
                    <h1 className='text-2xs md:text-2xl  font-bold'>{updatedItem.title}</h1>
                    <p className='max-w-md md:max-w-[692px]' >{updatedItem.desc}</p>
                <Link href={`/courses/${updatedItem.link}/introduction`}>  <button className=" hover:bg-[#BB7000] transition-all duration-200 ease-in absolute right-[2rem] text-xl font-bold active:opacity-90 active:bg-yellow-600 transition-all  shadow-md bg-[#FF9900] px-3 py-2  md:py-3 md:px-5 rounded-lg  bottom-2 md:bottom-5">See more</button></Link>
                 </div>
 
                </div>
        </div>
    </div>
        </div>
    </Container>
  )
}

export default Stream




{/* <Container>a
      
      <div className='max-w-6xl bg-white flex flex-col md:flex-row  mx-auto  pb-[5rem] pt-[2rem] md:pt-[2rem] justify-center items-center'>
              <div className='flex flex-col justify-center space-y-5  w-[80rem] '><h1 className='text-5xl  text-[#FF9900] font-bold'>Why Tilottama?</h1>
              <p className='max-w-md md:max-w-[30rem] lg:max-w-[60rem] px-[0.5rem]  md:px-0 leading-7 text-2xs'>Ut ex reprehenderit Lorem aliquip eiusmod id anim sint mollit occaecat dolor non irure aliqua. Labore irure veniam veniam commodo pariatur aliqua dolor duis quis. Ipsum nisi occaecat ullamco deserunt commodo minim laborum culpa culpa proident ex laborum pariatur. Enim culpa fugiat ex exercitation. Do reprehenderit sit sunt enim eu exercitation aliqua eu amet qui sunt. Minim ea aliqua labore tempor occaecat est et aliquip laborum id fugiat commodo do.
  
  Enim nostrud exercitation enim adipisicing duis commodo eu anim. Do consectetur est eu ut officia ullamco et sunt. Voluptate dolore ea duis non magna amet deserunt do. Irure ex et ut deserunt cillum est irure aliquip occaecat. Deserunt sint nostrud deserunt dolor eiusmod irure culpa voluptate esse. Non enim sit eu Lorem aliquip aute culpa minim pariatur. Minim voluptate reprehenderit ut qui ut laboris qui aliquip.
  
  Duis nisi dolore aute pariatur nostrud nulla et velit laboris. Ea eiusmod pariatur dolore incididunt reprehenderit fugiat non adipisicing duis. Non quis consequat do consectetur Lorem occaecat amet in. Lorem reprehenderit incididunt sunt magna consectetur aliquip enim sint mollit est commodo. Magna aliquip ex labore labore consectetur laboris et consectetur ad.
  
  Commodo commodo cillum id cillum voluptate non occaecat amet adipisicing. Cupidatat consectetur officia est elit fugiat esse laborum cillum aliqua velit in anim irure est. Nisi minim nulla consectetur sunt fugiat. Minim ut esse voluptate dolor. Veniam culpa quis enim consectetur irure eiusmod voluptate minim velit cupidatat fugiat nisi aute. Fugiat ipsum elit dolor eu tempor enim duis ea dolore in sit.</p>
              </div>
              <div className='w-[25rem] h-[25rem]'>
                  <img className='w-[100%] h-[100%]' src={`/images/trophie_svg.svg`} alt=""></img>
              </div>
      </div>
      </Container> */}