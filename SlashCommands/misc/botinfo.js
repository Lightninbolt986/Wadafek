module.exports = {
    name: 'botinfo',
    description: 'Get stats about the bot',
    aliases: ['bi'],
    options: [{
        name: 'detailed',
        description: 'Shows more detailed stats',
        type: 'BOOLEAN',
        required: true
    }],
    execute(interaction, args, cmd, client) {
        if (args[0]) {
            const {
                MessageEmbed,
                version: djsversion,
            } = require("discord.js");
            const version = require("../../package.json").version;
            const os = require("os");
            const uptime = secondsToDhms(process.uptime().toFixed(2))
            const core = os.cpus()[0];

            const embed = new MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setColor('BLURPLE')
                .setTitle("Bot Info and stats")
                .setDescription(`Wadafek is a minigame bot with multiple commands.\n\n**<:jarvy_rarrowpurple:892715864158261259>Client Name:** ${client.user.tag} \`[${client.user.id}]\`\n**<:jarvy_rarrowpurple:892715864158261259>Creation Date**: <t:${(client.user.createdAt.getTime()/1000).toFixed(0)}>\n<:jarvy_rarrowpurple:892715864158261259>**Developers:**\n[lightninbolt986#3111](https://discordapp.com/users/543031298130837510)\n[Senpai#2473](https://discordapp.com/users/654639494481313792)`)

            const embed1 = new MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setColor('BLURPLE')
                .setTitle("General")
                .addFields({
                    name: '<:jarvy_rarrowpurple:892715864158261259>Commands',
                    value: `\`\`\`\n${client.commands.size}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Servers',
                    value: `\`\`\`\n${client.guilds.cache.size.toLocaleString()}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Users',
                    value: `\`\`\`\n${client.guilds.cache
            .reduce((a, b) => a + b.memberCount, 0)
            .toLocaleString()}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Channels',
                    value: `\`\`\`\n${client.channels.cache.size.toLocaleString()}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Uptime',
                    value: `\`\`\`\n${uptime}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Ping',
                    value: `\`\`\`\n${Math.round(interaction.client.ws.ping)} ms\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Node.js',
                    value: `\`\`\`\n${process.version}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Version',
                    value: `\`\`\`\n${version}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Discord.js',
                    value: `\`\`\`\n${djsversion}\n\`\`\``,
                    inline: true
                }, )

            const embed2 = new MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setColor('BLURPLE')
                .setTitle("System")
                .addFields({
                    name: '<:jarvy_rarrowpurple:892715864158261259>Platform',
                    value: `\`\`\`\n${process.platform}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>Uptime',
                    value: `\`\`\`\n${secondsToDhms(os.uptime())}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>CPU cores',
                    value: `\`\`\`\n${os.cpus().length}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>CPU RAM',
                    value: `\`\`\`\n${((os.freemem()) / 1000000000).toFixed(2)}GB\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>CPU model',
                    value: `\`\`\`\n${core.model}\n\`\`\``,
                    inline: true
                }, {
                    name: '<:jarvy_rarrowpurple:892715864158261259>CPU speed',
                    value: `\`\`\`\n${core.speed}MHz\n\`\`\``,
                    inline: true
                }, )


            pagination({
                channel: interaction.channel,
                author: interaction.user,
                message: interaction,
                embeds: [embed, embed1, embed2],
                fastSkip: true,
                button: [{
                        name: "first",
                        emoji: "<:first:926437951385239563>",
                        style: "PRIMARY"
                    },
                    {
                        name: "previous",
                        emoji: "<:previous:926443075302227998>",
                        style: "PRIMARY"
                    },
                    {
                        name: "next",
                        emoji: "<:next:926442830480703548>",
                        style: "PRIMARY"
                    },
                    {
                        name: "last",
                        emoji: "<:last:926437800436465664>",
                        style: "PRIMARY"
                    },
                ],
                time: 300000,
            })

        }
        else{
            interaction.editReply({embeds:[{
                thumbnail:{
                    "url":"https:\/\/media.discordapp.net\/attachments\/892704135244283916\/928685414317961226\/1200.png",
                    "proxy_url":"https:\/\/images-ext-2.discordapp.net\/external\/brhuiU2ACLyfrUrd58C0y0GwNGoIt9eQWSGAJj3dZfc\/https\/media.discordapp.net\/attachments\/892704135244283916\/928685414317961226\/1200.png",
                    "width":319,
                    "height":337
                },
                fields:[
                    {
                        name:"Creation Date",
                        value:`<:blurple_arrow:927855594801606747><t:${(client.user.createdAt.getTime()/1000).toFixed(0)}>`,
                        inline:false
                    },
                    {
                        name:"Made by",
                        value:"<:blurple_arrow:927855594801606747>*lightninbolt986#3111*\n<:blurple_arrow:927855594801606747>*Senpai#2473*",
                        inline:false
                    }
                ],
                color:5793266,
                type:"rich",
                description:"A simple mini-game bot made for a Hackathon hosted by [Documatic](https:\/\/documatic.com)",
                url:"https:\/\/documatic.com",
                title:"BotInfo \u2014 Wdafek"
            }]})
        }
    }
}

