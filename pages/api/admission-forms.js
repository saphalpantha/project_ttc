import { getDb } from "../../ttc_db";

import fs from "fs/promises";
import formidable from "formidable";
import { NextApiRequest } from "next";
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
      // console.log(newfilename);
      return new Date().getTime().toString() + "_" + newfilename;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.on("field", (name, value) => {
      // Add field values to the data object
      studentFields[name] = value;
    });

    form.on("file", (name, file) => {
      // Add file details to the data object
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
  if (req.method === "GET") {
    const db = await getDb();
    db.query("SELECT * FROM admission_forms")
      .then((result) => {
        res.status(200).json({ msg: result[0] });
        db.destroy();
      })
      .catch((err) => {
        // console.log(err);
        res.status(400).json({ msg: "error fetching data", error: err });
        db.destroy();
      });
    // db.query(`select * from users`).then(result => {
    //     res.status(200).json({msg:result[0]})
    // }).catch(err => console.log(err))
  }

  if (req.method === "POST") {
    try {
      await fs.readdir(
        path.join(process.cwd() + "/public", "/images", "/uploads")
      );
    } catch (error) {
      await fs.mkdir(
        path.join(process.cwd() + "/public", "/images", "/uploads")
      );
    }

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

    console.log(studentFields);

    const db = await getDb();
    // console.log('this is photottttttttttttttt',photo.filepath);


    db.query(
      `INSERT INTO admission_forms VALUES (NULL, '${faculty}', '${nameinblock}', '${nameindevanagari}', '${dob_bs}', '${dob_ad}', '${gender}', '${t_no}', '${p_no}', '${email}', '${ward_no}', '${vdc_mun}', '${district}', '${bus_faculty}', '${bus_stop}', '${nameofprevschool}', CURRENT_TIMESTAMP, '${see_cgpa}')`
    ).then((result) => {
        res
          .status(200)
          .json({ msg: "Form submitted successfully", data: result });

        })
        .catch((err) => {
          console.log(err,'why not submitting ????????????????????????  ?');
          // console.log(studentFields);
          res.status(400).json({ msg: "form not submitted", errMsg: 'Failed to Submit.Please Try again' });
   
      });


  }
};

export default handler;
