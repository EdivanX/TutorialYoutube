const Discord = require("discord.js");

module.exports = (client) => {
  console.log('Iniciado com sucesso!')

  var barrastats = [
    {name: 'Estou muito feliz(aqui vc coloca a msg)', type: 'STREAMING', url: 'https://www.twitch.tv/tutorialbot'}
  ]
  function setStatus() {
    var stadfsdv = barrastats[Math.floor(Math.random() * barrastats.length)]
    client.user.setActivity(stadfsdv)
  }
  setStatus()
  setInterval(() => setStatus(), 1900)
} 
