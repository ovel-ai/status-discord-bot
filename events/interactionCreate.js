const config = require('../config.json')
const Discord = require('discord.js')
const wait = require('node:timers/promises').setTimeout;
module.exports = async (client, interaction) => {
   
    if (!interaction.isCommand()) return;
    if (interaction.channel.id === '950030827167817798') return interaction.reply({ content: 'You can\'t use this command in this channel',  ephemeral: true });
        
        const command = client.slash.get(interaction.commandName);
        if (!command) return interaction.reply({ content: 'developers did a oops error', ephemeral: true });
        

        
        const args = [];
        
        for (let option of interaction.options.data) {
            if (option.type === 'SUB_COMMAND') {
                if (option.name) args.push(option.name);
                option.options?.forEach(x => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        
        try {
            command.run(client, interaction, args)
        } catch (e) {
            interaction.reply({ content: e.message });
        }
}