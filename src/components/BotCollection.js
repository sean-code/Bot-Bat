import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}) {
  // Your code here
  const robots = bots.map((bot)=>{
    return(
      <BotCard bot={bot}>
      </BotCard>
    )
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        <h1>Collection of all bots</h1>
        {robots}
      </div>
    </div>
  );
}

export default BotCollection;
