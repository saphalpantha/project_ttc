


import { getDb } from "../../ttc_db"



const handler = async (req,res) => {

    if(req.method === 'GET'){
        // const {name} = req.query 
        // console.log(name)
        const db = await getDb()
        db.query('SELECT * FROM news_notice').then(result => {
            res.status(200).json({msg:result[0]})
            db.destroy();
        }).catch(err => 
            {
                console.log(err)
                res.status(400).json({msg:'error fetching data'})
                db.destroy()
            })
        // db.query(`select * from users`).then(result => {
        //     res.status(200).json({msg:result[0]})
        // }).catch(err => console.log(err))
        
    }   

}

export default handler