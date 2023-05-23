import React from 'react'

const SubjectListCardForplus2 = ({isOptional, subjectLists}) => {

  return (
    <div className='bg-[#F4F4F4] w-[440px] h-[304px] px-[2rem] py-[1rem] flex justify-center items-center flex-col' >
        
        <h1 className='text-[#201F54] font-bold text-xl tracking-wider pb-2'>{!isOptional ? 'Compulsory Subjects' : 'Optional Subjects'}</h1>
        <ul className='flex flex-col space-y-4'>
            {subjectLists.map(sub =>(

                <li className='font-light'>{sub}</li>
            ))}
        </ul>
    </div>
  )
}

export default SubjectListCardForplus2