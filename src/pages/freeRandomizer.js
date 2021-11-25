import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import Dice from "../components/dice";
import Nav from "../components/navigation";

let dt = DateTime.now();

export default function Randomizer() {
  const [count, setCount] = useState(0);
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

    setCount(count + 1);
    const randomizedNames = array.join(`\n`);
    setNames(randomizedNames);
    let dtnow = DateTime.now();
    setTimestamp(
      DateTime.now().toLocaleString() +
        " " +
        dtnow.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
    );
  }

  function handleChange(e) {
    console.log(e);
    setNames(e);
  }

  function resetRandomizer(e) {
    setNames("");
    setCount(0);
  }

  return (
    <div>
      <div className="randomizer-title">
     

        <div className="randomizer">
          <div className="randomizer-form">
            <textarea
            class="homte"
              id="randomizer-input"
              rows="15"
              cols="auto"
              value={names}
              onChange={e => handleChange(e.target.value)}
            ></textarea>
      <div class="row">
                        <div class="col-md-4">
                        <label>
              Randomize counter: {count}
            </label>
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-6 ">
                        <label> Timestamp: {timestamp}</label>
                        </div>
                    </div>
            <br/>
            <div class="row">
                        <div class="col-md-12 my-3">
                        <button className="abtn abtn4 btn-outline" onClick={() => shuffleNew()}>
              Randomize
            </button> <button className=" abtn5 btn-dark" onClick={() => resetRandomizer()}>
              Reset
            </button>
                        </div>
                    </div>

          </div>
        </div>
      </div>
    </div>
  );
}