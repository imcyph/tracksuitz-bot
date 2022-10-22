// Required class for Slash Commands
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Command Data
module.exports = {
	data: new SlashCommandBuilder()
		.setName('uptime')
		.setDescription('Replies with System Uptime!'),
	async execute(interaction) {
		await interaction.reply([uptimeEM]);
	},
};

// Embed for the Uptime Command
const embed = new EmbedBuilder()
	.setTitle('System Uptime')
	.addFields(
		{ name: 'System Ping', value: `${Math.round(client.ws.ping)}ms`, inline: true },
		{ name: 'System Uptime', value: `${process.uptime()}ms`, inline: true },
		{ name: `Support Server`, value: `https://discord.gg/`, inline: true },
	);




//const uptimeEM = new EmbedBuilder(
//	.setTitle('System Uptime');
//    .addFields(
//        {name: 'System Ping', value: `${client.ws.ping}ms`, inline: true},
//        {name: 'System Uptime', value: `${process.uptime()}`, inline: true},
//    )
//);