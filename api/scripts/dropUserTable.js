import pool from "../db/connection.js"


  
    const dropUserTable = async ()=>{

        const query =`DROP TABLE user;`

await pool.connect();

try{
 pool.query(query)
console.log("done")
}finally{
    await pool.end()
}
    };


       dropUserTable().then(()=> console.table("product user drooped"))
    .catch(error =>console.error(error.stack))