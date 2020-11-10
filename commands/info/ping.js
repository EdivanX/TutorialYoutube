const Discord = require("discord.js");

module.exports = {
  name: 'ping',
  aliases: [],
  run: async (client, message, args) => {
    message.reply('pong :)')
  }
}
