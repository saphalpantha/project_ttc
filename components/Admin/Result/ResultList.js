import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import Preloader from "../../UI/Preloader";
import { useFormik } from "formik";
import axios from "axios";
import Link from "next/link";
const initialValues = {}
const ResultList = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [photos, setPhotos] = useState();
  const [load, setLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [fixedAlbumState, setFixedAlbumState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image,setImage] = useState()
  const [name,setName] = useState();
  const [phone, setPhone] = useState();
  const [department, setDepartment] = useState();


  const submitHandler = async (formD) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('name', name)
    formData.append("phoneno", phone);
    formData.append("image", image);
    formData.append("dept", department);
    console.log(formData,'log form data');
    try {
      const response = await axios.put(`/api/faculty/edit/${selectedAlbum?.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
      }); 
      const data = await response.data();
      console.log(data);
      setLoading(false)
      setIsOpen(false)
      alert('Form Submission SucessFully');
    } catch (err) {
      setLoading(false)
      alert('Form Submission SucessFully123');
      console.log(err);
      // alert(`${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`);
      
    }

  }

  

  const formik = useFormik({initialValues, onSubmit : (values, resetForm) => {submitHandler(values)}})
  const { values, handleBlur, handleChange, handleReset, handleSubmit } = formik


  useEffect(() => {
    fetch("/api/result-upload/")
      .then((result) => result.json())
      .then((data) => {
        console.log(data,'the result')
        setAlbums(data.msg);
        setFixedAlbumState(data.msg);
      })
      .catch((err) => {});
  }, []);



  const singleAlbumDeleteHandler = async (item,index) => {
    setLoad(true);
    const id = item.id;
    try {
      const res = await fetch(`/api/result-upload/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(`Deleted faculty id ${index+1} Successfully `)
      setLoad(false);
    } catch (err) {
      alert(`Failed to Delete faculty id ${index+1}`)
      setLoad(false);
      console.log(err);
    }
  }; 

  const singleAlbumEditHandler = async (item) => {
    setIsOpen(true)
    setSelectedAlbum(item)
  };

  

  const backHandler = () => {
    setSelectedAlbum([]);
  };

  const gallary = (
    <div>
            { isOpen &&  <span
          onClick={backHandler}
          className="font-bold text-white   bg-[#201F54] w-fit px-5 cursor-pointer py-2 rounded-full"
          >
          Back{" "}
        </span>}
      <table className="px-[1rem] w-[100%] border-2 py-[5rem]">
        <tbody className="flex flex-col px-[3rem] py-[5rem]">
          <tr className="grid grid-cols-5 text-left gap-[10%]  py-5">
            <th>S.N</th>
            <th>Result Type</th>
            <th>File</th>
            <th>Download</th>
            <th>Delete</th>
          </tr>
          {albums?.map((i, indx) => {
            return (
              <Fragment>
                {!load ? (
                  <tr key={i.id} className="grid grid-cols-5 gap-[5rem] py-[1rem] ">
                    <td className="text-justify">{indx + 1}</td>
                    <td className="object-cover">
                        {i.result_type}
                    </td>
                    <td className="text-justify max-w-xl w-[10%]">{i.file_name}</td>
                    <td
                      onClick={() => singleAlbumEditHandler(i, indx)}
                      className="text-justify cursor-pointer px-4 rounded-full bg-[#201F54] h-[2rem] text-white"
                    >
                        <Link href={`/results/${i.file_name}`} > Download</Link>
                     
                    </td>
                    <button
                      onClick={() => singleAlbumDeleteHandler(i, indx)}
                      className={`text-justify cursor-pointer px-3 rounded-full bg-red-500 h-[2rem] text-white disabled:bg-red-200`}
                    >
                      Delete
                    </button>
                  </tr>
                ) : (
                  <Preloader />
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );


  
  return (
    <div className="">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Update Result</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>

      { gallary}
    </div>
  );

  }

  
export default ResultList;

// flex items-center justify-between py-5 pt-[1rem]
