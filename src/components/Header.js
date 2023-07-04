import {LOGO_URL} from "../utils/constants"
import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
const Header =()=>{
  const[btnName,setBtnName]=useState("Login")

  // if no dependency array is present => useEffect is called on every render
  // if there is empty dependency array =>useEffect is called on initial render of the component
  // if there is dependency inside the dependency array=>useEffect is called whenvever the depenedency is updated. 
    useEffect(()=>{
      console.log("Useeffect called")
    },[btnName])



    return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
   <div className="container-fluid">
   <img src={LOGO_URL} width="50" height="50" className="d-inline-block align-text-top rounded-circle"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <li className="nav-link active"><Link to="/"><p className="text-decoration-none">Home</p></Link></li>
        <li className="nav-link active"><Link to="/about">About Us</Link></li>
        <li className="nav-link active" ><Link to="/contact">Contact Us</Link></li>
        <li className="nav-link active"><Link>Cart</Link></li>
        <button className="btn btn-primary" 

        onClick={()=>{
          btnName === "Login" ? 
            setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
        {console.log("hello")}
      </div>
    </div>
  </div>
</nav>
</>
    )
    
}

export default Header