import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import Modal from "../UI/ResultPortal";
const EntranceResult = () => {
  const [enteredRollno, setEnteredRollno] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [result, setResult] = useState(null);
  const [isLoading, setisLoading] = useState(false)



  const rollChangeHandler = (e) => {
    const enteredRoll = e.target.value;
    setEnteredRollno(enteredRoll);
  }
  
  const submitHandler = async (e) => {
      e.preventDefault();
      setisLoading(true)
    // console.log(enteredRollno)
      try{
        const response = await fetch('/api/entrance-result', {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },

          body:JSON.stringify({entrance_roll:enteredRollno})
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
    <Fragment>
      {result && <Modal  result={result} isOpen={isOpen} img={"/images/banner.png"} onClose={() => setIsOpen(false)} />}
    <div  className="flex flex-col relative">
    <section className="h-[15rem]">
      <div className="w-[100%]">
        <img className="w-[100vw] h-[50vh] bg-contain opacity-80  " src="/images/result_cover.svg"></img>
      </div>
    </section>
    
    <section className="max-w-6xl md:max-w-full container z-10" >
<div className="max-w-6xl mx-auto px-0 flex flex-col  justify-between space-y-20 py-[3rem]">
  <div className="pb-[1rem]">
    <div className="bg-[#FF9900] rounded-full py-2 font-bold text-2xl  text-center text-white">
      Entrance Result
    </div>
    <form className="flex pt-10 flex-col justify-center items-center gap-10 " onSubmit={submitHandler}>
        <div className="flex flex-col space-y-3 ">
            <label className="text-xl text-[#201F54]">Entrance Roll No</label>
            <input onChange={rollChangeHandler}  type="text" className="w-[20rem] h-[2.5rem] border-2 rounded-2xl border-[#201F54] text-xl text-black pl-[1rem]"></input>
           {/* { isPaste &&  <label className="font-bold text-xl text-center text-[#FF9900]" >copy/paste is not allowed !</label>} */}
        </div>
        <button  className="py-3 w-fit px-10  hover:bg-[#FF9900] cursor-pointer transition-all duration-100 ease-in  bg-[#201F54] text-white rounded-3xl font-bold" >{isLoading ? 'Please Wait' : 'Check Result'}</button>
    </form>
  </div>
</div>
</section>
    <section className="w-[80%] mx-auto pt-5 pb-[10rem]">
    <div className="bg-[#E4E3E3] py-10 md:py-14 px-5 font-bold text-2xs md:text-xl text-center text-black rounded-full flex justify-center items-center">
    <p className="max-w-6xl md:max-w-5xl text-center text-2xs">
            If you are having problem to view you result feel free to contact at info@tilottama.edu.np or admin@tilottama.edu.np.
            </p>
          </div>
    </section>
  </div>
    </Fragment>
  );
};

export default EntranceResult;





{/* <section className="max-w-6xl md:max-w-full container h-[100vh]">
<div className="max-w-6xl mx-auto px-0 flex flex-col  justify-between space-y-20 py-[3rem]">
  <div className="pb-[1rem]">
    <div className="bg-[#FF9900] py-2 font-bold text-2xl text-center text-white">
      Entrance Result
    </div>
    <form className="flex flex-col justify-center items-center gap-10 ">
        <div className="flex flex-col space-y-3 ">
            <label className="text-xl text-[#201F54]">Entrance Roll No</label>
            <input type="number" className="w-[20rem] h-[3rem] border-2 rounded-full border-[#201F54] text-xl text-black pl-[1rem]"></input>
        </div>
        <button className="py-3 w-fit px-10 bg-[#201F54] text-white">{isLoading}</button>
    </form>
  </div>
</div>
</section> */}