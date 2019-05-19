const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setDescription('```fix\n!myinfo 回傳自己資訊\n!avatar + @Tag 回傳自己頭像\n!ping 測試ping值\n!eat 隨機食物\n&... 有更多想要的功能可以提出```')
    .setColor('#00ACCE')
    message.channel.send(embed);
}
module.exports.help = {
    name: "nanahelp"
}