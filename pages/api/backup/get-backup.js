import { getSession } from "next-auth/react";
import path from "path";
import fs from "fs";

const handler = (req, res) => {
  let backupFiles = [];
  const sesson = getSession({ req: req });
  if (!sesson) {
    return res.redirect("/");
  }
  if (req.method == "GET") {
    try {
      const backupDir = path.join(process.cwd(), "/public", "/backups");
      if (!fs.existsSync(backupDir)) {
        res.status(500).json({ msg: "No Backup Folder Exists" });
      }
      const files = fs.readdirSync(backupDir);
      for (let i = 0; i < files.length; i++) {
        backupFiles.push(files[i]);
      }
      if(backupFiles.length > 0){
          res.status(200).json({ msg: backupFiles });
      }
    } catch (err) {
      res.status(500).json({ msg: "Failed to Backup !" });
    }
  }
};

export default handler;
