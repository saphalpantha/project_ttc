import React from 'react'
import Card from './Card'

const card_data = [
    {id:'c1' ,title:'Take Tour', img:'take_tour_card'},
    {id:'c2' ,title:'Admission', img:'/', admission_status:'OPEN'},
    {id:'c3' ,title:'Results', img:'result_card'},
]
const CardLists = () => {
  return (
    <div className='w-[100vw] bg-[#EEEEEE] p-[5rem]'>

    <div className=' text-black flex space-x-2 py-5 px-5 mx-5  justify-between'>
        {card_data.map(item => (
          <Card key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
    </div>  
          </div>
  )
}

export default CardLists