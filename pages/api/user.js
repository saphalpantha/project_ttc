import { getDb } from "../../ttc_db";

import bcrypt from "bcryptjs";
const handler = async (req, res) => {


    if(req.method === 'PUT'){
        const old = req.body.old;
        const newpass = req.body.newpass;
        const username = req.body.email
        if(!old && !newpass && !username){
            res.status(404).json({msg:'Failed to login. Please Provide Valid Username and Password', isAuthenticate:false});
        }

        try{
            const db = await getDb();

            const user = await  db.query(`SELECT * FROM users WHERE username='${username}'`);
            if(!user[0]){
                res.status(404).json({msg:'No User Found', isAuthenticate:false});
            }

            const dbPass =  user[0][0].password;

            const isMatch = await bcrypt.compare(old, dbPass);
            if(!isMatch){
                res.status(404).json({msg:'Incorrect Password.Please Try Agaim', isAuthenticate:false});
            }            

            const newpass_hash = await bcrypt.hash(newpass, 10);
            const response = await db.query(
                `UPDATE users SET password='${newpass_hash}' where username='${username}'`
              );
              console.log(response)
            res.status(201).json({msg:'Password Changed Succesfully'});
        }
        catch(err){
            res.status(404).json({msg:err.message});
        }
        
    }

  if (req.method === "POST") {
    const { email, password } = req.body;
    const username = email;
    try {
      const db = await getDb();
      const user = await db.query(
        `SELECT * FROM users WHERE username='${username}'`
      );
      const hashed = await bcrypt.hash(password, 10);
      const response = await db.query(
        `INSERT INTO users values (NULL, '${username}', '${hashed}')`
      );
      res.status(201).json({ msg: "New User Added Succesfully" });
    } catch (err) {
      res.status(400).json({ msg: "Failed to Add User" });
    }
  }
};

export default handler;
