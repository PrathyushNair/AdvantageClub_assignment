import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
export const Auth = ({children}) => {
  let logged=JSON.parse(localStorage.getItem("logged"))
    const {isAuth}=useSelector(state=>state.login)
    console.log("log",logged)
  if(isAuth)
  {
    return children
  }
  return <Navigate to="/"></Navigate>
}
