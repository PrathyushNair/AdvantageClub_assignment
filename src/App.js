import React from "react"
import './App.css';
import { Navbar } from "./Component/Navbar";
import {Routes,Route} from "react-router-dom"
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Aboutus } from "./Pages/Aboutus";
import { Contactus } from "./Pages/Contactus";
import { Auth } from "./HOC/Auth";

function App() {
  React.useEffect(()=>{
    let userarr=[]
    localStorage.setItem("users",JSON.stringify(userarr))
  },[])
  return (
    <div className="App">
     <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/aboutus" element={<Auth><Aboutus/></Auth>}></Route>
        <Route path="/contactus" element={<Auth><Contactus/></Auth>}></Route>
    </Routes>
    </div>
  );
}

export default App;
