const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    firstMember = message.mentions.members.first();
    if(!firstMember) return message.reply("Please mention a valid member of this server");
    else{
      let messageEmbed = new Discord.RichEmbed()
      .setDescription(firstMember + " Information")
      .setThumbnail(firstMember.user.displayAvatarURL)
      .addField("Created On ", firstMember.user.createdAt)
      .addField("Joined On", firstMember.joinedAt)
      message.channel.send(messageEmbed);
      }
}
module.exports.help = {
    name: "memberinfo"
}