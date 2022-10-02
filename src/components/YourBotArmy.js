import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots}) {
  //your bot army code here...


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            bots.map((bot)=>{
            return(
              <BotCard key={bot.id} bot={bot}>
              </BotCard>
            )
          }
          )}
          <h2>Your Bot Army</h2>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
