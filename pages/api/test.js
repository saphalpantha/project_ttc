import { getDb } from "../../ttc_db"
const handler = async (req,res) => {

    const db = await getDb()
const ress = await db.query("SELECT * FROM admission_status");
console.log(res)
    res.json({
        msg:'tesing',
        data:ress
        
        
    })
}

export default handler;