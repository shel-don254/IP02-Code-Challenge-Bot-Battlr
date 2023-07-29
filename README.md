# Bot Battlr - React Web App

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app.

## Introduction

For this project, we have built a React application that allows you to browse through a list of robots, view a robot's details, and enlist a bot into your army.

## Project Setup

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed.
3. In the project root directory, install the dependencies by running the following command:

npm install

4. Start the JSON server for the backend by running:

json-server --watch db.json --port 3001

5. Then

npm start

6. The application should open in your browser at http://localhost:3001/.

## Features

As a user, you can:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to your army by clicking on the "Enlist" button. The selected bot will render in the `YourBotArmy` component. The bot can be enlisted only once. The bot does not disappear from the `BotCollection`.
- Release a bot from your army by clicking on the "Release" button. The bot will disappear from the `YourBotArmy` component.
- Discharge a bot from your service forever by clicking the red "Discharge" button. This action will delete the bot both from the backend and from the `YourBotArmy` on the frontend.

### GET /bots

This endpoint returns the list of bots from the backend.

Example Response:

```json
[
{
 "id": 101,
 "name": "wHz-93",
 "health": 94,
 "damage": 20,
 "armor": 63,
 "bot_class": "Support",
 "catchphrase": "1010010101001101100011000111101",
 "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
 "created_at": "2018-10-02T19:55:10.800Z",
 "updated_at": "2018-10-02T19:55:10.800Z"
},

]
DELETE /bots/:id
This endpoint deletes the specified bot from the backend.


### COLLABORATORS
Mercy Nzau
```
