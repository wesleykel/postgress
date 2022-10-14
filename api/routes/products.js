import express from "express"
import {getProducts,getProductName,getSpecificProduct, deleteProduct,createProduct} from "../models/product_model.js"

let router = express.Router()

router.get("/products",(req, res)=>{

    getProducts()
    .then(response =>{
        res.status(200).send(response.rows)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
    
})

//Returns whole response  object needed for next js Get serverSide Props functionality
router.get("/productsGSSP",(req, res)=>{

  getProducts()
  .then(response =>{
      res.status(200).send(response)

  })
  .catch(error => {
      res.status(500).send(error);
    })
  
})

router.get("/productName",(req, res)=>{

 getProductName()
     .then(response =>{
         res.status(200).send(response.rows)
   
     })
     .catch(error => {
        res.status(500).send(error);
      })
 })
 
 router.get("/product/:id",(req, res)=>{
let id = req.params.id
  getSpecificProduct(id)
    .then(response =>{
        res.status(200).send(response.rows)
  
    })
    .catch(error => {
        res.status(500).send(error);
      })
})

router.post("/newProduct", (req,res)=>{

let newProduct = req.body
 createProduct(newProduct)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})

router.delete("/product/:id",(req,res)=>{
    let id = req.params.id
   
 deleteProduct(id)
.then(response =>{
    res.status(200).send(response)

})
.catch(error => {
    res.status(500).send(error);
  })


})


export default router