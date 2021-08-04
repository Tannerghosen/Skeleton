/* Init */
global.Discord = require('discord.js');
global.Enmap = require("enmap");
global.fs = require("fs");
const {token} = require('./config.json');
const client = new Discord.Client();

client.commands = new Enmap();
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});
const defaultSettings = {
  prefix: "~" // Who else uses "~"? Literally, I think I'm the only one.
}

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
		let Name = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

/* Bot */
client.on('ready', () => {
    console.log("Logged In!");
	client.user.setActivity(`${client.guilds.cache.size} Discord Servers. Ping me for help.`, { type: 'LISTENING' });
});
client.on("guildCreate", function(guild){
	client.user.setActivity(`${client.guilds.cache.size} Discord Servers. Ping me for help.`, { type: 'LISTENING' });
});
client.on("guildDelete", function(guild){
	client.user.setActivity(`${client.guilds.cache.size} Discord Servers. Ping me for help.`, { type: 'LISTENING' });
});

client.on('message', async message => {
	global.guildConf = client.settings.ensure(message.guild.id, defaultSettings);
	if(!message.guild || message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id) && !message.content.includes(guildConf.prefix)) {
        message.channel.send(`Do you need help? My prefix is "${guildConf.prefix}", and you can get more help via "${guildConf.prefix}help".`);
    };
	
	if(message.content.indexOf(guildConf.prefix) !== 0) return false; 
	
	const args = message.content.split(/\s+/g);
	const command = args.shift().slice(guildConf.prefix.length).toLowerCase();

	const cmd = client.commands.get(command);
    if (!cmd) return;
    cmd.run(client, message, args);
});
client.login(token);