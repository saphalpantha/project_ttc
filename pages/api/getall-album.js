import { resolve } from "path";
import { getDb } from "../../ttc_db";


const handler = async (req,res) =>{
  if (req.method === "GET") {
    const limited =   req.query

    const ifLimited = `SELECT * FROM gallary order by 1 desc limit ${+limited.limit}`
    const db = await getDb();
    const qw = `SELECT * FROM gallary order by 1 desc`
    const AlbQuery = limited?ifLimited:qw
    console.log(AlbQuery)
    await db
    .query("SELECT * FROM gallary order by 1 desc ")
    .then((result) => {
      res.status(200).json({ msg: result[0] });
    })
    .catch((err) => {
      console.log(err);
    });
  await db.release();
  // resolve();
  
  }
  
}





export default handler;
