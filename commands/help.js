const Discord = require("discord.js");

exports.run = (client, msg, args) => {
    const aide0 = ("!calc [la formule a calculer]")
    const aide1 = (" + ; - ; * ; / \n sqrt(x) ; square(x)\n exp(x) ; ln(x) \n derivative('[formule]', '[variable]') \n simplify('[formule]')") 
    const aide2 = (" ")/*pour les fonctions*/
    const aide3 = (" arg(x) \n conj(x) \n im(x) \n re(x) ")
    const aide4 = (" sin (x) ; asin (x) \n cos (x) ; acos (x) \n tan (x) ; atan (x) \n\n *mettre après x : **deg** si x est en dégré ou **rad** si x est en radian*")
    const aide5 = (" ")/*Pour les matrices*/
    const aidefin = ("https://mathjs.org/docs/reference/functions.html")
        
        const embed = new Discord.MessageEmbed()
            .setTitle("Liste des commandes")
            .setColor(`#87CEEB`)
            .addField("Commande de calcul : ", `${aide0}`)
            .addField("Commandes classiques : ", `${aide1}`)
            //.addField("Pour les fonctions", `${aide2}`)
            .addField("Pour les complexes : ", `${aide3}`)
            .addField("Pour la trigo : ", `${aide4}`)
            //.addField("Pour les matrices", `${aide5}`)
            .addField("La liste est régulièrement mise à jour mais pour voir toutes les fonctions :", `${aidefin}`)
        msg.channel.send(embed);
}

//.addField("", `${aide}`)