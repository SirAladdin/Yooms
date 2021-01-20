const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("../config.json");
const prefix= (config.prefix)




client.login(config.token);

client.on('message', message =>{
    if (message.isMentioned(client.user)) { message.channel.send( "Pour consulter la liste des commandes disponible fait : ``+help`` ^^ ");}})
    


client.on('message', message =>{
    if(message.author.bot)return;
  if (message.content=== "Karim"||message.content ==='karim'){ let resultat = ["Le BOUG BG", "Le BOUG MOCHE", "LE BOUG CON", "LE BOUG SYMPA", "LE BOUG AUTISTE", "LE BOUG AIMABLE"];
  message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );
  }})


  client.on('message', message =>{
    if(message.author.bot)return;
  if (message.content=== "Vishnou"||message.content ==='vishnou'||message.content ==='aladdin'||message.content ==='Aladdin'){ let resultat = ["Le main Yuumi reconverti en main VelKoz/Séraphine issou", "Cherche sa Jasmine"];
  message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );
  }})


  client.on('message', message =>{
    if(message.author.bot)return;
  if (message.content=== "Florian"||message.content ==='florian'||message.content ==='flo'||message.content ==='Flo'){ let resultat = ["Il doit être avec sa meuf... euh pardon SES meufs :)", "Si vous voulez lui send des Nudes c'est pas ici !", "Il farm... (il farm quoi?) bah des meufs logik"];
  message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );
  }})



  client.on('message', message =>{
    if(message.author.bot)return;
  if (message.content=== "Walid"||message.content ==='walid'||message.content ==='wawad'){ let resultat = ["Il est parti chercher du pain il n'est toujours pas revenu! ", "Vous le cherchez ? Il doit surement être sur la lune", "Blocus ? non! il ne connait pas ! il rentre !", "3,2,1... Décollage !!!!!!!!", "Il cherche des matiriaux primaires sur la lune !"];
  message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );
  }})


 client.on('message', message =>{
    if(message.author.bot)return;
  if (message.content=== "Vidur"||message.content ==='vidur'){
  message.channel.send("https://youtu.be/9pn38Fm7Pg4");
  }})




  client.on('message', message =>{
    if(message.author.bot)return;
    if (message.content ==='Salut' ||message.content ==="slt"||message.content ==='salut'||message.content ==='bonjour'||message.content ==='Bonjour'||message.content ==='bonsoir'||message.content ==='Bonsoir'||message.content ==='Yo'||message.content ==='yo'||message.content ==="wsh"){
     
    let resultat = ["Oh salut ^^", "Bonjour ^^", "Salut", "Yo!", "Wesh la famille"];
    message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );
    }})


    client.on('message', message =>{
      if(message.author.bot)return;
    if (message.content=== "KARIM"){ ;
    message.delete();
    }})



   
      client.on('message', message =>{
        if(message.author.bot)return;
        if (message.content === "Bonne nuit Yuumi" ||message.content === "Bonne nuit yuumi"||message.content === "bonne nuit yuumi"||message.content === "bonne nuit Yuumi"||message.content === "Bonne nuit"||message.content === "bonne nuit"||message.content === "Bn"||message.content === "bn"||message.content === "Bonne n8"){
        message.channel.send("Bonne nuit a toi aussi et surtout repose toi bien ! :heart: ")}})


     
     
    client.on('message', message =>{
      if(message.author.bot)return;
      if (message.content === "nicox"){
        message.channel.send("Le plus beau des plus moches",{
          files: [{
            attachment: 'auto/image/nicox.jpg',
            name: 'nicox.jpg'
          }]
        }).then(msg=> msg.delete(5000)); }})

        client.on('message', message =>{
          if(message.author.bot)return;
          if (message.content === "Cheh" || message.content === "cheh" ){
            let resultat = ["https://tenor.com/view/conasse-french-dans-ta-gueule-gif-12369176", "https://tenor.com/view/cheh-bienfaits-duh-gif-12323680", "https://tenor.com/view/bam-salt-bae-sprinkle-chef-tada-gif-12226725"];
            message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );}})
  
            client.on('message', message =>{
              if(message.author.bot)return;
              if (message.content === "Karma" || message.content === "karma" ){
                let resultat = ["https://media.giphy.com/media/US7bI6dsvcV97Jeg5J/giphy.gif", "https://media.giphy.com/media/3o6fJgK0wyDfbb8v4Y/giphy.gif", "https://media.giphy.com/media/3o6fJgK0wyDfbb8v4Y/giphy.gif", "https://media.giphy.com/media/pyvi4LQssXukJSTtlz/giphy.gif", "https://media.giphy.com/media/TEmS0lYexSeFKMYlEz/giphy.gif"];
                message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );}})
      


                client.on('message', message =>{
                  if(message.author.bot)return;
                  if (message.content === "Wasted" || message.content === "wasted" ){
                    let resultat = ["https://media.giphy.com/media/RLi2oeVZiVkE8/giphy.gif", "https://media.giphy.com/media/mw8HkELEB4tna/giphy.gif", "https://media.giphy.com/media/uAH7abSiUAlPO/giphy.gif", "https://media.giphy.com/media/w29hHnsoaqsy4/giphy.gif", "https://media.giphy.com/media/uMWIZ4uioxFja/giphy.gif","https://media.giphy.com/media/b6Lk0eDhFaJuE/giphy.gif","https://media.giphy.com/media/12fFFvFOaffWww/giphy.gif","https://media.giphy.com/media/kR6Z8F50TIEr6/giphy.gif","https://media.giphy.com/media/Qi2pBNdPf76QU/giphy.gif"];
                    message.channel.send(resultat[Math.floor(Math.random() * resultat.length)] );}})
             
    


            client.on('messageDelete', async message => {
              // ignore direct messages

              if (message.content === "+snipe" ){
              if (!message.guild) return;
              const fetchedLogs = await message.guild.fetchAuditLogs({
                limit: 1,
                type: 'MESSAGE_DELETE',
              });
              // Since we only have 1 audit log entry in this collection, we can simply grab the first one
              const deletionLog = fetchedLogs.entries.first();
            
              // Let's perform a coherence check here and make sure we got *something*
              if (!deletionLog) return MessageChannel.channel.send(deletionlog);
            
              // We now grab the user object of the person who deleted the message
              // Let us also grab the target of this action to double check things
              const { executor, target } = deletionLog;
            
            
              // And now we can update our output with a bit more information
              // We will also run a check to make sure the log we got was for the same author's message
              
            }});