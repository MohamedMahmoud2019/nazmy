const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538460605523165204")
setInterval(function() {
channel.send(`The kings is here`);
}, 30)
})

client.login(540267364164304897.c6l49poIJCEsVzspdPShdjlTdh8);
