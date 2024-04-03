import { resolve } from "path";
import { getDb } from "../../../ttc_db";

const handler = async (req, res) => {
  if (req.method == "GET") {
    const db = await getDb();
    await db
      .query("SELECT * FROM custom_links")
      .then(async (result) => {
        await res.status(200).json({ msg: result[0] });
      })
      .catch(async (err) => {
        console.log(err);
      });

    await db.release();
    resolve();
  }

  if (req.method === "POST") {
    const linkTitle = req.body.linkTitle;
    const link = req.body.link;

    if (!linkTitle || !link) {
      res.status(400).json({ msg: "Please Enter required Inputs !" });
    }

    const db = await getDb();
    db.query(
      `INSERT INTO custom_links values (NULL, '${linkTitle}', '${link}')`
    )
      .then((result) => {
        console.log(result[0]);
        res.status(200).json({ msg: "Inserted Succesfull" });
        db.release();
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: "Failed to insert link" });
      });
  }
};

export default handler;
