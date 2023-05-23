import React from 'react'
import Card from './Card'

const card_data = [
    {id:'c1' ,title:'Take Tour', img:'take_tour_card'},
    {id:'c2' ,title:'Admission', img:'admission_card', admission_status:'OPEN'},
    {id:'c3' ,title:'Results', img:'result_card'},
]
const CardLists = () => {
  return (
    <div className='max-w-6xl md:max-w-full bg-[#EEEEEE] p-2 md:p-[5rem]'>

    <div className='text-black flex flex-col md:flex-row  space-x-1 space-y-5 py-2 md:py-0 md:px-10 mx-5  justify-between items-center md:items-baseline'>
        {card_data.map(item => (
          <Card key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
    </div>  
          </div>
  )
}

export default CardLists