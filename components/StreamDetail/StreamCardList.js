import React from 'react'
import Card from '../CardLists/Card'

const card_data = [
    {id:'sc1' ,title:'Admission Procedure', img:'admission_card'},
    {id:'sc2' ,title:'Academics Excellence', img:'academics_svg'},
    {id:'sc3' ,title:'Scholarship', img:'trophie_svg'},
]
const StreamCardList = () => {
  return (
    <div className='w-[100vw] bg-[#FFF] p-[4rem]'>

    <div className=' text-black flex space-x-2 py-5 px-5 mx-5  justify-between'>
        {card_data.map(item => (
          <Card key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
    </div>  
          </div>
  )
}

export default StreamCardList