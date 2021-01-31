const Discord = require('discord.js');
const bot = new Discord.Client()

const alpike = new Discord.ShardingManager('./bot.js', {
    totalShards: 2,
    token: process.env.token
});

alpike.spawn(); 

alpike.on('launch', shard => {
    console.log(`${shard.id}. Shard açıldı.`);
});

setTimeout(() => {
    alpike.broadcastEval("process.exit()");
}, 21600000);

