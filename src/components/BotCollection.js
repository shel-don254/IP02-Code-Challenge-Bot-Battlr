
import React, { useState, useEffect } from "react";
import { fetchBots } from "../services/api";

const BotCollection = ({ addToBotArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const botsData = await fetchBots();
    setBots(botsData);
  };

  const renderBot = (bot) => (
    <div key={bot.id}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <button onClick={() => addToBotArmy(bot)}>Enlist</button>
    </div>
  );

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map(renderBot)}
    </div>
  );
};

export default BotCollection;
