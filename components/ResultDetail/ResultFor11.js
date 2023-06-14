import React from "react";

const ResultFor11 = () => {
  return (
    <div  className="flex flex-col">
      <section className=" h-[10rem]">
        <div className="">
          <img className="w-[100vw] h-[30vh]  opacity-80 object-contain  " src="/images/result_cover.svg"></img>
        </div>
      </section>
      
      <section className="max-w-6xl md:max-w-full container max-h-fit sticky fixed">
        <div className="max-w-6xl mx-auto px-0 flex flex-col justify-between space-y-5 py-[3rem]">
          <div className="pb-[1rem]">
            <div className="bg-[#FF9900] py-2 font-bold text-2xl text-center text-white rounded-full">
              Result of NEB Exam  Grade XI
            </div>
            <form className="flex flex-col justify-center items-center">
                <div className="px-[2rem] py-[5rem] grid gap-10 grid-cols-1 md:grid-cols-3">

                <div className="flex flex-col space-y-2">

                <label className="text-xl text-center  text-[#201F54]">Choose Stream</label>
                <select className="w-[18rem] h-[3.5rem] border-2 border-[#201F54] text-black px-[1rem] rounded-full" value="Science">
                    <option>Science</option>
                    <option>Mgmt</option> 
                </select>
                </div>
                <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center text-[#201F54]">Date of Birth</label>
                    <input type="date" className="w-[18rem] h-[3.5rem] border-2 border-[#201F54] px-[1rem] text-black rounded-full"></input>
                </div>
                <div className="flex flex-col space-y-3">
                    <label className="text-xl text-center text-[#201F54]">Registration No</label>
                    <input type="number" className="w-[18rem] h-[3.5rem] border-2 border-[#201F54] text-xl text-black px-[1rem] rounded-full"></input>
                </div>
                </div>
                <div className="py-3  bg-[#201F54] rounded-full text-center  px-8 text-white text-xl font-semibold">Check Results</div>
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
  );
};

export default ResultFor11;
