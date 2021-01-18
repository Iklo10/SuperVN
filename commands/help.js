const Discord = require("discord.js");

exports.run = (client, msg, args) => {
    const aide1 = (" + ; - ; * ; / ; sqrt(x) ; square(x)\n exp(x) ; log(x)") 
    const aide2 = ("pour les fonctions")
    const aide3 = (" arg(x) \n conj(x) \n im(x) \n re(x) ")
    const aide4 = (" sin (x deg/rad) \n cos (x deg/rad) \n tan (x deg/rad)")
    const aide5 = ("La liste est régulièrement mise à jour mais pour voir toutes les fonctions :")
        
        const embed = new Discord.MessageEmbed()
            .setTitle("Liste des commandes")
            .setColor(`#87CEEB`)
            .addField("Commandes classique : ", `${aide1}`)
            .addField("Pour les complexes : ", `${aide3}`)
            //.addField("**- **", `${aide2}`)
            .addField("Pour la trigo : ", `${aide4}`)
            .addField("https://mathjs.org/docs/reference/functions.html", `${aide5}`)
        msg.channel.send(embed);
     
}