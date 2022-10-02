import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

export default function BotsPage() {
  const [bots, setBots] = useState([]);
  const [chooseBots, setChooseBots] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8002/bots')
    .then((response)=> response.json())
    .then((data)=> setBots(data));
  }, []);

  function addBotsArmy(bot){
    setChooseBots((prevbot)=>{
      return [
        ...prevbot,bot
      ]
    })
  }

  function deleteBotsArmy(bot){
    const filterbots = bots.filter(
			(singlebot) => singlebot.id !==  bot.id
		);
    const   deleteConfig =  {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      } 
    }
    fetch(`http://localhost:8002/bots/${bot.id}`,deleteConfig)
      .then(()=>setBots(filterbots))
  }
  
    return (
      <div>
        <YourBotArmy bots={chooseBots} />
        <BotCollection bots={bots} addBotsArmy={addBotsArmy} deleteBotsArmy={deleteBotsArmy} />
      </div>
    )
}
