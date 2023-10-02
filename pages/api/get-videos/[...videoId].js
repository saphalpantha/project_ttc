

import fs from "fs";

const path = require("path");

const findFileById = (id, directoryPath) => {
  const data = fs.readFileSync(directoryPath + id);

  return Buffer.from(data).toString("base64");
};

const handler = (req, res) => {
  if (req.method == "GET") {
    const slug = req.query.videoId;
    const directoryName = slug[0];
    const imageId = slug[1];
    if (!directoryName || !imageId) {
      return;
    }
    const directoryPath = path.join(
      process.cwd(),
      "public/",
      "videos/",
      directoryName,
      "/"
    );
    const data = findFileById(imageId, directoryPath);
    const EXT = imageId.split(".")[1];
    res.status(200).json({ msg: data, ext: EXT });
  }
};

export default handler;