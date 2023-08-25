const Discord = require("discord.js")
const { REST } = require("discord.js")
const { Routes } = require("discord.js")
module.exports = async bot => {

    let command = [];

    bot.commands.forEach(async commands => {

        let slashCommand = new Discord.SlashCommandBuilder()
            .setName(commands.name)
            .setDescription(commands.description)
            .setDMPermission(commands.dm)
            .setDefaultMemberPermissions(commands.permission === "Aucune" ? null : commands.permission)

        if (commands.options?.length >= 1) {

             for(let i = 0; i < commands.options.length; i++) {
            
           slashCommand[`add${commands.options[i].type.slice(0, 1).toUpperCase() + commands.options[i].type.slice(1, commands.options[i].type.length)}Option`] (options => options.setName(commands.options[i].name).setDescription(commands.options[i].description).setRequired(commands.options[i].required))
            }
        }

        command.push(slashCommand)
    })

    const rest = new REST({version: "10"}).setToken(bot.token)

    await rest.put(Routes.applicationCommands("1117347558755418122"), {body: command})
    console.log(`Les slash commandes sont bien charge`)}   
