import mysql from 'mysql2/promise'

let _db;

export async function connectToDb() {

        const dbConnect = await mysql.createConnection({
            host:'db4free.net',
            database:'ttc_test_db',
            user:'sulabh_ttc',
        password:'tilottoma'
    })

    _db = dbConnect
    return _db
}


export async function getDb() {
   const db =  await connectToDb();
    return db
}




