import React from "react";
import { useEffect } from "react";
import classes from "../AdmissionForms.js/AdmissionForms.module.css";
import { useState } from "react";
const EditPhotos = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("/api/getall-album")
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.msg);
      })
      .catch((err) => {});
  }, []);

  // const downloadDataHandler = () => {
  //   setIsDownloadable(true)
  // }

  //   const selectedItemHandler = (item) => {
  //     setSelectedItem(item);
  //   }

  return (
    <div className="">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Update Gallary</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>

      <div className="flex gap-4   py-5 justify-end"></div>

      <div
        className={`rounded-xl pb-[3rem] w-[90%] mx-auto bg-white h-auto  ${classes.sh}`}
      >
        <div className="font-semibold">
          <div className="flex gap-[8rem]  px-[3rem]  pt-[2rem]">
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/formno.svg"
              ></img>
              <h1>Gallary No</h1>
              <img
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/student_name.svg"
              ></img>
              <h1>Images</h1>
              <img
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>

            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/faculty.svg"
              ></img>
              <h1>Edit</h1>
              <img
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/status.svg"
              ></img>
              <h1>Delete</h1>
            </div>
          </div>
        </div>
        <div className="px-[3rem] flex flex-col ">
          <span className="block w-[100%] h-[0.09rem] mx-auto bg-[#D2CCCC] mt-8"></span>
          {albums?.map((i) => (
            <div key={i.id} className="flex gap-[7rem]  px-[1rem] pt-[2rem]">
              <span className="max-w-sm w-[55%]">{i.id}</span>
              <span className="max-w-sm w-[100%]">{i.album_name}</span>
              <span className="w-fit">Open</span>
              <span className="w-fit">Delete</span>
              <div>
                {
                  <div
                    className=""
                    key={i.id}
                    onMouseEnter={() => selectedItemHandler(i)}
                  ></div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditPhotos;

// flex items-center justify-between py-5 pt-[1rem]
