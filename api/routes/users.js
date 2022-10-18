import {getUsers, getUserName , getSpecificUser, createUser, deleteUser} from "../models/user_model.js";
import express from "express"


let router = express.Router()

router.get("/",(req, res)=>{

    getUsers()
    .then(response =>{
        res.status(200).send(response.rows)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
    
})

//Returns whole response  object needed for next js Get serverSide Props functionality
router.get("/GSSP",(req, res)=>{

  getUsers()
  .then(response =>{
      res.status(200).send(response)

  })
  .catch(error => {
      res.status(500).send(error);
    })
  
})

router.get("/name",(req, res)=>{

 getUserName()
     .then(response =>{
         res.status(200).send(response)
   
     })
     .catch(error => {
        res.status(500).send(error);
      })
 })
 
 router.get("/name/:name",(req, res)=>{
let name = req.params.name
  getSpecificUser(name)
    .then(response =>{
        res.status(200).send(response)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
})

router.post("/new", (req,res)=>{

let newUser = req.body
 createUser(newUser)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})

router.delete("/:_id",(req,res)=>{
let ID =parseInt(req.params._id)
  
  
 deleteUser(ID)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})


export default router