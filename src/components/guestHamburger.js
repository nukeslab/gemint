import React, { useState } from "react";
import { IoIosHome, IoIosKey, IoIosSettings, IoMdCreate } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCreateOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";

const GuestHamburger = props => {
  console.log("props in MobileMenu", props);

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div>
      <div className="mobile-hamburger-menu" onClick={openNav}>
        <GiHamburgerMenu size={30} />
      </div>
      <div id="myNav" className="mobile-overlay">
        <div className="mobile-closebtn" onClick={closeNav}>
          x
        </div>

        <div className="mobile-overlay-content">
          <div class="mobile-eachNav">
            <IoIosHome size={25} />
            <Link to="/">Home</Link>
          </div>
          <div className="mobile-eachNav">
            <RiCheckboxMultipleBlankLine size={25} />
            <a href="/browse">Browse Breaks</a>
          </div>

          <div className="mobile-eachNav">
            <IoCreateOutline size={25} />
            <a href="/apply">Add Break</a>
          </div>
          <div className="mobile-eachNav">
            <FaRandom size={25} />
            <a href="/randomizer">Randomizer</a>
          </div>
          <div className="mobile-eachNav">
            <AiOutlineQuestionCircle size={25} color="#63e988" />
            <a href="/faq">FAQ</a>
          </div>
          <div className="mobile-eachNav">
            <IoChatboxEllipsesOutline size={25} color="#63e988" />
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestHamburger;
