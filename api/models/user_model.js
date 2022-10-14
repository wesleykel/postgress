
import pool from "../db/connection.js"


 const  getUsers =()=>{

  return new Promise(function(resolve, reject){

pool.query('SELECT * FROM "user"', (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(results)
})

  })  
}
 const  getUserName =()=>{

    return new Promise(function(resolve, reject){
  
  pool.query('SELECT firstname , surname FROM "user"', (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }

const  getSpecificUser=(name)=>{

    return new Promise(function(resolve, reject){
  
  pool.query(`SELECT * FROM "user" WHERE surname = '${name}'`, (error, results)=>{
  
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

    pool.query('INSERT INTO  "user" (firstname, surname, email, password, age, birth_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',[firstname,surname, email, password, age, birth_date],(error, results)=>{


        if(error){
            reject(error)
        }
    
        resolve(`a new user has been added: ${results.rows}`)
    })
    
      }) 
    }

 const deleteUser = (name,date)=>{

    return new Promise(function (resolve, reject){

pool.query(`DELETE  FROM "user" WHERE surname ='${name}',birth_date='${date}'`, (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(`user ${name} deleted from ${results.rows}`)




})



})
}
 const clearTable = ()=>{

  return new Promise(function (resolve, reject){

pool.query('DELETE  FROM "user" ', (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(`Table Cleared ${results}`)




})



})


}







export { getUsers, getUserName, getSpecificUser, createUser, deleteUser, clearTable}