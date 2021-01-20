const { MessageEmbed } = require('discord.js');
const ytdl = require ('ytdl-core');

exports.run = async (client, message, args) => {

    const voiceChannel = message.member.voice.channel;

    const q = args.join(' ');

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription( ' Voici les 5 premières recherches pour \'${q}\`');



    if(voiceChannel){
        const player = client.music.players.spawn({
            guild : message.guild,
            voiceChannel : voiceChannel,
            textChannel : message.channel
        });




        
    }

}