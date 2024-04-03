import { getDb } from "../../../../ttc_db";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    const linkId = req.query.linkId;
    
    const db = await getDb();
    console.log(linkId)
    db.query(`DELETE FROM custom_links where id=${linkId}`)
      .then((result) => {
        console.log(result);
        res.status(200).json({ msg: "Deleted Link ", id: id });
      }).catch((err) => {
        console.log(err);
        res.status(404).json({ msg: "Failed to delete album" });
        db.release();
      });
    }
};

export default handler;
