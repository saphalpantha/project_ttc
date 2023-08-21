import { getDb } from "../../../../ttc_db";

const handler = async (req, res) => {

  if(req.method === 'DELETE'){
    const id = req.query.starId;
    const db = await getDb();
    db.query(`DELETE FROM faculty where id=${id}`).then(result => {
      console.log(result)
      res.status(200).json({msg:'Deleted Star ' , id:id});
    }).catch(err => {
      console.log(err)
      res.status(404).json({msg:'Failed to delete Star'});
      db.end();
    })
  }
};
export default handler;
