const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Collection, Client } = require("discord.js");
const { token} = require("./config.json");
const config = require("./config.json");
const fs = require('fs')
const PREFIX = "$"
const activities = [
    ''
];


const client = new Discord.Client({ disableEveryone: true });

client.on("ready", () => {
console.log(`${client.user.tag} Online Shod.`)

//ACtivity
client.user.setPresence({ activity: { name: `ShadowMine Server` , type: 'WATCHING'}, status: 'online' })
});

//Messages
client.on('message', message =>{
        if(message.content === 'Hello')
   message.reply('Hello Bro') 
   if(message.content === 'Salam')
   message.reply('Salam Dash')
   if(message.content === 'salam')
   message.reply('Salam Dash')
   if(message.content === 'hello')
   message.reply('Hello Bro')
});





client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('$kick')) {

    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
     
      if (member) {

        member
          .kick('Kick')
          .then(() => {
          
            message.reply(`${user.tag} Ba Movafaqiat Kick Shod`);
          })
          .catch(err => {

            message.reply('Error');
            
            console.error(err);
          });
      } else {
        
        message.reply("In User Dar Server Nist . ");
      }
    
    } else {
      message.reply("Lotfan User Mored Nazar Ra Mention Konid");
    }
  }
});



client.on('message' , message => {

})















client.login(token)