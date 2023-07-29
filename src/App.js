// App.js
import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import { fetchBots } from "./services/api";

const App = () => {
  const [botArmy, setBotArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch bots data from the server and update the state
    const getBots = async () => {
      const botsData = await fetchBots();
      setBots(botsData);
      setLoading(false); // Set loading to false once data is fetched
    };
    getBots();
  }, []);

  const addToBotArmy = (bot) => {
    // Check if the bot is already enlisted
    if (!botArmy.find((b) => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const removeFromBotArmy = (botId) => {
    // Remove bot from the army
    setBotArmy(botArmy.filter((bot) => bot.id !== botId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} addToBotArmy={addToBotArmy} />
      <YourBotArmy botArmy={botArmy} removeFromBotArmy={removeFromBotArmy} />
    </div>
  );
};

export default App;
