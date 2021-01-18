const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = ("!");
const ownerID = ("yourID"); // servira + tard

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    try{
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, msg, args);

    } catch (e) { //log en cas d'un erreur ou d'une commande qui existe pas
        console.log(e.stack);
    }
});

client.on('ready', () => {
    client.user.setActivity("!help");
    console.log("Lancé");
});

client.login(process.env.TOKEN);
