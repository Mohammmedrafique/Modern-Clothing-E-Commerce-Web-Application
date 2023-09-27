import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:"flex",flexDirection:"flexStart", gap:"30px", marginLeft:"50px"}} >
        <Link to={"/"} >Home</Link>
        <Link to={"/about"} >About</Link>
        <Link to={"/men"} >Men</Link>
        <Link to={"/women"} >Women</Link>
        <Link to={"/shop"} >Shop</Link>
        <Link to={"/contact"} >Contact</Link>
        
    </div>
  )
}
