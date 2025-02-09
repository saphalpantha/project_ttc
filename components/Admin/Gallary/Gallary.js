// import React, { useState } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import EditAlbum from "./EditAlbum";
// const initialValues = {};
// const Gallary = () => {
//   const [openPostForm, setOpenPostForm] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState();
//   const [cover, setCover] = useState();
//   const [loading, setLoading] = useState(false);

//   const handleFile = (e) => {
//     setFiles(e.target.files);
//   };

//   console.log(files);

//   const submitHandler = async (formD) => {
//     const formData = new FormData();
//     formData.append("albname", name);
//     formData.append("cover", cover);
//     [...files].map((file) => {
//       formData.append(file.name, file);
//     });

//     try {
//       setLoading(true);
//       await axios
//         .post(`/api/gallary/1`, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         })
//         .then((response) => {
//           setLoading(false);
//           alert(response.data.msg);
//           alert(response.data.data.insertId);
//           console.log(response);
//         })
//         .catch((err) => {
//           setLoading(false);
//           console.log("");
//         });
//       // console.log(response);
//       // alert(response.msg);
//       // alert(response.data.id);
//       // alert('Form Submission SucessFully');
//     } catch (err) {
//       setLoading(false);
//       alert("Form not submitted");
//       console.log("err");
//       console.log(err);
//       // alert(`${err.response.data.errMsg.message} \n\n Error! \n Please Try Again with Correct`);
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: (values, resetForm) => {
//       submitHandler(values);
//     },
//   });
//   const { values, handleBlur, handleChange, handleReset, handleSubmit } =
//     formik;

//   return (
//     <div className="pl-[22%]  w-[100vw] py-14">
//       <div className="pb-5 w-full justify-end relative flex flex-col">
//         <button
//           className="px-4 absolute mt-[1rem] top-[0rem]  right-[3.5rem] hover:bg-[#201F54] hover:text-white  w-fit py-2 border-[1px] rounded-full border-[#201F54] transition-all duration-300 ease-in-out"
//           onClick={() => setOpenPostForm((prev) => !prev)}
//         >
//           {openPostForm ? "Close" : "Add New"}
//         </button>
//       </div>
//       {openPostForm && (
//         <form
//           encType="multipart/form-data"
//           className="flex flex-col justify-center gap-5 px-20"
//           onSubmit={handleSubmit}
//         >
//           <div className="flex flex-col justify-center">
//             <label>Album Name</label>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               className="border-2 "
//               type="text"
//             ></input>
//           </div>
//           <div className="flex flex-col py-2 justify-center">
//             <label>Upload Cover</label>
//             <input
//               onChange={(e) => setCover(e.target.files[0])}
//               className="border-2 py-2 pl-5 "
//               type="file"
//             ></input>
//           </div>

//           <label>Upload Images</label>
//           <input
//             onChange={handleFile}
//             className="border-2 py-2 pl-5"
//             multiple
//             type="file"
//           ></input>
//           <div className="flex flex-col justify-center items-center">
//             <button
//               disabled={loading}
//               type="submit"
//               className="border-2 border-[#201F54] px-6 py-2 w-fit"
//             >
//               {loading ? "Submitting" : "Submit"}
//             </button>
//           </div>
//         </form>
//       )}

//       <EditAlbum />
//       {/* <EditPhotos/> */}

//       {/* <div  dangerouslySetInnerHTML={{__html: dummy.msg.desc}} /> */}

//       {/* {console.log(dummy.msg.desc)} */}
//     </div>
//   );
// };

// export default Gallary;






















import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import EditAlbum from "./EditAlbum";

const Gallary = () => {
  const [openPostForm, setOpenPostForm] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    setFiles([...e.target.files]);
  };

  const submitHandler = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("albname", values.name);
    formData.append("cover", values.cover);
    files.forEach((file) => {
      formData.append(file.name, file);
    });

    try {
      const response = await axios.post(`/api/gallary/1`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      alert(response.data.msg);
      alert(response.data.data.insertId);
    } catch (error) {
      setLoading(false);
      alert("Form not submitted");
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      cover: null,
    },
    onSubmit: submitHandler,
  });

  const { values, handleSubmit } = formik;

  return (
    <div className="pl-[22%] w-[100vw] py-14">
      <div className="pb-5 w-full justify-end relative flex flex-col">
        <button
          className="px-4 absolute mt-[1rem] top-[0rem] right-[3.5rem] hover:bg-[#201F54] hover:text-white w-fit py-2 border-[1px] rounded-full border-[#201F54] transition-all duration-300 ease-in-out"
          onClick={() => setOpenPostForm((prev) => !prev)}
        >
          {openPostForm ? "Close" : "Add New"}
        </button>
      </div>
      {openPostForm && (
        <form
          encType="multipart/form-data"
          className="flex flex-col justify-center gap-5 px-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center">
            <label>Album Name</label>
            <input
              name="name"
              onChange={formik.handleChange}
              className="border-2"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2 justify-center">
            <label>Upload Cover</label>
            <input
              name="cover"
              onChange={(e) => formik.setFieldValue("cover", e.target.files[0])}
              className="border-2 py-2 pl-5"
              type="file"
            />
          </div>

          <label>Upload Images</label>
          <input
            onChange={handleFile}
            className="border-2 py-2 pl-5"
            multiple
            type="file"
          />
          <div className="flex flex-col justify-center items-center">
            <button
              disabled={loading}
              type="submit"
              className="border-2 border-[#201F54] px-6 py-2 w-fit"
            >
              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      )}

      <EditAlbum />
    </div>
  );
};

export default Gallary;
