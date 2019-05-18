const botT1_User = require('../NanaToken').discord_botT1_User;
module.exports.run = async (client, message, args) => {
    //if(!message.guild.id.size < 1) return message.reply("You must supply a Guild ID")
    if (message.author.id === botT1_User) {
        message.guild.leave()
        .then(g => console.log(`Left the guild ${g}`))
        .catch(console.error);
    }
    else{
        message.reply("You must is this bot owner.")
    }
}
module.exports.help = {
    name: "nanaLeaveGuild"
}