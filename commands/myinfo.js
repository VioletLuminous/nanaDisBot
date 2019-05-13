const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    let messageEmbed = new Discord.RichEmbed()
    .setDescription(message.author + " Information")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Created On ", message.author.createdAt)
    .addField("Joined On", message.member.joinedAt)
    message.channel.send(messageEmbed);
}
module.exports.help = {
    name: "myinfo"
}