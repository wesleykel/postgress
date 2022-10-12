import Pool from "pg-pool"
//import { password } from "pg/lib/defaults"

const pool  = new Pool({

user:'wesley',
host:'localhost',
database:'postgres',
password:'root',
port:5432,
})

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
  
  pool.query('SELECT name FROM "user"', (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }

  const  getSpecificUser=(name)=>{

    return new Promise(function(resolve, reject){
  
  pool.query(`SELECT * FROM "user" WHERE name = '${name}'`, (error, results)=>{
  
      if(error){
          reject(error)
      }
  
      resolve(results)
  })
  
    })  
  }
  
  const createUser = (body)=>{

return new Promise(function (resolve, reject){

    const { name , email, password , age} = body

    pool.query('INSERT INTO  "user" (name, email, password, age) VALUES ($1,$2,$3,$4) RETURNING *',[name, email, password, age],(error, results)=>{


        if(error){
            reject(error)
        }
    
        resolve(`a new user has been added: ${results.rows}`)
    })
    
      }) 
    }

const deleteUser = (name)=>{

    return new Promise(function (resolve, reject){

pool.query(`DELETE  FROM "user" WHERE name ='${name}'`, (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(`user ${name} deleted from ${results.rows}`)




})



})
}
const clearTable = (key)=>{

  return new Promise(function (resolve, reject){

pool.query('DELETE  FROM "user" ', (error, results)=>{

    if(error){
        reject(error)
    }

    resolve(`Table Cleared`)




})



})


}








export { getUsers, getUserName, getSpecificUser, createUser, deleteUser, clearTable}