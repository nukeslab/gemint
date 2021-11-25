import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Login from "../pages/login"
import Logo from "../assets/images/logo.png";
import GuestHamburger from "./guestHamburger";
import { AiFillCaretDown } from "react-icons/ai";
import feature from '../pages/feature';
import pricingPage from '../pages/pricingPage'

class guestnavigation extends Component {
  render() {
    return (
      <div class = "m-4" >
        <nav class = "navbar navbar-expand-lg navbar-dark " >
        <a href = "/"class = "navbar-brand" >
        <img class = "img-fluid" src = { Logo }height = "auto"alt = "GEMINT" > 
        </img> 
        </a> <button class = "navbar-toggler"type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false"aria-label = "Toggle navigation" >
        <span class = "navbar-toggler-icon" > </span> </button> <div class = "collapse navbar-collapse "id = "navbarSupportedContent" >
        <ul class = "navbar-nav me-auto mb-2 mb-lg-0 ms-auto" >
        <li class = "nav-item dropdown" >
        <div class = "nav-link dropdown-toggle"id = "navbarDropdown"role = "button"data-bs-toggle = "dropdown"aria-expanded = "false">
        <Link className = "link" to ="/" > Randomizer</Link> 
        </div> <ul class = "dropdown-menu" aria-labelledby = "navbarDropdown" ><li > 
        < div class = "dropdown-item" >
        <Link className = "linkDropdown" to = "/standard" > Standard </Link></div > </li> 
        <li >
        <div class = "dropdown-item" >
        <Link className = "linkDropdown"to = "/tier" > Tier </Link>
        </div > </li> </ul> 
        </li> 
        <li class = "nav-item" >
        <div class = "nav-item nav-link active" >
        <Link className = "link" to = "/feature" >  Shop </Link></div >
        </li> <li class = "nav-item" >
        <div class = "nav-item nav-link" >
        <Link className = "link"to = "/pricingPage" > Pricing </Link> 
        </div> </li> 
        </ul> 
        </div>
        <div class = "navbar-nav ms-auto " >
        <div class = "d-flex justify-content-between" >
        <a href = {Login} class = "abtn" > PREMIUM </a> 
        <Link class = "abtn" to="/login"> LOGIN </Link> 
        </div> 
        </div> 
        </nav> 
        </div>  
    );
  }
}

export default guestnavigation;
