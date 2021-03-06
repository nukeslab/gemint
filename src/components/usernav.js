import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoOutline from "../img/gemint-logo-outline.png";
import Logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "boring-avatars";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import UserHamburger from "../components/userHamburger";
import { AiFillCaretDown } from "react-icons/ai";
import globalContext from "../context/globalContext";
import pricingPage from "../pages/pricingPage"
import standard from "../pages/standard"

function UserNavigation() {
  const { user } = useContext(globalContext);

  const logout = () => {
    localStorage.removeItem("AuthToken");
  };

  return (
   <div>
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
        <a className = "link" href="https://gemint-store.creator-spring.com/" > Shop </a></div >
        </li> <li class = "nav-item" >
        <div class = "nav-item nav-link" >
        <Link className = "link"to = "/pricingPage" > Pricing </Link> 
        </div> </li> 
        </ul> 
        </div>
        <div class = "navbar-nav ms-auto " >
        <div class = "d-flex justify-content-between text-end" >
          <div class ="premium">
        <a href = {"/"} class = "abtn" > PREMIUM </a> </div>
        {/* ------------------ */}
        <div class="nav-item dropdown">
                                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action" aria-expanded="false">
                                  <img src={avatar} class="avatar image-fluid" alt="Avatar "></img>
                                    </a>
                                <div class="dropdown-menu userdrop text-center">
                                    <a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a>
                                    <a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Account</a>
                                    <a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a>
                                    
                                    <a  href="/login" onClick={logout}>
                                      LOG OUT
                                    </a>
                                </div>
                            </div>
        {/* ------------------ */}
        </div> 
        </div> 
        </nav> 
        </div>  
        </div>
  );
}

export default UserNavigation;
