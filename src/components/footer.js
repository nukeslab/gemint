import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import GemintImg from "../img/GEMINT.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import vector1 from "../assets/images/Vector1.png"
import vector2 from "../assets/images/Vector2.png"
import vector3 from "../assets/images/Vector3.png"

function Footer() {
  return (
    <div>
    <div className="footer">
    <div class="container">
        <div class="fbot2">
        <div class="row  text-center">
            <div class="col">
                <a href="/faq" class="mx-3">FAQ</a>
                <a href="/terms" class="mx-3 ">TERMS</a>
                <a href="/privacy" class="mx-3 ">PRIVACY</a>
            </div>
        </div><br />
        <div class="row text-center">
        <div class="col">
        <a href={"/"} class="mx-3"><img src={vector1} alt=""></img></a>
        <a href={"/"} class="mx-3"><img src={vector2} alt=""></img></a>
        <a href={"/"} class="mx-3"><img src={vector3} alt=""></img></a>
        </div>
    </div>
</div>
    </div>
 
</div>
 </div>
  );
}

export default Footer;
