import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}) {
  // Your code here
  const robotsList = bots.map((bot)=>{
    return(
      <BotCard bot={bot}>
      </BotCard>
    )
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        <h2>Collection of all bots</h2>
        {robotsList}
      </div>
    </div>
  );
}

export default BotCollection;
