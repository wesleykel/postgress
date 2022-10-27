import express from "express";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import morgan from "morgan";
import * as dotenv from 'dotenv';
import cors from "cors"
dotenv.config();
const app = express();


app.use(cors())


// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3091;

app.use(express.json())

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(morgan(':date :method ":url"'))
app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();


})

app.use("/user",userRoutes)
app.use("/product" ,productRoutes)

app.get("/", (req, res)=>{

res.send("Welcome to Postgress Api")

})





app.listen(PORT, ()=>{

    console.log(`App running on ${PORT} `)
})




export default app
