const Discord = require("discord.js");

const client = new Discord.Client();
const config = require("../config.json");

const prefix= (config.prefix)

const quizz = require ("../quizz.json")



exports.run = (client, message, args) => {
        
    
      
       
      if (message.author.bot) return;
      
      number = 37;
        var random = Math.floor (Math.random() * (number - 1+1))+1;
        switch(random){
            case 1: message.channel.send (quizz.q1); cAnswer = quizz.r1; break;
            case 2: message.channel.send (quizz.q2); cAnswer = quizz.r2; break;
            case 3: message.channel.send (quizz.q3); cAnswer = quizz.r3; break;
            case 4: message.channel.send (quizz.q4); cAnswer = quizz.r4; break;
            case 5: message.channel.send (quizz.q5); cAnswer = quizz.r5; break;
            case 6: message.channel.send (quizz.q6); cAnswer = quizz.r6; break;
            case 7: message.channel.send (quizz.q7); cAnswer = quizz.r7; break;
            case 8: message.channel.send (quizz.q8); cAnswer = quizz.r8; break;
            case 9: message.channel.send (quizz.q9); cAnswer = quizz.r9; break;
            case 10: message.channel.send (quizz.q10); cAnswer = quizz.r10; break;
            case 11: message.channel.send (quizz.q11); cAnswer = quizz.r11; break;
            case 12: message.channel.send (quizz.q12); cAnswer = quizz.r12; break;
            case 13: message.channel.send (quizz.q13); cAnswer = quizz.r13; break;
            case 14: message.channel.send (quizz.q14); cAnswer = quizz.r14; break;
            case 15: message.channel.send (quizz.q15); cAnswer = quizz.r15; break;
            case 16: message.channel.send (quizz.q16); cAnswer = quizz.r16; break;
            case 17: message.channel.send (quizz.q17); cAnswer = quizz.r17; break;
            case 18: message.channel.send (quizz.q18); cAnswer = quizz.r18; break;
            case 19: message.channel.send (quizz.q19); cAnswer = quizz.r19; break;
            case 20: message.channel.send (quizz.q20); cAnswer = quizz.r20; break;
            case 21: message.channel.send (quizz.q21); cAnswer = quizz.r21; break;
            case 22: message.channel.send (quizz.q22); cAnswer = quizz.r22; break;
            case 23: message.channel.send (quizz.q23); cAnswer = quizz.r23; break;
            case 24: message.channel.send (quizz.q24); cAnswer = quizz.r24; break;
            case 25: message.channel.send (quizz.q25); cAnswer = quizz.r25; break;
            case 26: message.channel.send (quizz.q26); cAnswer = quizz.r26; break;
            case 27: message.channel.send (quizz.q27); cAnswer = quizz.r27; break;
            case 28: message.channel.send (quizz.q28); cAnswer = quizz.r28; break;
            case 29: message.channel.send (quizz.q29); cAnswer = quizz.r29; break;
            case 30: message.channel.send (quizz.q30); cAnswer = quizz.r30; break;
            case 31: message.channel.send (quizz.q31); cAnswer = quizz.r31; break;
            case 32: message.channel.send (quizz.q32); cAnswer = quizz.r32; break;
            case 33: message.channel.send (quizz.q33); cAnswer = quizz.r33; break;
            case 34: message.channel.send (quizz.q34); cAnswer = quizz.r34; break;
            case 35: message.channel.send (quizz.q35); cAnswer = quizz.r35; break;
            case 36: message.channel.send (quizz.q36); cAnswer = quizz.r36; break;
            case 37: message.channel.send (quizz.q37); cAnswer = quizz.r37; break;
        }

        message.react('1️⃣').then(() => message.react('2️⃣').then(()=> message.react('3️⃣')));

        const filter = (reaction, user) => {
          return ['2️⃣', '1️⃣','3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();
        
            if (reaction.emoji.name === cAnswer) {
              message.reply("GG! C'est la bonne réponse !");
            } else {
              message.reply("Désolé ! Mais tu as faux !");
            }
          })
          .catch(collected => {
            message.reply("Vous n'avez pas répondu dans les délais");
          });
          
      }
    
            