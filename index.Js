const Discord = require("discord.js");

const client = new Discord.Client();

const fs = require("fs");
const Enmap = require("enmap");
const config = require("./config.json");
const prefix= (config.prefix)
const exp = require ('./exp.json')
console.log("Ouverture du Grimoire...");

client.commands = new Discord.Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./command/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./command/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Chargement de la module ${commandName}`);
    client.commands.set(commandName, props);
  });
});


fs.readdir("./auto/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./Auto/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Chargement de la module automatique ${commandName}`);
    client.commands.set(commandName, props);
  });
});



client.on("ready", () => {
  
  console.log("fermeture du grimoire");
  console.log(`La Guardienne du Grimoire est ${client.user.tag}`);
});

client.login(process.env.token);


client.on("statut", () => {
  
  let resultat = ["attraper des poissons!", "Pk tu me regardes?!", "Osu", "Rien", "League of Legends"];
  client.user.setActivity(resultat[Math.floor(Math.random() * resultat.length)] );
})






    
client.on ('message',message => {
   
  let addxp = Math.floor(Math.random()* 5) +1;
  if (message.author.bot) return;
  if (!exp[message.author.id]){
      exp[message.author.id] = {
          exp: 0,
          niveau : 1
      }
  }
  
  
  let currentExp = exp[message.author.id].exp;
  let currentNiv = exp[message.author.id].niveau;
  let nextLevel = currentNiv * 100;
  
  
  exp[message.author.id].exp = currentExp + addxp;
  
  if(nextLevel <= currentExp){
      exp[message.author.id].niveau += 1;
      message.reply(`Gg! Tu es passé niveau ${currentNiv + 1}!`)
  }

  
  fs.writeFile('./exp.json', JSON.stringify(exp), err => {
    if (err) console.log(err)})})




