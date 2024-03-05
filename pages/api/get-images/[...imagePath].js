import fs from "fs";
import path from "path";
import sharp from "sharp";



const compressAndEncodeImage = async (filePath) => {
  try {
    const compressedImageBuffer = await sharp(filePath).jpeg({ quality: 50 }).toBuffer();
    return compressedImageBuffer.toString("base64");
  } catch (error) {
    console.error("Error compressing image:", error);
    throw error;
  }
};

const handler = async (req, res) => {
  if (req.method == "GET") {
    const slug = req.query.imagePath;
    const directoryName = slug[0];
    const imageId = slug[1];
    if (!directoryName || !imageId) {
      return res.status(400).json({ error: "Invalid parameters" });
    }
    const directoryPath = path.join(process.cwd(), "public/", "images/", directoryName);
    const imagePath = path.join(directoryPath, imageId);
    try {
      const base64Data = await compressAndEncodeImage(imagePath);
      const ext = path.extname(imagePath).slice(1);
      res.status(200).json({ data: base64Data, ext });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default handler;




// import fs from "fs";

// const path = require("path");

// const findFileById = (id, directoryPath) => {
//   const data = fs.readFileSync(directoryPath + id);
//   //   console.log("================================================");
//   //   console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
//   return Buffer.from(data).toString("base64");
// };

// const handler = (req, res) => {
//   if (req.method == "GET") {
//     const slug = req.query.imagePath;
//     const directoryName = slug[0];
//     const imageId = slug[1];
//     if (!directoryName || !imageId) {
//       return;
//     }
//     const directoryPath = path.join(
//       process.cwd(),
//       "public/",
//       "images/",
//       directoryName,
//       "/"
//     );
//     const data = findFileById(imageId, directoryPath);
//     const EXT = imageId.split(".")[1];
//     res.status(200).json({ msg: data, ext: EXT });
//   }
// };

// export default handler;