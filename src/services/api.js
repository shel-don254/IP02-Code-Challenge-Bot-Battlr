// services/api.js
const BASE_URL = 'http://localhost:3001';

export const fetchBots = async () => {
  const response = await fetch(`${BASE_URL}/bots`);
  return response.json();
};

export const deleteBot = async (id) => {
  const response = await fetch(`${BASE_URL}/bots/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
