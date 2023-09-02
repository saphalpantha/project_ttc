


import fs from 'fs/promises';
import formidable from "formidable";
import { NextApiRequest } from "next";
import path from "path";
import { getDb } from '../../../../ttc_db';



let noticeFields = {};


export const config = {
  api:{
    bodyParser:false,
  }
}


const readFile = (req, saveLocally) => {
  const options = formidable.Options = {

  };
  if(saveLocally){
    options.uploadDir = path.join(process.cwd(), "public/images/notice-uploads");
    options.filename =  (name, ext,path, form) => {
      const fileExt = path.originalFilename.split('.')[1];
      const newfilename = path.originalFilename.slice(0,3) + '.' +  fileExt;
      console.log(newfilename);
      return new Date().getTime().toString() + "_" + newfilename;
    }
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
}



const handler = async (req,res) => {
    
    if (req.method === "PUT") {
        const id = +req.query.newsId;
        try{
          await fs.readdir(path.join(process.cwd() + "/public", "/images", "/notice-uploads"));
        }
        catch(error){
          await fs.mkdir(path.join(process.cwd() + "/public", "/images", "/notice-uploads"));
        }
    
        await readFile(req, true);
    
      
          const {
            image,heading,desc
          } = noticeFields;
          
          // console.log('this is api trigeed',noticeFields)
          const db = await getDb();
        db.query(
          `UPDATE news_notice set heading='${heading}', para='${desc}', photo='${image.newFilename}' where id=${id} `
        )
          .then((result) => {
            res.status(200).json({ msg: "form submitted successfully", data: result });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json({ msg: "form not submitted", errMsg: err });
          });

        res.status(200).json({msg:noticeFields})
    
      }

      
}



export default handler