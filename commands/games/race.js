function arrayMoveMutable(array, fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }
}

function arrayMove(array, fromIndex, toIndex) {
  array = [...array];
  arrayMoveMutable(array, fromIndex, toIndex);
  return array;
}
const {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu
} = require('discord.js');

module.exports = {
  name:'race',
  async execute(message, args) {
    let gamemode
    let userEmos = {};
    let winner = []

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Choose a race mode!')
        .addOptions([{
            label: 'Bike',
            description: 'Race with bikes!',
            value: 'Bike',
            emoji: `<:bikey:894540342878142484>`
          },
          {
            label: 'Car',
            description: 'Race with cars!',
            value: 'Car',
            emoji: `<:caro:893824315261333514>`
          },
          {
            label: 'Horse',
            description: 'Race with horses!',
            value: 'Horse',
            emoji: `<:horseg:894532937658298388>`
          },
          {
            label: 'Run',
            description: 'Running race!',
            value: 'Run',
            emoji: `<a:runy:912975751035359262>`
          },
          {
            label: 'Pokemon',
            description: 'Race with pokemons!',
            value: 'Poke',
            emoji: `<a:poke5:912973673823084554>`
          },
        ]),
      );

    const disabled = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId('disabled').setPlaceholder('Choose a race mode!').setDisabled(true).addOptions([{
      label: 'Choose a race mode!',
      value: 'none'
    }]));
    const choice = await message.reply({
      embeds: [new MessageEmbed()
        .setColor('BLURPLE').setTitle("Choose a game mode!").setThumbnail("https://media.discordapp.net/attachments/892704135244283916/912067079123918888/PicsArt_11-22-01.18.32.png")
        .setDescription('> <:biker:894540237684998174> <:bikey:894540342878142484> <:bikeg:894540295260229652> <:bikec:894540182437634049> <:bikev:894540401149612032> - [\`Bike\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n> <:carr:894504556560527391> <:caro:893824315261333514> <:carg:894504648969441330> <:carp:894504507914997800> <:carv:894504695127740457> - [\`Car\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n> <:horser:894532824105893929> <:horseg:894532937658298388> <:horseb:894532764362231828> <:horsep:894532618962501673> <:horsev:894532878954803221> - [\`Horse\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n > <a:runr:912975735453519904> <a:runy:912975751035359262> <a:rung:912975770094288906> <a:runc:912975794660327474> <a:runb:912975810577723403> - [\`Run\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n > <a:poke1:912973860381532181> <a:poke2:912973802135240734> <a:poke3:912973755809165342> <a:poke4:912973713740292126> <a:poke5:912973673823084554> - [\`Pokemon\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━')
      ],
      components: [row]
    })

    try {
      const filter = menu => {
        if (menu.user.id === message.author.id) return true;
        return menu.reply({
          content: "This menu is not for you.",
          ephemeral: true
        })
      };
      const menu = await choice.awaitMessageComponent({
        filter: filter,
        componentType: 'SELECT_MENU',
        max: 1,
        time: 300000
      });
      menu.deferUpdate()
      if (menu.user.id === message.author.id) {
        let value = menu.values[0]
        if (value === 'Bike') {
          gamemode = 'Bike'
        } else if (value === 'Car') {
          gamemode = 'Car'
        } else if (value === 'Horse') {
          gamemode = 'Horse'
        } else if (value === 'Run') {
          gamemode = 'Run'
        } else if (value === 'Poke') {
          gamemode = 'Pokemon'
        }

        choice.edit({
          embeds: [new MessageEmbed()
            .setColor('#00ff9d').setTitle("Choose a game mode!").setThumbnail("https://media.discordapp.net/attachments/892704135244283916/912067079123918888/PicsArt_11-22-01.18.32.png").setFooter(`Mode Selected - ${gamemode}`, 'https://cdn.discordapp.com/emojis/910049767910952961.png')
            .setDescription('> <:biker:894540237684998174> <:bikey:894540342878142484> <:bikeg:894540295260229652> <:bikec:894540182437634049> <:bikev:894540401149612032> - [\`Bike\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n> <:carr:894504556560527391> <:caro:893824315261333514> <:carg:894504648969441330> <:carp:894504507914997800> <:carv:894504695127740457> - [\`Car\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n> <:horser:894532824105893929> <:horseg:894532937658298388> <:horseb:894532764362231828> <:horsep:894532618962501673> <:horsev:894532878954803221> - [\`Horse\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n > <a:runr:912975735453519904> <a:runy:912975751035359262> <a:rung:912975770094288906> <a:runc:912975794660327474> <a:runb:912975810577723403> - [\`Run\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n > <a:poke1:912973860381532181> <a:poke2:912973802135240734> <a:poke3:912973755809165342> <a:poke4:912973713740292126> <a:poke5:912973673823084554> - [\`Pokemon\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━')
          ],
          components: [disabled]
        })
      }

    } catch (e) {
      console.log(e)
      gamemode = 'Bike'
      choice.edit({
        embeds: [new MessageEmbed()
          .setColor('#00ff9d').setTitle("Choose a game mode!").setThumbnail("https://media.discordapp.net/attachments/892704135244283916/912067079123918888/PicsArt_11-22-01.18.32.png").setFooter(`Mode Selected - ${gamemode}`, 'https://cdn.discordapp.com/emojis/910049767910952961.png')
          .setDescription('> <:biker:894540237684998174> <:bikey:894540342878142484> <:bikeg:894540295260229652> <:bikec:894540182437634049> <:bikev:894540401149612032> - [\`Bike\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n> <:carr:894504556560527391> <:caro:893824315261333514> <:carg:894504648969441330> <:carp:894504507914997800> <:carv:894504695127740457> - [\`Car\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n> <:horser:894532824105893929> <:horseg:894532937658298388> <:horseb:894532764362231828> <:horsep:894532618962501673> <:horsev:894532878954803221> - [\`Horse\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n > <a:runr:912975735453519904> <a:runy:912975751035359262> <a:rung:912975770094288906> <a:runc:912975794660327474> <a:runb:912975810577723403> - [\`Run\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━\n > <a:poke1:912973860381532181> <a:poke2:912973802135240734> <a:poke3:912973755809165342> <a:poke4:912973713740292126> <a:poke5:912973673823084554> - [\`Pokemon\`](https://cdn.discordapp.com/emojis/894540182437634049.png)\n> ━━━━━━━━━━━━━━━━━━')
        ],
        components: [disabled]
      })
    }

    let emos = {
      Car: [
        '<:carv:894504695127740457>',
        '<:carg:894504648969441330>',
        '<:caro:893824315261333514>',
        '<:carp:894504507914997800>',
        '<:carr:894504556560527391>'
      ],
      Horse: [
        '<:horsev:894532878954803221>',
        '<:horser:894532824105893929>',
        '<:horsep:894532618962501673>',
        '<:horseg:894532937658298388>',
        '<:horseb:894532764362231828>'
      ],
      Bike: [
        '<:bikec:894540182437634049>',
        '<:bikeg:894540295260229652>',
        '<:biker:894540237684998174>',
        '<:bikev:894540401149612032>',
        '<:bikey:894540342878142484>'
      ],
      Run: [
        '<a:runr:912975735453519904>',
        '<a:runy:912975751035359262>',
        '<a:rung:912975770094288906>',
        '<a:runc:912975794660327474>',
        '<a:runb:912975810577723403>'
      ],
      Pokemon: [
        '<a:poke1:912973860381532181>',
        '<a:poke2:912973802135240734>',
        '<a:poke3:912973755809165342>',
        '<a:poke4:912973713740292126>',
        '<a:poke5:912973673823084554>',
      ],
    };


    const joinon = new MessageActionRow().addComponents(new MessageButton().setCustomId('join').setLabel('Join Race').setStyle('PRIMARY'))
    const joinoff = new MessageActionRow().addComponents(new MessageButton().setCustomId('join').setLabel('Join Race').setStyle('PRIMARY').setDisabled(true))
    const joincancelled = new MessageActionRow().addComponents(new MessageButton().setCustomId('join').setLabel('Join Race').setStyle('DANGER').setDisabled(true))
    const m = await message.channel.send({
      embeds: [new MessageEmbed()
        .setThumbnail("https://media.discordapp.net/attachments/892704135244283916/912067079123918888/PicsArt_11-22-01.18.32.png")
        .setTitle('🚩 New Race! 🚩')
        .setDescription('Click on \`Join Race\` button to enter the race.\nOnly the first 20 people can enter!')
        .setFooter({text:'Starts in 60 seconds'})
        .setColor("BLURPLE")
      ],
      components: [joinon]
    })

    const collector = m.createMessageComponentCollector({
      time: 60000
    });
    var participants = [];
    collector.on('collect', i => {
      if (!participants.includes(i.user.id)) {
        participants.push(i.user.id);
        userEmos[`<@${i.user.id}>`] = emos[gamemode][Math.floor(Math.random() * emos[gamemode].length)];
        i.reply({
          content: "You've successfully joined the race",
          ephemeral: true
        })
        if (participants.length >= 20) return collector.stop('players')
      } else i.reply({
        content: "You've already joined the race!",
        ephemeral: true
      })
    });

    collector.on('end', async () => {
      await m.edit({
        embeds: [new MessageEmbed()
          .setFooter({text:'Started!'})
          .setTitle('🚩 New Race! 🚩')
          .setDescription('Click on \`Join Race\` button to enter the race.\nOnly the first 20 people can enter!')
          .setColor("BLURPLE")
        ],
        components: [joinoff]
      })

      if (participants.length < 2) {
        message.reply("Sorry yo, you're not popular enough and didn't get enough people to join the race.")
        await m.edit({
          embeds: [new MessageEmbed()
            .setFooter({text:'Cancelled!'})
            .setTitle('🚩 New Race! 🚩')
            .setDescription('Click on \`Join Race\` button to enter the race.\nOnly the first 20 people can enter!')
            .setColor("RED")
          ],
          components: [joincancelled]
        })
        return;
      }
      participants = participants.map(item => {
        return '<@' + item + '>';
      })
      const players = participants.join(', ')
      const f = await m.reply({
        embeds: [new MessageEmbed()
          .setTitle(`${message.author.username} started a new race!`)
          .setThumbnail("https://media.discordapp.net/attachments/892704135244283916/912067079123918888/PicsArt_11-22-01.18.32.png")
          .addField('Participants', `${players}`)
          .addField('Race type', gamemode, true)
          .addField('No. of participants', `${participants.length}`, true)
          .setColor("BLURPLE")
        ],
      })

      var race_msg = []
      participants.forEach(player => {
        race_msg.push(`🏁 ● ● ● ● ● ● ● ● ● ● ● ${userEmos[player]} ${player}`)
      })
      let racemsg = race_msg.join('\n')
      let e = racemsg

      const msg = await f.reply({
        embeds: [new MessageEmbed()
          .setTitle('Race started by ' + message.author.username)
          .setDescription(racemsg)
          .setFooter({text:`Participants - ${participants.length}`})
          .setColor("BLURPLE")
        ]
      })
      const interval = setInterval(function () {
        e = move(e, interval)
        msg.embeds[0].description = e
        message.channel.messages.edit(msg.id, {
          embeds: [msg.embeds[0]]
        })
      }, 4000)
      const move = function (racemsg, interval) {
        var race_msg = racemsg.split("\n")

        if (!race_msg.every(e => {
            if (e.includes('🚩')) return true
          })) {
          race_msg = race_msg.map(thing => {
            if (!thing.includes('🚩')) {
              const movement_number = Math.round(Math.random() * 3)
              var _obj = thing.split(' ')
              carrotindex = _obj.indexOf(userEmos[_obj[13]])
              if (carrotindex - movement_number < 2) {
                _obj = arrayMove(_obj, carrotindex, 1)
                winner.push(_obj[13])
                return `🚩 ${_obj.slice(1).join(' ')}`

              }
              _obj = arrayMove(_obj, carrotindex, carrotindex - movement_number)
              _obj = _obj.join(' ')

              return _obj

            } else return thing
          })
          return race_msg.join('\n')
        } else {
          clearInterval(interval)

          msg.reply({
            embeds: [new MessageEmbed()
              .setTitle('Race results!')
              .setColor("BLURPLE")
              .setThumbnail("https://media.discordapp.net/attachments/892704135244283916/912067079123918888/PicsArt_11-22-01.18.32.png")
              .setDescription(winner[2] ? `> <:neo_gold:877031189985230868>│${userEmos[winner[0]]} - ${winner[0]}\n> ━━━━━━━━━━━━━━━━━━\n> <:neo_silver:877030960070262794>│‚${userEmos[winner[1]]} - ${winner[1]}\n> ━━━━━━━━━━━━━━━━━━\n> <:neo_bronze:877030829732298784>│‚${userEmos[winner[2]]} - ${winner[2]}\n> ━━━━━━━━━━━━━━━━━━` : `> <:neo_gold:877031189985230868>│‚${userEmos[winner[0]]} - ${winner[0]}\n> ━━━━━━━━━━━━━━━━━━\n> <:neo_silver:877030960070262794>│‚${userEmos[winner[1]]} - ${winner[1]}\n> ━━━━━━━━━━━━━━━━━━`)
            ]
          })
          return race_msg.join('\n')
        }
      }


    });
  }
}
