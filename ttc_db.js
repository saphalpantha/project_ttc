// import mysql from "mysql2/promise";
// let _db;

// export async function connectToDb() {
//   // const dbConnect = await mysql.createConnection({

//   //     host:"127.0.0.1",
//   //     database:"tilottama_edu",
//   //     user:"tilottama_edu_user",
//   //     password:"RPvt9OP4uxParxXHzS8Y"
//   // }),


//   // const dbConnect = await mysql.createConnection({
//   //   host: "127.0.0.1",
//   //   database: "tilottama",
//   //   user: "root",
//   //   password: "",
//   //   multipleStatements: true,
//   // });


//   const dbConnect = await mysql.createConnection({
//       host:"db4free.net",
//       database:"ttc_test_db",
//       user:"sulabh_ttc",
//       password:"tilottoma",
//       multipleStatements: true
//   })

//   _db = dbConnect;
//   return _db;
// }

// export async function getDb() {
//   const db = await connectToDb();
//   return db;
// }





import mysql from "mysql2/promise";
let _db

export async function connectToDb() {


  if(!_db){
    _db = mysql.createPool({
      host:"127.0.0.1",
      database:"tilottama_edu",
      user:"tilottama_edu_user",
      password:"RPvt9OP4uxParxXHzS8Y"
    })
  }



  
  // if(!_db){
  //   _db = mysql.createPool({
  //     host:"db4free.net",
  //     database:"ttc_test_db",
  //     user:"sulabh_ttc",
  //     password:"tilottoma",
  //     connectionLimit: 5,
  //     queueLimit: 0,
  //     waitForConnections:true,
  //     multipleStatements: true
  //   })
  // }


  // const dbConnect = await mysql.createConnection({

  //     host:"127.0.0.1",
  //     database:"tilottama_edu",
  //     user:"tilottama_edu_user",
  //     password:"RPvt9OP4uxParxXHzS8Y"
  // }),


  // const dbConnect = await mysql.createConnection({
  //   host: "127.0.0.1",
  //   database: "tilottama",
  //   user: "root",
  //   password: "",
  //   multipleStatements: true,
  // });


  // const dbConnect = await mysql.createConnection({
  //     host:"db4free.net",
  //     database:"ttc_test_db",
  //     user:"sulabh_ttc",
  //     password:"tilottoma",
  //     multipleStatements: true
  // })

  return _db;
}

export async function getDb() {
  let connection;
  try{
    const pool = await connectToDb();
    connection = await pool.getConnection()
    return connection
  }
  catch(err){
    throw new Error('Failed to Connect to db -SERVER')
  }
}
