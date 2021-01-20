

exports.run = (client, message, args) => {

let résultat = ["Je ne crois pas", "Sûrement pas !", "Bien sûr.. quoi que non.", "Oh peut-être !", "Probablement..", "Mais bien sûr DIDIER !",'BIEN SÛR!',"je ne pense pas","laisse moi réfléchir...", "redemande moi plus tard là je suis en pleine partie de LoL"];
          message.channel.send(" **Réponse :** "+ résultat[Math.floor(Math.random() * résultat.length)] + " ")
}
