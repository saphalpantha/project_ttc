// import React from "react";
// import { Fragment } from "react";
// import { useState } from "react";
// import Modal from "../UI/ResultPortal";
// const EntranceResult = () => {
//   const [enteredRollno, setEnteredRollno] = useState('');
//   const [isOpen, setIsOpen] = useState(true);
//   const [result, setResult] = useState(null);
//   const [isLoading, setisLoading] = useState(false)

//   const rollChangeHandler = (e) => {
//     const enteredRoll = e.target.value;
//     setEnteredRollno(enteredRoll);
//   }

//   const submitHandler = async (e) => {
//       e.preventDefault();
//       setisLoading(true)
//     // console.log(enteredRollno)
//       try{
//         const response = await fetch('/api/entrance-result', {
//           method:'POST',
//           headers:{
//             'Content-Type':'application/json'
//           },

//           body:JSON.stringify({entrance_roll:enteredRollno})
//         })

//         const data = await response.json();
//         setisLoading(false)
//         if(data.success === true){
//           setResult(data.msg);
//         }
//         else{
//           alert(data.msg)
//         }
//       }catch(err){
//         alert('Something Went Wrong !')
//       }
//   }

//   return (
//     <Fragment>
//       {result && <Modal  result={result} isOpen={isOpen} img={"/images/banner.png"} onClose={() => setIsOpen(false)} />}
//     <div  className="flex flex-col relative">
//     <section className="h-[15rem]">
//       <div className="w-[100%]">
//         <img className="w-[100vw] h-[50vh] bg-contain opacity-80  " src="/images/result_cover.svg"></img>
//       </div>
//     </section>

//     <section className="max-w-6xl md:max-w-full container z-10" >
// <div className="max-w-6xl mx-auto px-0 flex flex-col  justify-between space-y-20 py-[3rem]">
//   <div className="pb-[1rem]">
//     <div className="bg-[#FF9900] rounded-full py-2 font-bold text-2xl  text-center text-white">
//       Entrance Result
//     </div>
//     <form className="flex pt-10 flex-col justify-center items-center gap-10 " onSubmit={submitHandler}>
//         <div className="flex flex-col space-y-3 ">
//             <label className="text-xl text-[#201F54]">Entrance Roll No</label>
//             <input onChange={rollChangeHandler}  type="text" className="w-[20rem] h-[2.5rem] border-2 rounded-2xl border-[#201F54] text-xl text-black pl-[1rem]"></input>
//            {/* { isPaste &&  <label className="font-bold text-xl text-center text-[#FF9900]" >copy/paste is not allowed !</label>} */}
//         </div>
//         <button  className="py-3 w-fit px-10  hover:bg-[#FF9900] cursor-pointer transition-all duration-100 ease-in  bg-[#201F54] text-white rounded-3xl font-bold" >{isLoading ? 'Please Wait' : 'Check Result'}</button>
//     </form>
//   </div>
// </div>
// </section>
//     <section className="w-[80%] mx-auto pt-5 pb-[10rem]">
//     <div className="bg-[#E4E3E3] py-10 md:py-14 px-5 font-bold text-2xs md:text-xl text-center text-black rounded-full flex justify-center items-center">
//     <p className="max-w-6xl md:max-w-5xl text-center text-2xs">
//             If you are having problem to view you result feel free to contact at info@tilottama.edu.np or admin@tilottama.edu.np.
//             </p>
//           </div>
//     </section>
//   </div>
//     </Fragment>
//   );
// };

// export default EntranceResult;

import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import Modal from "../UI/ResultPortal";
const EntranceResult = () => {
  const [enteredRollno, setEnteredRollno] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [result, setResult] = useState(null);
  const [isLoading, setisLoading] = useState(false);

    const submitHandler = async (e) => {
      e.preventDefault();
      setisLoading(true)
    console.log(enteredRollno)
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
      
      <div className="bg-white overflow-clip relative min-h-screen">
      {result && (
        <Modal
          result={result}
          isOpen={isOpen}
          img={"/images/banner.png"}
          onClose={() => setIsOpen(false)}
        />
      )}
        <div className="w-[120vw] h-[110vh] absolute top-[-60%] left-[-20%] bg-[#F4F8FA] rotate-[160deg]">
          <div className="h-[3rem] w-full relative bg-[#17155BA8]">
            <div className="bg-[#FF99008F]  h-[3rem] w-[365px] top-[50%]  translate-x-[35%]  absolute    right-[35%]"></div>
          </div>
        </div>
        <div className={` flex flex-col-reverse md:flex-row relative`}>
          <div className="flex m-8 md:m-20  text-[#404040] flex-col gap-1 max-w-md">
            <h1 className="font-bold text-[1.2rem]">Read this carefully</h1>
            <ol className="flex  list-disc ml-4 flex-col">
              <li className="text-justify">
                Enter your correct entrance roll number in the roll number section.{" "}
              </li>
            </ol>
            <p className="italic">
              If you are having problem to view you result feel free to contact
              at info@tilottama.edu.np or admin@tilottama.edu.np.
            </p>
          </div>
          <form
            className="  flex flex-col h-fit py-[5rem] justify-center items-center w-full max-w-xl  md:absolute  md:top-[20%] md:right-[5%]  mx-auto  shadow-[5px 9px 15px -1px]  shadow-[#00000040]  h-[35rem] border-[1px] border-[#DCDCDC]   bg-[#FFFFFF] rounded-xl "
            onSubmit={submitHandler}
          >
            <div className="flex w-[95%] justify-center items-center px-4 md:px-14 flex-col gap-4 ">
              <div className="grid gap-4 pt-3 justify-center items-center  grid-cols-1">
                <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
                  Check your Internal Exam Result
                </h1>

              
                <div className="flex   flex-col md:flex-row md:justify-between md:items-center">

                  <div className="flex   justify-center w-full  flex-col gap-2">
                    <label className="text-[1.2rem]  text-[#494949]">
                      Roll No
                    </label>
                    <input
                      required
                      onChange={(e) => setEnteredRollno(e.target.value)}
                      type="number"
                      className="w-full border-2 pl-4  rounded-md border-[#DCDCDC] outline-none h-[2.2rem] bg-transparent"
                    ></input>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="text-center md:col-span-2 active:bg-[#3F3BCB]  justify-center transition-all duration-200 ease-in-out hover:bg-[#635eff]  rounded-xl text-white font-bold items-center w-[88%] bottom-10   h-[2.5rem] bg-[#3F3BCB]"
              >
                {" "}
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EntranceResult;

{
  /* <section className="max-w-6xl md:max-w-full container h-[100vh]">
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
</section> */
}
