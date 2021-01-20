exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "|Modérateur" || "🎗️|Fondateur");
    if (!modRole)
      return console.log("The Mods role does not exist");
  
    if (!message.member.roles.has(modRole.id))
      return message.reply("Vous n'avez pas le role requis pour éxecuter cette commande.");
  
    
  
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("Je n'ai pas la permission de Kick!");
    
      if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Vous n'avez pas les droits!");

      
  
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.tag+"a été débanni!");
                
                message.guild.unban(user).then(member => {
                    message.reply(`Le membre a été dé-banni avec succès`);
            });
        });
        })}
