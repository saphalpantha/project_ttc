


import fs from 'fs/promises';
import formidable from "formidable";
import { NextApiRequest } from "next";
import path from "path";
import {getDb} from '../../../../ttc_db'

let facultyFields = {};


export const config = {
  api:{
    bodyParser:false,
  }
}


const readFile = (req, saveLocally) => {
  const options = formidable.Options = {

  };
  if(saveLocally){
    options.uploadDir = path.join(process.cwd(), "public/images/stars-uploads");
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
      facultyFields[name] = value;
    });

    form.on("file", (name, file) => {
      // Add file details to the data object
      facultyFields[name] = file;
    });

    form.on("error", (err) => {
      reject(err);
    });

    form.on("end", () => {
      resolve(facultyFields);
    });

    form.parse(req);
  });
}





const handler = async (req,res) => {

   
    if (req.method === "PUT") {
      const starId = +req.query.starId;
        try{
          await fs.readdir(path.join(process.cwd() + "/public", "/images", "/stars-uploads"));
        }
        catch(error){
          await fs.mkdir(path.join(process.cwd() + "/public", "/images", "/stars-uploads"));
        }
    
        await readFile(req, true);
    
      
          const {
            name,scholarship,image
          } = facultyFields;
          
          const db = await getDb();
        db.query(
          `UPDATE our_stars set name='${name}', scholarship_name='${scholarship}' , photo='${image.newFilename}' where id='${starId}'`
        )
          .then((result) => {
            console.log(result)
            return res.status(200).json({ msg: "form submitted successfully", data: result });
          })
          .catch((err) => {
            console.log(err);
            return res.status(400).json({ msg: "form not submitted", errMsg: err });
          });

        res.status(200).json({msg:facultyFields})
    
      }  

}

export default handler