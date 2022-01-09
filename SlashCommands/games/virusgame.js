const isPlaying = new Set();
module.exports = {
    name: 'killthecovid',
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
    description: 'Play a game of kill the virus',
    async execute(interaction, args, cmd, client) {

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
        const Discord = require('discord.js')

        if (args[0] == 'lb') {

            const profileModel = require(`../../models/Profile`)
            let e = await profileModel.find({}).sort({
                highTime: 1
            })
            e = e.filter(m => m.highTime != 0)
let m = ' '
if(e[0]) m=m+`<:neo_gold:877031189985230868>\u2502**${client.users.cache.get(e[0].userID).tag}** - \`${(e[0].highTime)/1000}sec\`\n`
else m = m + `Leaderboard is empty`
if(e[2]) m=m+`<:neo_bronze:877030829732298784>\u2502**${client.users.cache.get(e[2].userID).tag}** - \`${(e[2].highTime)/1000}sec\`\n`
if(e[1]) m=m+`<:neo_silver:877030960070262794>\u2502**${client.users.cache.get(e[1].userID).tag}** - \`${(e[1].highTime)/1000}sec\`\n`
if(e[3]) m=m+`<:bp_dot:918074237992988722>\u2502**${client.users.cache.get(e[3].userID).tag}** - \`${(e[3].highTime)/1000}sec\`\n`
if(e[4]) m=m+`<:bp_dot:918074237992988722>\u2502**${client.users.cache.get(e[4].userID).tag}** - \`${(e[4].highTime)/1000}sec\`\n`
const {MessageEmbed} = require('discord.js')
const embed = new MessageEmbed().setTitle('Global Leaderboard - Door').setURL("https:\/\/www.youtube.com\/watch?v=xvFZjo5PgG0").setColor(5793266).setDescription(m)
            interaction.editReply({embeds:[embed]})
       
        } else if(args[0] == 'explain') {
            await interaction.editReply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle("Eliminate The Virus")
                    .addFields({
                        name: "How to play?",
                        value: "<:orange_arrow:927464865231171604>Click on the button which has the virus <:mr_covid_but_better:927404665002418186>\n<:orange_arrow:927464865231171604>You will get \`5 sec\` to hit the first virus.\n<:orange_arrow:927464865231171604>For each virus eliminated, the time to hit reduces by \`0.1 sec\`\n<:orange_arrow:927464865231171604>Do your best to reach the goal of eliminating \`30\` viruses <:mr_covid_but_fkin_dead:927254479332581386> with your mighty vaccine <:vacc:927411629153476638> in the lowest time possible."
                    })
                    .setColor("FF8900")
                    .setThumbnail('https://media.discordapp.net/attachments/892704135244283916/927404663597314088/PicsArt_01-02-11.46.49.png')
                ]
            })
        }else{      
            if (isPlaying.has(interaction.channel.id)) {
                return interaction.channel.send({embeds:[{
                    "thumbnail":{
                        "url":"https:\/\/images-ext-2.discordapp.net\/external\/TLvA6RAOze3jWk_uDiSWQaZr6q7pNze0sCMmy4dImak\/https\/media.discordapp.net\/attachments\/909344848761466881\/914774250219511848\/1qrL0Pk2sWbLmTcHh5f4iMTW8478OwNG4P8BP9wIb9U4JZUAAAAASUVORK5CYII.png",
                        "proxy_url":"https:\/\/images-ext-2.discordapp.net\/external\/xaFGaXek05y4akDmZYBfGM9F0XU22AkeozVYKWVBr-w\/https\/images-ext-2.discordapp.net\/external\/TLvA6RAOze3jWk_uDiSWQaZr6q7pNze0sCMmy4dImak\/https\/media.discordapp.net\/attachments\/909344848761466881\/914774250219511848\/1qrL0Pk2sWbLmTcHh5f4iMTW8478OwNG4P8BP9wIb9U4JZUAAAAASUVORK5CYII.png",
                        "width":264,
                        "height":297
                    },
                    "author":{
                        "name":"Oops, can't run",
                        "icon_url":"https:\/\/cdn.discordapp.com\/emojis\/914921124670890064.png",
                        "proxy_icon_url":"https:\/\/images-ext-1.discordapp.net\/external\/8C7VQhkenjVmNtiGFrC3iuVTtTP7xvgWMrBZwDFtdhA\/https\/cdn.discordapp.com\/emojis\/914921124670890064.png"
                    },
                    "color":16724533,
                    "type":"rich",
                    "description":">>> Looks like there is already a virus game running in this channel.\nPlease try again after the current player is done playing <:neox_mochathumb:881473699461595166>"
                }]})
            }
            isPlaying.add(interaction.channel.id)
            const msg = await interaction.editReply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle("Eliminate The Virus")
                    .addFields({
                        name: "How to play?",
                        value: "<:orange_arrow:927464865231171604>Click on the button which has the virus <:mr_covid_but_better:927404665002418186>\n<:orange_arrow:927464865231171604>You will get \`5 sec\` to hit the first virus.\n<:orange_arrow:927464865231171604>For each virus eliminated, the time to hit reduces by \`0.1 sec\`\n<:orange_arrow:927464865231171604>Do your best to reach the goal of eliminating \`30\` viruses <:mr_covid_but_fkin_dead:927254479332581386> with your mighty vaccine <:vacc:927411629153476638> in the lowest time possible."
                    })
                    .setFooter({
                        text: "Starting in 10s. Get ready!"
                    })
                    .setColor("FF8900")
                    .setThumbnail('https://media.discordapp.net/attachments/892704135244283916/927404663597314088/PicsArt_01-02-11.46.49.png')
                ]
            })
            setTimeout(async function () {
                {
                    await msg.edit({
                        components: getRows(),
                        embeds: [
                            new Discord.MessageEmbed()
                            .setColor('#FF8900')
                            .setDescription("<:mr_covid_but_better:927404665002418186> Viruses eliminated: \`0\`")
                        ]
                    })

                    let score = 0
                    let time = 5000
                    startTime = new Date()
                    move(msg, score, time, startTime, profileData, isPlaying)

                    async function move(msg, score, time, startTime, profileData, isPlaying) {
                        if (score == 30) {

                            const timeTaken = new Date().getTime() - startTime.getTime()
                            const highTime = profileData.highTime
                            if (timeTaken < highTime || highTime == 0) {

                                const profileModel = require(`../../models/Profile`)
                                const response = await profileModel.findOneAndUpdate({
                                    userID: interaction.user.id
                                }, {
                                    $inc: {
                                        highTime: (timeTaken - highTime)
                                    }
                                });
                            }
                            isPlaying.delete(interaction.channel.id)
                            return await msg.edit({
                                components: [],
                                embeds: [
                                    new Discord.MessageEmbed()
                                    .setDescription(`You absolutely destroyed all the viruses with your vaccine <:vacc:927411629153476638>\n<:mr_covid_but_fkin_dead:927254479332581386> Your score: \`${score}\`\n<:time:927480269487886366> Time taken: ${timeTaken/1000}sec`)
                                    .setTitle("Excellent job Doc.")
                                    .setThumbnail("https://media.discordapp.net/attachments/892704135244283916/927407198970183720/PicsArt_01-03-09.14.55.png")
                                    .setColor("FF8900")
                                ]
                            })

                        } else {
                            const collector = msg.createMessageComponentCollector({
                                time: time
                            })
                            collector.on("collect", async i => {
                                if (i.user.id !== interaction.user.id) {
                                    return i.reply({
                                        content: '<:nx_cross:914921124670890064> This game isn\'t for you.',
                                        ephemeral: true
                                    })
                                }
                                await i.deferUpdate()
                                score++
                                await msg.edit({
                                    components: getRows(),
                                    embeds: [
                                        new Discord.MessageEmbed()
                                        .setColor('#FF8900')
                                        .setDescription(`<:mr_covid_but_better:927404665002418186> Viruses eliminated: \`${score}\``)
                                    ]
                                })
                                collector.stop('not time')

                                time = time - 100
                                move(msg, score, time, startTime, profileData, isPlaying)

                            })
                            collector.on('end', async (i, r) => {
                                if (r == 'time') {
                                    await msg.edit({
                                        components: [],
                                        embeds: [
                                            new Discord.MessageEmbed()
                                            .setDescription(score == 0?`>>> Wtf doc, you couldn't finish off even a single virus. You obviously got infected.`:`You tried your best but still couldn't finish of all the viruses. Better luck next time <:neox_mochathumb:881473699461595166>\n<:mr_covid_but_fkin_dead:927254479332581386> Your score: \`${score}\``)
                                            .setTitle(score == 0?"Terrible job":"Good job Doc.")
                                            .setThumbnail("https://media.discordapp.net/attachments/892704135244283916/927407198970183720/PicsArt_01-03-09.14.55.png")
                                            .setColor("FF8900")
                                        ]
                                    })
                                    isPlaying.delete(interaction.channel.id)
                                }

                            })
                        }

                    }

                }
            }, 10000)
        }
    },
}

function shuffleArray(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function getRows() {
    const Discord = require('discord.js')
    let butts = [],
        rows = []
    for (let i = 0; i < 24; i++) {
        butts.push(
            new Discord.MessageButton()
            .setLabel('\u200b')
            .setStyle('PRIMARY')
            .setDisabled()
            .setCustomId(`${i}`),
        );
    }
    butts.push(
        new Discord.MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(`<:mr_covid_but_better:927404665002418186>`)
        .setCustomId('VIRUS'),
    );
    shuffleArray(butts);
    for (let i = 0; i < 5; i++) {
        rows.push(new Discord.MessageActionRow());
    }

    rows.forEach((row, i) => {
        row.addComponents(butts.slice(0 + i * 5, 5 + i * 5));
    });
    return rows
}