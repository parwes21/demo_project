import { useState } from "react"
import './index.css';
import { NavLink } from "react-router-dom";
// import React{useState} from 'react'

const Navbar = () => {
  const[show, setShow] = useState(false);
    return (
        <>
        <section className='navbar-bg'>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/">DemoWebsite</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="true"
      aria-label="Toggle navigation"
      onClick={()=> setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
     
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
       
      </ul>
      <form className="d-flex">
      <NavLink to="/signup"><button className="btn  btn-style" type="submit">Sign Up</button></NavLink>  
      <NavLink to="/"> <button className="btn  btn-style btn-style-border" type="submit">Sign In</button></NavLink>  
      </form>
    </div>
  </div>
</nav>
</section>
        </>
    )
}

export default Navbar;
