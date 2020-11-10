const Discord = require("discord.js");

module.exports = {
  name: 'ajuda',
  aliases: ['help'],
  run: async (client, message, args) => {
    //Lembrando você pode usar essa base de reaction collector para outros comandos!
    let embed = new Discord.MessageEmbed()
    .setTitle(`Central de comandos`)
    .setDescription(`aperte em uma reação pra ver tal comandos(ex: :thumbsup: Moderação)`)
    message.channel.send(embed).then(msg => {
      msg.react("1️⃣")
      msg.react("2️⃣")

      let filtro1 = (r, u) => r.emoji.name === '1️⃣' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '2️⃣' && u.id === message.author.id;

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Editado com sucesso!`)

        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Editado denovo rss`)

        msg.edit(embed)
      })
    })
  }
}
