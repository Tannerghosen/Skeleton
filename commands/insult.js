const axios = require("axios");
exports.run = async (client, message, args) => {
				var say;
				await axios.get("https://evilinsult.com/generate_insult.php?lang=en").then((response) => { say = response.data; });
				var foot;
				if (message.mentions.users.first() == message.author.id) 
				{
					say = "You can't send an insult to yourself, you fucking lemming."; 
					foot = message.member.displayName;
				}
				else if (message.mentions.members.first())
				{
					foot = `For ${message.mentions.users.first().username}, From ${message.member.displayName}`;
				}
				else
				{
					foot = message.member.displayName;
				}
				const insultembed = new Discord.MessageEmbed()
				  .setTitle(`Insult`)
				  .setDescription(`${say}`)
				  .setFooter(foot,  message.author.displayAvatarURL({ dynamic: true }))
				  .setTimestamp()
				message.channel.send(insultembed);
			
}