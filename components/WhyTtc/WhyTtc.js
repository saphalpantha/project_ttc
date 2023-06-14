import React from 'react'
import Container from '../Container/Container'
const WhyTtc = () => {

  const whyTTCList = [
    {id:'w1', desc:"Highly qualified, experienced and dedicated team of academic staffs"},
    {id:'w2', desc:"Hi-tech science laboratory, computer labs & library with sample texts & reference books, journals, and high speed internet facility."},
    {id:'w3', desc:"Timely evaluation of students performance and interaction with guardians about their progress & activities."},
    {id:'w4', desc:"Extra-curricular activities for recreation, personal development and team building among students."},
    {id:'w5', desc:"Career counseling and support services to students for their personal and career advancement."},
  ]

  return (
    <Container>
      
    <div className='max-w-6xl bg-white flex flex-col md:flex-row  mx-auto  pb-2  md:pb-[2rem] justify-center items-center'>
            <div className='flex flex-col justify-center space-y-4 md:space-y-5  max-w-6xl  md:w-[80rem]  '>

    <h1 className=' text-3xl md:text-5xl py-7  text-[#FF9900] font-bold text-center md:text-start'>Why Tilottama?</h1>
            <ul className='flex flex-col gap-3 list-disc'>
              {whyTTCList.map(i => (<li className='max-w-md w-fit px-3 text-start  md:w-[90%] lg:w-[100%] md:max-w-[30rem] lg:max-w-[60rem] px-[0.5rem]  md:px-0 leading-7 text-2xs'>{i.desc}</li>))}
            </ul>
            </div>
            <div className='w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem]'>
                <img className='w-[100%] h-[100%]' src={`/images/trophie_svg.svg`} alt=""></img>
            </div>
    </div>
    </Container>
  )
}

export default WhyTtc