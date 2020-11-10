const Discord = require("discord.js");

module.exports = {
  name: 'kick',
  aliases: [],
  run: async (client, message, args) => {
    let canal = client.channels.cache.get("Coloquem o id do canal que vcs querem!")

    let usuário = message.mentions.members.first();
    if(!usuário) return message.reply(`Mencione um usuário!`)
    if(usuário === message.member) return message.reply(`Eu não posso te expulsar... pois foi você mesmo que executou o cmd!`)

    let motivo = args.slice(1).join(" ")
    if(!motivo) motivo = "Não informado"

    let banido = new Discord.MessageEmbed()
    .setTitle(`Expulsamento`)
    .setDescription(`Acabei de expulsar o usuário ${usuário.user.username} com sucesso! \nResponsavel: ${message.author}`)

    canal.send(banido)
    usuário.kick()
  }
}
