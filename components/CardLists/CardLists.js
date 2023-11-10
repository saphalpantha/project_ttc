import React from 'react'
import Card from './Card'
import SingleCard from './Card'
import { useEffect } from 'react'
import { useState } from 'react'


const card_data = [
    {id:'c1' ,title:'Take Tour', img:'take_tour_card', link:'http://tour.virtualedufairnepal.com/tilottamacampus/'},
    {id:'c2' ,title:'Admission', img:'admission_card', admission_status:'OPEN', link:'/admissions'},
    {id:'c3' ,title:'Entrance Results', img:'result_card' , link:'/results/entrance-result'},
]



const CardLists = () => {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState()
  useEffect(() => {
    fetch('/api/admission-status/').then(res => res.json()).then(data => {
      const admission_status = data.msg[0].admission_open;
      setIsAdmissionOpen(+admission_status);
    }).catch(err => {})
  },[isAdmissionOpen])
  return (
    <div className='max-w-6xl md:max-w-full  md:w-[100%] bg-[#EEEEEE] flex justify-center py-8 items-center'>

    <div className='w-[100%] bg-[#EEEEEE]'>
      <div className='text-black translate-x-[-2%] left-[2%] flex flex-col md:flex-row  py-2 md:py-0  items-center md:items-baseline justify-center items-center md:gap-[50px] gap-[20px]'>
        {card_data.map(item => (
          
          <SingleCard link={item.link} key={item.id} title={item.title} admission_status={isAdmissionOpen} img={item.img}/>
          ))}
          </div>
    </div>  
         </div>
  )
}

export default CardLists
