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
    <div className='max-w-6xl md:max-w-full w-[100vw] bg-[#EEEEEE] p-2 md:p-[5rem]'>

    <div className=' max-w-[1278px] mx-auto text-black flex flex-col md:flex-row  space-x-1 space-y-5 py-2 md:py-0 md:px-10  items-center md:items-baseline justify-between md:gap-[66px]'>
        {card_data.map(item => (
          <SingleCard key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
    </div>  
          </div>
  )
}

export default CardLists