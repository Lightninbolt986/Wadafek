const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message) {
        const embed = new MessageEmbed()
            .setTitle('Help - Wadafek')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`>>> <:blurple_arrow:927855594801606747>\`${process.env.prefix}virus\` - Eliminate all the viruses.\n<:blurple_arrow:927855594801606747>\`${process.env.prefix}door\` -  Game of "door of faith".\n<:blurple_arrow:927855594801606747>\`${process.env.prefix}race\` -  Start a new race!\n<:blurple_arrow:927855594801606747>\`${process.env.prefix}botinfo\` - Check info about bot.\n<:blurple_arrow:927855594801606747>\`${process.env.prefix}help\` - Show this message.\n<:blurple_arrow:927855594801606747>\`${process.env.prefix}ping\` - See the bot's latency.`).setFooter({
                text: 'Both slash cmds and normal message commands are supported'
            })
            .setColor('BLURPLE')
        message.channel.send({
            embeds: [embed]
        })
    }
}