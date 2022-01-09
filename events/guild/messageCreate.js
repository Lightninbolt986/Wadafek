module.exports = async (Discord, client, message) => {
    const prefixE = new Discord.MessageEmbed()
    .setColor('BLURPLE')
    .setTitle("Welcome to Wadafek!")
    .setDescription(`My prefix in this server is \`${process.env.prefix}\``)
    if (message.content.replace(/(<@|!|>){1}/g, '') === client.user.id) return message.reply({ embeds: [prefixE] })
    const prefix = process.env.prefix
    if ((!message.content.startsWith(prefix) || message.author.bot)) return
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    const profileModel = require(`../../models/Profile`);

    let profileData;
    try {
        profileData = await profileModel.findOne({
            userID: message.author.id
        });

        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id
            });
            profile.save();
        }
    } catch (err) {
        console.log(err);
    }

    if (command) {
        command.execute(message, args, cmd, client, Discord, profileData)
    }

}