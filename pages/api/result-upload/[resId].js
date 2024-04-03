import { getDb } from "../../../ttc_db";

const handler = async (req, res) => {

  if(req.method === 'DELETE'){
    const id = req.query.resId;
    console.log(id)
    const db = await getDb();
    db.query(`DELETE FROM results_sheet where id=${id}`).then(result => {
      console.log(result)
      res.status(200).json({msg:'Deleted Faculty ' , id:id});
    }).catch(err => {
      console.log(err)
      res.status(404).json({msg:'Failed to delete faculty'});
      db.release();
    })
  }
};

export default handler;

