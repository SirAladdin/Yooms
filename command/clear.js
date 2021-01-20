const Discord = require("discord.js");

const client = new Discord.Client();

exports.run = (client, message, args) => {
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
      return message.reply("Vous n'avez pas les droits");}
     
      if (!args[0]) return message.reply("syntaxe : +clear <Entrer le nombre de message à supprimer");
      
      message.channel.bulkDelete(args[0]).then(() =>{
          message.channel
          .send(`j'ai supprimé ***${args[0]} message*** pour vous!` )
          .then(msg=> msg.delete(5000));  });

 }

    
