import { getDb } from "../../ttc_db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const db = await getDb();
    db.query("SELECT * FROM gallary")
      .then((result) => {
        res.status(200).json({ msg: result[0]});
        db.end();
      })
      .catch((err) => {
        console.log(err);
        db.end();
      });
  }
};

export default handler;