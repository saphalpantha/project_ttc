import { getDb } from "../../ttc_db";
import fs from "fs/promises";
import formidable from "formidable";
import path, { resolve } from "path";

let spotlightFields = {};

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
      "public/images/spotlight-uploads"
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
      spotlightFields[name] = value;
    });
    form.on("file", (name, file) => {
      // Add file details to the data object
      spotlightFields[name] = file;
    });
    form.on("error", (err) => {
      reject(err);
    });
    form.on("end", () => {
      resolve(spotlightFields);
    });
    form.parse(req);
  });
};

const handler = async (req, res) => {
  if (req.method === "GET") {
    const db = await getDb();
    await db
      .query("SELECT * FROM spotlight ORDER BY id desc limit 1")
      .then((result) => {
        res.status(200).json({ msg: result[0] });
      })
      .catch((err) => {
        // console.log(err)
        res.status(400).json({ msg: "form not submitted", errMsg: err });
      });
    await db.release();
    resolve();
    // db.query(`select * from users`).then(result => {
    //     res.status(200).json({msg:result[0]})
    // }).catch(err => console.log(err))
  }
  if (req.method === "POST") {
    try {
      try {
        await fs.readdir(
          path.join(process.cwd() + "/public", "/images", "/spotlight-uploads")
        );
      } catch (error) {
        await fs.mkdir(
          path.join(process.cwd() + "/public", "/images", "/spotlight-uploads")
        );
      }

      await readFile(req, true);

      const { image } = spotlightFields;

      const db = await getDb();
      db.query(`INSERT INTO spotlight values (NULL,  '${image.newFilename}')`)
        .then((result) => {
          res
            .status(200)
            .json({ msg: "form submitted successfully", data: result });
        })
        .catch((err) => {
          res.status(400).json({ msg: "form not submitted", errMsg: err });
        })
        .finally(() => {
          db.release(); // Always close the database connection
        });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Internal Server Error", error: error.message });
    }
  }
};

export default handler;
