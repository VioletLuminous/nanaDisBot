const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let voiletImg = "https://cdn.discordapp.com/avatars/537000902322552873/dfeb47c253df0a31923a483f05a4fdf9.png?size=2048";

    let sendViolet = new Discord.RichEmbed()
    .setImage(voiletImg)
    message.channel.send(sendViolet);
}
module.exports.help = {
    name: "Violet"
}