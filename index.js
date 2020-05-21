const Discord = require("discord.js");
var schedule = require('node-schedule');
const client = new Discord.Client();
var prefix = ("'");

client.login("hidden_token");

client.on("ready", () => {
    client.user.setActivity("Ramadan mubrak", {type: "WATCHING"});

    const channel = client.channels.get('598206883106652176');
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
                    "**• 'scam <numéro>** *cherche dans nos bases de données si le numéro est une arnaque.*\n **• 'scam add <numéro>** *ajoute un numéro de téléphone à notre base de données d'arnaques.*")

                .setFooter(`WinTea | Tea, Org.`)            
            message.channel.send(help);
            break;

        case "scam":
            var help_arg_list = message.content.split(" ").slice(1);
            var help_arg = help_arg_list.join(" ");
            
            switch (help_arg_list[0]) {
                case 'add':
                    var add_arg = help_arg_list.slice(1).join(" ");
                    message.channel.send(add_arg);
                    break;
                default:
                    message.channel.send(help_arg);
                    break;
            }
            
            var report_embed_joueur = new Discord.RichEmbed()
                .setColor("#992D22")
                .setTitle("Report - Ati Community")
                .setDescription("Votre report a été envoyer au support du serveur. Vous receverez une réponse sous peu.")
                .addField("Motif du report", report_args)
                .setFooter("Ati Community")
                .setTimestamp()
                default:
            message.delete();
            client.channels.findAll('name', 'report').map(channel => channel.send(report_embed_admin));
            message.author.createDM().then(channel => {
                channel.send(report_embed_joueur)
            });
            break;
        
    }
});


var j = schedule.scheduleJob('0 0 0 * * *', function(){
    const channel = client.channels.get('598206883106652176');
    channel.send('Bonne année');
});
var k = schedule.scheduleJob('0 16 2 * * *', function(){
    const channel = client.channels.get('598206883106652176');
    channel.send('miboun time');
});
var l = schedule.scheduleJob('0 44 6 * * *', function(){
    const channel = client.channels.get('598206883106652176');
    channel.send('onoff time');
});
var m = schedule.scheduleJob('0 56 7 * * *', function(){
    const channel = client.channels.get('598206883106652176');
    channel.send('onoff time');
});