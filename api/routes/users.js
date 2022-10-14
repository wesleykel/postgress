import {getUsers, getUserName , getSpecificUser, createUser, deleteUser} from "../models/user_model.js";
import express from "express"


let router = express.Router()

router.get("/users",(req, res)=>{

    getUsers()
    .then(response =>{
        res.status(200).send(response.rows)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
    
})

//Returns whole response  object needed for next js Get serverSide Props functionality
router.get("/usersGSSP",(req, res)=>{

  getUsers()
  .then(response =>{
      res.status(200).send(response)

  })
  .catch(error => {
      res.status(500).send(error);
    })
  
})

router.get("/userName",(req, res)=>{

 getUserName()
     .then(response =>{
         res.status(200).send(response)
   
     })
     .catch(error => {
        res.status(500).send(error);
      })
 })
 
 router.get("/user/:name",(req, res)=>{
let name = req.params.name
  getSpecificUser(name)
    .then(response =>{
        res.status(200).send(response)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
})

router.post("/newUser", (req,res)=>{

let newUser = req.body
 createUser(newUser)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})

router.delete("/:user",(req,res)=>{
    let name = req.params.user.toLowerCase()
   
 deleteUser(name)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})


export default router