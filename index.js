const Discord = require("discord.js");
var schedule = require('node-schedule');
const client = new Discord.Client();
var prefix = ("'");

client.login("NzEzMDIxOTEwMjQ1NDQxNTU2.XsaEJw.OeV8N2tKfTphp4aXIqr_ZFEME6E");

client.on("ready", () => {
    client.user.setActivity("Ramadan mubrak", {type: "WATCHING"});

    const channel = client.channels.get('598206883106652176');
    channel.send('isibe fi omok el 9a7ba');

    console.log('On Discord!');
});

client.on("message", message => {
    var client_icone = client.user.displayAvatarURL;

    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return;

    switch (args[0].toLowerCase()){
        case "aide":
            var client_creation = client.user.createdAt.toString().split(" ");
            var aide = new Discord.RichEmbed()
                .setColor("#FFFF00")
                .setThumbnail(client_icone)
                .setTitle("Fiche de renseignement sur le BOT")
                .addField("Liste des commandes", "**- //aide** *pour voir cette fiche.*\n **- //report** *pour envoyer un signalement à notre support.*\n **- //infoserveur** *pour voir les informations sur le serveur.*\n **- //infojoueur** *pour voir tes informations de ton compte Discord.*")
                .addField("Liste des commandes admin", "**- //info** *pour envoyer un message depuis le serveur de gestion dans le channel information.*\n **- //msg** *pour envoyer un message important à un/des joueur(s).*")
                .addField("A propos", "Ce BOT aide à l'orguanisation du serveur. Il est unique ! Vous ne le verrez que sur ce serveur *(ou sur ses partenariat)* !\n Ce BOT a été créer le " + client_creation[0] + " " + client_creation[2] + " " + client_creation[1] + " " + client_creation[3])
                .setFooter(`Ati Community | version : ${client_version}`)
                .setTimestamp()

            message.delete();
            message.author.createDM().then(channel => {
                channel.send(aide)
            });
        break;

        case "report":
            var report_find_args = message.content.split(" ").slice(1);
            var report_args = report_find_args.join(" ");

            if(!report_args) return message.reply("Veuillez inséré un motif.")
            
            var report_embed_joueur = new Discord.RichEmbed()
                .setColor("#FFFF00")
                .setTitle("Report - Ati Community")
                .setDescription("Votre report a été envoyer au support du serveur. Vous receverez une réponse sous peu.")
                .addField("Motif du report", report_args)
                .setFooter("Ati Community")
                .setTimestamp()
            
            message.delete();
            client.channels.findAll('name', 'report').map(channel => channel.send(report_embed_admin));
            message.author.createDM().then(channel => {
                channel.send(report_embed_joueur)
            });
        break;
        default:
            
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