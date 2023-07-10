import mysql from 'mysql2/promise'

let _db;

export async function connectToDb() {

        const dbConnect = await mysql.createConnection({
            host:process.env.DB_HOST,
            database:process.env.DB_NAME,
            user:process.env.DB_USER,
            password:process.env.DB_PASS
    })  

    _db = dbConnect
    return _db
}


export async function getDb() {
   const db =  await connectToDb();
    return db
}




