
const Discord = require("discord.js");

exports.run = (client, message, [mention, ...reason]) => {
   
     if (message.content.startsWith('+help')){
     let sembed = new Discord.RichEmbed()
     .setDescription("**Voici la liste des commandes disponible **"  + `${message.author.username}`)
     .setColor('BLUE')
     .setThumbnail(message.guild.iconURL)
     .addField("**+serveur**",'Affiche les informations du serveur' , true)
     .addField("**+play**", 'Met de la musique en vocal (uniquement via un lien)', true)
     .addField("**+stop**",'Arrete la musique en cours ' , true)
     
     .addField("**+google**",'Permet de faire des recherches' , true)
     .addField("**+8ball**", 'Répond aléatoirement a vos questions', true)
     .addField("**+quizz**", 'Yuumi vous pose une question et vous devez répondre avec la bonne réaction !', true)
     .setFooter("Fin")
     
     return message.channel.send(sembed);
     }
 
   

    }


