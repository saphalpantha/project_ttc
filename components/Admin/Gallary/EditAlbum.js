import { React, useEffect, useState, Fragment, useMemo } from "react";
import Preloader from "../../UI/Preloader";
import { useFormik } from "formik";
import axios from "axios";
import useGetData from "../../Helper/Helper";

const initialValues = {};
const EditAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [load, setLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [fixedAlbumState, setFixedAlbumState] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const state_data = {
    _api_main: "/api/getall-album",
    _api_sec: "/api/get-images/gallary/",
  };
  const galleryData = useGetData(state_data);

  const singleAlbumEditHandler = async (item) => {
    setLoad(true);
    const id = item.id;
    console.log(item);
    setSelectedItem(item);
    try {
      const res = await fetch(`/api/gallary/${id}`);
      const data = await res.json();
      console.log(data, "the data");
      setSelectedAlbum(data.msg);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  const singleImageDeleteHandler = async (item, indx) => {
    setIsOpen(true);
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

  const submitHandler = async (formD) => {
    const formData = new FormData();
    [...photos].map((file) => {
      formData.append(file.name, file);
    });

    console.log(formData);

    try {
      setLoading(true);
      console.log(selectedItem, "the item selected");
      await axios
        .post(`/api/gallary/edit/${selectedItem.id}/`, formData)
        .then((response) => {
          alert(response.data.msg);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("");
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, resetForm) => {
      submitHandler(values);
    },
  });
  const { values, handleBlur, handleChange, handleReset, handleSubmit } =
    formik;

  const backHandler = () => {
    setSelectedAlbum([]);
  };

  const singleImageEditHandler = () => {
    setIsOpen(true);
    // console.log(fixedAlbumState,'state album')
  };

  const gallary = (
    <div>
      {selectedAlbum.length == 0 ? (
        <table className={`w-[83%] my-[2rem] mx-auto`}>
          <tbody className="flex pt-[1rem] flex-col border-[2px] h-[75vh]  overflow-y-scroll ">
            <tr className="flex justify-between gap-[0rem]">
              <th className="flex-1">S.N</th>
              <th className="flex-1">Cover photo</th>
              <th className="flex-[1.3]">Album Name</th>
              <th className="flex-[1.3]">Edit</th>
              <th className="flex-[1.1]">Delete</th>
            </tr>
            {galleryData.map((i, indx) => {
              return (
                <Fragment>
                  {!load ? (
                    <tr
                      key={i.id}
                      className="flex justify-between gap-[4rem] mx-[2rem]  py-4"
                    >
                      <td className="flex-1">{indx + 1}</td>
                      <td className="object-cover flex-1">
                        <img
                          className="  w-[5rem] object-cover h-[5rem]"
                          src={`${i.img_code}`}
                        />
                      </td>
                      <td className="flex-1">{i.album_name}</td>
                      <td
                        onClick={() => singleAlbumEditHandler(i, indx)}
                        className=" w-fit px-4 flex-1 cursor-pointer rounded-full bg-[#201F54] h-[2rem] text-white"
                      >
                        Open
                      </td>
                      <button
                        onClick={() => singleAlbumDeleteHandler(i, indx)}
                        className={` cursor-pointer flex-1 px-4 rounded-full bg-red-500 h-[2rem] text-white disabled:bg-red-200`}
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
        <table className="w-[83%] my-[2rem] mx-auto">
          <tbody className="flex pt-[1rem] flex-col border-[2px] h-[75vh]  overflow-y-scroll">
            <div className="flex justify-between px-[2rem] items-center justify-center">
              <span
                onClick={backHandler}
                className="font-bold text-white bg-[#201F54] w-fit px-5 cursor-pointer py-2 rounded-full"
              >
                Back{" "}
              </span>
              <div
                onClick={() => singleImageEditHandler()}
                className="border-[#201F54] text-[#201F54] border-[2px] px-4 py-2 rounded-full hover:bg-[#201F54] hover:text-white cursor-pointer"
              >
                Add Photos
              </div>
            </div>
            <span className="font-bold text-xl px-[2.4rem] py-2">
              {`Album ${selectedAlbum[0]?.album_name}`}
            </span>
            <tr className="flex pt-[2rem] justify-between gap-[3rem]">
              <th className="flex-[0.8]">S.N</th>
              <th className="flex-1">Images</th>
              <th className="flex-1">Delete</th>
            </tr>
            {selectedAlbum.length <= 0 && (
              <h1 className="font-bold text-[#201F54]">Loading...</h1>
            )}
            {selectedAlbum?.slice(1, -1)?.map((i, indx) => {
              return (
                <Fragment>
                  <tr
                    key={i.id}
                    className="flex justify-between py-4 px-[6rem]"
                  >
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
  );

  const updateForm = (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="flex  border-[1px] rounded-3xl border-[#201F54] flex-col justify-center items-center h-[10rem] w-1/2 mx-auto"
    >
      <div className=" flex flex-col gap-5 ">
        <label className="flex-start">Choose New Images</label>
        <input
          multiple
          onChange={(e) => setPhotos(e.target.files)}
          type="file"
        ></input>
        <div className="flex gap-10">
          <button
            onClick={() => setIsOpen(false)}
            className="border-2  border-[#201F54] px-2 w-fit py-2"
          >
            Back
          </button>
          <button
            disabled={loading}
            type="submit"
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
      <div className="flex gap-4  mx-[5.5rem] ">
        <h1 className="text-[#201F54] py-2 font-bold">Update Gallary</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>

      {isOpen ? updateForm : gallary}
    </div>
  );
};

export default EditAlbum;

// flex items-center justify-between py-5 pt-[1rem]
