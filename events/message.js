const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "+"

module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    
 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
if(!commandfile) return;    
    commandfile.run(client,message,args);
  };

}
