import Container from '../Container/Container'
import React from 'react'

const SubjectListCardForBba = ({subjectLists, sem}) => {

  return (
    <Container>

    <div className='flex flex-col justify-between space-y-6'>
        <h1 className='bg-[#201F54] text-white w-[30rem] py-2 px-5 font-bold text-xl tracking-wider pb-2 text-center'>{`Semester-${sem}`}</h1>

    <div className='bg-[#F4F4F4] w-[30rem] h-[304px] px-[2rem] py-[1rem] flex justify-center items-center flex-col' >
        <ul className='flex flex-col space-y-4'>
            {subjectLists.map(sub =>(
              <li className='font-light'>{sub}</li>
              ))}
        </ul>
    </div>
                </div>
              </Container>
  )
}

export default SubjectListCardForBba