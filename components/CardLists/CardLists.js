import React from 'react'
import Card from './Card'
import SingleCard from './Card'

const card_data = [
    {id:'c1' ,title:'Take Tour', img:'take_tour_card'},
    {id:'c2' ,title:'Admission', img:'admission_card', admission_status:'OPEN'},
    {id:'c3' ,title:'Results', img:'result_card'},
]
const CardLists = () => {
  return (
    <div className='max-w-6xl md:max-w-full w-[100%] bg-[#EEEEEE] p-2 py-8'>

    <div className='mx-auto text-black flex flex-col md:flex-row space-y-5 py-2 md:py-0  px-2 mx-5 items-center md:items-baseline justify-center items-center md:gap-[50px]'>
        {card_data.map(item => (
          <SingleCard key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
    </div>  
          </div>
  )
}

export default CardLists