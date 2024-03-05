import React, { useEffect } from "react";

import { useState } from "react";
import SliderList from "./SliderList";
import axios from "axios";
import useGetData from "../../Helper/Helper";

const Slider = () => {
  const [openPostForm, setOpenPostForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sliderImages, SetSliderImages] = useState(false);

  const [updatedSlider, setUpdatedSlider] = useState([]);

  const state_data = {
    _api_main: "/api/slider/get",
    _api_sec: "/api/get-images/slider-uploads/",
  };
  const sliderData = useGetData(state_data);

  useEffect(() => {
    if (sliderData) {
      setUpdatedSlider(sliderData);
    }
    
  }, [sliderData]);

  const pushToDb = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    [...sliderImages].map((file) => {
      formData.append(file.name, file);
      formData.append("active", 1);
    });

    try {
      setLoading(true);
      await axios
        .post(`/api/slider/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setLoading(false);
          alert("Succesfully Uploaded !");
          console.log(response);
        })
        .catch((err) => {
          setLoading(false);
          console.log("");
        });
      // console.log(response);
      // alert(response.msg);
      // alert(response.data.id);
      // alert('Form Submission SucessFully');
    } catch (err) {
      setLoading(false);
      alert("Form not submitted");
      console.log(err);
      // alert(`${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`);
    }
  };
  const updateForm = (
    <form
      encType="multipart/form-data"
      onSubmit={pushToDb}
      className="flex  border-[1px] rounded-3xl border-[#201F54] flex-col justify-center items-center h-[10rem] w-1/2 mx-auto"
    >
      <div className=" flex flex-col gap-5 ">
        <label className="flex-start">Upload Images</label>
        <input
          multiple
          className="py-2"
          onChange={(e) => SetSliderImages(e.target.files)}
          type="file"
        ></input>
        <div className="flex gap-10">
          <button
            onClick={() => setOpenPostForm(false)}
            className="border-2  border-[#201F54] px-2 w-fit py-2"
          >
            Back
          </button>
          <button
            disabled={loading}
            className="border-2    border-[#201F54] px-2 w-fit py-2"
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="">
      <div className="pb-5 w-full justify-end relative flex flex-col">
        <button
          className="px-4 absolute mt-[1rem] top-[0rem]  right-[3.5rem] hover:bg-[#201F54] hover:text-white  w-fit py-2 border-[1px] rounded-full border-[#201F54] transition-all duration-300 ease-in-out"
          onClick={() => setOpenPostForm((prev) => !prev)}
        >
          {openPostForm ? "Close" : "Add New"}
        </button>
      </div>
      <div className="flex gap-4  mx-[5.5rem] ">
        <h1 className="text-[#201F54] py-2 font-bold">Update Slider</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>

      {openPostForm && updateForm}
      <SliderList list={updatedSlider} />
    </div>
  );
};

export default Slider;
