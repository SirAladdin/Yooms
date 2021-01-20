const ytdl = require ('ytdl-core');

exports.run = async (bot, message, args) => {
    if (!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal!")
    if (!message.guild.me) return message.channel.send("Je ne suis pas connecter")
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Je ne suis pas dans le même salon que vous!");
    message.guild.me.voiceChannel.leave();
    message.delete();



    

}