import React from "react";
import { useState } from "react";

const ResultForInt = () => {

  const [stream,setStream] = useState('');
  const [enteredclass, setEnteredClass] = useState('');
  const [dob,setDob] = useState('');
  const [regNo, setRegNo] = useState('');
  const [isLoading,setisLoading] = useState(false)

  const enteredData = {
    stream,enteredclass,dob,regNo
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    setisLoading(true)
  console.log(enteredData)
    try{
      const response = await fetch('/api/internal-result', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify(enteredData)
      })

      const data = await response.json();
      setisLoading(false)
      if(data.success === true){
        setResult(data.msg);
      }
      else{
        alert(data.msg)
      }
    }catch(err){
      alert('Something Went Wrong !')
    }
}
  
  return (
    <div  className="flex flex-col justify-center items-center">
    <section className=" h-[15rem]">
      <div className="w-[100%]">
        <img className="w-[100vw] h-[50vh] bg-contain opacity-80  " src="/images/result_cover.svg"></img>
      </div>
    </section>
      
      <section className="max-w-6xl md:max-w-full container max-h-fit sticky fixed mx-auto justify-center" >
        <div className="mx-auto px-0 flex flex-col justify-between space-y-5 py-[3rem] items-center justify-center items-center ">
          <div className="pb-[1rem]">
            <div className="bg-[#FF9900] py-2 font-bold text-2xl text-center text-white rounded-full">
              Result of NEB Exam  Grade XI
            </div>
            <form  onSubmit={submitHandler} className="flex flex-col  justify-center items-center gap-10">
                <div className=" py-[4rem] w-full  grid  gap-5 grid-cols-1 md:grid-cols-4">


                <div className="flex flex-col space-y-3">

                <label className="text-xl text-center   text-[#201F54]">Choose Stream</label>
                <select onChange={(e) => setStream(e.target.value)} className="w-[15rem] h-[2.5rem] bg-white border-2 border-[#201F54] text-black px-[1rem] rounded-full" value="Science">
                    <option>Science</option>
                    <option>Mgmt</option> 
                </select>
                </div>
                <div className="flex flex-col space-y-3">

                <label className="text-xl text-center  text-[#201F54]">Choose Class</label>
                <select onClick={(e) => setEnteredClass(e.target.value)} className="w-[15rem] h-[2.5rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-full" value="Science">
                    <option>11</option>
                    <option>12</option> 
                </select>
                </div>
                <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center text-[#201F54]">Date of Birth</label>
                    <input onChange={(e) => setDob(e.target.value)} type="date" className="w-[15rem] h-[2.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-full"></input>
                </div>
                <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center text-[#201F54]">Registration No</label>
                    <input onChange={(e) => setRegNo(e.target.value)} type="number" className="w-[15rem] h-[2.5rem] border-2 border-[#201F54] text-xl text-black px-[1rem] rounded-full"></input>
                </div>
                </div>
                <button className="py-3  bg-[#201F54] rounded-full hover:bg-[#FF9900] transition-all duration-200 cursor-pointer ease-in  text-center  px-8 text-white text-xl font-semibold">{isLoading ? 'Submitting' : 'Check Result'}</button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-[80%] mx-auto pt-5 pb-[10rem]">
      <div className="bg-[#E4E3E3] flex justify-center items-center  py-10 md:py-14  px-5 md:px-2 font-bold text-2xs  md:text-xl text-center text-black rounded-full">
             <p className="max-w-6xl md:max-w-5xl text-center text-2xs">
              If you are having problem to view you result feel free to contact at info@tilottama.edu.np or admin@tilottama.edu.np.
              </p>
            </div>
      </section>
    </div>
  );
};

export default ResultForInt;
