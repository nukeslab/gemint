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
      <Nav />
      <div className="randomizer-title">
        <p>
          <Link className="logo" to="/">
            <span className="logo">
              GE<span className="highlight-mint">MINT</span>
            </span>
          </Link>
          <br />
          <span className="text-sm">Official</span>
          <br />
          <span className="text-lg">RANDOMIZER</span>{" "}
          <span className="text-sm">BETA</span>
        </p>

        <div className="randomizer">
          <div className="randomizer-form">
            <label className="highlight-mint">
              Type to add items, each on a new line.
            </label>

            <textarea
              id="randomizer-input"
              rows="30"
              cols="40"
              value={names}
              onChange={e => handleChange(e.target.value)}
            ></textarea>

            <label>
              Randomize counter: {count} <br /> Timestamp: {timestamp}
            </label>
            <button className="btn-outline" onClick={() => shuffleNew()}>
              Randomize
            </button>
            <button className="btn-dark" onClick={() => resetRandomizer()}>
              Reset
            </button>
            <Dice />
          </div>
        </div>
      </div>
    </div>
  );
}
