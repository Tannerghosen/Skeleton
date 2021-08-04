exports.run = (client, message, args) => {
			if (!message.member.hasPermission(['ADMINISTRATOR'])) 
			{
      			return message.channel.send("You lack the role requirements.");
			}
			if (!args.length) 
			{
				return message.channel.send(`Options: prefix`);
			}
			const [item, ...value] = args;
			if (!args[1]) 
			{
				return message.channel.send(`Bot Setting "${item}" needs to be given a value!`);
			} 
			if(!client.settings.has(message.guild.id, item)) 
			{
			    return message.channel.send(`Options: prefix`);
			}
			client.settings.set(message.guild.id, value.join(" "), item);
			message.channel.send(`Bot Setting "${item}" was updated to:\n\`${value.join(" ")}\``);
}