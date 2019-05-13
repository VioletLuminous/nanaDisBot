var fs = require('fs');

const mFilePos = "./commands/forfunMessage/more.json";
var more = JSON.parse(fs.readFileSync(mFilePos, "utf8"));

module.exports.run = async (client, message, args) => {

    //!warn @daeshan <reason>

}
module.exports.help = {
    name: "addmore"
}