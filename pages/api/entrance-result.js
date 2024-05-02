import { getDb } from "../../ttc_db";
const handler = async (req,res) => {
    if(req.method === 'POST'){
        const entrance_roll = req.body.entrance_roll;
        console.log(entrance_roll)
        try{
            const db = await getDb();
            const db_data = await db.query(`SELECT * FROM entrance_result where entrance_roll='${entrance_roll}'`);
            if(db_data[0].length === 0){
                res.status(404).json({msg:'No Result Found. Please Check Your Roll No Again'})
            }
            res.status(201).json({msg:db_data[0][0], success:true});
        }
        catch(err){
            res.status(404).json({msg:'Failed to connect to Database. Please Try Again Later'})
        }
    }
}

export default handler