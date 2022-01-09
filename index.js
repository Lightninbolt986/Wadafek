const Discord = require('discord.js');
const client = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles']
    },
    repliedUser: true,
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'DIRECT_MESSAGES'],
    partials: ['CHANNEL']
})
require('dotenv').config()
mongoose = require('mongoose');
mongoose
  .connect(
    process.env.MONGODB_srv, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log('Connected to mongoosedb');
  })
  .catch(err => {
    console.log(err);
  });
const token = process.env.token
client.events = new Discord.Collection();
client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
['command_handler', 'event_handler','slash_command_handler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
});
process.on('unhandledRejection', (err) => {
    console.log(err)
  })
  client.login(token);