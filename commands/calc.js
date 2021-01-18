const math = require("mathjs");
const Discord = require("discord.js");

exports.run = (client, msg, args, tools) => {
    if (!args[0]) return msg.channel.send("Entre un calcul :smile:");

    let resp;
    try{
        resp = math.evaluate(args.join(' '));
    } catch (e) {
        return msg.channel.send("Calcul Impossible. S'il te plaît entre un calcul correct !");
    }

    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setTitle('Calculatrice')
        .addField('Entrée', `\`\`\`js\n${args.join(' ')}\`\`\``)
        .addField('Sortie', `\`\`\`js\n${resp}\`\`\``)

    msg.channel.send(embed);
}