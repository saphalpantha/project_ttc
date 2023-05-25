import React from 'react'
import FacultyCard from './FacultyCard'

const users = [
    {id:'i1', name:'Ananta  Panthi', phoneNo:'+977-9812367458', post:'Member Secratery'},
    {id:'i2', name:'Ananta  Panthi', phoneNo:'+977-9812367458', post:'Member Secratery'},
    {id:'i3', name:'Ananta  Panthi', phoneNo:'+977-9812367458', post:'Member Secratery'},
    {id:'i4', name:'Ananta  Panthi', phoneNo:'+977-9812367458', post:'Member Secratery'},
]

const FacultyDetail = () => {
  return (
    <div className=''>
        <section className=''>
        <div className="">
          <img
            className="w-[100%] h-[100%]"
            src={`/images/stream/science/sci_stream_cover.svg`}
          ></img>
        </div>
      </section>
      <section className='max-w-6xl md:max-w-full flex flex-col space-y-5 py-[5rem] px-[2rem] pb-[10rem] min-h-screen'>
        <div className='flex flex-col space-y-20'>

        <h1 className='text-[#FF9900] font-bold text-2xl'>BOARD MEMBERS</h1>
        <div className='flex justify-between px-[5rem]'>
            {users.map(i => {
                return(
                    <FacultyCard isBig={true}/>
                    )
                })}
        </div>
    </div>

    <div className='flex flex-col space-y-20 py-[5rem]'>

<h1 className='text-[#FF9900] font-bold text-2xl'>Science faculty</h1>
<div></div>
<div className='flex justify-between px-[5rem]'>
    {users.map(i => {
        return(
            <FacultyCard isBig={false}/>
            )
        })}
</div>
</div>

    <div className='flex flex-col space-y-20 py-[5rem]'>

<h1 className='text-[#FF9900] font-bold text-2xl'>Management faculty</h1>
<div className='flex justify-between px-[5rem]'>
    {users.map(i => {
        return(
            <div className='flex flex-col justify-between space-y-32' >
            <FacultyCard isBig={false}/>
            <FacultyCard isBig={false}/>
            <FacultyCard isBig={false}/>
            <FacultyCard isBig={false}/>
            </div>
            )
        })}
</div>
</div>


        <div></div>
      </section>
      </div>
  )
}

export default FacultyDetail