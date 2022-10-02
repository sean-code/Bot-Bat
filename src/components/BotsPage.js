import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
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

  return (
    <div>
      <YourBotArmy bots={chooseBots} />
      <BotCollection bots={bots} addBotsArmy={addBotsArmy} />
    </div>
  )
}

export default BotsPage;
