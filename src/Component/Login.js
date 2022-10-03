import React,{useState,useContext} from 'react'
import {Grid} from '@mui/material'
import logo  from "../Images/logo.png"
import first  from "../Images/first.png"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import './style.css'
import Context from './Context'


const Login = () => {

    const navigate=useNavigate()

    const[login,setLogin] =useState("")

    // const{data,setData}=useContext(Context)

   

    const handleLogin=(e)=>{
        setLogin(e.target.value)
    }

   

    const submitHandle=(e)=>{
     e.preventDefault()
     console.log(login)
     
     if(login.length<10){
        alert("phone number should contain 10 numbers")
     }else{
       var body={
            "mobile" : login
         }
         console.log(body)
        
     axios.post("https://radiant-anchorage-95660.herokuapp.com/user/get-otp",body)
    
     .then((res)=>console.log(res.data))
     navigate('/otp')
    }
    
}


return (
    <Grid container>
     <Grid item lg={6} md={6} sm={6} xs={12}  sx={{height:500,width:600,backgroundColor:"white" ,mt:"30px"}}>
        <img className='logo' src={logo} alt=""/>
      <h1 className="heading1">Welcome Back!!</h1>
      <h5 className="heading2">Login Account</h5>
      <form onSubmit={submitHandle}>
     <input className='mob-num' type="number" placeholder='Mobile Number' onChange={handleLogin}/><br/>
     <button className='mob-otp' >GET OTP</button>

      </form>  
    
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}  sx={{height:500,width:600,backgroundColor:"white" ,mt:"30px"}}>
    <img className='first-img' src={first} alt=""/>
       
    
    </Grid>
       

    </Grid> 
  )
}
export default Login






















