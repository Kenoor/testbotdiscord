const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('id : ' + client.user.id)
    console.log('username : ' + client.user.username)
    console.log('email : ' + client.user.mail)
    console.log('Bot ? ' + client.user.bot)
    console.log("Servers : " + client.guilds.size)
    console.log('Membres : ' + client.users.size)
    console.log('Created at : ' + client.user.createdAt)
    console.log('Presence : ' + client.user.presence.status)
    console.log('Avatar : ' + client.user.AvatarURL)
});
client.login('NjQ4OTgzMTkzMzIzNTY5MTYy.Xd2L2A.r_ApI3yUxfsfKlScQLC-1cP3rio');