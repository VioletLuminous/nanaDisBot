const diceMessageBox = require('./forfunMessage/NanaMessage').diceMessage;
const throwMessageBox = require('./forfunMessage/NanaMessage').throwMessage;
function getRandom(x){
    return Math.floor(Math.random()*x);
}

module.exports.run = async (client, message, args) => {

    let random_msg = getRandom(diceMessageBox.length);
    let random_throw = getRandom(throwMessageBox.length);
    message.reply(throwMessageBox[random_throw] + diceMessageBox[random_msg]);
}

module.exports.help = {
    name: "dice"
}
