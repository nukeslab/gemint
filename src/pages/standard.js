import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dice from "../components/dice";
import Nav from "../components/navigation";
import RANDOMIZER from './../assets/images/RANDOMIZER.png'
import dice2 from './../assets/images/dice2.png'
import LoudPackBreaks from './../assets/images/LoudPackBreaks.png'
import v from './../assets/images/v.png'
import roundlogo from './../assets/images/roundlogo.png'
import Randomizer from "./freeRandomizer";
import { DateTime } from "luxon";

let dt = DateTime.now();

export default function Standard() {
  const [names, setNames] = useState("");
  const [timestamp, setTimestamp] = useState(
    DateTime.now().toLocaleString() +
      " " +
      dt.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
  );



  function shuffleNew() {
    const array = names.split(`\n`);

    var tmp,
      current,
      top = array.length;

    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }

    
    const randomizedNames = array.join(`\n`);
    setNames(randomizedNames);
    let dtnow = DateTime.now();
    setTimestamp(
      DateTime.now().toLocaleString() +
        " " +
        dtnow.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
    );
  }


    return (
        <div>
          <Nav/>
             <div class="firsta section">
    <div class="container slid">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8"><img class="image-fluid" src={RANDOMIZER} alt=""></img><img class="image-fluid" src={LoudPackBreaks} alt=""></img></div>
            <div class="col-md-2"></div>
        </div> <br />
        <div class="row ">
            <div class="col-md-1"></div>
            <div class="col-md-10 text-center standslider">
                <h4>Break Title</h4>
                <hr />
                <div class="row text-center">
                <div class="col-md-4"></div>
                <div class="col-md-4 text-center" id="standic"><Dice /></div>
                <div class="col-md-4"></div>
                <label>Timestamp: {timestamp}</label>
          
            </div><br />
            <div class="row">
            
          
            <div class="col-md-12 ms-auto mb-5 text-center"><a href="#" class="abtn ms-auto text-center">Reset Position</a></div>
            <p class="text-center"> Type to add items, each on a new line.</p>
            </div>
            <div class="ms-auto text-center">
            <img class="image-fluid" src={v} alt=""></img>
            </div>  
         <Randomizer   />
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
    </div>
        </div>
    )
}


