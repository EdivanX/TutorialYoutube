module.exports = (client, message) => {
  if(message.author.bot) return;
  if(!message.channel.type === 'dm') return;

  let prefix = '!'

  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g)

  let cmd = args.shift().toLowerCase()
  if(cmd.length === 0) return;
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd))
  if(command) command.run(client, message, args)
}
