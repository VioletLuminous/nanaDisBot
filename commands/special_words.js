const Discord = require("discord.js");

const getHelloBox = require('./forfunMessage/NanaMessage.js').getHelloMessage;
const helloBox = require('./forfunMessage/NanaMessage.js').helloMessage
const randomBox = require('./forfunMessage/NanaMessage.js').randomMessage;
const colorBox = require('./forfunMessage/NanaMessage.js').colorMessage;
const aruBox = require('./forfunMessage/NanaMessage.js').aruMessage;
const utusBox = require('./forfunMessage/NanaMessage.js').utusMessage;

function getRandom(x){
    return Math.floor(Math.random()*x);
  };
module.exports.run = async (client, message, args) => {

    if(message.content.indexOf("打") != -1){
        if(Math.random() > 0.5){
            let random_msg = getRandom(utusBox.length);
            message.channel.send(utusBox[random_msg]);
        }
    }
    if(message.content.indexOf("有") != -1){
        if(Math.random() > 0.5){
            let random_msg = getRandom(aruBox.length);
            message.channel.send(aruBox[random_msg]);
        }
    }
    //機率 OK
    if(message.content.indexOf("機率") != -1){
        if(Math.random() > 0.2){
            let random_msg = getRandom(randomBox.length);
            var randomBox_msg =  getRandom(101) + '%';
            var probabilityMsg = randomBox[random_msg];
            
            if(Math.random() > 0.8){
                randomBox_msg = '~~' + randomBox_msg + '~~';
            }
            message.channel.send(probabilityMsg.replace("{{prop}}", randomBox_msg));
        }
    }
    //顏色 OK
    if(message.content.indexOf("顏色") != -1){
        let random_msg = getRandom(colorBox.length);
        message.channel.send(colorBox[random_msg]);
        }
    // Hello
    for(var i = 0; i < getHelloBox.length;i++){
        if(message.content.indexOf(getHelloBox[i]) != -1){
            let random_msg = getRandom(helloBox.length);
            let helloMsg = helloBox[random_msg];
            message.channel.send(helloMsg.replace("{{user}}", message.author));
            break;
        }
    }
}
module.exports.help = {
    name: "special_words"
}
