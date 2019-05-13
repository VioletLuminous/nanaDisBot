var fs = require('fs');

const warnsFilePos = "./commands/forfunMessage/warnings.json";
var warns = JSON.parse(fs.readFileSync(warnsFilePos, "utf8"));

module.exports.run = async (client, message, args) => {

    //!warn @daeshan <reason>
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply("Couldn't find them yo");


    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
      };
    fs.writeFile(warnsFilePos, JSON.stringify(warns), (err) => {
    if (err) console.log(err)
    });

    
    let warnlevel = warns[wUser.id].warns;
    if(!warnlevel) warnlevel == 0;
    message.reply(`${wUser} has ${warnlevel} warnings.`);
}
module.exports.help = {
    name: "warnlevel"
}
