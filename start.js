const Discord = require('discord.js');
const ayarlar = require ('./ayarlar.json')
const client = new Discord.Client();

const moment = require('moment');
client.queue = new Map()
const express = require('express');
const http = require('http');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2800);

client.on("ready", async () => {
  
      require("./shard.js"); 

})



client.login(process.env.token);
client.on('ready', () => {
  console.log(`${client.user.tag} İsmi ile giriş yapıldı!`);
});
