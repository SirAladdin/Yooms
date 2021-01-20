
const Discord = require('discord.js');

const superagent = require ('superagent')


exports.run = async ( client , message , args )=>{ 


    const { body } = await superagent.get ("https://api.thecatapi.com/v1/images/search")

    message.channel.send(body[0].url)
}