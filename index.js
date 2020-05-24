const Discord = require("discord.js");
var schedule = require('node-schedule');
const request = require('request');
const client = new Discord.Client();
var prefix = ("'");


client.on("ready", () => {
    client.user.setActivity("Ramadan mubrak", {type: "WATCHING"});

    const channel = client.channels.get('705527547579859004');
    //channel.send('isibe fi omok el 9a7ba');

    console.log('On Discord!');
});

client.on("message", message => {
    var client_icone = client.user.displayAvatarURL;

    var args = message.content.substring(prefix.length).split(" ");

    if(!message.content.startsWith(prefix)) return;

    switch (args[0].toLowerCase()){
        case "help":
        default:
            var help = new Discord.RichEmbed()
                .setColor("#992D22")
                .setThumbnail(client_icone)
                .setTitle("مساعدة")
                .addField(
                    "Liste des commandes", 
                    "**• 'help** *affiche le message d'aide.*")
                
                .addField(
                    "Liste des commandes scam",
                    "**• 'scam <numéro, nom, site, mail>** *cherche dans nos bases de données si le numéro est une arnaque.*\n **• 'scam add <numéro, nom, site, mail>** *ajoute un numéro de téléphone à notre base de données d'arnaques.*")

                .setFooter(`WinTea | Tea, Org.`)
            message.channel.send(help);
            break;

        case "scam":
            var help_arg_list = message.content.split(" ").slice(1);
            var help_arg = help_arg_list.join(" ");
            
            switch (help_arg_list[0]) {
                case 'add':
                    var add_arg = help_arg_list.slice(1).join(" ");

                    
                break;
                default:
                    request('https://vaeup.kellis.fr/discordjs/list.php?number='+help_arg_list[0], function (error, response, body) {
                        if (body == "Error") {
                            var errorMessage = new Discord.RichEmbed()
                                .setColor("#FF0000")
                                .addField("Nous n'avons pas ce numéro dans nos bases de données. Si vous souhaitez l'ajouter, exécutez la commande:","**• 'scam add <numéro, nom, site, mail>**")
                                .setFooter(`WinTea | Tea, Org.`);
                            message.channel.send(errorMessage);
                        } else if (body.startsWith("Error2")) {
                            var bud = body.split("*");
                            var errorMessage = new Discord.RichEmbed()
                                .setColor("#FF0000")
                                .addField("Nous avons trouvé "+bud[1]+" résultats dans nos bases de données. Essayez d'être plus précis dans votre recherche.", "**• 'scam <numéro, nom, site, mail>**")
                                .setFooter(`WinTea | Tea, Org.`);
                            message.channel.send(errorMessage);
                        } else {
                            var bud = body.split("*");

                            var errorMessage = new Discord.RichEmbed()
                                .setColor("#00FF44")
                                .setTitle(bud[0])
                                .addField(
                                    "Site(s) internet:",
                                    bud[1]
                                )
                                .addField(
                                    "Numéro(s) de téléphone:",
                                    bud[2]
                                )
                                .addField(
                                    "Email(s):",
                                    bud[3]
                                )
                                .addField(
                                    "Autre(s) nom(s):",
                                    bud[4]
                                )
                                .setFooter(`WinTea | Tea, Org.`);
                            message.channel.send(errorMessage);
                        }
                    });
                break;
            }
            
            /*
            client.channels.findAll('name', 'report').map(channel => channel.send(report_embed_admin));
            message.author.createDM().then(channel => {
                channel.send(report_embed_joueur)
            });
            */
    }
});


var j = schedule.scheduleJob('0 0 0 * * *', function(){
    const channel = client.channels.get('705527547579859004');
    channel.send('Bonne année');
});
var k = schedule.scheduleJob('0 16 2 * * *', function(){
    const channel = client.channels.get('705527547579859004');
    channel.send('miboun time');
});
var l = schedule.scheduleJob('0 44 6 * * *', function(){
    const channel = client.channels.get('705527547579859004');
    channel.send('onoff time');
});
var m = schedule.scheduleJob('0 56 7 * * *', function(){
    const channel = client.channels.get('705527547579859004');
    channel.send('onoff time');
});
