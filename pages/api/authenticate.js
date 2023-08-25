
import { getDb } from "../../ttc_db";
import bcrypt from 'bcryptjs'
import { setCookie, getCookie } from "cookies-next";
import { getServerSession } from "next-auth";

import jwt from 'jsonwebtoken'
const handler = async (req,res) => {
    if(req.method === 'POST'){
        const username = req.body.username;
        const password = req.body.password;
        if(!username && !password){
            res.status(404).json({msg:'Failed to login. Please Provide Valid Username and Password', isAuthenticate:false});
        }

        try{
            const db = await getDb();

            const user = await  db.query(`SELECT * FROM users WHERE username='${username}'`);
            if(!user[0]){
                res.status(404).json({msg:'No User Found', isAuthenticate:false});
            }

            const dbPass =  user[0][0].password;

            const isMatch = await bcrypt.compare(password, dbPass);
            if(!isMatch){
                res.status(404).json({msg:'Incorrect Password.Please Try Agaim', isAuthenticate:false});
            }            

            setCookie('user', true, {req, res,maxAge:60*60*24});
            const token = jwt.sign({success:true,email:user[0][0].email},'DqbXbAxbtPkSM5YgiiJtIr58B0QlkaEh', {expiresIn:'1d'})
            res.status(200).json({msg:'Login Successfull !', isAuthenticate:true, token:token});
        }
        catch(err){
            res.status(404).json({msg:err.message});
        }
        
    }
}




export default handler



