import { getDb } from "../../../ttc_db";
import fs from "fs/promises";
import formidable from "formidable";
import path, { resolve } from "path";

let gallaryFields = {};
const filesDir = [];

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req, saveLocally) => {
  const options = (formidable.Options = {});
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "public/images/gallary");
    options.filename = (name, ext, path, form) => {
      const fileExt = path.originalFilename.split(".")[1];
      const newfilename = path.originalFilename.slice(0, 3) + "." + fileExt;
      const newFile = new Date().getTime().toString() + "_" + newfilename;
      filesDir.push(newFile);
      return newFile;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.on("field", (name, value) => {
      gallaryFields[name] = value;
    });

    form.on("file", (name, file) => {
      gallaryFields[name] = file;
    });

    form.on("error", (err) => {
      reject(err);
    });

    form.on("release", () => {
      resolve(gallaryFields);
    });

    form.parse(req);
  });
};

const handler = async (req, res) => {
  if (req.method === "GET") {
    const id = req.query.albId;
    let updated = [];
    const db = await getDb();

    await db
      .query(
        `SELECT * FROM gallary where id='${id}';select * from gallery_images where gallery_id='${id}';`
      )
      .then((result) => {
        updated = [...result[0][0], ...result[0][1]];
        res.status(200).json({ msg: updated });
      })
      .catch((err) => {
        console.log(err);
      });
    await db.release();
    // resolve();
    // db.query('SELECT * FROM gallary').then(result => {
    //     res.status(200).json({msg:result[0]})
    //     db.release();
    // }).catch(err => {
    //     console.log(err)
    //     db.release()
    // })
  }
  if (req.method === "POST") {
    try {
      await fs.readdir(
        path.join(process.cwd() + "/public", "/images", "/gallary")
      );
    } catch (error) {
      await fs.mkdir(
        path.join(process.cwd() + "/public", "/images", "/gallary")
      );
    }
    await readFile(req, true);

    const fileString = filesDir.join(",");
    const { cover, albname } = gallaryFields;
    const db = await getDb();
    db.query(
      `INSERT INTO gallary values (NULL, '${albname}', '${cover.newFilename}');`
    )
      .then((result) => {
        // console.log(result[0].insertId);
        filesDir.forEach((name) => {
          db.query(
            `INSERT INTO gallery_images values (NULL, '${result[0].insertId}', '${name}');`
          );
        });
        console.log(result);
        res
          .status(200)
          .json({ msg: "form submitted successfully", data: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: "form not submitted", errMsg: err });
      });

    //   res.status(200).json({msg:gallaryFields})
  }

  if (req.method === "DELETE") {
    const id = req.query.albId;

    const db = await getDb();
    db.query(`select * from gallery_images where id=${id}`).then((result) => {
      console.log(result);
      res.status(200).json({ msg: result });
    });
  }
};

export default handler;
