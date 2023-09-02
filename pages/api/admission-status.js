import { getDb } from '../../ttc_db';





const handler = async (req,res) => {


    if(req.method === 'GET'){
        // const {name} = req.query 
        // console.log(name)
        const db = await getDb()
        db.query('SELECT * FROM admission_status').then(result => {
            res.status(200).json({msg:result[0]})
            db.end();
        }).catch(err => {
            console.log(err)
            db.end()
        })
        
    } 
    if(req.method === 'PUT'){
        const admission_open = req.body;
         const db = await getDb();
    db.query(`UPDATE admission_status set admission_open=${admission_open.isAdmissionOpen} where id=1`).then(result => {
      res.status(200).json({msg:'Admission Status Updated'});
    }).catch(err => {
      console.log(err)
      res.status(404).json({msg:'Failed to delete '});
      db.end();
    })
    }
}

export default handler