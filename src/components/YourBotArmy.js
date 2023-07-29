// components/YourBotArmy.js
import React from "react";
import { deleteBot } from "../services/api";

const YourBotArmy = ({ botArmy, removeFromBotArmy }) => {
  const dischargeBotForever = async (botId) => {
    // Delete bot from the backend
    await deleteBot(botId);
    // Remove bot from the army
    removeFromBotArmy(botId);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      {/* Render the enlisted bots */}
      {botArmy.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          {/* Remove bot from the army */}
          <button onClick={() => removeFromBotArmy(bot.id)}>Release</button>
          {/* Discharge bot forever */}
          <button onClick={() => dischargeBotForever(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
