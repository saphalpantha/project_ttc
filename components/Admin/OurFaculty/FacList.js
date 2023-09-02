import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import Preloader from "../../UI/Preloader";
import { useFormik } from "formik";
import axios from "axios";
const initialValues = {}
const EditAlbum = () => {
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
    fetch("/api/faculty")
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.msg);
        setFixedAlbumState(data.msg);
      })
      .catch((err) => {});
  }, [1]);



  const singleAlbumDeleteHandler = async (item,index) => {
    setLoad(true);
    const id = item.id;
    try {
      const res = await fetch(`/api/faculty/delete/${id}`, {
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
          className="font-bold text-white bg-[#201F54] w-fit px-5 cursor-pointer py-2 rounded-full"
          >
          Back{" "}
        </span>}
      <table className="px-[1rem] border-2 py-[5rem]">
        <tbody className="flex flex-col px-[3rem] py-[5rem]">
          <tr className="flex gap-[9.7rem] py-5">
            <th>S.N</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {albums?.map((i, indx) => {
            return (
              <Fragment>
                {!load ? (
                  <tr key={i.id} className="flex gap-32 py-4 px-[1rem]">
                    <td className="text-justify">{indx + 1}</td>
                    <td className="object-cover">
                      <img
                        className="w-[5rem] object-cover h-[5rem]"
                        src={`/images/faculty-uploads/${i.photo}`}
                      />
                    </td>
                    <td className="text-justify max-w-xl w-[10%]">{i.name}</td>
                    <td
                      onClick={() => singleAlbumEditHandler(i, indx)}
                      className="text-justify cursor-pointer px-4 rounded-full bg-[#201F54] h-[2rem] text-white"
                    >
                      Open
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


  

  const updateForm = 
    <form encType="multipart/form-data" className='flex flex-col justify-center gap-5 px-20' onSubmit={handleSubmit}>
    <div className='flex flex-col justify-center'>
    <label>Name of Faculty</label>
    <input  onChange={(e) => setName(e.target.value)} className='border-2 ' type='text'></input>
    </div>
    <div className='flex flex-col justify-center'>
    <label>Phone No</label>
    <input  onChange={(e) => setPhone(e.target.value)} className='border-2 ' type='number'></input>
    </div>
    <div className='flex flex-col gap-4 justify-center'>
    <label>Factulty Department</label>
    <select className='border-2 py-2 bg-white ' onChange={(e) => setDepartment(e.target.value)}>
        <option>Select Department</option>
        <option>Physics</option>
        <option>Chemistry</option>
        <option>Biology</option>
        <option>Computer</option>
        <option>Economics</option>
        <option>Finance</option>
        <option>Account</option>
        <option>Nepali</option>
        <option>English</option>
        <option>Maths</option>
    </select>
    </div>

    <label>Upload Image</label>
    <input  onChange={(e) => setImage(e.target.files[0])} className='border-2 py-2 pl-5' type='file'></input>
    <div className='flex gap-10 justify-center items-center'>
    <button  type="submit"  className='border-2 px-6 py-2 w-fit'>{loading ? 'Submitting' : 'Submit'}</button>
    <button  onClick={() => setIsOpen(false)}  className='border-2 px-6 py-2 w-fit'>Back</button>
    </div>
</form>


  
  return (
    <div className="">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Update Faculty</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>

      {isOpen ? updateForm : gallary}
    </div>
  );

  }

  
export default EditAlbum;

// flex items-center justify-between py-5 pt-[1rem]
