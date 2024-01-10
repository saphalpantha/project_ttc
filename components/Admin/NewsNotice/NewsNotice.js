import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import axios from "axios";
import EditNewsNotice from "./EditNewsNotice";
const initialValues = {};
const NewsNotice = () => {
  const [image, setImage] = useState();
  const [heading, setHeading] = useState();
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [allNotice, setAllNotice] = useState([]);
  const [openPostForm, setOpenPostForm] = useState(false);
  useEffect(() => {
    fetch("/api/news-notice")
      .then((res) => res.json())
      .then((data) => setAllNotice(data.msg))
      .catch((err) => {});
  }, []);

  const submitHandler = async (formD) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("desc", editorRef.current.getContent());
    formData.append("image", image);
    // console.log(formData);
    try {
      const response = await axios.post("/api/news-notice", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);

      alert("Form Submission SucessFully");
    } catch (err) {
      setLoading(false);
      // alert("Form Submission SucessFully123");
      console.log(err);
      alert(
        `${err?.response?.data?.errMsg?.message} \n\n Error! \n Please Try Again with Correct`
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

  return (
    <div className="pl-[22%]  w-[100vw] py-14">
      <button
        className="px-4 absolute mt-[1.3rem] right-[3.5rem] hover:bg-[#201F54] hover:text-white  w-fit py-2 border-[1px] rounded-full border-[#201F54] transition-all duration-300 ease-in-out"
        onClick={() => setOpenPostForm((prev) => !prev)}
      >
        {openPostForm ? "Close" : "Add New"}
      </button>

      {openPostForm && (
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
            <button
              disabled={loading}
              type="submit"
              className="border-2   border-[#201F54] px-6 py-2 w-fit"
            >
              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      )}
      <section className="min-h-screen pt-[2rem]">
        <EditNewsNotice />
      </section>
    </div>
  );
};

export default NewsNotice;
