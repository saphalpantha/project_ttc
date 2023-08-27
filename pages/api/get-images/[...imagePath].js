
import fs from 'fs'

const path = require('path');

let fileBuffer = [];
let filesDir = []
const findFileById = (id) => {
    const directoryPath = path.join(process.cwd(), 'public/', 'images/', 'notice-uploads/');
    const dir = fs.readdirSync(directoryPath);
    const fileInfo =  dir.find(item => item === id);
    const data = fs.readFileSync(path.join(directoryPath, `${fileInfo}`))
        return Buffer.from(data).toString('base64')
}



const handler =   (req,res) => {
    if(req.method == 'GET'){
        const slug = req.query.imagePath;
        const directoryName = slug[0];
        const imageId = slug[1];
        const directoryPath = path.join(process.cwd(), 'public/', 'images/', directoryName, imageId);
        console.log(directoryPath)
        const data = findFileById(imageId);
        const EXT = (imageId).split(".")[1];
        res.status(200).json({msg:data,ext:EXT});
        // const base64_Data = findFileById(id);
        // res.json({image:base64_Data})
        // fs.readdir(directoryPath, function (err, files) {
        //     if (err) {
        //         return console.log('Unable to scan directory: ' + err);
        //     } 
        //     files.forEach(function (file) {
        //         // console.log(path.join(directoryPath,`${file}`))
        //         fs.readFile(path.join(directoryPath,`${file}`), (err,data) => {
        //             if(err){
        //                 console.log(err);
        //             }
        //             console.log(data)
        //             // fileBuffer.push(data)
        //             return res.send(data)
                    
        //         })
                
        //         filesDir.push(file);
        //     });
        //     console.log(fileBuffer)
        //     res.send(fileBuffer);
        // });
        
    }
}

export default handler

