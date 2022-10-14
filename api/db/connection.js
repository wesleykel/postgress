import Pool from "pg-pool"
//import  Client  from "pg-pool"
//import { password } from "pg/lib/defaults"

const pool  = new Pool({

user:'wesley',
host:'localhost',
database:'postgres',
password:'root',
port:5432,
})

export default pool