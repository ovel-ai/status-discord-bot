const config = require('../config.json')
const Discord = require('discord.js')
const ping = require('ping')
module.exports = async (client) => {


    setInterval(async() => {
        let channel = client.channels.cache.get(config.channelID.nodeStatus)
        let msg = (await channel.messages.fetch({limit: 10})).filter(m => m.author.id === client.user.id).last()


        
        var node1ping = [config.PingIP.IP1];
        node1ping.forEach(function(node1png){
        ping.sys.probe(node1png, function(isAlive){
            var node1 = isAlive ? '<:serveronline:1003694099100078211> Operational':'<:serveroffline:1003693981223362642> Services Down';
 

        var node2ping = [config.PingIP.IP2];
        node2ping.forEach(function(node2png){
        ping.sys.probe(node2png, function(isAlive){
            var node2 = isAlive ? '<:serveronline:1003694099100078211> Operational':'<:serveroffline:1003693981223362642> Services Down';


        var panelping = [config.PingIP.IP3];
        panelping.forEach(function(pnlpng){
        ping.sys.probe(pnlpng, function(isAlive){
            var panel = isAlive ? '<:serveronline:1003694099100078211> Operational':'<:serveroffline:1003693981223362642> Services Down';

        var webping = [config.PingIP.IP4];
        webping.forEach(function(webpng){
            ping.sys.probe(webpng, function(isAlive){
                var web = isAlive ? '<:serveronline:1003694099100078211> Operational':'<:serveroffline:1003693981223362642> Services Down';

        var testpanelping = [config.PingIP.IP5];
        testpanelping.forEach(function(testpnlpng){
            ping.sys.probe(testpnlpng, function(isAlive){
                var testpanel = isAlive ? '<:serveronline:1003694099100078211> Operational':'<:serveroffline:1003693981223362642> Services Down';

              console.log(node1);
              console.log(node2);
              console.log(panel);
              console.log(web);

// CONFIG STARTS HERE - Change The Emoji;s Above and the Names Below. The Names are on the .setDescription Place.

        let embed = [
            new Discord.MessageEmbed()
            .setTitle(`IP Status:`)
            .setDescription(`**Status**\n\nNode 1: ${node1}\nNode 2: ${node2}\n\n**Misc Status**\n\nPanel: ${panel}\nWebsite:${web}\nBackup Server: ${testpanel}\n*Updating every \`${config.settings.nodeStatusDelay} seconds\`*`)
            .setColor(`#677bf9`)
            .setTimestamp()
            .setFooter({text: `Last Time Updated`})
        ]

        if(!msg) {
            channel.send({embeds: embed})
        }else {
            msg.edit({embeds: embed})
        }
        
    });}); }); });
});  }); }); }); }); }); 

    }, config.settings.nodeStatusDelay * 1000)
}


