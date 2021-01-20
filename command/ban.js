exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "|Modérateur" || "🎗️|Fondateur");
    if (!modRole)
      return console.log("The Mods role does not exist");
  
    if (!message.member.roles.has(modRole.id))
      return message.reply("Vous n'avez pas le role requis pour éxecuter cette commande.");
  
    if (message.mentions.members.size === 0)
      return message.reply("veuillez mentionner un utilisateur!");
  
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("Je n'ai pas la permission de Kick!");
    
      if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Vous n'avez pas les droits!");
  
    const banMember = message.mentions.members.first();
  
    banMember.ban(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} a été banni avec succès`);
    });
  };