
const path = require('path');
const fs = require('fs');
const handler =  (req,res) => {

    let filesDir = [];
    if(req.method == 'GET'){
        const directoryPath = path.join(process.cwd(), 'public/', 'images/', 'notice-uploads/');
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            files.forEach(function (file) {
                filesDir.push(file);
            });
            
            res.send(filesDir);
        });
        // console.log(filesDir);
        // res.send({msg:filesDir});
    }
}

export default handler