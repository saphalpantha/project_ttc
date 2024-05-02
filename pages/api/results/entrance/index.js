


import fs from 'fs/promises';
import formidable from "formidable";
import { NextApiRequest } from "next";
import path from "path";
import { Xl_to_Sql } from "../../../../util";
import { getDb } from '../../../../ttc_db';

let resultFields = {};


export const config = {
  api:{
    bodyParser:false,
  }
}


const readFile = (req, saveLocally) => {
  const options = formidable.Options = {

  };
  if(saveLocally){
    options.uploadDir = path.join(process.cwd(), "public/results/");
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
      resultFields[name] = value;
    });

    form.on("file", (name, file) => {
      // Add file details to the data object
      resultFields[name] = file;
    });

    form.on("error", (err) => {
      reject(err);
    });

    form.on("end", () => {
      resolve(resultFields);
    });

    form.parse(req);
  });
}





const handler = async (req,res) => {
  if(req.method === 'GET'){
      console.log(resultFields,'apiiiiiiiiiiiiii')
        console.log('trigged res')
        // const {name} = req.query 
        // console.log(name)
        const db = await getDb()
        db.query('SELECT * FROM results_sheet').then(result => {
            res.status(200).json({msg:result[0]})
            db.release();
        }).catch(err => {
            console.log(err)
            db.release()
        })
        // db.query(`select * from users`).then(result => {
        //     res.status(200).json({msg:result[0]})
        // }).catch(err => console.log(err))
        
    } 
    if (req.method === "POST") {
      console.log(resultFields)
        try{
          await fs.readdir(path.join(process.cwd() + "/public", "/results"));
        }
        catch(error){
          await fs.mkdir(path.join(process.cwd() + "/public", "/results"));
        }
    
        await readFile(req, true);
          const {
            result_type,file
          } = resultFields;
          const db = await getDb();
          const results_data = Xl_to_Sql(path.join(process.cwd(), `public/results/${file.newFilename}`));
          // console.log(results_data)
          db.query(`INSERT INTO results_sheet values (NULL, '${result_type}', ${file.newFilename})`);
          results_data.forEach(i => {
            db.query(
                `INSERT INTO entrance_results values (NULL, '${i.reg_no}', '${i.dob}', '${i.stream}')`
            );      
          })
          res.status(200).json({msg:'Result Updated !'})
      }  


}

export default handler