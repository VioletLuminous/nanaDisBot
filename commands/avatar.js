const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let firstMember = message.mentions.members.first();
  if(!firstMember) return message.reply("Please mention a valid member of this server");
  else{
    let avatarImg = firstMember.user.displayAvatarURL;
    let sendImg = new Discord.RichEmbed()
    .setImage(avatarImg)
    message.channel.send(sendImg);
  }
}
module.exports.help = {
    name: "avatar"
}