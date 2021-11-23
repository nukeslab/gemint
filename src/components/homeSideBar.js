import React from "react";
// import { AiOutlineFire } from "react-icons/ai";
import { BiBasketball, BiLogOut } from "react-icons/bi";
import { IoAmericanFootballOutline, IoBaseballOutline } from "react-icons/io5";
// import { GiHockey, GiSoccerBall } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
// import { CgMediaLive } from "react-icons/cg";
import { Route, Link, Redirect } from "react-router-dom";

const homeSideBar = props => {
  const logout = () => {
    localStorage.removeItem("AuthToken");
    // return <Redirect to="/login" />;
  };
return  (
  <div></div>
  // <div className="home-side-bar-container">
  //   <div className="home-side-bar-wrapper">
  //     {/* Home */}
  //     <div className="icon-container">
  //       <a href="/">
  //         <HiOutlineHome size={25} className="icon" />
  //       </a>
  //     </div>
  //     {/* Basketball */}
  //     <div className="icon-container">
  //       <a href="/browse?show=nba">
  //         <BiBasketball size={25} className="icon" />
  //       </a>
  //     </div>
  //     {/* Football */}
  //     <div className="icon-container">
  //       <a href="/browse?show=nfl">
  //         <IoAmericanFootballOutline size={25} className="icon" />
  //       </a>
  //     </div>
  //     {/* Baseball */}
  //     <div className="icon-container">
  //       <a href="/browse?show=mlb">
  //         <IoBaseballOutline size={25} className="icon" />
  //       </a>
  //     </div>

  //     {/* <div className="icon-container">
  //       <a href="/browse?show=nhl">
  //         <GiHockey size={25} className="icon" />
  //       </a>
  //     </div> */}
  //     {/* <div className="icon-container">
  //       <a href="/browse">
  //         <GiSoccerBall size={25} className="icon" />
  //       </a>
  //     </div> */}
  //   </div>
  //   <div className="icon-container" id="logout-icon-container">
  //     <a href="/login">
  //       <BiLogOut
  //         onClick={logout}
  //         size={25}
  //         className="icon"
  //         id="logout-icon"
  //       />{" "}
  //     </a>
  //   </div>
  // </div>
);
};

export default homeSideBar;
