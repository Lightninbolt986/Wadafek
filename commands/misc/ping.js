module.exports = {
    name: 'ping',
    description: 'Get the bot\'s ping/latency.',
    async execute(message, args, cmd, client, Discord) {
        const messagePing = Date.now();
        const msg = await message.channel.send('Loading...');
        const endMessagePing = Date.now() - messagePing;

        const embed = new Discord.MessageEmbed()
            .setDescription(
                `Message ping: \`${endMessagePing}ms\``
            )
            .setColor('GREEN')
            .setTimestamp();

        message.channel.messages.edit(msg.id, {
            content: null,
            embeds: [embed],
        });
    },
};