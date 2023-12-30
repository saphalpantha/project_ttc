


import { getDb } from "../../../../ttc_db"
import fs from 'fs/promises';
import formidable from "formidable";
import { NextApiRequest } from "next";
import path from "path";

let starFields = {};
const filesDir = [];

export const config = {
  api:{
    bodyParser:false,
  }
}


const readFile = (req, saveLocally) => {
  const options = formidable.Options = {

  };
  if(saveLocally){
    options.uploadDir = path.join(process.cwd(), "public/images/slider-uploads");
    options.filename =  (name, ext,path, form) => {
      const fileExt = path.originalFilename.split('.')[1];
      const newfilename = path.originalFilename.slice(0,3) + '.' +  fileExt;
      console.log(newfilename);
        const newFile = new Date().getTime().toString() + "_" + newfilename;
        filesDir.push(newFile)
        return newFile
    }
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
}





const handler = async (req,res) => {
    if(req.method === 'GET'){
        res.status(200).json({msg:'ofiasdo'});
        // const {name} = req.query 
        // console.log(name)
        const db = await getDb()
        db.query('SELECT * FROM slider_data').then(result => {
            res.status(200).json({msg:result[0]})
            db.end();
        }).catch(err => {
            console.log(err)
            db.end()
        })
        // db.query(`select * from users`).then(result => {
        //     res.status(200).json({msg:result[0]})
        // }).catch(err => console.log(err))
        
    } 
    if (req.method === "POST") {
        try{
          await fs.readdir(path.join(process.cwd() + "/public", "/images", "/slider-uploads"));
        }
        catch(error){
          await fs.mkdir(path.join(process.cwd() + "/public", "/images", "/slider-uploads"));
        }
    
        await readFile(req, true);
    
      
          const {
            name,scholarship,image
          } = starFields;
          
          console.log('this is api trigeed',starFields)
          res.status(200).json({msg:starFields})

          const db = await getDb();
        
          filesDir.forEach(name => {
            db.query(`INSERT INTO slider_data values (NULL, '${name}', '1')`).then(result => {
              console.log(result)
              res.status(200).json({msg:'Updated Image '});
            })
          }).catch(err => {
            console.log(err)
            res.status(404).json({msg:'Failed to Update Image'});
            db.end();
          })
          // db.query(
        //   `INSERT INTO slider values (NULL, '${name}', '${scholarship}', '${image.newFilename}')`
        // )
        //   .then((result) => {
        //     res.status(200).json({ msg: "form submitted successfully", data: result });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     res.status(400).json({ msg: "form not submitted", errMsg: err });
        //   });

        // res.status(200).json({msg:starFields})
    
      }  

}

export default handler