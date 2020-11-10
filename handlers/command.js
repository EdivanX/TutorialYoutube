const fs = require("fs");
const Discord = require("discord.js");

module.exports = (client) => {
  fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for (let file of comandos) {
      let puxar = require(`../commands/${local}/${file}`)

      if(puxar.name) {
        client.commands.set(puxar.name, puxar)
      }

      if(puxar.aliases && Array.isArray(puxar.aliases))
      puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    }
  })
}
