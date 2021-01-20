


exports.run = (client, message, args) => {
  let botmessage = args.join("+");
  message.reply(`https://www.leagueofgraphs.com/fr/summoner/euw/${botmessage}`  )
}


