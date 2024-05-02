import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import Preloader from "../../UI/Preloader";
import { useFormik } from "formik";
import axios from "axios";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import useGetData from "../../Helper/Helper";
const initialValues = {};
const StarList = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [photos, setPhotos] = useState();
  const [load, setLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [fixedAlbumState, setFixedAlbumState] = useState([]);
  const [department, setDepartment] = useState();

  const [image, setImage] = useState();
  const [heading, setHeading] = useState();
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [allNotice, setAllNotice] = useState([]);
  const [openPostForm, setOpenPostForm] = useState(false);

  const submitHandler = async (formD) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("desc", editorRef.current.getContent());
    formData.append("image", image);
    // console.log(formData);

    try {
      const response = await axios.put(
        `/api/news-notice/edit/${selectedAlbum.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      setDummy(response.data);

      alert("Form Submission Sucessfully");
    } catch (err) {
      setLoading(false);
      alert("Form Submission SucessFully123");
      // console.log(err);
      alert(
        `${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`
      );
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

  const state_data = {
    _api_main: "/api/news-notice/?limit=3",
    _api_sec: "/api/get-images/notice-uploads/",
  };
  const notice = useGetData(state_data);

  if(!notice){
    return;
  }
  const singleAlbumDeleteHandler = async (item, index) => {
    setLoad(true);
    const id = item.id;
    try {
      const res = await fetch(`/api/news-notice/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(`Deleted Notice id ${index + 1} Successfully `);
      setLoad(false);
    } catch (err) {
      alert(`Failed to Delete Notice id ${index + 1}`);
      setLoad(false);
      console.log(err);
    }
  };

  const singleAlbumEditHandler = async (item) => {
    setIsOpen(true);
    setSelectedAlbum(item);
  };

  const backHandler = () => {
    setSelectedAlbum([]);
  };

  const gallary = (
    
    <div>
      {isOpen && (
        <span
          onClick={backHandler}
          className="font-bold text-white bg-[#201F54] w-fit px-5 cursor-pointer py-[5rem] rounded-full"
        >
          Back{" "}
        </span>
      )}
      <table className={`w-[83%] my-[2rem] mx-auto`}>
        <tbody className="flex pt-[1rem] flex-col border-[2px] h-[75vh]  overflow-y-scroll ">
          <tr className="flex justify-between gap-[0rem]">
            <th className="flex-1">S.N</th>
            <th className="flex-1">Image</th>
            <th className="flex-[1.3]">Heading</th>
            <th className="flex-[1.3]">Edit</th>
            <th className="flex-[1.1]">Delete</th>
          </tr>
          {notice?.map((i, indx) => {
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
                    <td className="flex-1">{i.heading}</td>
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
    </div>
  );

  const updateForm = (
    <form
      encType="multipart/form-data"
      className="flex flex-col pt-[3rem] justify-center gap-5 px-20"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center">
        <label>Heading of Notice</label>
        <input
          onChange={(e) => setHeading(e.target.value)}
          className="border-2 "
          type="text"
        ></input>
      </div>
      <div className="flex flex-col justify-center">
        <label>Description</label>
        <Editor
          apiKey="hc8j851fp7qxs4ve58a0bssy33uhzba52k1bmt7rt5j4e61n"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            height: 200,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <label>Upload Image</label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        className="border-2 py-2 pl-5"
        type="file"
      ></input>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="border-2 px-6 py-2 w-fit"
          >
            Back
          </button>
          <button
            disabled={loading}
            type="submit"
            className="border-2 px-6 py-2 w-fit"
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="">
      <div className="flex gap-4 mx-[5.5rem] ">
        <h1 className="text-[#201F54] font-bold">Update NewsNotice</h1>
        <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
      </div>

      {isOpen ? updateForm : gallary}
    </div>
  );
};

export default StarList;

// flex items-center justify-between py-5 pt-[1rem]
