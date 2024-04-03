import { getDb } from "../../../ttc_db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { newsId } = req.query;
    const db = await getDb();
    await db
      .query(`SELECT * FROM news_notice WHERE id = ${newsId}`)
      .then((result) => {
        res.status(200).json({ msg: result[0] });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: "error fetching data" });
      });
    await db.release();
  }
};

export default handler;
