const Discord = require('discord.js');

const superagent = require ('superagent')

const osua = require ('./osu.json');

exports.run = async (client, message, args, user , name, fs) => {

    const { body } = await superagent.get ("https://osu.ppy.sh/api/get_user?u=w-scotty&k=acfb657e7bcf7f4bf594765502714efde42152b8")

const osu = require("node-osu");

const osuApi = new osu.Api('acfb657e7bcf7f4bf594765502714efde42152b8');

let pseudo = args[0];
const fs1 = require ("fs");

osuApi.apiCall('/get_user',  { u: pseudo}).then(user => { 
   
    
    let sembed = new Discord.RichEmbed()
    .setDescription("**Voici le profile Osu! de **", pseudo  )
    .setColor('BLUE')
    
    .addField("**Nom du profile**", user[0].username, true)
    let userId = user[0].user_id;
    

  
  
  
  
  

  
  
  
  
  
  
  
  
  
    osuApi.getUserBest({ u: pseudo }).then(scores  => {
        
        sembed
        .addField("meilleur scores", scores[0].score)
        
        .addField("avec un accuracy de", scores[0].accuracy)
        .addField('score', score);
        
    message.channel.send(sembed )})
    
})
}
