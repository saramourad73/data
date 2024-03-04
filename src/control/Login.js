import React, { useEffect, useState,  } from 'react'
import'./login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {

const [users,setusers] = useState()
const [ name, setname] = useState()
const [ pass, setpass] = useState()



useEffect(()=>{
axios.get('https://fakestoreapi.com/users').then((resp)=>setusers(resp.data)).catch((error)=>console.log(error))
},[])
const navigate=useNavigate()

const handlelogin = ()=>{
 const user= users?.filter((r)=>{
if(r.username==name){
    if(r.password == pass){
        navigate('/Home')
        return r
    }
}

 })


 if(user.length == 0){
document.querySelector('.wrong').innerHTML='wrong username or password'
 }
}

  return (
    <>
    <div className='bx'>

<p className='wrong'></p>

  <div className='login'>
    <label className='bel'>Username</label>
  <input className='ss' type='text'  onChange={(e)=>setname(e.target.value)}/>
  </div>

  <div className='login'>
    <label className='bel'>Password </label>
  <input className='ss' type='password'  onChange={(e)=>setpass(e.target.value)}/>
  </div>

  
  <button  className='bt' onClick={()=>handlelogin()}>login</button>
  </div>
    </>
  )
}

export default Login