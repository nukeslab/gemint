import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import Dice from "../dice";
import { NBATeams, MLBTeams, NFLTeams } from "../../data/MLBTeams";
import { AiOutlineConsoleSql } from "react-icons/ai";

let dt = DateTime.now();

export default function RandomizerTeamDraft(props) {
  const [count, setCount] = useState(0);
  const [timestamp, setTimestamp] = useState();
  const [names, setNames] = useState([]);
  const [namesArray, setNamesArray] = useState([]);

  function NameTable() {
    //update state with names
    if (names.length > 0) {
      return (
        <div>
          <table className="float-left">
            <tr>
              <th>Spot</th>
              <th>Name</th>
              <th>Team</th>
            </tr>
            {names.map((name, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td contenteditable="true"></td>
                </tr>
              );
            })}
          </table>
        </div>
      );
    } else {
      const breakSpots = props.product.breakSpotsFilled;
      return (
        <div>
          <table className="float-left">
            <tr>
              <th>Spot</th>
              <th>Name</th>
              <th>Team</th>
            </tr>
            {breakSpots.map((spot, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {index + 1} {spot.orderedByUsername}
                  </td>
                  <td contenteditable="true"></td>
                </tr>
              );
            })}
          </table>
        </div>
      );
    }
  }

  function shuffleNames() {
    if (names.length < 1) {
      console.log("break spots filled = ", props.product.breakSpotsFilled);
      const breakSpots = props.product.breakSpotsFilled;
      const updatedNames = [];
      breakSpots.map((spot, index) => {
        updatedNames.push(index + 1 + ". " + spot.orderedByUsername);
      });
      const array = updatedNames;

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
      const randomizedNames = array;
      setNames(randomizedNames);
      console.log("random names", names);
      let dtnow = DateTime.now();
      setTimestamp(
        DateTime.now().toLocaleString() +
          " " +
          dtnow.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
      );
    } else {
      const array = names;
      console.log("to rando", array);
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
      console.log("array", array);
      const randomizedNames = array;
      setNames(randomizedNames);
      console.log("random names", names);
      let dtnow = DateTime.now();
      setTimestamp(
        DateTime.now().toLocaleString() +
          " " +
          dtnow.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
      );
    }
  }

  function SaveResults() {
    alert("Gehrig will save these to the db for safe keeping");
  }

  return (
    <div>
      <div>
        <div>{props.product ? <NameTable /> : <p>loading...</p>}</div>
      </div>
      <button className="btn-primary" onClick={(e) => shuffleNames()}>
        Randomize
      </button>
      <button className="btn-outline" onClick={(e) => SaveResults()}>
        Lock
      </button>
      <Dice />
    </div>
  );
}
