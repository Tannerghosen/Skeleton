exports.run = (client, message, args) => {
	const { commands } = message.client;
	var newcommands = "";
	commands.forEach((value, key) => {
		newcommands += key + ", ";
	})
	newcommands = newcommands.slice(0, -2);
	var bothelpembed = new Discord.MessageEmbed()
	.setTitle("**Skeleton**\n")
	.setThumbnail(client.user.displayAvatarURL( {size: 64, dynamic: true } ))
	.setDescription(`I am Skeleton, the Discord Bot.\nDeveloped by "Tanman Tanner" Ghosen.\n\nPrefix for the following commands is '`+guildConf.prefix+`'.\nCommands: \n${newcommands}`);
	message.channel.send(bothelpembed);
}