const Discord = require("discord.js");
const fs = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync('./commands/');

['aliases', 'commands'].forEach(x => (client[x] = new Discord.Collection()));
['command', 'event'].forEach(x => require(`./handlers/${x}`)(client));

client.login('Token do seu bot')
