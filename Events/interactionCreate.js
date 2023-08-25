const Discord = require("discord.js")
const votedMembers = new Set();
const ownerId = "";
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, StringSelectMenuBuilder } = require("discord.js")
const { TextInputBuilder, ModalBuilder,  TextInputStyle } = require("discord.js")

module.exports = async (bot, interaction, entry, message) => {

   if(interaction.commandName === "setstatus") {

      let choices = ["Listening", "Watching", "Playing", "Streaming", "Competiting"]
      let sortie = choices.filter(c => c.includes(entry))
      await interaction.respond(entry === "" ? sortie.map(c => ({name: c, value: c})) : sortie.map(c => ({name: c, value: c})))

   }

     if(interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete) {

        let entry = interaction.options.getFocused()

        if(interaction.commandName === "help") {
              
        
        let choices = bot.commands.filter(cmd => cmd.name.includes(entry))
        await interaction.respond(entry === "" ? bot.commands.map(cmd => ({name: cmd.name, value: cmd.name})) : choices.map(choices => ({name: choices, value: choices})))
      }
      }


     if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../Commandes/${interaction.commandName}.js`)
       
        if (command.ownerOnly && interaction.user.id != ownerId) return await interaction.reply('Seul le développeur du bot peut utiliser cette commande !');

        command.run(bot, interaction, interaction.options, bot.db)
      

    
}


}
