

import fs from "fs/promises";
import formidable from "formidable";
import path, { resolve } from "path";
import { getDb } from "../../../ttc_db";

let paymentFields = {};


export const config = {
  api: {
    bodyParser: false,
  },
};


const readFile = (req, saveLocally) => {
  const options = (formidable.Options = {});
  if (saveLocally) {
    options.uploadDir = path.join(
      process.cwd(),
      "public/images/payment-uploads"
    );
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
      paymentFields[name] = value;
    });

    form.on("file", async (name, file) => {
      // Add file details to the data object
      // const res = await Storage.put(options.filename, file);
      // console.log(res, options.filename, )
      paymentFields[name] = file;
    });

    form.on("error", (err) => {
      reject(err);
    });

    form.on("end", () => {
      resolve(paymentFields);
    });

    form.parse(req);
  });
};



 const handler = async (req,res) => {


if (req.method === "GET") {

    const db = await getDb();
    db.query("SELECT * FROM payments")
      .then((result) => {
        res.status(200).json({ msg: result[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    await db.release();
  }

if (req.method === "POST") {
    try {
      await fs.readdir(
        path.join(process.cwd() + "/public", "/images", "/payment-uploads")
      );
    } catch (error) {
      await fs.mkdir(
        path.join(process.cwd() + "/public", "/images", "/payment-uploads")
      );
    }

    await readFile(req, true);

    const { receipt, email } = paymentFields;
    const db = await getDb();
    await db
      .query(
        `INSERT INTO payments values (NULL, '${email}', '${receipt.newFilename}')`
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

    res.status(200).json({ msg: paymentFields });
  }
}

export default handler