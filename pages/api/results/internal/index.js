


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
        // const {name} = req.query 
        // console.log(name)
        const db = await getDb()
        db.query('SELECT * FROM results_sheet').then(result => {
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
          await fs.readdir(path.join(process.cwd() + "/public", "/results"));
        }
        catch(error){
          await fs.mkdir(path.join(process.cwd() + "/public", "/results"));
        }
    
        let errrr = false
        await readFile(req, true);
          const {
            result_type,file
          } = resultFields;
          const db = await getDb();
          const results_data = Xl_to_Sql(path.join(process.cwd(), `public/results/${file.newFilename}`));
          // console.log(results_data)
          console.log(results_data)
          db.query(`INSERT INTO results_sheet values (NULL, '${result_type}', ${file.newFilename})`);
          results_data.forEach(i => {
            db.query(
                `INSERT INTO internal_result values (NULL, '${i.stream}', '${i.class}', '${i.section}',  '${i.dob}', '${i.roll_no}', '${i.physics}', '${i.chemistry}', '${i.english}', '${i.nepali}', '${i.social}', '${i.maths}', '${i.computer}', '${i.biology}', '${i.account}', '${i.economics}', '${i.finance}', '${i.percentage}')`
            ).then(result => {
              console.log(result)
            }).catch(err => {
              errrr = true
            })    
          })
          console.log(errrr,'the error')
          if(!errrr){ 

            res.status(200).json({msg:'Result Updated !'})
          }
          res.status(500).json({msg:'Failed to Insert.Please check'})
      }  


}

export default handler