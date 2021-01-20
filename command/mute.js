const Discord = require("discord.js");

const client = new Discord.Client();

exports.run = (client, message, args) => {
    
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES")){
      return message.reply("Vous n'avez pas les droits");}
     
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")){
      return message.reply("Vous n'avez pas les droits");}
      
      
      let role = message.guild.roles.find(r => r.name === "🔗|Prisonnier");

      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      
      // or the person who made the command: let member = message.member;
      
      // Add the role!
      member.addRole(role).catch(console.error);
      
  
      message.channel.send(`${member} est maintenant mute`);
}

  
    
   