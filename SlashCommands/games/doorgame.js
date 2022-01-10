const {
    MessageButton,
    MessageActionRow
} = require('discord.js')
const butts = [
    new MessageButton()
    .setEmoji('<a:key3:927832148549976114>')
    .setStyle('SECONDARY')
    .setCustomId(`Door1`),
    new MessageButton()
    .setLabel('\u200b \u200b')
    .setStyle('SECONDARY')
    .setDisabled()
    .setCustomId(`disabled`),
    new MessageButton()
    .setEmoji('<a:key3:927832148549976114>')
    .setStyle('SECONDARY')
    .setCustomId(`Door2`),
    new MessageButton()
    .setLabel('\u200b \u200b')
    .setStyle('SECONDARY')
    .setDisabled()
    .setCustomId(`disabled2`),
    new MessageButton()
    .setEmoji('<a:key3:927832148549976114>')
    .setStyle('SECONDARY')
    .setCustomId(`door3`)
]
const disabledButts = [
    new MessageButton()
    .setEmoji('<a:key3:927832148549976114>')
    .setStyle('SECONDARY')
    .setDisabled()
    .setCustomId(`Door1`),
    new MessageButton()
    .setLabel('\u200b \u200b')
    .setStyle('SECONDARY')
    .setDisabled()
    .setCustomId(`disabled`),
    new MessageButton()
    .setEmoji('<a:key3:927832148549976114>')
    .setStyle('SECONDARY')
    .setDisabled()
    .setCustomId(`Door2`),
    new MessageButton()
    .setLabel('\u200b \u200b')
    .setStyle('SECONDARY')
    .setDisabled()
    .setCustomId(`disabled2`),
    new MessageButton()
    .setEmoji('<a:key3:927832148549976114>')
    .setStyle('SECONDARY')
    .setDisabled()
    .setCustomId(`door3`)
]
const row = new MessageActionRow().addComponents(butts)
const drow = new MessageActionRow().addComponents(disabledButts)
const ClosedDoor = `./images/doorClosed.png`
const badDoors = [{
    file: './images/doorBad1.png',
    comment: 'Imagine getting killed by a person wrapped in toilet paper. You died.'
}, {
    file: './images/doorBad2.png',
    comment: 'You ran into a plant with teeth and got devoured. LOL.'
}, {
    file: './images/doorBad3.png',
    comment: 'You got burnt to ash by dragon. Sucks 2 Suck.'
}, {
    file: './images/doorBad4.png',
    comment: 'You were attracted to fire as it looked **hot**. Well you died.'
}, {
    file: './images/doorBad5.png',
    comment: 'The phiranas sunk their teeth in your bones and you were tore apart.'
}, {
    file: './images/doorBad6.png',
    comment: 'You melted by falling into acid.'
}, {
    file: './images/doorBad7.png',
    comment: 'The skeleton loved your nose. Now, you don\'t have one.'
}, {
    file: './images/doorBad8.png',
    comment: 'You floated away with Pennywise, never to come back down.'
}, {
    file: './images/doorBad9.png',
    comment: 'You took a tour of hell with Satan, sadly didn\'t come back.'
}, {
    file: './images/doorBad10.png',
    comment: 'Wait is that a mermaid?? No, it was a kraken which ate you.'
}, {
    file: './images/doorBad11.png',
    comment: 'The zombie cracked your head open, only to find it empty.'
}]
const isPlaying = new Set();
const getAttach = require('../../merge.js')
module.exports = {
    name: 'choosethedoor',
    description: 'Play a game of choose the door',
    options: [{
        name: 'arguments',
        description: 'Additional information',
        type: 'STRING',
        required: false,
        choices: [{
                name: 'lb',
                value: 'lb'
            },
            {
                name: 'explain',
                value: 'explain'
            },
        ]
    }],
    async execute(interaction, args, cmd, client, Discord) {
        /*
         *@param {import('discord.js').CommandInteraction} 
         *
         */
        if (args[0] == 'lb') {
            const profileModel = require(`../../models/Profile`)
            let e = await profileModel.find({}).sort({
                doorScore: -1
            })
            let m = ' '
            if (e[0]) m = m + `<:neo_gold:877031189985230868>\u2502**${client.users.cache.get(e[0].userID).tag}** - \`${(e[0].doorScore)}\`\n`
            else m = m + `Leaderboard is empty`
            if (e[1]) m = m + `<:neo_silver:877030960070262794>\u2502**${client.users.cache.get(e[1].userID).tag}** - \`${(e[1].doorScore)}\`\n`
            if (e[2]) m = m + `<:neo_bronze:877030829732298784>\u2502**${client.users.cache.get(e[2].userID).tag}** - \`${(e[2].doorScore)}\`\n`
            if (e[3]) m = m + `<:bp_dot:918074237992988722>\u2502**${client.users.cache.get(e[3].userID).tag}** - \`${(e[3].doorScore)}\`\n`
            if (e[4]) m = m + `<:bp_dot:918074237992988722>\u2502**${client.users.cache.get(e[4].userID).tag}** - \`${(e[4].doorScore)}\`\n`
            const {
                MessageEmbed
            } = require('discord.js')
            const embed = new MessageEmbed().setTitle('Global Leaderboard - Door').setURL("https:\/\/www.youtube.com\/watch?v=xvFZjo5PgG0").setColor(5793266).setDescription(m)
            interaction.editReply({
                embeds: [embed]
            })

        } else if (args[0] == 'explain') {
            interaction.editReply({
                embeds: [{
                    "thumbnail": {
                        "url": "https:\/\/media.discordapp.net\/attachments\/892704135244283916\/927801529015095336\/PicsArt_01-04-11.15.34.png",
                        "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/tycXs4P7gHyX09e4v32Lh6-p2_HmUpE5Gzyqi7xMvyk\/https\/media.discordapp.net\/attachments\/892704135244283916\/927801529015095336\/PicsArt_01-04-11.15.34.png",
                        "width": 180,
                        "height": 249
                    },
                    "fields": [{
                            "name": "How to play?",
                            "value": "<:blurple_arrow:927855594801606747>Given are `3` doors <:door_close:921007986330202122>, key <a:key3:927832148549976114> is `1`\n<:blurple_arrow:927855594801606747>Choose a door, but **beware**, only `2` are safe but the `3rd` is not.\n<:blurple_arrow:927855594801606747>Is your luck good enough to beat others?",
                            "inline": false
                        },
                        {
                            "name": "Subcommands",
                            "value": "<:blurple_arrow:927855594801606747>`>door lb` - Shows who has the best luck.",
                            "inline": false
                        }
                    ],
                    "color": 5793266,
                    "type": "rich",
                    "title": "Door Of Faith"
                }]
            })
        } else {
            const profileModel = require(`../../models/Profile`);
            let profileData;
            try {
                profileData = await profileModel.findOne({
                    userID: interaction.user.id
                });

                if (!profileData) {
                    let profile = await profileModel.create({
                        userID: interaction.user.id
                    });
                    profile.save();
                }
            } catch (err) {
                console.log(err);
            }
            if (isPlaying.has(interaction.channel.id)) {
                return interaction.editReply({
                    embeds: [{
                        "thumbnail": {
                            "url": "https:\/\/images-ext-2.discordapp.net\/external\/TLvA6RAOze3jWk_uDiSWQaZr6q7pNze0sCMmy4dImak\/https\/media.discordapp.net\/attachments\/909344848761466881\/914774250219511848\/1qrL0Pk2sWbLmTcHh5f4iMTW8478OwNG4P8BP9wIb9U4JZUAAAAASUVORK5CYII.png",
                            "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/xaFGaXek05y4akDmZYBfGM9F0XU22AkeozVYKWVBr-w\/https\/images-ext-2.discordapp.net\/external\/TLvA6RAOze3jWk_uDiSWQaZr6q7pNze0sCMmy4dImak\/https\/media.discordapp.net\/attachments\/909344848761466881\/914774250219511848\/1qrL0Pk2sWbLmTcHh5f4iMTW8478OwNG4P8BP9wIb9U4JZUAAAAASUVORK5CYII.png",
                            "width": 264,
                            "height": 297
                        },
                        "author": {
                            "name": "Oops, can't run",
                            "icon_url": "https:\/\/cdn.discordapp.com\/emojis\/914921124670890064.png",
                            "proxy_icon_url": "https:\/\/images-ext-1.discordapp.net\/external\/8C7VQhkenjVmNtiGFrC3iuVTtTP7xvgWMrBZwDFtdhA\/https\/cdn.discordapp.com\/emojis\/914921124670890064.png"
                        },
                        "color": 16724533,
                        "type": "rich",
                        "description": ">>> Looks like there is already a door game running in this channel.\nPlease try again after the current player is done playing <:neox_mochathumb:881473699461595166>"
                    }]
                })
            }
            isPlaying.add(interaction.channel.id)
            score = 0
            const msg = await interaction.editReply({
                embeds: [{
                    "footer": {
                        "text": "Game starts in a few seconds. Get ready!"
                    },
                    "thumbnail": {
                        "url": "https:\/\/media.discordapp.net\/attachments\/892704135244283916\/927801529015095336\/PicsArt_01-04-11.15.34.png",
                        "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/tycXs4P7gHyX09e4v32Lh6-p2_HmUpE5Gzyqi7xMvyk\/https\/media.discordapp.net\/attachments\/892704135244283916\/927801529015095336\/PicsArt_01-04-11.15.34.png",
                        "width": 180,
                        "height": 249
                    },
                    "fields": [{
                            "name": "How to play?",
                            "value": "<:blurple_arrow:927855594801606747>Given are `3` doors <:door_close:921007986330202122>, key <a:key3:927832148549976114> is `1`\n<:blurple_arrow:927855594801606747>Choose a door, but **beware**, only `2` are safe but the `3rd` is not.\n<:blurple_arrow:927855594801606747>Is your luck good enough to beat others?",
                            "inline": false
                        },
                        {
                            "name": "Subcommands",
                            "value": "<:blurple_arrow:927855594801606747>`>door lb` - Shows who has the best luck.",
                            "inline": false
                        }
                    ],
                    "color": 5793266,
                    "type": "rich",
                    "title": "Door Of Faith"
                }]
            }, {
                fetchReply: true
            })  
            setTimeout(async function () {
                await play(msg, score, profileData, drow, isPlaying, interaction)
            }, 15000)

        }
    }
}

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function play(msg, score, profileData, drow, isPlaying, interaction) {
    let StartArr = [ClosedDoor, ClosedDoor, ClosedDoor]
    let StartAttach = await getAttach(StartArr, msg.channel.id)
    await msg.edit({
        embeds: [],
        files: [StartAttach],
        components: [row]
    })

    const collector = msg.createMessageComponentCollector({
        time: 30000
    })
    collector.on("collect", async i => {
        if (i.user.id !== interaction.user.id) {
            return i.reply({
                content: '<:nx_cross:914921124670890064> This game isn\'t for you.',
                ephemeral: true
            })
        }
        i.deferUpdate()
        const OpenDoor = `./images/doorOpen.png`
        const ClosedDoor = `./images/doorClosed.png`
        const wrongDoor = randomNumber(0, 2)
        /* 
         const badDoor = randomFromArray(badDoors) */
        const DoorOpened = i.customId.split('r')[1] - 1
        const DoorOpenedArr = StartArr
        if (wrongDoor == DoorOpened) {
            const badDoor = randomFromArray(badDoors)
            DoorOpenedArr[DoorOpened] = badDoor.file
            const loseAttach = await getAttach(DoorOpenedArr, msg.channel.id)
            await msg.edit({
                content: `<:fkin_dead:927823877315391518> **__You Died. LOL__**\n<:blurple_arrow:927855594801606747>Your score: ${score}\n\`\`\`js\n"${badDoor.comment}"\n\`\`\``,
                files: [loseAttach],
                components: [drow]
            })
            if (profileData.doorScore < score) {
                const profileModel = require(`../../models/Profile`)
                await profileModel.findOneAndUpdate({
                    userID: i.user.id
                }, {
                    $inc: {
                        doorScore: (score - profileData.doorScore)
                    }
                });
            }
            try {
            } catch (e) {
                console.log(e)
            }
            isPlaying.delete(msg.channel.id)
            return collector.stop('not time')
        }
        DoorOpenedArr[DoorOpened] = OpenDoor
        score++
        const newAttach = await getAttach(DoorOpenedArr, msg.channel.id)
        await msg.edit({
            content: `<a:congrats:928242079111471114> **Congratulations!** You passed the door safely.\n<:blurple_arrow:927855594801606747> Current score: ${score}`,
            files: [newAttach],
            components: [drow]
        })
        collector.stop('not time')

        setTimeout(async function () {
            play(msg, score, profileData, drow, isPlaying, interaction)
        }, 5000)


    })
    collector.on("end", (i, r) => {
        if (r == 'time') {
            msg.edit({
                content: '<:neo_exit:846611044923080704> You were too scared to choose even a single door',
                components: [drow]
            })
            try {
            } catch (e) {
                console.log(e)
            }
            isPlaying.delete(msg.channel.id)
        }
    })
}