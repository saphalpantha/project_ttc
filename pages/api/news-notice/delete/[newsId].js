import { getDb } from "../../../../ttc_db";

const handler = async (req, res) => {

  if(req.method === 'DELETE'){
    const id = +req.query.newsId;
    const db = await getDb();
    db.query(`DELETE FROM news_notice where id=${id}`).then(result => {
      console.log(result)
      res.status(200).json({msg:'Deleted Notice ' , id:id});
    }).catch(err => {
      console.log(err)
      res.status(404).json({msg:'Failed to Notice'});
      db.end();
    })
  }
};
export default handler;
