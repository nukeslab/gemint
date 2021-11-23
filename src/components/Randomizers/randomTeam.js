import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import Dice from "../dice";
import { NBATeams, MLBTeams, NFLTeams } from "../../data/MLBTeams";

let dt = DateTime.now();

export default function RandomizerTeam(props) {
  const [count, setCount] = useState(0);
  const [breakType, setBreakType] = useState("Team");
  const [teams, setTeams] = useState();
  const [names, setNames] = useState("");
  const [namesArray, setNamesArray] = useState([]);
  const [timestamp, setTimestamp] = useState();

  function RandomizerTable(props) {
    const breakLeague = props.breakLeague;
    const breakSpots = props.breakSpots;
    const updatedNames = [];
    breakSpots.map((spot, index) => {
      updatedNames.push(index + 1 + ". " + spot.orderedByUsername);
    });
    const array = updatedNames;
    console.log(breakSpots);
    if (teams != undefined) {
      return (
        <div>
          <table className="float-left">
            <tr>
              <th>Spot</th>
              <th>Name</th>
              <th>Team</th>
            </tr>
            {teams.map((team, index) => {
              if (namesArray[index] != undefined) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{namesArray[index]}</td>
                    <td>{team}</td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{updatedNames[index]}</td>
                    <td>{team}</td>
                  </tr>
                );
              }
            })}
          </table>
        </div>
      );
    } else {
      if (breakLeague === "NBA") {
        setTeams(NBATeams);
        return (
          <div>
            <table className="float-left">
              <tr>
                <th>Spot</th>
                <th>Name</th>
                <th>Team</th>
              </tr>
              {NBATeams.map((team, index) => {
                if (namesArray[index] != undefined) {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{namesArray[index]}</td>
                      <td>{team}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{updatedNames[index]}</td>
                      <td>{team}</td>
                    </tr>
                  );
                }
              })}
            </table>
          </div>
        );
      } else if (breakLeague === "NFL") {
        setTeams(NFLTeams);
        return (
          <div>
            <table className="float-left">
              <tr>
                <th>Spot</th>
                <th>Name</th>
                <th>Team</th>
              </tr>
              {NFLTeams.map((team, index) => {
                if (namesArray[index] != undefined) {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{namesArray[index]}</td>
                      <td>{team}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{updatedNames[index]}</td>
                      <td>{team}</td>
                    </tr>
                  );
                }
              })}
            </table>
          </div>
        );
      } else if (breakLeague === "MLB") {
        setTeams(MLBTeams);
        return (
          <div>
            <table className="float-left">
              <tr>
                <th>Spot</th>
                <th>Name</th>
                <th>Team</th>
              </tr>
              {MLBTeams.map((team, index) => {
                if (namesArray[index] != undefined) {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{namesArray[index]}</td>
                      <td>{team}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{updatedNames[index]}</td>
                      <td>{team}</td>
                    </tr>
                  );
                }
              })}
            </table>
          </div>
        );
      } else alert("there was an error.");
    }
  }

  function updateTable() {
    const array = names.split(`\n`);
    console.log("arrays", array);
    setNamesArray(array);
    console.log(namesArray);
  }

  function saveResults() {
    alert("Gehrig will save these to the db for safe keeping");
  }

  function shuffleTeams() {
    const array = teams;
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

  return (
    <div>
      <div>
        {props.product ? (
          <div>
            <p>{props.product.products[0].league}</p>
            <RandomizerTable
              breakLeague={props.product.products[0].league}
              breakSpots={props.product.breakSpotsFilled}
            />
            <button className="btn-primary" onClick={(e) => shuffleTeams()}>
              Randomize
            </button>
            <button className="btn-outline" onClick={(e) => saveResults()}>
              Lock
            </button>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
