import { getDb } from "../../../../ttc_db";

const handler = async (req,res) => {
    if(req.method === 'GET'){
        // const {name} = req.query 
        // console.log(name)
        const db = await getDb()
        db.query('SELECT * FROM slider_data').then(result => {
            res.status(200).json({msg:result[0]})
            db.release();
        }).catch(err => {
            console.log(err)
            db.release()
        })
        // db.query(`select * from users`).then(result => {
        //     res.status(200).json({msg:result[0]})
        // }).catch(err => console.log(err))
        
    } 
}

export default handler