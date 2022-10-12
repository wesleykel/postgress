import express from "express";
import routes from "./routes/users.js"
import morgan from "morgan";
  
const app = express()

const PORT  = 3001
app.use(express.json())

app.use(morgan(':date :method ":url"'))
app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();


})

app.use("/",routes)

app.listen(PORT, ()=>{

    console.log(`App running on ${PORT} `)
})

