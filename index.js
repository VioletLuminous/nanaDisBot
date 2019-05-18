const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

const token = require('./NanaToken.js').discordToken;
const giftPresentBox = require('./commands/forfunMessage/NanaMessage.js').giftPresentMessage;
const prefix = "!";
client.commands = new Discord.Collection(); 

const helloBox = require('./commands/forfunMessage/NanaMessage.js').helloMessage

function getRandom(x){
  return Math.floor(Math.random()*x);
};

const fs = require("fs");
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});
/*=============顯示分支用函數
client.on('message', (msg)=>{
  console.log(msg); });*/

//------------------------顯示Bot已經開始運作--------------------------;
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log('Bot is already in run');
  console.log(` ${client.user.username} has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity('喵喵喵!', {type: "WATCHING"}); 
});

//-------------------------guildMemberAdd-----------------------------;
client.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
  let guild = member.guild; 
  let memberTag = member.user.tag; 
  if(guild.systemChannel){
    guild.systemChannel.send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
    .setTitle("A new user joined") // Calling method setTitle on constructor. 
    .setDescription(memberTag + ' has joined the guild') // Setting embed description
    .setTimestamp() // Sets a timestamp at the end of the embed
    .setThumbnail(member.user.displayAvatarURL) // The image on the top right; method requires an url, not a path to file!
    );
    let random_msg = getRandom(helloBox.length);
    let helloMsg = helloBox[random_msg];
    let send1 = (helloMsg.replace("{{user}}",member.user));
    let send2 = (".     ☆ 非常歡迎唷，請問有需要なな幫忙的事的嗎? ☆\n");
    random_msg = getRandom(giftPresentBox.length);
    let send3 = ("可以先坐下來吃點東西唷～　!eat" + giftPresentBox[random_msg]);
    guild.systemChannel.send(send1 + send2 + send3)
  }
});
// error handing
client.on('error', (err) => {
  console.log(err.message)
});
/*------------------------BOT joins function------------------------;
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
}); 

//-------------------------擷取訊息系統------------------------------;
client.on('message', msg => {
  const guildTag = msg.channel.type === 'text' ? `[${msg.guild.name}]` : '[DM]';
  const channelTag = msg.channel.type === 'text' ? `[#${msg.channel.name}]` : '';
  console.log(`${guildTag}${channelTag} ${msg.author.tag}: ${msg.content}`);
});
*/

//-----------------------message-----------------------;
client.on('message',async message => {
  // 跳過機器人 & DM 的對話
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArr = message.content.split(" ");
  let cmd = messageArr[0];
  let cmd_0 = cmd[0];
  let args = messageArr.slice(1);

  if(cmd_0 === prefix){
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) {
      //console.log(commandfile);
      commandfile.run(client, message, args);
    }
  }

  let special_words = client.commands.get('special_words');
  //console.log(special_words);
  special_words.run(client, message, args);

});
  client.login(token);

// Using Discord.js Stable

/*
const newUsers = [];

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 0) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find(channel => channel.name === "general").send("Welcome our new users!\n" + userlist);
    //guild.defaultChannel.send(`☆歡迎光臨 ${member} ☆`);
    newUsers[guild.id].clear();
  }
});

/*
client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

*/

/*

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name == 'member-log');
  // Do nothing if the channel wasn't found on this server
  cvkj
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

/*


//Github 別人離開的函數
/*guild.leave()
exports.run = (client, message, args, ops) => {

  if(!message.guild.id.size < 1) return message.reply("You must supply a Guild ID")
  if (message.author.id !== ops.ownerID) return
  message.guild.leave()
      .then(g => console.log(`Left the guild ${g}`))
       .catch(console.error);
}*/