function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
async function pagination(options) {
    const {
        MessageActionRow,
        MessageButton,
        MessageEmbed,
    } = require("discord.js")


    const defaultEmojis = {
        first: "⬅️",
        previous: "◀️",
        next: "▶️",
        last: "➡️",
        number: "#️⃣",
    };

    const defaultStyles = {
        first: "PRIMARY",
        previous: "PRIMARY",
        next: "PRIMARY",
        last: "PRIMARY",
        number: "SUCCESS",
    };

    const {
        author,
        channel,
        embeds,
        button,
        time,
        max,
        customFilter,
        fastSkip,
        pageTravel,
        message
    } = options;
    let currentPage = 1;

    const getButtonData = (name) => {
        return button?.find((btn) => btn.name === name);
    };

    const generateButtons = (state) => {
        const checkState = (name) => {
            if (
                (["first", "previous"]).includes(name) &&
                currentPage === 1
            )
                return true;

            if (
                (["next", "last"]).includes(name) &&
                currentPage === embeds.length
            )
                return true;

            return false;
        };

        let names = ["previous", "next"];
        if (fastSkip) names = ["first", ...names, "last"];
        if (pageTravel) names.push("number");

        return names.reduce(
            (accumulator, name) => {
                accumulator.push(
                    new MessageButton()
                    .setEmoji(
                        getButtonData(name)?.emoji || defaultEmojis[name]
                    )
                    .setCustomId(name)
                    .setDisabled(state || checkState(name))
                    .setStyle(
                        getButtonData(name)?.style ||
                        (defaultStyles[
                            name
                        ])
                    )
                );
                return accumulator;
            },
            []
        );
    };

    const components = (state) => [
        new MessageActionRow().addComponents(generateButtons(state)),
    ];

    const changeFooter = () => {
        const embed = embeds[currentPage - 1];
        const newEmbed = new MessageEmbed(embed);
        if (embed?.footer?.text) {
            return newEmbed.setFooter({
                text:`${embed.footer.text} - Page ${currentPage} of ${embeds.length}`,
                iconURL:embed.footer.iconURL
            });
        }
        return newEmbed.setFooter({text:`Page ${currentPage} of ${embeds.length}`});
    };

    const initialMessage = await message.followUp({
        embeds: [changeFooter()],
        components: components(),
    },{fetchReply:true});

    const defaultFilter = (interaction) => {
        return true
    };

    const filter = customFilter || defaultFilter;

    const collectorOptions = () => {
        const opt = {
            filter,
            componentType: "BUTTON",
        };

        if (max) opt["max"] = max;
        if (time) opt["time"] = time;

        return opt;
    };

    const collector = initialMessage.createMessageComponentCollector(
        collectorOptions()
    );

    const pageTravelling = new Set();

    const numberTravel = async () => {
        if (pageTravelling.has(author.id))
            return channel.send("Type `end` to stop page travelling!");
        const collector = channel.createMessageCollector({
            filter: (msg) => msg.author.id === author.id,
            time: 30000,
        });
        const numberTravelMessage = await channel.send(
            `${author.tag}, you have 30 seconds, send numbers in chat to change pages! Simply type \`end\` to exit from page travelling.`
        );
        pageTravelling.add(author.id);

        collector.on("collect", (message) => {
            if (message.content.toLowerCase() === "end") {
                message.delete().catch(() => {});
                return collector.stop();
            }
            const int = parseInt(message.content);
            if (isNaN(int) || !(int <= embeds.length) || !(int >= 1)) return;
            currentPage = int;
            initialMessage.edit({
                embeds: [changeFooter()],
                components: components(),
            });
            if (message.guild.me.permissions.has("MANAGE_MESSAGES"))
                message.delete();
        });

        collector.on("end", () => {
            if (numberTravelMessage.deletable) numberTravelMessage.delete();
            pageTravelling.delete(author.id);
        });
    };

    collector.on("collect", async (interaction) => {
        if (message.user.id !== author.id) {

            await interaction.deferReply({ephemeral:true})
            return interaction.editReply({content:'This is not for you!',ephemeral:true})
        }
        interaction.deferUpdate()
        const id = interaction.customId;

        if (id === "first") currentPage = 1;
        if (id === "previous") currentPage--;
        if (id === "next") currentPage++;
        if (id === "last") currentPage = embeds.length;
        if (id === "number") await numberTravel();

        initialMessage.edit({
            embeds: [changeFooter()],
            components: components(),
        });
    });

    collector.on("end", () => {
        initialMessage.edit({
            components: components(true),
        });
    });

}