
import pool from "../db/connection.js"


 const  getUsers =()=>{

  return new Promise(function(resolve, reject){

pool.query('SELECT * FROM "users"', (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(results)
})

  })  
}
 const  getUserName =()=>{

    return new Promise(function(resolve, reject){
  
  pool.query('SELECT firstname , surname FROM "users"', (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }

const  getSpecificUser=(name)=>{

    return new Promise(function(resolve, reject){
  
  pool.query(`SELECT * FROM "users" WHERE surname = '${name}'`, (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }
  
  const createUser = (body)=>{

return new Promise(function (resolve, reject){

    const { firstname , surname , email, password , age , birth_date} = body

    pool.query('INSERT INTO  users (firstname, surname, email, password, age, birth_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',[firstname,surname, email, password, age, birth_date],(error, results)=>{


        if(error){
            reject(error)
        }
    
        resolve(`a new user has been added: ${results}`)
    })
    
      }) 
    }

 const  deleteUser = (ID)=>{



    return new Promise(function (resolve, reject){

pool.query(`DELETE  FROM "users" WHERE id=${ID}`, (error, results)=>{
console.log(results)
    if(error){
        reject(error)
    }

    resolve(`user ${ID} deleted from ${results}`)




})



})
}








export { getUsers, getUserName, getSpecificUser, createUser, deleteUser}