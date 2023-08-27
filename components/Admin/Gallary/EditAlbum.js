import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import Preloader from "../../UI/Preloader";
const EditAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [photos, setPhotos] = useState();
  const [load, setLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [fixedAlbumState, setFixedAlbumState] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    fetch("/api/getall-album")
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.msg);
        setFixedAlbumState(data.msg);
      })
      .catch((err) => {});
  }, [1]);

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

  const submitHandler = async () => {
    e.preventDefault();
    const formData = new FormData();
    
    [...photos].map((file) => {
      formData.append(file.name, file);
    });

    



    try {
      setLoading(true)
      await axios
        .post(`/api/update-image/${fixedAlbumState.id}/`, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          alert(response.data.msg);
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          console.log("");
        });
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  };

  const backHandler = () => {
    setSelectedAlbum([]);
  };
  
  const singleImageEditHandler = () => {
    setIsOpen(true);
    // console.log(fixedAlbumState,'state album')
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
                  <button
                    disabled={selectedAlbum.length<=6}
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
  ) : (
    <table className="px-[1rem] flex-col border-2 py-[5rem]">
      <tbody className="flex flex-col px-[3rem] py-[5rem]">
        <div className="flex justify-between items-center justify-center">

        <span
          onClick={backHandler}
          className="font-bold text-white bg-[#201F54] w-fit px-5 cursor-pointer py-2 rounded-full"
          >
          Back{" "}
        </span>
        <div onClick={() => singleImageEditHandler()}  className="border-[#201F54] text-[#201F54] border-[2px] px-4 py-2 rounded-full hover:bg-[#201F54] hover:text-white cursor-pointer">
          Add  Photos
        </div>
          </div>
        <span className="font-bold text-xl py-2">
          {selectedAlbum[0].album_name}
        </span>
        <tr className="flex gap-[10rem] py-5">
          <th>S.N</th>
          <th>Images</th>
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
                <button
                  onClick={() => singleImageDeleteHandler(i, indx)}
                  className="text-justify cursor-pointer px-3  my-10 rounded-full bg-red-500 h-[2rem] text-white"
                >
                  Delete
                </button>
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </table>
  )}
</div>

const updateForm =<form
encType="multipart/form-data" 
onSubmit={submitHandler}
className="flex  border-[1px] rounded-3xl border-[#201F54] flex-col justify-center items-center h-[10rem] w-1/2 mx-auto"
>
<div className=" flex flex-col gap-5 ">
  <label className="flex-start">Choose New Images</label>
  <input multiple onChange={(e) => setPhotos(e.target.files)} type="file"></input>
  <div className="flex gap-10">

  <button onClick={() => setIsOpen(false) } className="border-2 px-2 w-fit py-2">Back</button>
  <button disabled={loading} type="submit" className="border-2 px-2 w-fit py-2">{loading ? 'Submitting' : 'Submit'}</button>
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
