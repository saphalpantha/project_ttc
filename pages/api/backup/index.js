// const JSZip = require("jszip");
// const fs = require("fs");
// const path = require('path');

// const handler = async (req, res) => {
//   if (req.method === "GET") {
//     const currentDate = new Date();
//     const zipFileName = `backup-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getSeconds()}.zip`;
//     const zip = new JSZip();
//     const backupFolder = path.join(process.cwd(), "public", "backups");
//     try{

//       const files = fs.readdirSync(path.join(process.cwd(), "public"), {recursive:true});
//       for (const file of files) {
//       const filePath = path.join(process.cwd(), "public", file);
//       const stats = fs.statSync(filePath);
//       if (stats.isFile()) {
//         const fileData = fs.readFileSync(filePath);
//         zip.file(file, fileData);
//       }
//     }


//     const zipContent = await zip.generateAsync({ type: "nodebuffer" });
    
//     if (!fs.existsSync(backupFolder)) {
//       fs.mkdirSync(backupFolder);
//     }
//     fs.writeFileSync(path.join(backupFolder,zipFileName), zipContent);
//     res.json({msg:`Backup Created with Filename ${zipFileName} `});
//   }
//   catch(err){
//     res.json({msg:'Failed to Backup'})
//   }
//   }
// }

// export default handler;



