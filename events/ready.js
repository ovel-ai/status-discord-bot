const Discord = require('discord.js');
const chalk = require('chalk')
const config = require('../config.json')
const fs = require('fs')
const { default: axios } = require('axios')
const exec = require('child_process').exec;
let idkwhatisthis = false
module.exports = async (client) => {
    console.log(chalk.hex('#6b7dfb')(`Cloud Development`) + chalk.hex('#6b7dfb')(` is now online!`))
    console.log(`Logged in as: ${chalk.underline(client.user.tag)}`)
    console.log(`Save Console: ${config.settings.consoleSave ? chalk.green('true') : chalk.red('false')}`)
    console.log(`Node Status: ${config.settings.nodeStatus ? chalk.green('true') : chalk.red('false')}`)
    console.log(`Maintenance mode: ${config.settings.maintenance ? chalk.green('true ') : chalk.red('false')}`)
    console.log(`Auto Leave Guilds: ${config.settings.autoLeave ? chalk.green('true') : chalk.red('false')}`)
    console.log()

    const autorun = fs.readdirSync(`./autoRun`).filter(file => file.endsWith('.js'));
    autorun.forEach(file => {
        require(`../autoRun/${file}`)(client)
    });


    if(config.settings.updateFromGithub){
        setInterval(async () => {
            await exec(`git pull origin master`, async (error, stdout) => {
                let response = (error || stdout);
                if (!error) {
                    if (!response.includes("Already up to date.")){
                        console.log(`${chalk.red('[ GitHub ]')} Update found on github. downloading now!`);
                        await client.channels.cache.get(config.channelID.github).send({content: "**RESTARTING . . .**", embeds:[
                            new Discord.MessageEmbed()
                            .setTitle(`**[PULL FROM GITHUB]** New update on GitHub. Pulling.`)
                            .setColor(`BLUE`)
                            .setDescription(`Logs:\n\`\`\`\n${response}\`\`\``)
                        ]})
                        console.log(`${chalk.red('[ GitHub ]')} the new version had been installed. Restarting now . . .`)
                        process.exit()
                    }else {
                        if(!idkwhatisthis) {console.log(`${chalk.green('[ GitHub ]')} Bot is up to date\n`); idkwhatisthis = true}
                    }
                }else{
                    console.log(`${chalk.red('[ GitHub ]')} Error: ${error}\n`)
                }
            })
        }, 30000)
    }

    const ramdomstring = function () {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    const clientactivity = [
        `Cloud Network`,
        `i'm nothing but a bot`,
        `i'm a bot`,
        `what`,
        `message.reply('help')`,
        `${ramdomstring()}`
    ]
    client.user.setPresence({ status: "online" });
     setInterval(() => {
         client.user.setActivity(clientactivity[Math.floor(Math.random() * clientactivity.length)], { type: "WATCHING" })
     }, 10000)

    if(config.settings.autoLeave) client.guilds.cache.forEach(g => {
        if(g.id === config.settings.guildID) return
        g.leave().catch(console.error)
    })

    
}
