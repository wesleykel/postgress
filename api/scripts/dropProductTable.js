import pool from "../db/connection.js"


  
    const dropProdTable = async ()=>{

        const query =`DROP TABLE products78;`

await pool.connect();

try{
 pool.query(query)
console.log("done")
}finally{
    await pool.end()
}
    };


       dropProdTable().then(()=> console.table("product table drooped"))
    .catch(error =>console.error(error.stack))