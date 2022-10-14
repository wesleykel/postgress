import pool from "../db/connection.js"


 const  getProducts =()=>{

  return new Promise(function(resolve, reject){

pool.query('SELECT * FROM products', (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(results)
})

  })  
}
 const  getProductName =()=>{

    return new Promise(function(resolve, reject){
  
  pool.query('SELECT product_name FROM products', (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }

const  getSpecificProduct=(id)=>{

    return new Promise(function(resolve, reject){
  
  pool.query(`SELECT * FROM products WHERE id = '${id}'`, (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }
  
  const createProduct = (body)=>{

return new Promise(function (resolve, reject){

    const { product_name, description ,currency_type, price, sale_price, amount_in_stock,on_sale, out_of_stock
    } = body

    pool.query('INSERT INTO products (product_name, description, currency_type ,price,sale_price,amount_in_stock,on_sale, out_of_stock) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[product_name,description,currency_type,price,sale_price,amount_in_stock,on_sale,out_of_stock],(error, results)=>{


        if(error){
            reject(error)
        }
    
        resolve(`a new product has been added: ${results}`)
    })
    
      }) 
    }

 const deleteProduct = (id)=>{

    return new Promise(function (resolve, reject){

pool.query(`DELETE FROM products WHERE id ='${id}'`, (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(`user ${id} deleted from ${results.rows}`)




})



})
}
 








export { getProducts, getProductName, getSpecificProduct, createProduct, deleteProduct}