exports.run = (client, message, args) => {
			if (!args.length) 
			{
				return message.channel.send(`You have to say something to get an 8-ball answer.`);
			}
			else
			{
				 const question = args.join(' ');
				// Format - 1 line, 4 responses, yes, yes, no, non-commital
				const replies = ["Yes","Definitely","No","Ask the question again",
								 "Very likely", "Without a doubt", "Nein", "I cannot say", 
								 "Absolutely", "Ja", "Unlikely", "I cannot predict now", 
								 "Fuck yes", "Hell yeah", "Fuck no", "Ask again later", 
								 "Aye", "Yeah", "Hell no", "Never fucking ask this question again"
						];
				const eightballembed = new Discord.MessageEmbed()
				  .setTitle('8-Ball')
				  .addField('Question', `${question}`)
				  .addField('Answer', `${replies[Math.floor((Math.random() * replies.length) + 0)]}`)
				  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
				  .setTimestamp()
				message.channel.send(eightballembed);
			}
}