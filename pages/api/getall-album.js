import { resolve } from "path";
import { getDb } from "../../ttc_db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const db = await getDb();
    await db
      .query("SELECT * FROM gallary order by 1 desc ")
      .then((result) => {
        res.status(200).json({ msg: result[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    await db.end();
    resolve();
  }
};

export default handler;
