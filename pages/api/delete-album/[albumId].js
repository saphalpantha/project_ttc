import { getDb } from "../../../ttc_db";
const handler = async (req, res) => {

  if(req.method === 'DELETE'){
    const id = req.query.albumId;
    console.log(id)
    const db = await getDb();
    db.query(`DELETE FROM gallary where id=${id}`).then(result => {
      console.log(result)
      res.status(200).json({msg:'Deleted Album ' , id:id});
    }).catch(err => {
      console.log(err)
      res.status(404).json({msg:'Failed to delete album'});
      db.release();
    })
  }
};

export default handler;
