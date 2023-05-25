import React from 'react'
import Card from '../CardLists/Card'
import Container from '../Container/Container'

const card_data = [
    {id:'sc1' ,title:'Admission Procedure', img:'admission_card'},
    {id:'sc2' ,title:'Academics Excellence', img:'academics_svg'},
    {id:'sc3' ,title:'Scholarship', img:'trophie_svg'},
]
const StreamCardList = () => {
  
  return (
    <Container>

    <div className='w-[100%] bg-[#FFF] p-[4rem]'>

    <div className=' text-black flex flex-col  space-x-0 py-2 px-1 mx-1 md:space-x-2 md:py-5 md:px-5 md:mx-5  justify-between md:flex-row gap-[63px]'>
        {card_data.map(item => (
          <Card key={item.id} title={item.title} admission_status={item.admission_status} img={item.img}/>
          ))}
    </div>  
          </div>
          </Container>
  )
}

export default StreamCardList