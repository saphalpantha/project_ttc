import { getDb } from "../../../ttc_db";
import fs from "fs/promises";
import formidable from "formidable";
import { NextApiRequest } from "next";
import path, { resolve } from "path";

let starFields = {};

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req, saveLocally) => {
  const options = (formidable.Options = {});
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "public/images/stars-uploads");
    options.filename = (name, ext, path, form) => {
      const fileExt = path.originalFilename.split(".")[1];
      const newfilename = path.originalFilename.slice(0, 3) + "." + fileExt;
      console.log(newfilename);
      return new Date().getTime().toString() + "_" + newfilename;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.on("field", (name, value) => {
      // Add field values to the data object
      starFields[name] = value;
    });

    form.on("file", (name, file) => {
      // Add file details to the data object
      starFields[name] = file;
    });

    form.on("error", (err) => {
      reject(err);
    });

    form.on("end", () => {
      resolve(starFields);
    });

    form.parse(req);
  });
};

const handler = async (req, res) => {
  if (req.method === "GET") {
    // const {name} = req.query
    // console.log(name)
    const db = await getDb();
    db.query("SELECT * FROM our_stars")
      .then((result) => {
        res.status(200).json({ msg: result[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    await db.release();
    // resolve();
    // db.query(`select * from users`).then(result => {
    //     res.status(200).json({msg:result[0]})
    // }).catch(err => console.log(err))
  }
  if (req.method === "POST") {
    try {
      await fs.readdir(
        path.join(process.cwd() + "/public", "/images", "/stars-uploads")
      );
    } catch (error) {
      await fs.mkdir(
        path.join(process.cwd() + "/public", "/images", "/stars-uploads")
      );
    }

    await readFile(req, true);

    const { name, scholarship, image } = starFields;

    console.log("this is api trigeed", starFields);
    const db = await getDb();
    db.query(
      `INSERT INTO our_stars values (NULL, '${name}', '${scholarship}', '${image.newFilename}')`
    )
      .then((result) => {
        res
          .status(200)
          .json({ msg: "form submitted successfully", data: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: "form not submitted", errMsg: err });
      });

    // res.status(200).json({ msg: starFields });
  }
};

export default handler;
