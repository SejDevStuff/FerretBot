/* This bot is designed by 87Ferrets
 * --> Developed by TuxThePenguin#5615 who is a developer for 87Ferrets
 * Current Version: 1.5.0
 * Last Updated: 02/08/2020
 */

const Discord = require('discord.js');
const client = new Discord.Client();
const profaneWords = require('./moderation_assets/profane.json');
var prefix = "~";

client.on('ready', () => {
  console.log(`Successfully logged in as Ferret`);
});

client.on('message', message => {

  global.help = function help() {
    message.channel.send("<@" + message.author.id + ">, check your DMs!")
    message.author.send(`
:wave: Hello! I am Ferret!
I am developed by **TuxThePenguin#5615** for 87Ferrets. Github: https://github.com/87FerretsDev/FerretBot

**Things I do:**
I am a fun and moderation bot and I make sure all 87Ferrets servers are kept clean as well as keeping their users entertained!

**What do I moderate?**
I watch for users using any foul language and I take action to punish them accordingly, this includes a mute after more than 2 instances of the user using foul language

**My Commands:**
My command prefix is **~**

**~help**   = Shows this help.

*I am offline for 8-9 days each month to give my developers time to work on important updates.*
    `);
  }

  if(message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    var msg_pure = message.content.replace(/[^a-zA-Z0-9 ]/g, "").toString().trim();
    try {
      global[msg_pure]();
    } catch (error) {
      message.channel.send("**Error: Command not found!** *Developer Information (this is only here for BETA versions): ``" + error + "``*");
    }
  }

  // --- PROFANE WORD DETECTION ---
var msg_pure = message.content.replace(/[^a-zA-Z0-9 ]/g, "").toString().trim();
for (let i = 0; i < profaneWords.length; i++) {
  const elem = profaneWords[i];
  const message_split = msg_pure.split(" ");
  for (let i = 0; i < message_split.length; i++) {
    const word = message_split[i];
    if (word.toLowerCase() == elem) {
      message.delete();
      const warning = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Profanity Detected!')
        .setDescription(`Woah, **${message.author.username}**! This is a family friendly server, don't use that language or you may get muted!`)
        .setFooter('I am still learning! If you feel wrongly judged, please PM one of the server admins and inform them of what you typed.')
      message.channel.send(warning);
      return;
    }
    if (word.toLowerCase().startsWith(elem)) {
      message.delete();
      const warning = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Profanity Detected!')
        .setDescription(`Woah, **${message.author.username}**! This is a family friendly server, don't use that language or you may get muted!`)
        .setFooter('I am still learning! If you feel wrongly judged, please PM one of the server admins and inform them of what you typed.')
      message.channel.send(warning);
      return;
    }
    if (word.toLowerCase().endsWith(elem)) {
      message.delete();
      const warning = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Profanity Detected!')
        .setDescription(`Woah, **${message.author.username}**! This is a family friendly server, don't use that language or you may get muted!`)
        .setFooter('I am still learning! If you feel wrongly judged, please PM one of the server admins and inform them of what you typed.')
      message.channel.send(warning);
      return;
    }
  }
}

});

client.login(process.env.DISCORD_TOKEN);
