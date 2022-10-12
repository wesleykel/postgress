import express, { response } from "express";
import {getUsers, getUserName , getSpecificUser, createUser, deleteUser, clearTable} from "./user_model.js";

const app = express()

const port  =3001
app.use(express.json())


app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();


})


app.get("/",(req, res)=>{

    getUsers()
    .then(response =>{
        res.status(200).send(response)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
})


app.get("/userName",(req, res)=>{

     getUserName()
     .then(response =>{
         res.status(200).send(response)
   
     })
     .catch(error => {
        res.status(500).send(error);
      })
 })
 
 app.get("/user/:name",(req, res)=>{
let name = req.params.name
    getSpecificUser(name)
    .then(response =>{
        res.status(200).send(response)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
})

app.post("/newUser", (req,res)=>{

let newUser = req.body
createUser(newUser)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})

app.delete("/:user",(req,res)=>{
    let name = req.params.user.toLowerCase()
   
deleteUser(name)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})

app.delete("/api/clearTable/:password",(req,res)=>{
    const key = req.params.password
   clearTable(key)

.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})
app.listen(port, ()=>{

    console.log(`App running on ${port} `)
})