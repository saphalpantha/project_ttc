
// import fs from 'fs'

// const path = require('path');

// const findFileById = (id,directoryPath) => {
//     const dir = fs.readdirSync(directoryPath);
//     const fileInfo =  dir.find(item => item === id);
//     const data = fs.readFileSync(path.join(directoryPath, `${fileInfo}`))
//         return Buffer.from(data).toString('base64')
// }



// const handler =   (req,res) => {
//     if(req.method == 'GET'){
//         const slug = req.query.imagePath;
//         const directoryName = slug[0];
//         if(!directoryName &&  !imageId){
//             return;
//         }
//         const imageId = slug[1];
//         const directoryPath = path.join(process.cwd(), 'public/', 'images/', directoryName);
//         console.log(directoryPath)
//         const data = findFileById(imageId, directoryPath);
//         const EXT = (imageId).split(".")[1];
//         res.status(200).json({msg:data,ext:EXT});
        
//     }
// }

// export default handler




import fs from "fs";

const path = require("path");

const findFileById = (id, directoryPath) => {
  const data = fs.readFileSync(directoryPath + id);
  //   console.log("================================================");
  //   console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
  return Buffer.from(data).toString("base64");
};

const handler = (req, res) => {
  if (req.method == "GET") {
    const slug = req.query.imagePath;
    const directoryName = slug[0];
    const imageId = slug[1];
    if (!directoryName || !imageId) {
      return;
    }
    const directoryPath = path.join(
      process.cwd(),
      "public/",
      "images/",
      directoryName,
      "/"
    );
    const data = findFileById(imageId, directoryPath);
    const EXT = imageId.split(".")[1];
    res.status(200).json({ msg: data, ext: EXT });
  }
};

export default handler;