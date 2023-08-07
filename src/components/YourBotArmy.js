
import React from "react";
import { deleteBot } from "../services/api";

const YourBotArmy = ({ botArmy, removeFromBotArmy }) => {
  const handleDischargeBotForever = async (botId) => {
    try {
      await deleteBot(botId);  
      removeFromBotArmy(botId);  
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  const renderBot = (bot) => (
    <div key={bot.id}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <button onClick={() => removeFromBotArmy(bot.id)}>Release</button>
      <button onClick={() => handleDischargeBotForever(bot.id)}>Discharge</button>
    </div>
  );

  return (
    <div>
      <h2>Your Bot Army</h2>
      {botArmy.map(renderBot)}
    </div>
  );
};

export default YourBotArmy;
