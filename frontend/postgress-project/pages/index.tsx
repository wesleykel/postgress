import type { NextPage } from 'next'

//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

const Home: NextPage = (data) => {
  console.log(data)
   return(
     <>
     <h1>Hello World</h1>
     </>
   ) 
  
}

export async function getServerSideProps(){

  const res = await fetch("http://localhost:3001/usersGSSP")
  const data = await res.json()
  
  return{
    props:data
  }
}
export default Home
