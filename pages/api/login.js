import { getDb } from "../../ttc_db";

import bcrypt from 'bcryptjs';
export const handler = async (req,res) => {
    if(req.method ===  'POST'){
        const username = req.body.username;
        const password = req.body.password;
        try{
            
            const db = await getDb();
            
            const response = await db.query(`SELECT * FROM USERS WHERE username='${username}'`);
            const user = response[0];
            if(!user){
                res.status(404).json({msg:'USER NOT FOUND ', isAuthenticated:false});
            }
            
            
            
            const isMatch = await bcrypt.compare(user.password, password);
            if(!isMatch){
                res.json({msg:'Passsword Doesnt Match', isAuthenticated:false}); 
            }
            
            res.json({msg:'Successfully Login to Admin', isAuthenticated:true});
            
        }
        catch(err){
            res.json({msg:'Something went wrong', isAuthenticated:false});
        }

    }
}