const giftPresentBox = require('./forfunMessage/NanaMessage').giftPresentMessage;

module.exports.run = async (client, message, args) => {
    let random_msg = Math.floor(Math.random()*giftPresentBox.length);
    message.channel.send(giftPresentBox[random_msg]);
}
module.exports.help = {
    name: "eat"
}