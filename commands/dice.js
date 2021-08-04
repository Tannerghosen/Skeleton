exports.run = (client, message, args) => {
			const diceembed = new Discord.MessageEmbed()
			  .setTitle(`Dice`)
			  .setDescription(`You rolled a ${Math.floor(Math.random() * 6) + 1}.`)
			  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
			  .setTimestamp()
			message.channel.send(diceembed);
}