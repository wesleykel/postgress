import pool from "../db/connection.js"


  
    const newTable = async ()=>{

        const query =`CREATE TABLE IF NOT EXISTS products(
            id INT GENERATED ALWAYS AS IDENTITY,
            product_name varchar(255), 
            description varchar(255), 
            currency_type varchar(1),
            price DECIMAL(6,2),
            sale_price DECIMAL(6,2),
            amount_in_stock INT,
            on_sale boolean, 
            out_of_stock boolean
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
    
    
