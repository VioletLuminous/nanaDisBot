const Discord = require("discord.js");

module.exports.run = async(client, message, args )=> {
    //if (message == "!test")
    console.log("args 0 " + args[0]);  //@<first>
    console.log("args 1 " + args[1]);  //@<second>
    console.log("args 2 " + args[2]);  //message OR @<third>
   return;
}

module.exports.help = {
    name: "test"
}