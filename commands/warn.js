const Discord = require('discord.js');
const ms = require('ms');
const fs = require('fs');

const warnsFilePos = "./commands/forfunMessage/warnings.json";
var warns = JSON.parse(fs.readFileSync(warnsFilePos, "utf8"));


module.exports.run = async (client, message, args) => {

    //!warn @daeshan <reason>
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Couldn't find them yo");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
    let reason = args.join(" ").slice(22);
  
    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };
  
    warns[wUser.id].warns++;
  
    fs.writeFile(warnsFilePos, JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });
  
    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);
  
    let warnchannel = message.guild.channels.find(channels => channels.name === "incidents");
    if(!warnchannel) return message.reply("Couldn't find 'incidents' channel");
    warnchannel.send(warnEmbed);

    if(warns[wUser.id].warns == 1)
    {
        let muterole = message.guild.roles.find(role => role.name === "muted");
        if(!muterole) return message.reply("You should create that 'muted' role dude.");

        let mutetime = "10s";
        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily muted`);

        setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> has been unmuted.`)
        }, ms(mutetime))
    }
    if(warns[wUser.id].warns == 2)
    {
        let muterole = message.guild.roles.find(role => role.name === "BAN");
        if(!muterole) return message.reply("You should create that 'BAN' role dude.");

        let mutetime = "30s";
        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily BAN`);

        setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> has been BAN.`)
        }, ms(mutetime))
    }
    if(warns[wUser.id].warns > 2)
    {
        let muterole = message.guild.roles.find(role => role.name === "BAN");
        if(!muterole) return message.reply("You should create that 'BAN' role dude.");

        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily BAN`);
    }
}

module.exports.help = {
    name: "warn"
}
