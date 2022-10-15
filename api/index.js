import express from "express";
import userRoutes from "./routes/users.js"
import productRoutes from "./routes/products.js"
import morgan from "morgan";
import * as dotenv from 'dotenv'

dotenv.config()
//import createTable from "./scripts/create_product_table.js"; 
const app = express()

const PORT  = 3001
app.use(express.json())

app.use(morgan(':date :method ":url"'))
app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();


})

app.use("/",userRoutes, productRoutes)


app.get("/", (req, res)=>{

res.send("Welcome to Postgress Api")

})





app.listen(PORT, ()=>{

    console.log(`App running on ${PORT} `)
})


