import pool from "../db/connection.js"


 const  getProducts =()=>{

  return new Promise(function(resolve, reject){

pool.query('SELECT * FROM product', (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(results)
})

  })  
}
 const  getProductName =()=>{

    return new Promise(function(resolve, reject){
  
  pool.query('SELECT product_name FROM product', (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }

const  getSpecificProduct=(id)=>{

    return new Promise(function(resolve, reject){
  
  pool.query(`SELECT * FROM product WHERE product_id = '${id}'`, (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }
  
  const createProuct = (body)=>{

return new Promise(function (resolve, reject){

    const { product_name , product_id, description , price, sale_price,on_sale, out_of_stock
    } = body

    pool.query('INSERT INTO  product (product_name , product_id, description , price ,sale_price,on_sale, out_of_stock) VALUES ($1,$2,$3,$4, $5, $6,$7) RETURNING *',[product_name , product_id, description , price, sale_price,on_sale, out_of_stock],(error, results)=>{


        if(error){
            reject(error)
        }
    
        resolve(`a new product has been added: ${results.rows}`)
    })
    
      }) 
    }

 const deleteProduct = (id)=>{

    return new Promise(function (resolve, reject){

pool.query(`DELETE  FROM product WHERE name ='${id}'`, (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(`user ${id} deleted from ${results.rows}`)




})



})
}
 const clearTable = ()=>{

  return new Promise(function (resolve, reject){

pool.query('DELETE  FROM product ', (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(`Table Cleared ${results}`)




})



})


}








export { getProducts, getProductName, getSpecificProduct, createProuct, deleteProduct, clearTable}