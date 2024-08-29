// import { getDb } from "../../ttc_db";

// import fs from "fs/promises";
// import formidable from "formidable";
// import { NextApiRequest } from "next";
// import path from "path";

// let studentFields = {};

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const readFile = (req, saveLocally) => {
//   const options = (formidable.Options = {});
//   if (saveLocally) {
//     options.uploadDir = path.join(process.cwd(), "public/images/uploads");
//     options.filename = (name, ext, path, form) => {
//       const fileExt = path.originalFilename.split(".")[1];
//       const newfilename = path.originalFilename.slice(0, 3) + "." + fileExt;
//       // console.log(newfilename);
//       return new Date().getTime().toString() + "_" + newfilename;
//     };
//   }
//   const form = formidable(options);
//   return new Promise((resolve, reject) => {
//     form.on("field", (name, value) => {
//       // Add field values to the data object
//       studentFields[name] = value;
//     });

//     form.on("file", (name, file) => {
//       // Add file details to the data object
//       studentFields[name] = file;
//     });

//     form.on("error", (err) => {
//       reject(err);
//     });

//     form.on("end", () => {
//       resolve(studentFields);
//     });

//     form.parse(req);
//   });
// };

// const handler = async (req, res) => {
//   if (req.method === "GET") {
//     const db = await getDb();
//     db.query("SELECT * FROM admission_forms")
//       .then((result) => {
//         res.status(200).json({ msg: result[0] });
//         db.destroy();
//       })
//       .catch((err) => {
//         // console.log(err);
//         res.status(400).json({ msg: "error fetching data", error: err });
//         db.destroy();
//       });
//     // db.query(`select * from users`).then(result => {
//     //     res.status(200).json({msg:result[0]})
//     // }).catch(err => console.log(err))
//   }

//   if (req.method === "POST") {
//     try {
//       await fs.readdir(
//         path.join(process.cwd() + "/public", "/images", "/uploads")
//       );
//     } catch (error) {
//       await fs.mkdir(
//         path.join(process.cwd() + "/public", "/images", "/uploads")
//       );
//     }

//     await readFile(req, true);

//     const {
//       faculty,
//       grade,
//       shift,
//       nameinblock,
//       nameindevanagari,
//       dob_bs,
//       dob_ad,
//       gender,
//       t_no,
//       p_no,
//       email,
//       ward_no,
//       vdc_mun,
//       district,
//       fathers_name,
//       fathers_occupation,
//       fathers_cellno,
//       mothers_name,
//       mothers_occupation,
//       mothers_cellno,
//       localgurdain_name,
//       localgurdain_occupation,
//       localgurdain_cellno,
//       bus_faculty,
//       bus_stop,
//       nameofprevschool,
//       sendUpGpa,
//       see_cgpa,
//       grade_div,
//       sendup_eng,
//       sendup_cmath,
//       sendup_optmath,
//       sendup_science,
//       sendup_account,
//       see_eng,
//       see_cmath,
//       see_optmath,
//       see_science,
//       see_account,
//       hobby,
//       photo,
//       marksheet,
//     } = studentFields;

//     console.log(studentFields);

//     const db = await getDb();
//     // console.log('this is photottttttttttttttt',photo.filepath);

//     db.query(
//       `INSERT INTO admission_forms VALUES (NULL, '${faculty}', '${nameinblock}', '${nameindevanagari}', '${dob_bs}', '${dob_ad}', '${gender}', '${t_no}', '${p_no}', '${email}', '${ward_no}', '${vdc_mun}', '${district}', '${bus_faculty}', '${bus_stop}', '${nameofprevschool}', CURRENT_TIMESTAMP, '${see_cgpa}')`
//     ).then((result) => {
//         res
//           .status(200)
//           .json({ msg: "Form submitted successfully", data: result });

//         })
//         .catch((err) => {
//           console.log(err,'why not submitting ????????????????????????  ?');
//           // console.log(studentFields);
//           res.status(400).json({ msg: "form not submitted", errMsg: 'Failed to Submit.Please Try again' });

//       });

//   }
// };

// export default handler;

// import fs from "fs/promises";
// import formidable from "formidable";
// import { NextApiRequest } from "next";
// import path from "path";

// let studentFields = {};

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const readFile = (req, saveLocally) => {
//   const options = (formidable.Options = {});
//   if (saveLocally) {
//     options.uploadDir = path.join(process.cwd(), "public/images/uploads");
//     options.filename = (name, ext, path, form) => {
//       const fileExt = path.originalFilename.split(".")[1];
//       const newfilename = path.originalFilename.slice(0, 3) + "." + fileExt;
//       // console.log(newfilename);
//       return new Date().getTime().toString() + "_" + newfilename;
//     };
//   }
//   const form = formidable(options);
//   return new Promise((resolve, reject) => {
//     form.on("field", (name, value) => {
//       // Add field values to the data object
//       studentFields[name] = value;
//     });

//     form.on("file", (name, file) => {
//       // Add file details to the data object
//       studentFields[name] = file;
//     });

//     form.on("error", (err) => {
//       reject(err);
//     });

//     form.on("end", () => {
//       resolve(studentFields);
//     });

//     form.parse(req);
//   });
// };

// const handler = async (req, res) => {
//   if (req.method === "GET") {
//     try {
//       const filePath = path.join(process.cwd(), "admission_forms.json");
//       const data = await fs.readFile(filePath, "utf8");
//       const forms = JSON.parse(data);
//       res.status(200).json({ data: forms });
//     } catch (err) {
//       if (err.code === "ENOENT") {
//         res.status(200).json({ data: [] });
//       } else {
//         console.error("Error reading file:", err);
//         res
//           .status(500)
//           .json({ msg: "Failed to retrieve forms. Please try again." });
//       }
//     }
//   }

//   if (req.method === "POST") {
//     try {
//       await fs.readdir(
//         path.join(process.cwd() + "/public", "/images", "/uploads")
//       );
//     } catch (error) {
//       await fs.mkdir(
//         path.join(process.cwd() + "/public", "/images", "/uploads")
//       );
//     }

//     await readFile(req, true);

//     const {
//       faculty,
//       grade,
//       shift,
//       nameinblock,
//       nameindevanagari,
//       dob_bs,
//       dob_ad,
//       gender,
//       t_no,
//       p_no,
//       email,
//       ward_no,
//       vdc_mun,
//       district,
//       fathers_name,
//       fathers_occupation,
//       fathers_cellno,
//       mothers_name,
//       mothers_occupation,
//       mothers_cellno,
//       localgurdain_name,
//       localgurdain_occupation,
//       localgurdain_cellno,
//       bus_faculty,
//       bus_stop,
//       nameofprevschool,
//       sendUpGpa,
//       see_cgpa,
//       grade_div,
//       sendup_eng,
//       sendup_cmath,
//       sendup_optmath,
//       sendup_science,
//       sendup_account,
//       see_eng,
//       see_cmath,
//       see_optmath,
//       see_science,
//       see_account,
//       hobby,
//       photo,
//       marksheet,
//     } = studentFields;

//     const date = new Date();

//     const day = date.getDate().toString().padStart(2, "0"); 
//     const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
//     const year = date.getFullYear().toString();
//     const formattedDate = `${month}/${day}/${year}`
//     const formData = {
//       faculty,
//       nameinblock,
//       nameindevanagari,
//       dob_bs,
//       dob_ad,
//       gender,
//       t_no,
//       p_no,
//       email,
//       ward_no,
//       vdc_mun,
//       district,
//       bus_faculty,
//       bus_stop,
//       nameofprevschool,
//       created_at:formattedDate
//     };



//     const filePath = path.join(process.cwd(), "admission_forms.json");
//     try {
//       const data = await fs.readFile(filePath, "utf8");
//       const allAdmissionForms = JSON.parse(data);
//       console.log(allAdmissionForms);
//       const updatedFormData = {
//         ...formData,
//         id: +allAdmissionForms.msg.slice(-1)[0].id + 1,
//         sendUpGpa: see_cgpa,
//       };

//       console.log(updatedFormData);
//       allAdmissionForms.msg.push(updatedFormData);
//       await fs.writeFile(filePath, JSON.stringify(allAdmissionForms));

//       res
//         .status(200)
//         .json({ msg: "Form submitted successfully", data: formData });
//     } catch (err) {
//       console.error("Error writing file:", err);
//       res.status(500).json({ msg: "Failed to submit form. Please try again." });
//     }
//   }
// };

// export default handler;



















// ======================================================================




import fs from "fs/promises";
import formidable from "formidable";
import path from "path";

let studentFields = {};

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req, saveLocally) => {
  const options = (formidable.Options = {});
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "public/images/uploads");
    options.filename = (name, ext, path, form) => {
      const fileExt = path.originalFilename.split(".")[1];
      const newfilename = path.originalFilename.slice(0, 3) + "." + fileExt;
      return new Date().getTime().toString() + "_" + newfilename;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.on("field", (name, value) => {
      studentFields[name] = value;
    });

    form.on("file", (name, file) => {
      studentFields[name] = file;
    });

    form.on("error", (err) => {
      reject(err);
    });

    form.on("end", () => {
      resolve(studentFields);
    });

    form.parse(req);
  });
};

