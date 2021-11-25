import React,{Component} from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";
import "./../../src/App.css";
class Dice  extends React.Component {
  render() {
    return (
      <div className="dice">
        <ReactDice
          numDice={2}
          outline="true"
          outlineColor="#000"
          faceColor="white"
          dotColor="black"
          dieSize="80"
          rollDone={this.rollDoneCallback}
          ref={(dice) => (this.reactDice = dice)}
        />
        <button className="abtn rol " onClick={() => this.rollAll()}>
          Roll
        </button><br/><br/>
        <a href="#">OPTIONS</a>
      </div>
    );
  }

  rollAll() {
    this.reactDice.rollAll();
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`);
  }
}

export default Dice;
