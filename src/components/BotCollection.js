import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBotsArmy, deleteBotsArmy}) {
  // Your code here
  const robotsList = bots.map((bot)=>{
    return(
      <BotCard bot={bot} addBotsArmy={addBotsArmy} deleteBotsArmy={deleteBotsArmy} key={bot.id}>
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
