import pool from "../db/connection.js"


  
    const newTable = async ()=>{

        const query =`CREATE TABLE IF NOT EXISTS users2(
            id int PRIMARY KEY,
            firstName varchar(255), 
            surname varchar(255), 
            email varchar(255),
            password varchar(255),
            age INT,
            birth_date DATE NOT NULL
            );`

await pool.connect();

try{
 pool.query(query)
console.log("done")
}finally{
    await pool.end()
}
    };


       newTable().then(()=> console.table("new table created"))
    .catch(error =>console.error(error.stack))
    