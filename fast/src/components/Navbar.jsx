import React from 'react'
import { Link } from 'react-router-dom'
import Logo3 from "../Logo3.png"
import Fast_Fashion_logo2 from "../Fast_Fashion_logo2.png"
export const Navbar = () => {

  

  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"flexStart",   border:"1px solid red",width:"99%" ,margin:"auto",height:"100px" }}  >
      <div>
       <Link to={"/"}  >  
      <div >
      <img src={Logo3} width={"100px"}  />
      </div>
      </Link>
       
        </div>

        <div style={{border:"1px solid red",display:"flex", marginLeft:"280px",gap:"50px", textDecoration:"none" }} >
        <Link to={"/about"} style={{textDecoration:"none" , color:"black"}} >ABOUT</Link>
        <Link to={"/men"}  style={{textDecoration:"none" ,  color:"black"}}  >MEN</Link>
        <Link to={"/women"}  style={{textDecoration:"none",  color:"black"}}  >WOMEN</Link>
        <Link to={"/shop"}  style={{textDecoration:"none",  color:"black" }}  >SHOP</Link>
        <Link to={"/contact"}  style={{textDecoration:"none",  color:"black" }}  >CONTACT</Link>
        </div> 

    </div>
  )
}