const handler = async (req, res) => {
  const filePath = path.join(process.cwd(), "admission_forms.json");

  if (req.method === "GET") {
    try {
      const data = await fs.readFile(filePath, "utf8");
      const forms = JSON.parse(data);
      res.status(200).json({ data: forms });
    } catch (err) {
      if (err.code === "ENOENT") {
        res.status(200).json({ data: [] });
      } else {
        console.error("Error reading file:", err);
        res
          .status(500)
          .json({ msg: "Failed to retrieve forms. Please try again." });
      }
    }
  }

  if (req.method === "POST") {
    try {
      // Ensure the upload directory exists
      const uploadDir = path.join(process.cwd(), "public/images/uploads");
      await fs.access(uploadDir).catch(async () => {
        await fs.mkdir(uploadDir, { recursive: true });
      });

      // Ensure the JSON file exists
      await fs.access(filePath).catch(async () => {
        await fs.writeFile(filePath, JSON.stringify({ msg: [] }));
      });

      await readFile(req, true);

      const {
        faculty,
        grade,
        shift,
        nameinblock,
        nameindevanagari,
        dob_bs,
        dob_ad,
        gender,
        t_no,
        p_no,
        email,
        ward_no,
        vdc_mun,
        district,
        fathers_name,
        fathers_occupation,
        fathers_cellno,
        mothers_name,
        mothers_occupation,
        mothers_cellno,
        localgurdain_name,
        localgurdain_occupation,
        localgurdain_cellno,
        bus_faculty,
        bus_stop,
        nameofprevschool,
        sendUpGpa,
        see_cgpa,
        grade_div,
        sendup_eng,
        sendup_cmath,
        sendup_optmath,
        sendup_science,
        sendup_account,
        see_eng,
        see_cmath,
        see_optmath,
        see_science,
        see_account,
        hobby,
        photo,
        marksheet,
      } = studentFields;

      const date = new Date();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      const formattedDate = `${month}/${day}/${year}`;

      const formData = {
        faculty,
        nameinblock,
        nameindevanagari,
        dob_bs,
        dob_ad,
        gender,
        t_no,
        p_no,
        email,
        ward_no,
        vdc_mun,
        district,
        bus_faculty,
        bus_stop,
        nameofprevschool,
        created_at: formattedDate,
      };

      const data = await fs.readFile(filePath, "utf8");
      const allAdmissionForms = JSON.parse(data);
      
      const updatedFormData = {
        ...formData,
        id: allAdmissionForms.msg.length
          ? +allAdmissionForms.msg.slice(-1)[0].id + 1
          : 1,
        sendUpGpa: see_cgpa,
      };

      allAdmissionForms.msg.push(updatedFormData);
      console.log(allAdmissionForms, 'all forms');
      await fs.writeFile(filePath, JSON.stringify(allAdmissionForms));
      res
        .status(200)
        .json({ msg: "Form submitted successfully", data: formData });
    } catch (err) {
      console.error("Error writing file:", err);
      res.status(500).json({ msg: "Failed to submit form. Please try again." });
    }
  }
};

export default handler;
