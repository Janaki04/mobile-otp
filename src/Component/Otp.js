import React from 'react'
import {Grid} from '@mui/material'
import logo  from "../Images/logo.png"
import second  from "../Images/second.png"
import {useNavigate} from 'react-router-dom'

import './style.css'


const Otp = () => {

    const navigation=useNavigate()



  return (
    <Grid container>
     <Grid item lg={6} md={6} sm={6} xs={12}  sx={{height:500,width:600,backgroundColor:"white" ,mt:"30px"}}>
        <img className='logo' src={logo} alt=""/>
      <h1 className="heading3">Verification</h1>
      <p className="heading4">Enter the OTP sent to mobile number</p>
      <form>
     <input className='ot-num' type="number" placeholder='otp'/><br/>
     <p>count:8</p>

     <p>Resend Otp</p>

     <button className='ot-otp' onClick={()=>navigation("/details")}>Verification</button>

      </form>  
    
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}  sx={{height:500,width:600,backgroundColor:"white" ,mt:"30px"}}>
    <img className='second-img' src={second} alt=""/>
       
    
    </Grid>
       

    </Grid> 
  )
}
export default Otp