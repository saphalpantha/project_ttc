import { getDb } from "../../ttc_db";
const handler = async (req,res) => {
    if(req.method === 'POST'){
        const {enteredclass, stream, regNo, dob, section} = req.body;
        // console.log(data)
        // console.log(req.body)
        

        try{
            const db = await getDb();
            const db_data = await db.query(`SELECT * FROM internal_result where stream='${stream}' AND section='${section}' AND class='${enteredclass}' AND roll_no='${regNo}'`);
            // console.log(db_data)
            if(db_data[0].length === 0){
                return res.status(404).json({msg:'No Result Found. Please Check Your Roll No Again'})
            }
            // console.log(db_data[0][0])
            return res.status(201).json({msg:db_data[0][0], success:true});
        }
        catch(err){
            console.log(err)
<<<<<<< HEAD
<<<<<<< HEAD
        
            res.status(404).json({msg:'Failed to connect to Database. Please Try Again Later', success:false});
=======
            return res.status(404).json({msg:'Failed to connect to Database. Please Try Again Later', success:false})
>>>>>>> 5b9bc0e1abd48a8c0b1f0a56906f3d7381489a58
=======
            return res.status(404).json({msg:'Failed to connect to Database. Please Try Again Later'})
>>>>>>> parent of 5b9bc0e (Update internal-result.js)
        }
    }
}

export default handler
