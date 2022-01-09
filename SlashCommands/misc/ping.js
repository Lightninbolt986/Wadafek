module.exports = {
    name: 'ping',
    description: 'Get the bot\'s ping/latency.',
    async execute(interaction, args, cmd, client, Discord) {
        const messagePing = Date.now();
        const msg = await interaction.editReply('Loading...',{fetchReply:true});
        const endMessagePing = Date.now() - messagePing;

        const embed = new Discord.MessageEmbed()
            .setDescription(
                `Ping: \`${endMessagePing}ms\``
            )
            .setColor('GREEN')
            .setTimestamp();

        msg.edit({
            content: null,
            embeds: [embed],
        });
    },
};