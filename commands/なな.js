const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setDescription('```yaml\n關於 ななちゃん\n年齡 13\n生日 12/24日\n星座 射手座\n開發人員 !Violet\n你說想邀請我到妳的伺服器? 好呀~\nㄩㄇ　  ...こんにちわ！\n更多指令 !nana```')
    .setColor('#00ACCE')
    message.channel.send(embed);
}
module.exports.help = {
    name: "なな"
}