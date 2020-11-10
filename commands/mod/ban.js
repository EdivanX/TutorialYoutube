const Discord = require("discord.js");

module.exports = {
  name: 'ban',
  aliases: [],
  run: async (client, message, args) => {
    let canal = client.channels.cache.get("Coloquem o id do canal que vcs querem!")

    let usuário = message.mentions.members.first();
    if(!usuário) return message.reply(`Mencione um usuário!`)
    if(usuário === message.member) return message.reply(`Eu não posso te banir... pois foi você mesmo que executou o cmd!`)

    let motivo = args.slice(1).join(" ")
    if(!motivo) motivo = "Não informado"

    let banido = new Discord.MessageEmbed()
    .setTitle(`Banimento`)
    .setDescription(`Acabei de banir o usuário ${usuário.user.username} com sucesso! \nResponsavel: ${message.author}`)

    canal.send(banido)
    usuário.ban()
  }
}
