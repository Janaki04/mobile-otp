import React from 'react'
import {Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'



 const Details = () => {
    
    const navigate=useNavigate()

  return (
  <Grid container>
    <Grid item lg={12} sm={12} xs={12}>
      <h1> Profile Details</h1>  
      <form >
       <input className="form"  type="text" placeholder='FirstName'/> <br/>
       <input className="form" type="text" placeholder='LastName'/> <br/>
       <input  className="form" type="text" placeholder='Address'/> <br/>
       <input className="form" type="email" placeholder='Email'/> <br/><br/>
       <button  className="submit" onClick={()=>navigate("/dashboard")}>Submit</button>
      </form>
    </Grid>
  </Grid>
  )
}
export default Details
