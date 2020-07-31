// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
const profaneWords = require('./moderation_assets/profane.json');

client.on('ready', () => {
  console.log(`Successfully logged in as Ferret`);
});

client.on('message', message => {
  if(message.author.bot) return;
  if (message.content === '~help') {
    message.author.send(":wave: Hey! I am Ferret. I am being re-written in JS for better performance so expect some commands not to work. \n\n**Who am I?**\nI am a Discord bot developed by *Tux The Penguin#5615* for 87Ferrets Servers. I am both a moderation and a fun bot!\n\n**What do I moderate?**\nI watch for users using profane language. I then take action to punish the user.\n\n**What are my commands?**\nI am still being developed, so no commands yet...");
  }
  for (let i = 0; i < profaneWords.length; i++) {
  const elem = profaneWords[i];
    if (message.content.toLowerCase().includes(elem)) {
      message.delete();
      const warning = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Profanity Detected!')
        .setDescription(`Woah, **${message.author.username}**! This is a family friendly server, don't use that language or you may get muted!`)
      message.channel.send(warning);
    }
  }
  
});
 
client.login(process.env.DISCORD_TOKEN);
