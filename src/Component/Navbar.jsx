import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { logoutaction } from '../Redux/loginaction';
import style from "./Navbar.module.css"
export const Navbar = () => {
  const dispatch=useDispatch()
  const {isAuth,isError,isLoading}=useSelector(state=>state.login)
  let handleLogout=()=>{
    dispatch(logoutaction())
  }
  return (
    <div className={style.navContainer}>
        <div><Link  style={{fontWeight:"500",color:"#3b8f9d",textDecoration:"none"}} to="/">Home</Link></div>
       {isAuth &&<div><Link style={{fontWeight:"500",color:"#3b8f9d",textDecoration:"none"}} to="/aboutus">About Us</Link></div>} 
       {isAuth &&<div><Link  style={{fontWeight:"500",color:"#3b8f9d",textDecoration:"none"}}to="/contactus">Contact Us</Link></div>} 
        {!isAuth && <div><Link  style={{fontWeight:"500",color:"#3b8f9d",textDecoration:"none"}}to="/login">Login</Link></div>}
       {isAuth && <div style={{fontWeight:"500",color:"#3b8f9d",textDecoration:"none",cursor:"pointer"}}onClick={handleLogout}>Logout</div>} 
    </div>
  )
}
