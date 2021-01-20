


exports.run = (client, message, args) => {
let recherche = args.join ('+')
message.reply(`https://www.google.fr/#q=${recherche}`)
}


