const { MessageEmbed } = require("discord.js");
const { post } = require("node-superfetch");
const { config } = require("process");

module.exports = {
    name: "eval",
    category: "Owner",
    description: "Eval Code",
    run: async (client, message, args) => {
        if (message.author.id === config.settings.owner ) {
            
            const embed = new MessageEmbed()
                .addField("Input", "```js\n" + args.join(" ") + "```");
    
            try {
                const code = args.join(" ");
                if (!code) return message.channel.send("Please include the code.");
                let evaled;
    
                if (code.includes(`SECRET`) || code.includes(`TOKEN`) || code.includes("process.env")) {
                    evaled = "No, shut up, what will you do it with the token?";
                } else {
                    evaled = await eval(code);
                }
    
                if (typeof evaled !== "string") evaled = await require("util").inspect(evaled, { depth: 0 });
    
                let output = clean(evaled);
                if (output.length > 1024) {
                   
                    const { body } = await post("https://hastebin.com/documents").send(output);
                    embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("#FF0000");
                  
                } else {
                    embed.addField("Output", "```js\n" + output + "```").setColor("#FF0000");
                }
    
                message.channel.send({embeds: [embed]});
    
            } catch (error) {
                let err = clean(error);
                if (err.length > 1024) {
                   
                    const { body } = await post("https://hastebin.com/documents").send(err);
                    embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED");
                } else {
                    embed.addField("Output", "```js\n" + err + "```").setColor("RED");
                }
    
                message.channel.send({embeds: [embed]});
            }
        } else {
            message.channel.send({
                embeds: [
                    new MessageEmbed()
                        .setTitle("Error")
                        .setDescription("You are not the owner of this bot.")
                        .setColor("RED")
                        .setFooter("sus", client.user.displayAvatarURL({
                            format: "png",
                            dynamic: true,
                            size: 1024
                        }))
                ]
            })
        }
    }
}
function clean(string) {
    if (typeof text === "string") {
        return string.replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
    } else {
        return string;
    }
                            }