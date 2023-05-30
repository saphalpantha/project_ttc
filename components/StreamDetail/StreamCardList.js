import React from 'react'
import Card from '../CardLists/Card'
import Container from '../Container/Container'
import SingleCard from '../CardLists/Card'

const card_data = [
    {id:'sc1' ,title:'Admission Procedure', img:'admission_card'},
    {id:'sc2' ,title:'Academics Excellence', img:'academics_svg'},
    {id:'sc3' ,title:'Scholarship', img:'trophie_svg'},
]
const StreamCardList = () => {
  
  return (
    <Container>

    <div className='w-[100%] bg-[#FFF] '>

    <div className=' mx-auto text-black flex flex-col md:flex-row space-y-5 py-2 md:py-0  px-2 mx-5 items-center md:items-baseline justify-center items-center md:gap-[50px]'>
        {card_data.map(item => (
          <SingleCard key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
    </div>  
          </div>
          </Container>
  )
}

export default StreamCardList