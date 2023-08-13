import { getDb } from "../../../ttc_db";


import fs from 'fs/promises';
import formidable from "formidable";
import path from "path";

let imageField = {};
const filesDir = [];

export const config = {
  api:{
    bodyParser:false,
  }
}
const handler = async (req, res) => {

    const readFile = (req, saveLocally) => {
        const options = formidable.Options = {
          
        };
        if(saveLocally){
          options.uploadDir = path.join(process.cwd(), "public/images/gallary");
          options.filename =  (name, ext,path, form) => {
            const fileExt = path.originalFilename.split('.')[1];
            const newfilename = path.originalFilename.slice(0,3) + '.' +  fileExt;
            const newFile = new Date().getTime().toString() + "_" + newfilename
            filesDir.push(newFile);
            return newFile;
          }
        }
        const form = formidable(options);
        return new Promise((resolve, reject) => {
      
          form.on("field", (name, value) => {
      
            imageField[name] = value;
          });
      
          form.on("file", (name, file) => {
      
            imageField[name] = file;
          });
      
          form.on("error", (err) => {
            reject(err);
          });
      
          form.on("end", () => {
      
            resolve(imageField);
          });
      
          form.parse(req);
        });
      }


  if(req.method === 'DELETE'){
    const id = req.query.imgId;
    const db = await getDb();
    db.query(`DELETE FROM gallery_images where id=${id}`).then(result => {
      res.status(200).json({msg:'Deleted Image ' , id:id});
    }).catch(err => {
      console.log(err)
      res.status(404).json({msg:'Failed to delete Image'});
      db.end();
    })
  }

  if(req.method === 'POST'){
    const id = req.query.imgId;
    console.log('this is imgID', id);

    // try{
    //     await fs.readdir(path.join(process.cwd() + "/public", "/images", "/gallary"));
    //   }
    //   catch(error){
    //     await fs.mkdir(path.join(process.cwd() + "/public", "/images", "/gallary"));
    //   }

      // await readFile(req, true);
    // const db = await getDb();
    // filesDir.forEach(name => {
    //   db.query(`INSERT INTO gallery_images values (NULL, '${id}' )`).then(result => {
    //     console.log(result)
    //     res.status(200).json({msg:'Updated Image '});
    //   })
    // })
    // .catch(err => {
    //   console.log(err)
    //   res.status(404).json({msg:'Failed to Update Image'});
    //   db.end();
    // })
  }
};

export default handler;
