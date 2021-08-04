exports.run = (client, message, args) => {
	const n = Math.floor(Math.random() * 2);
			var result;
			if (n === 1) 
			{
				result = 'Heads';
			}
			else
			{
				result = 'Tails';
			}
			const coinflipembed = new Discord.MessageEmbed()
			  .setTitle(`Coin Flip`)
			  .setDescription(`The coin landed on: ${result}!`)
			  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
			  .setTimestamp()
			message.channel.send(coinflipembed);
}