import React from "react";
import { useEffect } from "react";
import classes from "../AdmissionForms.js/AdmissionForms.module.css";
import { useState } from "react";
import Image from "next/image";
import { Fragment } from "react";
import Preloader from "../../UI/Preloader";
const EditAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [photo, setPhoto] = useState();
  const [load, setLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    fetch("/api/getall-album")
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.msg);
      })
      .catch((err) => {});
  }, [albums, selectedAlbum]);

  const singleAlbumDeleteHandler = async (item, indx) => {
    const id = item.id;
    console.log(id);

    try {
      setDeleteState(true);
      const res = await fetch(`/api/delete-album/${id}`, {
        method: "DELETE",
      });
      setDeleteState(false);
      const data = await res.json();
      alert(`Succesfully Deleted Album id ${indx + 1}`);
    } catch (err) {
      setDeleteState(false);
      alert(`Failed Deleted Album id ${indx + 1}`);
    }
  };

  const singleAlbumEditHandler = async (item) => {
    setLoad(true);
    const id = item.id;
    console.log(item);
    try {
      const res = await fetch(`/api/gallary/${id}`);
      const data = await res.json();
      console.log(data);
      setSelectedAlbum(data.msg);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  const singleImageDeleteHandler = async (item, indx) => {
    setIsOpen(true)
    console.log(item);
    const id = item.id;
    try {
      const res = await fetch(`/api/update-image/${item.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(`Succesfully deleted image id ${indx + 1} `);
    } catch (err) {
      alert(`Failed to delete image id ${indx + 1} `);
    }
  };

  const handleSubmit = async () => {
    e.preventDefault();
    console.log(selectedItem,'this is seleted')
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append('id', selectedItem.id)


    // try {
    //   await axios
    //     .post(`/api/update-image`, formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((response) => {
    //       alert(response.data.msg);
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       console.log("");
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const backHandler = () => {
    setSelectedAlbum([]);
  };
  
  const singleImageEditHandler = (item, indx) => {
    setIsOpen(true);
    setSelectedItem(item)
    const id = item.id;
  };

  const gallary = <div>
        
  {selectedAlbum.length <= 0 ? (
    <table className="px-[1rem] border-2 py-[5rem]">
      <tbody className="flex flex-col px-[3rem] py-[5rem]">
        <tr className="flex gap-[8em] py-5">
          <th>S.N</th>
          <th>Cover Photo</th>
          <th>Album Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {albums.map((i, indx) => {
          return (
            <Fragment>
              {!load ? (
                <tr key={i.id} className="flex gap-32 py-4 px-[1rem]">
                  <td className="text-justify">{indx + 1}</td>
                  <td className="object-cover">
                    <img
                      className="w-[5rem] object-cover h-[5rem]"
                      src={`/images/gallary/${i.cover_image}`}
                    />
                  </td>
                  <td className="text-justify max-w-xl w-[10%]">
                    {i.album_name}
                  </td>
                  <td
                    onClick={() => singleAlbumEditHandler(i, indx)}
                    className="text-justify cursor-pointer px-4 rounded-full bg-[#201F54] h-[2rem] text-white"
                  >
                    Open
                  </td>
                  <td
                    onClick={() => singleAlbumDeleteHandler(i, indx)}
                    className="text-justify cursor-pointer px-3 rounded-full bg-red-500 h-[2rem] text-white"
                  >
                    Delete
                  </td>
                </tr>
              ) : (
                <Preloader />
              )}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  ) : (
    <table className="px-[1rem] border-2 py-[5rem]">
      <tbody className="flex flex-col px-[3rem] py-[5rem]">
        <span
          onClick={backHandler}
          className="font-bold text-white bg-[#201F54] w-fit px-5 cursor-pointer py-2 rounded-full"
        >
          Back{" "}
        </span>
        <span className="font-bold text-xl py-2">
          {selectedAlbum[0].album_name}
        </span>
        <tr className="flex gap-[10rem] py-5">
          <th>S.N</th>
          <th>Images</th>
          <th>Change</th>
          <th>Delete</th>
        </tr>
        {selectedAlbum.length <= 0 && (
          <h1 className="font-bold text-[#201F54]">Loading...</h1>
        )}
        {console.log(selectedAlbum, "selected")}
        {selectedAlbum?.slice(1, -1)?.map((i, indx) => {
          return (
            <Fragment>
              <tr key={i.id} className="flex gap-32 py-4 px-[1rem]">
                <td className="text-justify">{indx + 1}</td>
                <td className="object-cover">
                  <img
                    className="w-[10rem] object-cover h-[8rem]"
                    src={`/images/gallary/${i.image}`}
                  />
                </td>
                <td
                  onClick={() => singleImageEditHandler(i, indx)}
                  className="px-2 rounded-full bg-[#201F54] w-fit h-[2.5rem] flex justify-center items-center my-10 py-1 text-center text-white cursor-pointer"
                >
                  Update
                </td>
                <td
                  onClick={() => singleImageDeleteHandler(i, indx)}
                  className="text-justify cursor-pointer px-3  my-10 rounded-full bg-red-500 h-[2rem] text-white"
                >
                  Delete
                </td>
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </table>
  )}
</div>

const updateForm =<form
onSubmit={handleSubmit}
className="flex  border-[1px] rounded-3xl border-[#201F54] flex-col justify-center items-center h-[10rem] w-1/2 mx-auto"
>
<div className=" flex flex-col gap-5 ">
  <label className="flex-start">Choose New Image</label>
  <input type="file"></input>
  <div className="flex gap-10">

  <button onClick={() => setIsOpen(false) } className="border-2 px-2 w-fit py-2">Back</button>
  <button className="border-2 px-2 w-fit py-2">Submit</button>
  </div>
</div>
</form>
  return (
    <div className="">
      <div className="flex gap-4 ">
        <h1 className="text-[#201F54] font-bold">Update Gallary</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>

      {isOpen ? updateForm : gallary}
      


    </div>
  );
};

export default EditAlbum;

// flex items-center justify-between py-5 pt-[1rem]