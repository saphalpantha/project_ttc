import { getDb } from "../../../ttc_db";

import fs from "fs/promises";
import formidable from "formidable";
import path, { resolve } from "path";

let noticeFields = {};

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
      "public/images/notice-uploads"
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
      noticeFields[name] = value;
    });

    form.on("file", async (name, file) => {
      // Add file details to the data object
      // const res = await Storage.put(options.filename, file);
      // console.log(res, options.filename, )
      noticeFields[name] = file;
    });

    form.on("error", (err) => {
      reject(err);
    });

    form.on("end", () => {
      resolve(noticeFields);
    });

    form.parse(req);
  });
};

const handler = async (req, res) => {
  if (req.method === "GET") {
    const limited =   req?.query
    console.log(limited)

    const ifLimited = `SELECT * FROM news_notice order by id desc limit ${+limited.limit}`
    const db = await getDb();
    const qw = `SELECT * FROM news_notice order by id desc`
    
    const NewsNoticeQuery = limited?ifLimited:qw
    console.log(NewsNoticeQuery)
    await db
      .query(NewsNoticeQuery)
      .then((result) => {
        res.status(200).json({ msg: result[0] });
        // console.log('from newsnotce db', result[0])
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: "error fetching data" });
      });
    await db.release();
    resolve();
    // db.query(`select * from users`).then(result => {
    //     res.status(200).json({msg:result[0]})
    // }).catch(err => console.log(err))
  }

  if (req.method === "POST") {
    try {
      await fs.readdir(
        path.join(process.cwd() + "/public", "/images", "/notice-uploads")
      );
    } catch (error) {
      await fs.mkdir(
        path.join(process.cwd() + "/public", "/images", "/notice-uploads")
      );
    }

    await readFile(req, true);

    const { image, heading, desc } = noticeFields;

    // console.log('this is api trigeed',noticeFields)
    const db = await getDb();
    await db
      .query(
        `INSERT INTO news_notice values (NULL, '${heading}', '${desc}', '${image.newFilename}', '')`
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

    // res.status(200).json({ msg: noticeFields });
  }
};

export default handler;
