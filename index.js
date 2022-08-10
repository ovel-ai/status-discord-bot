const Discord = require('discord.js');
const config = require(`./config.json`);
const db = require('quick.db')


// dont mind this

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES', 'GUILD_BANS', 'GUILD_MESSAGE_REACTIONS'], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

console.log("index runing . . .")

client.snipes = new Discord.Collection();
client.commands = new Discord.Collection();
client.slash = new Discord.Collection();
client.events = new Discord.Collection();
global.invitedBy = new db.table("InvitedByInfo")
global.dir = __dirname;
client.embedColor = "#0099ff"

global.error = "<:No:979776354486726726>"
global.success = "<:yes:964979709945470977>"

require(`./handlers/event_handler`)(client);
require(`./handlers/command_handler`)(client);
require(`./handlers/anti_crash`)(process);


if(config.settings.consoleSave) require(`./logs/console.log`)()

client.login(config.bot.token);

