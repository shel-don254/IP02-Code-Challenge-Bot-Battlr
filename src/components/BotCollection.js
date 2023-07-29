// components/BotCollection.js
import React, { useState, useEffect } from "react";
import { fetchBots } from "../services/api";

const BotCollection = ({ addToBotArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bots data from the server and update the state
    const getBots = async () => {
      const botsData = await fetchBots();
      setBots(botsData);
    };
    getBots();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {/* Render the list of bots */}
      {bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          {/* Add bot to the army */}
          <button onClick={() => addToBotArmy(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
