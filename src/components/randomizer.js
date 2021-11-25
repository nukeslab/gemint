import React, { useState } from "react";
import RandomHitDraft from "./Randomizers/randomHitDraft";
import RandomTeam from "./Randomizers/randomTeam";
import RandomTeamDraft from "./Randomizers/randomTeamDraft";

export default function Randomizer(props) {
  const BreakRandomizer = () => {
    if (props.product.breakType === "Personal") {
      return <div></div>;
    } else if (props.product.breakType === "Hit Draft") {
      return <RandomHitDraft product={props.product} />;
    } else if (props.product.breakType === "Team Random") {
      return <RandomTeam product={props.product} />;
    } else if (props.product.breakType === "Team Draft") {
      return <RandomTeamDraft product={props.product} />;
    } else if (props.product.breakType === "Division Draft") {
      return <RandomHitDraft product={props.product} />;
    } else if (props.product.breakType === "Division Random") {
      return <RandomTeam product={props.product} />;
    } else {
      return <div></div>;
    }
  };

  return (
     <div>{props.product ? <BreakRandomizer /> : <p>Loading......</p>}</div>
  );
}
