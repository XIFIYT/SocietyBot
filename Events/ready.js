const Discord = require("discord.js")
const loadSlashcommands = require("../Loaders/loadSlashcommands")
const loadDatabase = require("../Loaders/loadDatabase")



module.exports = async bot => {
    bot.db = await loadDatabase()

    bot.db.connect(function () {
        console.log("Connected to database")
    })


    await loadSlashcommands(bot)
    
    let allcommands = [];
    await bot.commands.forEach(command => allcommands.push({commandName: command.name, commandUsage : command.utilisation, commandDescription: command.description}))

     console.log(`${bot.user.tag} is online !`)

    
}