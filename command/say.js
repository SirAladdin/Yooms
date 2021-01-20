


exports.run = (client, message, args) => {
    let say = args.join (' ')
    message.delete()
    
    if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Euh ?! Tu te prend pour qui pour me donner des ordres ?");
    message.channel.send(say)
    }
    
    