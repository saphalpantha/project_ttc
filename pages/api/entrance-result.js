import { getDb } from "../../ttc_db";
const handler = async (req,res) => {
    if(req.method === 'POST'){
        const entrace_roll = req.body.entrance_roll;
        try{
            const db = await getDb();
            if(!entrace_roll){
                res.status(404).json({msg:'Entrance Roll no is not valid ! Please Provide Valid Roll No'});
            }
            const db_data = await db.query(`SELECT * FROM entrance_result where entrance_roll='${entrace_roll}'`);
            if(db_data[0].length === 0){
                res.status(404).json({msg:'No Result Found! Please enter valid entrance roll no'});
            }
            res.status(201).json({msg:db_data[0][0], success:true});
        }
        catch(err){
            res.status(404).json({msg:'Something went Wrong'})
        }
    }
}

export default handler