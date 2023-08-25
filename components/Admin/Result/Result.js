import React from 'react'

const Result = () => {
  return (
    <div className='flex flex-col min-h-screen gap-10'>
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Results</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>
      <div className='bg-[#fff] flex justify-center gap-32 items-center rounded-xl h-[10rem] w-[96%]'>
            <div className='flex flex-col gap-2'>
                <label>Result Type</label>
                <select className='w-[14rem]  h-[2.6rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-xl'>
                    <option>Select Type</option>
                    <option>Internal</option>
                    <option>Grade XI</option>
                    <option>Grade XII</option>
                    <option>Entrance</option>
                </select>
            </div>
            <div className='flex flex-col  gap-2'>
                <label>Upload Excel File</label>
                    <input  type='file' className='w-[20rem]  py-[0.36rem]  border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-xl' />
            </div>
      </div>
    </div>
  )
}

export default Result