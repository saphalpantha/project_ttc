import React from 'react'
import Card from './Card'
import SingleCard from './Card'

const card_data = [
    {id:'c1' ,title:'Take Tour', img:'take_tour_card', link:'http://tour.virtualedufairnepal.com/tilottamacampus/'},
    {id:'c2' ,title:'Admission', img:'admission_card', admission_status:'OPEN', link:'/admissions'},
    {id:'c3' ,title:'Entrance Results', img:'result_card' , link:'/results/entrance-result'},
]
const CardLists = () => {
  return (
    // <div className='max-w-6xl md:max-w-full  md:w-[100%] bg-[#EEEEEE] flex justify-center py-8 items-center'>

    <div className='py-10 w-[100%] bg-[#EEEEEE]'>
      <div className='text-black translate-x-[-2%] left-[2%] flex flex-col md:flex-row space-y-10 py-2 md:py-0  items-center md:items-baseline justify-center items-center md:gap-[50px]'>
        {card_data.map(item => (
          
          <SingleCard link={item.link} key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
          </div>
    </div>  
          // </div>
  )
}

export default CardLists
