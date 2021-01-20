const Discord = require("discord.js");

const exp = require ('../exp.json');


module.exports.run = async ( bot, message, args) => {
    if (!exp[message.author.id]) {
        exp[message.author.id]={
        exp : 0 ,
        niveau : 1
    };
}


let cExp = exp[message.author.id].exp;
let cNiv = exp[message.author.id].niveau;
let nextLevelup = cNiv * 100;
let expNeededForLevelUp = nextLevelup ;

let nivEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.addField('Niveau', cNiv, true)
.addField('Expérience', cExp, true)
.setFooter(`${expNeededForLevelUp} points d'exp requis pour le prochain niveau`);

message.channel.send(nivEmbed)
};