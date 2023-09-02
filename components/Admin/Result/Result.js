import React, { useState } from "react";
import ResultList from "./ResultList";

const Result = () => {
  const [resulttype, setResultType] = useState('');
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);



  const getUrl = () =>{
    if(resulttype === 'Internal'){
      return "/api/results/internal"
    }
    if(resulttype === 'Grade XI'){
      return "/api/results/grade-11";
    }
    if(resulttype === 'Grade XII'){
      return "/api/results/internal";
    }
    if(resulttype === 'Entrance'){
      return "/api/results/entrance";
    }
    if(resulttype === ''){
      return ''
    }


  }
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("result_type", resulttype);
    formData.append("file", file);
      const uri = getUrl()
      console.log(uri, 'the url')
    try {
      const uri = getUrl()
      const res = await fetch(uri, {
        method: "POST",
        body: formData,
      });
      alert("Result Data added succesfully");
      setLoading(false);
      const data = await res.json();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col min-h-screen gap-10">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Results</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>
      <form onSubmit={submitHandler}>
        <div className="bg-[#fff] flex justify-center gap-32 items-center rounded-xl h-[10rem] w-[96%]">
          <div className="flex flex-col gap-2">
            <label>Result Type</label>
            <select
              onChange={(e) => setResultType(e.target.value)}
              className="w-[14rem]  h-[2.6rem] border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-xl"
            >
              <option>Select Type</option>
              <option>Internal</option>
              <option>Grade XI</option>
              <option>Grade XII</option>
              <option>Entrance</option>
            </select>
          </div>
          <div className="flex flex-col  gap-2">
            <label>Upload Excel File</label>
            <input
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              type="file"
              className="w-[20rem]  py-[0.36rem]  border-2 bg-white border-[#201F54] text-black px-[1rem] rounded-xl"
            />
          </div>
        <div className="flex flex-col flex justify-center items-center  gap-2">
          <button className="w-[5rem]  py-[0.36rem]  border-2 bg-white border-[#201F54] hover:bg-[#201F54] hover:text-white text-black px-[1rem] rounded-xl">{loading ? 'Submitting' : 'Submit'}</button>
        </div>
        </div>
      </form>
              <ResultList/>
    </div>
  );
};

export default Result;
